import { Component } from '@angular/core';
import { AuthService } from '../users/auth.service';
import { EventService, Event } from '../events/index';

@Component({
  selector: 'nav-bar',
  templateUrl: 'app/nav/navbar.component.html',
  styles: [`
    .nav.navbar-nav {font-size:15px} 
    #searchForm {margin-right:100px; } 
    .profile {font-size:15px}
    @media (max-width: 1200px) {#searchForm {display:none}}
  `], 
})
export class NavBarComponent {
  events: Event[];
  searchTerm: string = "";
  foundSessions: any;

  constructor(private auth: AuthService,
    private eventService: EventService) { 
  }

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(events => {
        this.events = events;
      })
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm)
      .subscribe(sessions => {
        this.foundSessions = sessions;
      })
  } 


}