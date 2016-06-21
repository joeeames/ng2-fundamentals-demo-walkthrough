import {Component, Input, OnInit, AfterViewInit, ElementRef, Inject, ViewChild} from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Component({
  selector: 'simple-modal',
  template: `
  <div id="{{elementId}}" class="modal fade" tabindex="-1" role="dialog">
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
export class SimpleModalComponent implements OnInit, AfterViewInit {
  @Input() title : string;
  @Input() elementId : string;
  @Input() closeOnBodyClick : boolean;
  private el: HTMLElement;

  @ViewChild('modalbody') bodyEl: ElementRef;

  constructor(el: ElementRef, @Inject(JQ_TOKEN) private $ : any) {
    this.el = el.nativeElement;
  } 
  
  ngOnInit() {

  }

  ngAfterViewInit() {
    if(this.closeOnBodyClick) {
      this.bodyEl.nativeElement.addEventListener('click', () => {
        this.$(`#${this.elementId}`).modal('hide');
      })
    }
  }

  
}