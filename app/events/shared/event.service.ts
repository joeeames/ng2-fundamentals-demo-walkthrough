import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';

@Injectable()
export class EventService {

  constructor(private http: Http) {}

  getEvents() {
    return this.http.get("/api/events")
      .map((response: Response) => {
        return <Event[]>response.json();
      }).catch(this.handleError);
  }
  
  getEvent(id: number) {
    return this.http.get("/api/events/" + id)
      .map((response: Response) => {
        return <Event>response.json();
      }).catch(this.handleError);
  }

  updateEvent(eventData: any) {
    // to be implemented later
  }

  createEvent(newEvent: any) {
    const nextId =  Math.max.apply(null, EVENTS.map(s => s.id));
    newEvent.id = nextId + 1
    newEvent.sessions = [];
    EVENTS.push(newEvent);

    var emitter = new EventEmitter(true);
    setTimeout(() => {
      emitter.emit(newEvent);
    }, 100);
    return emitter;
  }

  searchSessions(searchTerm: string) {
    var term = searchTerm.toLowerCase();
    var results = [];
    EVENTS.forEach(event => {
      var matchingSessions = event.sessions.filter(session => session.name.toLowerCase().indexOf(term) > -1)
      matchingSessions = matchingSessions.map((session:any) => {
        session.eventId = event.id;
        return session;
      })
      results = results.concat(matchingSessions);
    })
    console.log(results);

    var emitter = new EventEmitter(true);
    setTimeout(() => {
      emitter.emit(results);
    }, 100);
    return emitter;
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server Error");
  }
  
}

const EVENTS = [
  ]
