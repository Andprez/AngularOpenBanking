import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { termsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { TermsAcceptComponent } from './components/terms-accept/terms-accept.component';
import { HeaderCbitComponent } from './components/header-cbit/header-cbit.component';

@NgModule({
  declarations: [
    AppComponent,
    termsConditionsComponent,
    TermsAcceptComponent,
    HeaderCbitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
