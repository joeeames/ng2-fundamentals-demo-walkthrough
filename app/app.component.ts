import { Component, provide } from '@angular/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './users/profile.component';
import { NavBarComponent } from './nav/navbar.component';
import { LoginComponent } from './users/login.component';
import { EventService } from './events/shared/event.service';
import { TOASTR_TOKEN } from './common/toastr.service';
import { AuthService } from './users/auth.service';

declare let toastr: Object;

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
    AuthService,
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  {path: '/events/...', name: 'Events', component: EventsComponent, useAsDefault: true},
  {path: '/profile', name: 'Profile', component: ProfileComponent},
  {path: '/login', name: 'Login', component: LoginComponent}
])
export class AppComponent {
  
  constructor() {}
  
}