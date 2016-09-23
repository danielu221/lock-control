import { Component } from '@angular/core';
import { NavbarComponent} from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { CameraComponent } from './components/camera/camera.component';
import { LogsComponent } from './components/logs/logs.component';
import { LockStatusComponent } from './components/lock-status/lock-status.component';
import {StreamingComponent} from './components/streaming/streaming.component'
import {PhotosComponent} from './components/photos/photos.component'

import { PinService } from './services/pin.service';
import { LogService } from './services/log.service';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
    selector: 'my-app',
    template: `
    			<navbar></navbar>
    			<div class="container">
	    			<jumbotron jumbotronText="Zdjęcia osoby dzwoniącej" ></jumbotron>
	    				<photos></photos>
	  				<jumbotron jumbotronText="Stan zamka" ></jumbotron>
	  					<lock-status></lock-status>
	  				<jumbotron jumbotronText="Monitoring" ></jumbotron>
	  					<div class="row placeholders">
	  						<streaming></streaming>
	  					</div>				
	  			</div>
    			`
    			,
    directives: [NavbarComponent, JumbotronComponent, CameraComponent, LogsComponent, LockStatusComponent,StreamingComponent, PhotosComponent] ,
    providers: [HTTP_PROVIDERS, LogService, PinService]
})
export class AppComponent { }
