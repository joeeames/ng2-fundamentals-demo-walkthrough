import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Event, Session } from '../shared/event.model'

@Injectable()
export class VoterService {
  
  constructor() {}

  deleteVoter(eventId: number, session: Session, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  addVoter(eventId: number, session: Session, voterName: string) {
    session.voters.push(voterName); 
  }

  userHasVoted(session: Session, userName: string) {
    return session.voters.some(voter => voter === userName)
  }
}
