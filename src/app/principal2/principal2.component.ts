import { Component } from '@angular/core';

//Agregado Zambrano
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal2',
  templateUrl: './principal2.component.html',
  styleUrls: ['./principal2.component.css'],
})
export class Principal2Component {
  //Agregado Zambrano
  formulario: FormGroup;

  constructor(private router: Router) {
    this.formulario = new FormGroup({
      usuario: new FormControl('', Validators.required),
      contraseña: new FormControl('', Validators.required),
    });
  }

  // Agregado Zambrano
  validarDatos(): void {
    if (this.formulario.valid) {
      const usuarioIngresado = this.formulario.value.usuario;
      const contraseñaIngresada = this.formulario.value.contraseña;

      if (usuarioIngresado === 'admin' && contraseñaIngresada === 'admin') {
        this.router.navigate(['/dashboard']); // Redirigir al dashboard si los datos son correctos
      } else if (
        usuarioIngresado === 'usuario' &&
        contraseñaIngresada === 'usuario'
      ) {
        // Agregar esta condición para el usuario "usuario" y la contraseña "usuario"
        this.router.navigate(['/otro-componente']); // Reemplaza 'otro-componente' con el nombre del componente al que deseas redirigir
      } else {
        this.router.navigate(['/']); // Redirigir al componente actual si los datos son incorrectos
      }
    }
  }
}
