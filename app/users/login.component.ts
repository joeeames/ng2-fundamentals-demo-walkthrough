import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  templateUrl: 'app/users/login.component.html',
})
export class LoginComponent {
  
  constructor(private router: Router,
    private auth: AuthService) {
  }
  
  login(formValues) {
    this.auth.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['Events']);
  }
  
  cancel() {
    this.router.navigate(['Events']);
  }
   
}