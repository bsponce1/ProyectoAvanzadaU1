import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { debounceTime } from 'rxjs';
import { AlquilerService } from 'src/app/services/alquiler.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-alquiler',
  templateUrl: './formulario-alquiler.component.html',
  styleUrls: ['./formulario-alquiler.component.css']
})
export class FormularioAlquilerComponent implements OnInit {

  captchaValid: boolean = false;

  form: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, public alquilerService: AlquilerService, public router: Router){
    this.buildForm();
    this.form.valueChanges.pipe(
     debounceTime(500)
    ).subscribe(value=>{
      console.log(value);
    })
  }
  ngOnInit(): void { }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
      date: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      ciudad: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      observacion :new FormControl('', []),
      
    });
    console.log(this.form);
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid){
    const value = this.form.value;
    console.log(value);
    this.alquilerService.registrarAlquiler(value).subscribe(res=>{
      console.log(res);
    });

    Swal.fire(
      'Correcto!',
      'Enviado exitosamente!',
      'success'
    )

    this.router.navigate(['/alquiler']);
  }else{

    this.form.markAllAsTouched();
    
  }
}

  resolved(captchaResponse: string) {
    this.captchaValid = (captchaResponse && captchaResponse.length > 0) ? true : false;
  }

}
