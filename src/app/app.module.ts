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
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { TermsAcceptComponent } from './pages/terms-accept/terms-accept.component';
import { MyProductsComponent } from './pages/my-products/my-products.component';
import { ListProductsComponent } from './components/lists/list-products/list-products.component';
import { ListRecommendationsComponent } from './components/lists/list-recommendations/list-recommendations.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


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
    TermsConditionsComponent,
    TermsAcceptComponent,
    MyProductsComponent,
    ListProductsComponent,
    ListRecommendationsComponent,
    DashboardComponent,
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
