import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Session } from '../shared/index';

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
  @Output() saveNewSession = new EventEmitter()
  @Output() cancelAddSession = new EventEmitter()

  constructor() {
    
  }

  saveSession(session:Session) {
    session.voters = []
    session.duration = +session.duration
    this.saveNewSession.emit(session)
  }

  cancelSession() {
    this.cancelAddSession.emit(null)
  }
}