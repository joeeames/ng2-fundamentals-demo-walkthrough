import { Component } from '@angular/core';
import { EventsListComponent } from './events/events-list.component';
import { CreateEventComponent } from './events/create-event.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <create-event></create-event>
  `,
  directives: [
    EventsListComponent,
    CreateEventComponent,
    NavBarComponent
  ],
  providers: [
    EventService,
    ToastrService
  ]
})
export class AppComponent {
  
  constructor() {}
  
}