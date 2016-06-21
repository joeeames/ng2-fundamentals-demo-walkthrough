import { Directive, OnInit, ElementRef, Input, Inject } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
  selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  
  constructor(el: ElementRef, @Inject(JQ_TOKEN) private $ : any) {
    this.el = el.nativeElement;
   
    this.el.addEventListener('click', e => {
      // this modal function doesn't exist on jquery,
      // it's added by bootstrap, so adding jquery
      // typings won't help things in general
      // jquery typings added with "npm i typings -g"
      // and then  "typings install dt~jquery --save --global"
      this.$(`#simple-modal`).modal({})
    })

  }
  
  ngOnInit() {
  }
}