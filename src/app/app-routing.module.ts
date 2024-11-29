import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
loadChildren: () => import('./pages/inicio/inicio.module').then(m =>
m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'ingresar-nombre',
    loadChildren: () => import('./pages/ingresar-nombre/ingresar-nombre.module').then( m => m.IngresarNombrePageModule)
  },
  {
    path: 'ingresar-edad',
    loadChildren: () => import('./pages/ingresar-edad/ingresar-edad.module').then( m => m.IngresarEdadPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
