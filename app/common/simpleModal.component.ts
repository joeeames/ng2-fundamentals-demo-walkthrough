import {Component, Input, OnInit, ElementRef, Inject, ViewChild} from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Component({
  selector: 'simple-modal',
  template: `
  <div id="simple-modal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">{{title}}</h4>
        </div>
        <div class="modal-body" #modalbody>
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  </div>
`,
  styles: [`
    .modal-body { height: 250px; overflow-y: scroll; }
  `],
  directives: [
  ]
})
export class SimpleModalComponent {
  @Input() title : string;
  private el: HTMLElement;


  constructor(el: ElementRef, @Inject(JQ_TOKEN) private $ : any) {
    this.el = el.nativeElement;
  } 
  
  ngOnInit() {
    
  }

  

  
}