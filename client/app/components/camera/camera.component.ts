import { Component ,Input } from '@angular/core';

@Component({
	moduleId: module.id,
    selector: 'camera',
    templateUrl: 'camera.component.html'
})
export class CameraComponent {
	 @Input() cameraName:string = "";

  	 constructor() { }

 }


