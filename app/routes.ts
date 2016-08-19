import { provideRouter, RouterConfig } from '@angular/router';

import { ProfileComponent } from './users/profile.component';
import { LoginComponent } from './users/login.component';
import { EventsListComponent } from './events/events-list.component';
import { CreateEventComponent } from './events/create-event.component'
import { eventDetailsRoutes } from './events/event-details/event-details.routes';

export const appRoutes: RouterConfig = [
  { path: 'profile', component: ProfileComponent},
  { path: 'login', component: LoginComponent},
  
  { path: 'events/new', component: CreateEventComponent}, // gotta make sure to put this before the events route
  ...eventDetailsRoutes,
  { path: 'events', component: EventsListComponent},
  { path: '', redirectTo: "/events", pathMatch: "full"}
]
