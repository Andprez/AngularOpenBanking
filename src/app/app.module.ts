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
import { FormPhoneConfirmComponent } from './pages/form-phone-confirm/form-phone-confirm.component';
import { OtpComponent } from './components/utils/otp/otp.component';
import { CartComponent } from './components/marketplace/pages/cart/cart.component';
import { DetailProductComponent } from './components/marketplace/pages/detail-product/detail-product.component';
import { ListProductComponent } from './components/marketplace/pages/list-product/list-product.component';
import { HeaderMarketplaceComponent } from './components/marketplace/utils/header-marketplace/header-marketplace.component';
import { ProductComponent } from './components/marketplace/utils/product/product.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { TermsAcceptComponent } from './pages/terms-accept/terms-accept.component';
import { EntityComponent } from './components/utils/entity/entity.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductFComponent } from './components/utils/product-f/product-f.component';
import { RecommendationComponent } from './components/utils/recommendation/recommendation.component';
import { FinanceComponent } from './components/utils/finance/finance.component';
import { ListProductsComponent } from './components/lists/list-products/list-products.component';
import { ListRecommendationsComponent } from './components/lists/list-recommendations/list-recommendations.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { HeaderEntityComponent } from './components/headers/header-entity/header-entity.component';
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
