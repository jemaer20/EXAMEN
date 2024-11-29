import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresarEdadPageRoutingModule } from './ingresar-edad-routing.module';

import { IngresarEdadPage } from './ingresar-edad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresarEdadPageRoutingModule
  ],
  declarations: [IngresarEdadPage]
})
export class IngresarEdadPageModule {}
