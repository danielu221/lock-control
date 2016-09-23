import {Component} from '@angular/core';
import {CameraComponent} from '../camera/camera.component';

@Component({
	moduleId: module.id,
    selector: 'streaming',
    template: `
    			<camera cameraName="Kamera 1" (click)='cameraStream("camera.mp4")'></camera>
	  			<camera cameraName="Kamera 2" (click)='cameraStream("camera2.mp4")'></camera>
	  			<camera cameraName="Kamera 3" (click)='cameraStream("camera3.mp4")'></camera>
	  			<camera cameraName="Kamera 4" (click)='cameraStream("camera4.mp4")'></camera>
          <div *ngIf="cameraSrc">
      			<video width="800" [src] = "cameraSrc" controls>
  	  				Your browser does not support HTML5 video.
  				  </video>
          </div>
				<p>Wyświetlany plik : {{cameraSrc}}</p>
    			`,
    directives: [CameraComponent]
})
export class StreamingComponent {

	 cameraSrc:string = "camera.mp4";
  	 constructor() { }

  	 cameraStream(chosenCamera :string){
      if (this.cameraSrc === chosenCamera) return;
  	 	this.cameraSrc=chosenCamera;
  	 }
 }
