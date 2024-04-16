import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './components/marketplace/pages/list-product/list-product.component';
import { CartComponent } from './components/marketplace/pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { FormRegistrationComponent } from './pages/form-registration/form-registration.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { MenuRegistrationComponent } from './pages/menu-registration/menu-registration.component';
import { FormPasswordComponent } from './pages/form-password/form-password.component';
import { FormPhoneConfirmComponent } from './pages/form-phone-confirm/form-phone-confirm.component';
import { FormSelfieComponent } from './pages/form-selfie/form-selfie.component';
import { FormDocumentComponent } from './pages/form-document/form-document.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyProductsComponent } from './pages/my-products/my-products.component';
import { SelectEntityComponent } from './pages/select-entity/select-entity.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { DetailProductComponent } from './components/marketplace/pages/detail-product/detail-product.component';

const routes: Routes = [
  { path: '', component: ListProductComponent },
  { path: 'ecommerce/products/:id', component: DetailProductComponent },
  { path: 'ecommerce/cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tyc', component: TermsConditionsComponent },
  { path: 'tyc/accept', component: TermsConditionsComponent },
  { path: 'register', component: MenuRegistrationComponent },
  { path: 'register/info', component: FormRegistrationComponent },
  { path: 'register/phone-confirm', component: FormPhoneConfirmComponent },
  { path: 'register/wallet', component: FormPasswordComponent },
  { path: 'register/selfie', component: FormSelfieComponent },
  { path: 'register/document', component: FormDocumentComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: MyProductsComponent },
  { path: 'products/add/select-entity', component: SelectEntityComponent },
  { path: 'products/add/data-product', component: AddProductComponent },
  { path: 'products/:id/transactions', component: TransactionComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
