import { Component } from '@angular/core';
import { EventThumbnailComponent } from './event-thumbnail.component';

@Component({
  selector: 'events-list',
  template: `<event-thumbnail [event]="event1"></event-thumbnail>`,
  directives: [EventThumbnailComponent]
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/app/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }
  
  constructor() {
  }  
  
}
