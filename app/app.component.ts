import { Component, provide, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { User } from './users/auth.service';
import { Observable } from 'rxjs/Rx';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './users/profile.component';
import { NavBarComponent } from './nav/navbar.component';
import { LoginComponent } from './users/login.component';
import { EventService } from './events/shared/event.service';
import { TOASTR_TOKEN } from './common/toastr.service';
import { JQ_TOKEN } from './common/jQuery.service';
import { AuthService } from './users/auth.service';

declare let toastr: Object;
declare let $: any;

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `,
  directives: [
    NavBarComponent,
    ROUTER_DIRECTIVES
  ],
  providers: [
    EventService,
    provide(TOASTR_TOKEN, {useValue: toastr}),
    provide(JQ_TOKEN, { useValue: $}),
    AuthService
  ]
})
export class AppComponent implements OnInit {
  
  constructor(private http: Http,
    private auth: AuthService, private router: Router) {}
  
  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}