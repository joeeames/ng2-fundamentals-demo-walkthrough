import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'user-profile',
  templateUrl: 'app/users/profile.component.html',
})
export class ProfileComponent {
  
  constructor(private router: Router) {
  }
  
  cancel() {
    this.router.navigate(['Events']);
  }
   
}