import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ChecklistinfoComponent } from './components/checklistinfo/checklistinfo.component';
import { FormSingupUserComponent } from './components/form-singup-user/form-singup-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Background1Component } from './components/background1/background1.component';
import { Background2Component } from './components/background2/background2.component';
import { IndicatorSigninUserComponent } from './components/indicator-signin-user/indicator-signin-user.component';
import { LoadingBeginComponent } from './components/loading-begin/loading-begin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChecklistinfoComponent,
    FormSingupUserComponent,
    Background1Component,
    Background2Component,
    IndicatorSigninUserComponent,
    LoadingBeginComponent,
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
