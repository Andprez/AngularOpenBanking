import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
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
import { HelpComponent } from './components/utils/help/help.component';
import { FormDocumentComponent } from './pages/form-document/form-document.component';
import { FormPhoneConfirmComponent } from './pages/form-phone-confirm/form-phone-confirm.component';
import { OtpComponent } from './components/utils/otp/otp.component';
import { CartComponent } from './components/marketplace/pages/cart/cart.component';
import { DetailProductComponent } from './components/marketplace/pages/detail-product/detail-product.component';
import { ListProductComponent } from './components/marketplace/pages/list-product/list-product.component';
import { HeaderMarketplaceComponent } from './components/marketplace/utils/header-marketplace/header-marketplace.component';
import { ProductComponent } from './components/marketplace/utils/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
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
    HelpComponent,
    FormDocumentComponent,
    FormPhoneConfirmComponent,
    OtpComponent,
    CartComponent,
    DetailProductComponent,
    ListProductComponent,
    HeaderMarketplaceComponent,
    ProductComponent,
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
