import { Component, OnInit } from '@angular/core';
import { EventThumbnailComponent } from './event-thumbnail.component';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail (eventClick)="eventClicked($event)" [event]="event" ></event-thumbnail>
      </div>
    </div>
  </div>  
  `,
  directives: [EventThumbnailComponent]
})
export class EventsListComponent implements OnInit {
  events: any[];
  
  constructor(private eventService: EventService,
    private toastr: ToastrService) {
  }  
  
  ngOnInit() {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    })
    
  }

  eventClicked(event) {
    // show how this line of code doesn't work. Typescript doesn't like it
    this.toastr.success('You selected ' + event.name);
  }
  
  
  
}
