import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { dashboardComponent } from './pages/dashboard/dashboard.component';
import { myproductsComponent } from './pages/my-products/my-products.component';
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
import { ProductComponent } from './components/utils/product/product.component';
import { RecommendationComponent } from './components/utils/recommendation/recommendation.component';
import { ListProductsComponent } from './components/utils/list-products/list-products.component';
import { ListRecommendationsComponent } from './components/utils/list-recommendations/list-recommendations.component';
import { ListCategoryComponent } from './components/utils/list-category/list-category.component';
import { ListProductVerticalComponent } from './components/utils/list-product-vertical/list-product-vertical.component';
import { CategoryComponent } from './components/utils/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    dashboardComponent,
    myproductsComponent,
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
    ProductComponent,
    RecommendationComponent,
    ListProductsComponent,
    ListRecommendationsComponent,
    ListCategoryComponent,
    ListProductVerticalComponent,
    CategoryComponent,
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
