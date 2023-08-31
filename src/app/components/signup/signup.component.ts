import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  user = {'usuario': '', 'pass': ''};

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  signUp(){
    this.authService.signUpUser(this.user)
    .subscribe(
      res => {
        console.log(res);
        //localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      },
      err => console.log(err)
    )
  }

}