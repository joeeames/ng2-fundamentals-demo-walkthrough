import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class EventService {
  getEvents() {
    // THIS can work instead of an EventEmitter. Basically the same thing
    // var s = new Subject();
    // setTimeout( () => {    
    //   s.next(EVENTS);
    // }, 100);
    // return s;
    
    
    var emitter = new EventEmitter(true);
    setTimeout(() => {
      emitter.emit(EVENTS);
    }, 100);
    return emitter;
  }
  
  getEvent(id: number) {
    var emitter = new EventEmitter(true);
    setTimeout(() => {
      let found = EVENTS.find(event => event.id === id)
      emitter.emit(found);
    }, 100);
    return emitter;
  }
}

const EVENTS = [
    {
      id: 1,
      name: 'Angular Connect',
      date: '9/26/2036',
      time: '10:00 am',
      price: 599.99,
      imageUrl: '/app/assets/images/angularconnect-shield.png',
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England'
      },
      sessions: [
        {
          id: 1,
          name: "Using Angular 4 Pipes",
          presenter: "Peter Bacon Darwin",
          duration: 1,
          level: "Intermediate",
          abstract: `Learn all about the new pipes in Angular 4, both 
          how to write them, and how to get the new AI CLI to write 
          them for you. Given by the famous PBD, president of Angular 
          University (formerly Oxford University)`,
          voters: ['bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 2,
          name: "Getting the most out of your dev team",
          presenter: "Jeff Cross",
          duration: 1,
          level: "Intermediate",
          abstract: `We all know that our dev teams work hard, but with 
          the right management they can be even more productive, without 
          overworking them. In this session I'll show you how to get the 
          best results from the talent you already have on staff.`,
          voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
        },
        {
          id: 3,
          name: "Angular 4 Performance Metrics",
          presenter: "Rob Wormald",
          duration: 2,
          level: "Advanced",
          abstract: `Angular 4 Performance is hot. In this session, we'll see 
          how Angular gets such great performance by preloading data on 
          your users devices before they even hit your site using the 
          new predictive algorithms and thought reading software 
          built into Angular 4.`,
          voters: []
        },
        {
          id: 4,
          name: "Angular 5 Look Ahead",
          presenter: "Brad Green",
          duration: 2,
          level: "Advanced",
          abstract: `Even though Angular 5 is still 6 years away, we all want 
          to know all about it so that we can spend endless hours in meetings 
          debating if we should use Angular 4 or not. This talk will look at 
          Angular 6 even though no code has yet been written for it. We'll 
          look at what it might do, and how to convince your manager to 
          hold off on any new apps until it's released`,
          voters: []
        },
        {
          id: 5,
          name: "Basics of Angular 4",
          presenter: "John Papa",
          duration: 2,
          level: "Beginner",
          abstract: `It's time to learn the basics of Angular 4. This talk 
          will give you everything you need to know about Angular 4 to 
          get started with it today and be building UI's for your self 
          driving cars and butler-bots in no time.`,
          voters: ['bradgreen', 'igorminar']
        }
      ]
    },
    {
      id: 2,
      name: 'ng-nl',
      date: '4/15/2037',
      time: '9:00 am',
      price: 950.00,
      imageUrl: '/app/assets/images/ng-nl.png',
      location: {
        address: 'The NG-NL Convention Center & Scuba Shop',
        city: 'Amsterdam',
        country: 'Netherlands'
      },
      sessions: [
        {
          id: 1,
          name: "Testing Angular 4 Workshop",
          presenter: "Pascal Precht & Christoph Bergdorf",
          duration: 4,
          level: "Beginner",
          abstract: `In this 6 hour workshop you will learn not only how to test Angular 4, 
          you will also learn how to make the most of your team's efforts. Other topics
          will be convincing your manager that testing is a good idea, and using the new
          protractor tool for end to end testing.`,
          voters: ['bradgreen', 'igorminar']
        },
        {
          id: 2,
          name: "Angular 4 and Firebase",
          presenter: "David East",
          duration: 3,
          level: "Intermediate",
          abstract: `In this workshop, David East will show you how to use Angular with the new
          ultra-real-time 5D Firebase back end, hosting platform, and wine recommendation engine.`,
          voters: ['bradgreen', 'igorminar', 'johnpapa']
        },
        {
          id: 3,
          name: "Reading the Angular 4 Source",
          presenter: "Patrick Stapleton",
          duration: 2,
          level: "Intermediate",
          abstract: `Angular 4's source code may be over 25 million lines of code, but it's really 
          a lot easier to read and understand then you may think. Patrick Stapleton will talk
          about his secretes for keeping up with the changes, and navigating around the code.`,
          voters: ['martinfowler']
        },
        {
          id: 4,
          name: "Hail to the Lukas",
          presenter: "Lukas Ruebbelke",
          duration: 1,
          level: "Beginner",
          abstract: `In this session, Lukas will present the 
          secret to being awesome, and how he became the President 
          of the United States through his amazing programming skills, 
          showing how you too can be success with just attitude.`, 
          voters: ['bradgreen']
        }
      ]
    }
]