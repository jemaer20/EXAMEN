import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresarNombrePageRoutingModule } from './ingresar-nombre-routing.module';

import { IngresarNombrePage } from './ingresar-nombre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresarNombrePageRoutingModule
  ],
  declarations: [IngresarNombrePage]
})
export class IngresarNombrePageModule {}
