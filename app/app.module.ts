import { NgModule, provide }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { TOASTR_TOKEN } from './common/toastr.service';
import { JQ_TOKEN } from './common/jQuery.service';
import { EventService } from './events/shared/event.service';
import { AuthService } from './users/auth.service';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { ModalTriggerDirective } from './common/modalTrigger.directive';
import { SimpleModalComponent } from './common/simpleModal.component';
import { ProfileComponent } from './users/profile.component';
import { LoginComponent } from './users/login.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { UpvoteComponent } from './events/event-details/upvote.component';
import { VoterService } from './events/event-details/voter.service';
import { DurationPipe } from './events/shared/index';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';


declare let toastr: Object;
declare let $: any;

@NgModule({
    declarations: [
      AppComponent,
      ProfileComponent,
      LoginComponent,
      CreateEventComponent,
      EventsListComponent, 
      EventDetailsComponent,
      NavBarComponent,
      EventThumbnailComponent,
      SessionListComponent,
      CreateSessionComponent,
      UpvoteComponent,
      CollapsibleWellComponent,
      DurationPipe,
      ModalTriggerDirective,
      SimpleModalComponent
    ],
    imports:      [
      BrowserModule,
      HttpModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes)
    ],
    providers: [
      EventService,
      AuthService,
      VoterService,
      provide(TOASTR_TOKEN, {useValue: toastr}),
      provide(JQ_TOKEN, { useValue: $}),
      FormBuilder
    ],
    bootstrap:    [AppComponent],
})
export class AppModule {}
