import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { terminosycondisionesinicioComponent } from './components/terminosycondisionesinicio/terminosycondisionesinicio.component';
import { AceptacionTerminosYCondComponent } from './components/aceptacionterminosycond/aceptacionterminosycond.component';

@NgModule({
  declarations: [
    AppComponent,
    terminosycondisionesinicioComponent,
    AceptacionTerminosYCondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
