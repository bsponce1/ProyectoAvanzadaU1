import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  captchaValid: boolean = false;

  form: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.buildForm();
    /*this.form.valueChanges.pipe(
      debounceTime(5000)
    ).subscribe(value=>{
      console.log(value);
    })*/
  }
  ngOnInit(): void { }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
      date: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      text: new FormControl('', [Validators.required, Validators.minLength(100), Validators.maxLength(1000)]),
      category: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      fijo: new FormControl('', [Validators.required]),
      numtarjeta: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]*$')]),
      vencimiento:new FormControl('', [Validators.required]),
      nametarjeta: new FormControl('', [Validators.required]),
      seguridad: new FormControl('', [Validators.required, Validators.minLength(100), Validators.maxLength(1000)]),
      
    });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.http.post('http://localhost:3000/formulario', value)
        .subscribe(
          response => {
            console.log('Datos del formulario guardados correctamente');
            // Realiza las acciones necesarias después de guardar los datos del formulario
          },
          error => {
            console.error('Error al guardar los datos del formulario', error);
            // Realiza el manejo de errores correspondiente
          }
        );
    } else {
      this.form.markAllAsTouched();
    }
  }

  resolved(captchaResponse: string) {
    this.captchaValid = (captchaResponse && captchaResponse.length > 0) ? true : false;
  }

  get textoLargo() {
    return this.form.get('text');
  }
}