import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LogService{
	constructor(public _http:Http){

	}

	getLogs(){
		return this._http.get('/logs');
	}

	saveLog(log){
		var headers = new Headers();
		headers.append('Content-Type','application/json');
		return this._http.post('/log',JSON.stringify(log),{headers:headers})
			.map(res => res.json());
	}

}