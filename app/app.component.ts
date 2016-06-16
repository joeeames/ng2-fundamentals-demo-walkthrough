import { Component } from '@angular/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import { EventsListComponent } from './events/events-list.component';
import { CreateEventComponent } from './events/create-event.component';
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
    EventsListComponent,
    CreateEventComponent,
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
  {path: '/events', name: 'Events', component: EventsListComponent, useAsDefault: true},
  {path: '/events/new', name: 'CreateEvent', component: CreateEventComponent}
])
export class AppComponent {
  
  constructor() {}
  
}