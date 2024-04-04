import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsAcceptComponent } from './components/terms-accept/terms-accept.component';
import { termsConditionsComponent } from './components/terms-conditions/terms-conditions.component';

const routes: Routes = [
  {
    path: 'terminosinicial',
    component: termsConditionsComponent
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
