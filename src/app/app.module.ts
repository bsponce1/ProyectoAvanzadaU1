import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { CorreoSucessComponent } from './correo-sucess/correo-sucess.component';
<<<<<<< HEAD
import { Principal2Component } from './principal2/principal2.component';
import { TerminosComponent } from './terminos/terminos.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//Agregado
import { ReactiveFormsModule } from '@angular/forms';
=======
import { CorrePreComponent } from './corre-pre/corre-pre.component';
import { CorreNosucessComponent } from './corre-nosucess/corre-nosucess.component';
import { CorreNosucessfComponent } from './corre-nosucessf/corre-nosucessf.component';
import { CorreSucessfComponent } from './corre-sucessf/corre-sucessf.component';
>>>>>>> 5c44ecf (Correo completo)

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CorreoSucessComponent,
<<<<<<< HEAD
    Principal2Component,
    TerminosComponent,
    DashboardComponent,
=======
    CorrePreComponent,
    CorreNosucessComponent,
    CorreNosucessfComponent,
    CorreSucessfComponent,
>>>>>>> 5c44ecf (Correo completo)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Agregado Zambrano
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
