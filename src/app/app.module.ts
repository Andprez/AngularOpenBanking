import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SeleccionarProductoComponent } from './MIAS/seleccionar-producto/seleccionar-producto.component';
import { HeaderEntityComponent } from './components/headers/header-entity/header-entity.component';
import { HelpComponent } from './components/utils/help/help.component';
import { EntityComponent } from './MIAS/entity/entity.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { LabsComponent } from './MIAS/labs/labs.component';
import { HeaderCbitComponent } from './components/headers/header-cbit/header-cbit.component';
import { MenuRegistrationComponent } from './pages/menu-registration/menu-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IndicatorComponent } from './components/utils/indicator/indicator.component';
import { LoadingBeginComponent } from './pages/loading-begin/loading-begin.component';
import { ItemRegistroComponent } from './components/utils/item-registro/item-registro.component';
import { BtnCbitComponent } from './components/utils/btn-cbit/btn-cbit.component';
import { FormRegistrationComponent } from './pages/form-registration/form-registration.component';
import { BackComponent } from './components/utils/back/back.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderLoginComponent } from './components/headers/header-login/header-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderEntityComponent,
    LabsComponent,
    LoginComponent,
    SeleccionarProductoComponent,
    BackComponent,
    HelpComponent,
    EntityComponent,
    AddProductComponent,
    HeaderCbitComponent,
    MenuRegistrationComponent,
    IndicatorComponent,
    LoadingBeginComponent,
    ItemRegistroComponent,
    BtnCbitComponent,
    FormRegistrationComponent,
    BackComponent,
    LoginComponent,
    HeaderLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
