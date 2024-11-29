import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresarEdadPage } from './ingresar-edad.page';

const routes: Routes = [
  {
    path: '',
    component: IngresarEdadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresarEdadPageRoutingModule {}
