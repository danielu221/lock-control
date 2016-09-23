import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PinService{
	constructor(public _http:Http){

	}

	getPassword(){
		return this._http.get('/pin');
	}


}