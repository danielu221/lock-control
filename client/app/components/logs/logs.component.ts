import { Component ,OnInit } from '@angular/core';
import {LogService} from '../../services/log.service';
import 'rxjs/add/operator/map';
import {Log} from '../../Log';

@Component({
	  moduleId: module.id,
    selector: 'logs',
    templateUrl: 'logs.component.html'
})
export class LogsComponent implements OnInit {
	 
	  logs: Log[];

  	constructor(private _logService:LogService) {


  	 }
  	 ngOnInit(){
  	 	this.logs=[];
  	 	this._logService.getLogs()
  	 		.map (res=>res.json())
  	 		.subscribe(logs=>this.logs=logs)
  	 }
 }