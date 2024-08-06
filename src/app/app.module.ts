import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderEntityComponent } from './components/headers/header-entity/header-entity.component';
import { HelpComponent } from './components/utils/help/help.component';
import { EntityComponent } from './components/utils/entity/entity.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { HeaderCbitComponent } from './components/headers/header-cbit/header-cbit.component';
import { MenuRegistrationComponent } from './pages/menu-registration/menu-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndicatorComponent } from './components/utils/indicator/indicator.component';
import { LoadingBeginComponent } from './pages/loading-begin/loading-begin.component';
import { ItemRegistroComponent } from './components/utils/item-registro/item-registro.component';
import { BtnCbitComponent } from './components/utils/btn-cbit/btn-cbit.component';
import { FormRegistrationComponent } from './pages/form-registration/form-registration.component';
import { BackComponent } from './components/utils/back/back.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderLoginComponent } from './components/headers/header-login/header-login.component';
import { FormPhoneConfirmComponent } from './pages/form-phone-confirm/form-phone-confirm.component';
import { OtpComponent } from './components/utils/otp/otp.component';
import { CartComponent } from './components/marketplace/pages/cart/cart.component';
import { DetailProductComponent } from './components/marketplace/pages/detail-product/detail-product.component';
import { ListProductComponent } from './components/marketplace/pages/list-product/list-product.component';
import { HeaderMarketplaceComponent } from './components/marketplace/utils/header-marketplace/header-marketplace.component';
import { ProductComponent } from './components/marketplace/utils/product/product.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { TermsAcceptComponent } from './pages/terms-accept/terms-accept.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductFComponent } from './components/utils/product-f/product-f.component';
import { RecommendationComponent } from './components/utils/recommendation/recommendation.component';
import { FinanceComponent } from './components/utils/finance/finance.component';
import { ListProductsComponent } from './components/lists/list-products/list-products.component';
import { ListRecommendationsComponent } from './components/lists/list-recommendations/list-recommendations.component';
import { FormPasswordComponent } from './pages/form-password/form-password.component';
import { FormSelfieComponent } from './pages/form-selfie/form-selfie.component';
import { CameraComponent } from './components/utils/camera/camera.component';
import { SelectEntityComponent } from './pages/select-entity/select-entity.component';
import { GridEntityComponent } from './components/lists/grid-entity/grid-entity.component';
import { SearchComponent } from './components/utils/search/search.component';
import { FilterEntityFPipe } from './pipes/filter-entity-f.pipe';
import { CategoryComponent } from './components/utils/category/category.component';
import { ListCategoryComponent } from './components/lists/list-category/list-category.component';
import { ListProductVerticalComponent } from './components/lists/list-product-vertical/list-product-vertical.component';
import { MyProductsComponent } from './pages/my-products/my-products.component';
import { FormDocumentComponent } from './pages/form-document/form-document.component';
import { HeaderTransactionComponent } from './components/headers/header-transaction/header-transaction.component';
import { DetailTransactionComponent } from './components/utils/detail-transaction/detail-transaction.component';
import { ListTransactionComponent } from './components/lists/list-transaction/list-transaction.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { ValueHiddenPipe } from './pipes/value-hidden.pipe';
import { VoucherComponent } from './pages/voucher/voucher.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { IndexComponent } from './pages/index/index.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { TycBanksComponent } from './pages/tyc-banks/tyc-banks.component';
import { PaymentSummaryComponent } from './pages/payment-summary/payment-summary.component';
import { OtpBanksComponent } from './pages/otp-banks/otp-banks.component';
import { FilterCategoryPipe } from './pipes/filter-category.pipe';
import { FilterProductByEntityFPipe } from './pipes/filter-product-by-entity-f.pipe';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { CreditVerifyComponent } from './pages/credit-verify/credit-verify.component';
import { CreditApprovedComponent } from './pages/credit-approved/credit-approved.component';
import { CreditPreapprovedComponent } from './pages/credit-preapproved/credit-preapproved.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CreditRejectComponent } from './pages/credit-reject/credit-reject.component';
import { RejectedMessageComponent } from './components/utils/rejected-message/rejected-message.component';
import { ItemMenuComponent } from './components/utils/item-menu/item-menu.component';
import { HeaderMenuComponent } from './components/headers/header-menu/header-menu.component';
import { SelectAccountDisburseComponent } from './pages/select-account-disburse/select-account-disburse.component';
import { MustCreateAccountComponent } from './components/utils/must-create-account/must-create-account.component';
import { CreditConditionsComponent } from './pages/credit-conditions/credit-conditions.component';
import { SelectCreditComponent } from './pages/select-credit/select-credit.component';
import { CreditSimulationComponent } from './pages/credit-simulation/credit-simulation.component';
import { CreditRequestComponent } from './pages/credit-request/credit-request.component';
import { CreditDisburseComponent } from './pages/credit-disburse/credit-disburse.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconModalComponent } from './pages/icon-modal/icon-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

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
    HelpComponent,
    FormPhoneConfirmComponent,
    OtpComponent,
    CartComponent,
    DetailProductComponent,
    ListProductComponent,
    HeaderMarketplaceComponent,
    ProductComponent,
    TermsConditionsComponent,
    TermsAcceptComponent,
    EntityComponent,
    DashboardComponent,
    ProductFComponent,
    RecommendationComponent,
    FinanceComponent,
    ListProductsComponent,
    ListRecommendationsComponent,
    AddProductComponent,
    HeaderEntityComponent,
    FormPasswordComponent,
    FormSelfieComponent,
    CameraComponent,
    SelectEntityComponent,
    GridEntityComponent,
    SearchComponent,
    FilterEntityFPipe,
    CategoryComponent,
    ListCategoryComponent,
    ListProductVerticalComponent,
    MyProductsComponent,
    FormDocumentComponent,
    HeaderTransactionComponent,
    DetailTransactionComponent,
    ListTransactionComponent,
    TransactionComponent,
    ValueHiddenPipe,
    VoucherComponent,
    WalletComponent,
    IndexComponent,
    HelpPageComponent,
    TycBanksComponent,
    PaymentSummaryComponent,
    OtpBanksComponent,
    FilterCategoryPipe,
    FilterProductByEntityFPipe,
    CreditVerifyComponent,
    CreditApprovedComponent,
    CreditPreapprovedComponent,
    MenuComponent,
    CreditRejectComponent,
    RejectedMessageComponent,
    ItemMenuComponent,
    HeaderMenuComponent,
    SelectAccountDisburseComponent,
    MustCreateAccountComponent,
    CreditConditionsComponent,
    SelectCreditComponent,
    CreditSimulationComponent,
    CreditRequestComponent,
    CreditDisburseComponent,
    IconModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
