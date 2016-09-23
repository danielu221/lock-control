import { Component, OnInit, ViewChild } from '@angular/core';
import {LogService} from '../../services/log.service';
import 'rxjs/add/operator/map';
import {Log} from '../../Log';
import {Pin} from '../../Pin';
import {PinService} from '../../services/pin.service';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';


@Component({
	moduleId: module.id,
    selector: 'lock-status',
    directives: [MODAL_DIRECTIVES],
    templateUrl: 'lock-status.component.html'
})
export class LockStatusComponent implements OnInit {
	logs: Log[];
	pin: Pin[];
	public opened = false;


  	constructor(private _logService:LogService, private _pinService:PinService) { }

  	@ViewChild('myModal')
    modal: ModalComponent;

  	ngOnInit(){
    this.logs = [];
    this._logService.getLogs()
      .map(res => res.json())
      .subscribe(logs => this.logs = logs);

    this.pin = [];
    this._pinService.getPassword()
      .map(res => res.json())
      .subscribe(pin => this.pin = pin); 
    }
	/*
	addLog($event){
		if($event.which === 1){
			var result;
			var d=new Date();
			var newLog={
				datka: String(d),
				isCompleted: true
			};

			result=this._logService.saveLog(newLog);
			result.subscribe(x =>{this.logs.push(newLog)})
		}
	}*/

	addLogg(pin:string){
		var result;
		var d=new Date();
		var isCorrectPin;
		if(pin==this.pin[0].pin){
			isCorrectPin=true;
		}
		else{
			isCorrectPin=false;
		}
		var newLog={
				datka: String(d),
				isCompleted: isCorrectPin
				};
		result=this._logService.saveLog(newLog);
		result.subscribe(x =>{this.logs.push(newLog)})		

		if(!isCorrectPin){
			alert("Niepoprawny numer PIN!");
			
		}
		else{
			this.opened = true;
			setTimeout(function() {
			       this.opened=false;
			       console.log(this.opened);
	   		}.bind(this), 5000);
		}

	  }
	

    close() {
        this.modal.close();
    }
    dismiss(){
      this.modal.dismiss();
    }
    open() {
        this.modal.open();
    }




 }


