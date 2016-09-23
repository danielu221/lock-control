import { Component ,Input } from '@angular/core';

@Component({
	moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
	 @Input() jumbotronText:string = "";
  	 constructor() { }

 }


