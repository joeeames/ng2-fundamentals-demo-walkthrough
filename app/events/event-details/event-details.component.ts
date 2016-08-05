import { Component, Input, OnInit } from '@angular/core';
import { EventService, Event, Session } from '../shared/index';
import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { SessionListComponent } from './session-list.component';
import { CreateSessionComponent } from './create-session.component';
import { TOASTR_TOKEN } from '../../common/toastr.service';


@Component({
  selector: 'event-details',
  templateUrl: '/app/events/event-details/event-details.component.html',
  styles: ['a {cursor:pointer}'],
  directives: [SessionListComponent, CreateSessionComponent, ROUTER_DIRECTIVES],
})
export class EventDetailsComponent implements OnInit {
  event: Event;
  eventId: number;
  addMode: boolean = false;
  filterBy: string = 'all';
  sortBy: string = 'votes'
  
  constructor(private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router) {}
  
  ngOnInit() {
    // using an observable to get the route params
    // this.route.params
    //   .map(p => +p['id'])
    //   .flatMap(id => this.eventService.getEvent(id))
    //   .subscribe(event => this.event = event)

    // same thing but with a snapshot instead of observable
    this.eventId = this.route.snapshot.params['id'];
    this.eventService.getEvent(this.eventId)
      .subscribe(event => {
        this.event = event
      })
  }

  initChild() {

    console.log('activate')
  }

  addSession() {
    this.router.navigate([`/events/${this.eventId}/new-session`]);
  }

  
}
