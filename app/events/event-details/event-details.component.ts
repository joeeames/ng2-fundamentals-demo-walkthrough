import { Component, Input, OnInit } from '@angular/core';
import { EventService, Event, Session } from '../shared/index';
import { ActivatedRoute } from '@angular/router';
import { SessionListComponent } from './session-list.component';
import { CreateSessionComponent } from './create-session.component';
import { TOASTR_TOKEN } from '../../common/toastr.service';

@Component({
  selector: 'event-details',
  templateUrl: '/app/events/event-details/event-details.component.html',
  styles: ['a {cursor:pointer}'],
  directives: [SessionListComponent, CreateSessionComponent]
})
export class EventDetailsComponent implements OnInit {
  event: Event;
  addMode: boolean = false;
  filterBy: string = 'all';
  sortBy: string = 'votes'
  
  constructor(private eventService: EventService,
    private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.params
      .map(p => +p['id'])
      .flatMap(id => this.eventService.getEvent(id))
      .subscribe(event => this.event = event)
  }

  addSession() {
    this.addMode = true
  }

  saveNewSession(session:Session) {
    const nextId =  Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1
    console.log(session.id);
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event)
      .subscribe();
    this.addMode = false

  }

  cancelAddSession() {
    this.addMode = false
  }
}
