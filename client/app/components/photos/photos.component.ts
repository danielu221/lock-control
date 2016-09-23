import {Component} from '@angular/core';

@Component({
	moduleId: module.id,
    selector: 'photos',
    template:`<div class="row text-center">
				<h2>Wykonano: 29.08.2016 16:54:21</h2>
			  </div>

			  <div class="row ">
			  	<div class="col-xs-6 col-sm-4 " *ngFor="let photoSrc of photosSrc">
						  <img  src="{{photoSrc}}" >
				</div>
			  </div>
			  `
	})

	export class PhotosComponent {
		 photosSrc:string[];

	  	constructor() {
	  		this.photosSrc=["im1.jpg","im2.jpg","im3.jpg"];
	  	 }
	 }