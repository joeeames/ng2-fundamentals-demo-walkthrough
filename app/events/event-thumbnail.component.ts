import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div (click)="handleClick()"
        (mouseenter)="enter()"
        (mouseleave)="leave()"
       class="well thumbnail" [style.background-color]="bgColor">
      <h2 [innerText]="event.name"></h2>
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
  
  regularBgColor = "#4e5d6c"
  hoverBgColor = "#485563" 
  bgColor;
  
  constructor() {
    this.bgColor = this.regularBgColor;
  } 
  
  enter() {
    this.bgColor = this.hoverBgColor;
  }
  
  leave() {
    this.bgColor = this.regularBgColor;
  }

  handleClick() {
    this.eventClick.emit(this.event);
  }
  
}
