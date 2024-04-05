import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './components/marketplace/utils/list-products/list-products.component';
import { DetailProductComponent } from './components/marketplace/utils/detail-product/detail-product.component';
import { CartComponent } from './components/marketplace/pages/cart/cart.component';
import { WalletComponent } from './components/marketplace/pages/wallet/wallet.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'products', component: ListProductsComponent },
  { path: 'products/:id', component: DetailProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent},
  { path: 'wallet', component: WalletComponent },
  // { path: 'tyc', component: TycComponent },
  // { path: 'otp', component: OtpComponent },
  // { path: 'voucher', component: VoucherComponent },
  { path: '**', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
