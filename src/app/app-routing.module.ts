import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar los componentes necesarios
import { DashboardComponent } from './dashboard/dashboard.component';
import { Principal2Component } from './principal2/principal2.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
    //Aqui agregar johana
    //path:'formulario', component: FormularioComponent
  {
    path: '',
    component: Principal2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
