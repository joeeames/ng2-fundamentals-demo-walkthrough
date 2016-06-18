import { Component } from '@angular/core';
import { EventsListComponent } from './events-list.component';
import { CreateEventComponent } from './create-event.component';
import { EventDetailsComponent } from './event-details/index';
import { ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';

@Component({
  selector: 'events-root',
  template:`
  <router-outlet></router-outlet>
  `,
  directives: [
    ROUTER_DIRECTIVES
  ]
})
@RouteConfig([
  {path: '/', name: 'Events', component: EventsListComponent, useAsDefault: true},
  {path: '/:id', name: 'Event', component: EventDetailsComponent},
  {path: '/new', name: 'CreateEvent', component: CreateEventComponent}
])
export class EventsComponent {
}