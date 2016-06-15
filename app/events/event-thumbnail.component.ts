import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div (click)="handleClick()" class="well hoverwell thumbnail">
      <h2>{{event.name}}</h2>
      <span>Date:</span>
      <span>{{event.date}}</span><br>
      <span>Time:</span>
      <span>{{event.time}}</span><br>
      <span>Price:</span>
      <!-- we add the price pipe in the pipes section -->
      <span>\${{event.price}}</span><br>
      <span>Location:</span>
      <span>{{event.location.address}}</span>
      <span>&nbsp;</span>
      <span>{{event.location.city}}, {{event.location.country}}</span>
    </div>
  `
})
export class EventThumbnailComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter;
  
  constructor() {
  } 

  handleClick() {
    this.eventClick.emit(this.event);
  }
  
}
