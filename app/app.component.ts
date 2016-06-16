import { Component } from '@angular/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './users/profile.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';

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
    ToastrService,
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  {path: '/events/...', name: 'Events', component: EventsComponent, useAsDefault: true},
  {path: '/profile', name: 'Profile', component: ProfileComponent}
])
export class AppComponent {
  
  constructor() {}
  
}