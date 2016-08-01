import { Component } from '@angular/core';
import { EventsListComponent } from './events-list.component';
import { CreateEventComponent } from './create-event.component';
import { EventDetailsComponent } from './event-details/index';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'events-root',
  template:`
  <router-outlet></router-outlet>
  `,
  directives: [
    ROUTER_DIRECTIVES
  ]
})
export class EventsComponent {
}