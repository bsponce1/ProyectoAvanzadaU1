import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importar
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormularioAlquilerComponent } from './components/formulario-alquiler/formulario-alquiler.component';
import { LoginComponent } from './components/login/login.component';
import { SolicitudesF1Component } from './components/solicitudes-f1/solicitudes-f1.component';
import { SolicitudesF2Component } from './components/solicitudes-f2/solicitudes-f2.component';
import { SubirReciboComponent } from './components/subir-recibo/subir-recibo.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { IsAuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    FormularioAlquilerComponent,
    LoginComponent,
    SolicitudesF1Component,
    SolicitudesF2Component,
    SubirReciboComponent,
    SignupComponent,
    SigninComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RecaptchaModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
