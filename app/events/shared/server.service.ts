import { Injectable, EventEmitter } from '@angular/core';

export class ServerService {
   getEvents() {
      return new EventEmitter(true);
   }
}