import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Bind2wayComponent } from './bind2way/bind2way.component';

@NgModule({
  declarations: [
    AppComponent,
    Bind2wayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
