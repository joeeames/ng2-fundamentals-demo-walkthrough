import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  templateUrl: 'app/users/login.component.html',
})
export class LoginComponent {

  loginInvalid = false;
  
  constructor(private router: Router,
    private auth: AuthService) {
  }
  
  login(formValues) {
    this.auth.loginUser(formValues.userName, formValues.password)
      .subscribe((resp) => {
        if(!resp) {
          this.loginInvalid = true;
        } else {
          this.router.navigate(['/events']);
        }
      })
  }
  
  cancel() {
    this.router.navigate(['/events']);
  }
   
}