import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventService, Event, Session } from '../shared/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'create-session',
  templateUrl: '/app/events/event-details/create-session.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; } 
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :ms-input-placeholder  { color: #999; }
  `],
})
export class CreateSessionComponent  {
  event: Event;
  eventId: number;

  constructor(private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.eventId = this.router.routerState.parent(this.route).snapshot.params['id'];
    console.log('id', this.eventId);
    this.eventService.getEvent(this.eventId)
      .subscribe(event => this.event = event)
  }

  saveSession(session:Session) {
    session.voters = []
    session.duration = +session.duration
    const nextId =  Math.max.apply(0, this.event.sessions.map(s => s.id));
    session.id = nextId + 1
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event)
      .subscribe();
  }

  cancelSession() {
    // route to the basic state
    this.router.navigate(['']);
  }
}