import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioAlquilerComponent } from './components/formulario-alquiler/formulario-alquiler.component';
import { SolicitudesF1Component } from './components/solicitudes-f1/solicitudes-f1.component';
import { SolicitudesF2Component } from './components/solicitudes-f2/solicitudes-f2.component';
import { SubirReciboComponent } from './components/subir-recibo/subir-recibo.component';
import { IsAuthGuard } from './auth.guard';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/fase1',
    pathMatch: 'full' 
  },
  {
    path: 'signin', 
    component: SigninComponent,
  },
  {
    path: 'signup', 
    component: SignupComponent
  },
  {
    path: 'alquiler', 
    component: FormularioAlquilerComponent, 
  },
  {
    path: 'fase1', 
    component: SolicitudesF1Component,
    canActivate: [IsAuthGuard]
  },
  {
    path: 'fase2', 
    component: SolicitudesF2Component,
    canActivate: [IsAuthGuard]
  },
  {
    path: 'subir-recibo', 
    component: SubirReciboComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
