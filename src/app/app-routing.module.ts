import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AceptacionTerminosYCondComponent } from './components/aceptacionterminosycond/aceptacionterminosycond.component';
import { terminosycondisionesinicioComponent } from './components/terminosycondisionesinicio/terminosycondisionesinicio.component';

const routes: Routes = [
  {
    path: 'terminosinicial',
    component: terminosycondisionesinicioComponent
  },
  {
    path: 'acepterminos',
    component: AceptacionTerminosYCondComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
