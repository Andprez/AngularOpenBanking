import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderEntityComponent } from './components/headers/header-entity/header-entity.component';
import { HelpComponent } from './components/utils/help/help.component';
import { EntityComponent } from './components/utils/entity/entity.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
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
import { HeaderTransactionComponent } from './components/headers/header-transaction/header-transaction.component';
import { DetailTransactionComponent } from './components/utils/detail-transaction/detail-transaction.component';
import { ListTransactionsComponent } from './components/utils/list-transactions/list-transactions.component';
import { TransactionComponent } from './pages/transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderEntityComponent,
    LoginComponent,
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
    HeaderTransactionComponent,
    DetailTransactionComponent,
    ListTransactionsComponent,
    TransactionComponent,
    
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
