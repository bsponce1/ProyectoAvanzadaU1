import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DatosService } from 'src/app/services/datos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent  {

  user = {'usuario': '', 'pass': ''};

  constructor( public authService: AuthService,
    public router: Router,
    public datos:DatosService) { 
    }

  signIn() {
      this.authService.signInUser(this.user)
        .subscribe(
          res => {
              localStorage.setItem('token', res.token);
              this.datos.setUser(res.idd);
              this.router.navigate(['/fase1']);
          },
          err => Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Credenciales incorrectas!',
          })
        )
  }
}