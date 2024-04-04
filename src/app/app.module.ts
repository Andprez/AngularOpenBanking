import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './MIAS/login/login.component';
import { SeleccionarProductoComponent } from './MIAS/seleccionar-producto/seleccionar-producto.component';
import { BackComponent } from './MIAS/back/back.component';
import { BannerEntityComponent } from './MIAS/banner-entity/banner-entity.component';
import { HelpComponent } from './MIAS/help/help.component';
import { EntityComponent } from './MIAS/entity/entity.component';
import { AddProductComponent } from './MIAS/add-product/add-product.component';
import { LabsComponent } from './MIAS/labs/labs.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerEntityComponent,
    LabsComponent,
    LoginComponent,
    SeleccionarProductoComponent,
    BackComponent,
    BannerEntityComponent,
    HelpComponent,
    EntityComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
