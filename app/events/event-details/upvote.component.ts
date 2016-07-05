import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { EventService, Event } from '../shared/index';

@Component({
  selector: 'upvote',
  styleUrls: ['app/events/event-details/upvote.component.css'],
  template:`
    <div class="votingWidgetContainer pointable" (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
          <i class="glyphicon glyphicon-heart"
            [style.color]="iconColor"></i>
        </div>
        <div class="badge badge-inverse votingCount">
            <div>{{count}}</div>
        </div>
      </div>
    </div>
  `,
})
export class UpvoteComponent implements OnInit {
  @Output() vote = new EventEmitter();
  @Input() count : number;
  @Input() set voted(val){
    this.iconColor = val ? 'red' : 'white';
  }
  iconColor : string;


  constructor() {}
  
  ngOnInit() {
  }
  
  onClick() {
    this.vote.emit({});
  }
}