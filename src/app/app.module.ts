import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AceptacionTerminosYCondComponent } from './aceptacion-terminos-ycond/aceptacion-terminos-ycond.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
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
