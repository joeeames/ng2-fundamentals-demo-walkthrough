import { Component } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';
import { AuthService } from '../users/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: '/app/nav/navbar.component.html',
  directives: [
    RouterLink
  ]
})
export class NavBarComponent {
  constructor(private auth: AuthService) { 
    
  }


}