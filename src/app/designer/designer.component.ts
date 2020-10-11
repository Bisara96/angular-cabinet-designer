import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EngineService } from './engine.service';
import * as THREE from 'three';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.scss']
})
export class DesignerComponent implements OnInit {

  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  @ViewChild('canvasViewPort', {static: true})
  public canvasViewPort: ElementRef<HTMLDivElement>;

  public constructor(private engServ: EngineService) { }

  public ngOnInit(): void {
    const width = this.canvasViewPort.nativeElement.offsetWidth;
    const height = window.innerHeight;
    this.engServ.createScene(this.rendererCanvas, width, height);
    this.engServ.animate();

    this.addCube();
  }

  public addCube() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const cube: THREE.Mesh = new THREE.Mesh( geometry, material );
    this.engServ.addObjectToScene(cube);
  }

}
