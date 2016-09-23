import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,JumbotronComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
