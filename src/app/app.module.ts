import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importar
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ProductFormComponent } from './product-form/product-form.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
//import { FormComponent2Component } from './form-component2/form-component2.component';

@NgModule({
  declarations: [
    AppComponent,
   
    FormComponentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RecaptchaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
