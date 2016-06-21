import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  template:`
    <div (click)="toggleContent()" class="well pointable">
      <h4>
        <ng-content select="well-title"></ng-content>
      </h4>
      <ng-content select="well-body" *ngIf="visible"></ng-content>
    </div>
  `,
})
export class CollapsibleWellComponent {
  visible: boolean = true;
  
  toggleContent() {
    console.log('toggling', this.visible);
    this.visible = !this.visible;
  }
}

