import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsAcceptComponent } from './pages/terms-accept/terms-accept.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';

const routes: Routes = [
  {
    path: 'terminosinicial',
    component: TermsConditionsComponent
  },
  {
    path: 'acepterminos',
    component: TermsAcceptComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
