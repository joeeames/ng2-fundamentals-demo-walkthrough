import {  RouterConfig } from '@angular/router';
import { EventDetailsComponent } from './event-details.component';
import { CreateSessionComponent } from './create-session.component';
import { SessionListComponent } from './session-list.component';

export const eventDetailsRoutes: RouterConfig = [
  { 
    path: 'events/:id', 
    component: EventDetailsComponent,
    children: [
      { path: 'new-session', component: CreateSessionComponent },
      { path: '', component: SessionListComponent }
    ]
  }
]