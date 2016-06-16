import { Component } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';

@Component({
  selector: 'nav-bar',
  templateUrl: '/app/nav/navbar.component.html',
  directives: [
    RouterLink
  ]
})
export class NavBarComponent {
  constructor() { }


}