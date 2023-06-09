import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { CorreoSucessComponent } from './correo-sucess/correo-sucess.component';
import { Principal2Component } from './principal2/principal2.component';
import { TerminosComponent } from './terminos/terminos.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//Agregado
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CorreoSucessComponent,
    Principal2Component,
    TerminosComponent,
    DashboardComponent,
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
