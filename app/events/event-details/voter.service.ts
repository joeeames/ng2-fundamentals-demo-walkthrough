import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Event, Session } from '../shared/event.model'
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class VoterService {
  
  constructor(private http: Http) {}

  deleteVoter(eventId: number, session: Session, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);

    this.http.delete(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`)
      .catch(this.handleError)
      .subscribe()
  }

  addVoter(eventId: number, session: Session, voterName: string) {
    session.voters.push(voterName); 

    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers });
    
    var url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.post(url, JSON.stringify({}), options)
      .catch(this.handleError)
      .subscribe()
  }

  userHasVoted(session: Session, userName: string) {
    return session.voters.some(voter => voter === userName)
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server Error");
  }
}
