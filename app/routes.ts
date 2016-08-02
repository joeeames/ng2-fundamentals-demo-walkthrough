import { provideRouter, RouterConfig } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './users/profile.component';
import { LoginComponent } from './users/login.component';
import { EventsListComponent } from './events/events-list.component';
import { CreateEventComponent } from './events/create-event.component'
import { EventDetailsComponent } from './events/event-details/event-details.component';

export const appRoutes: RouterConfig = [
  // {path: 'events/...', component: EventsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  
  {path: 'events/new', component: CreateEventComponent}, // gotta make sure to put this before the next route
  {
    path: 'events', 
    component: EventsListComponent, 
    // children: [
    //   {path: '', component: EventsListComponent},
    //   {path: ':id', component: EventDetailsComponent},
    //   {path: 'new', component: CreateEventComponent}

    // ]
  },
  {path: 'events/:id', component: EventDetailsComponent},
  {path: '', redirectTo: "/events", pathMatch: "full"}
]

export const APP_ROUTER_PROVIDER = provideRouter(appRoutes);