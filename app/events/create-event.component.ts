import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'create-event',
  templateUrl: '/app/events/create-event.component.html',
  
})
export class CreateEventComponent implements OnInit {
  constructor(private router : Router) {
    
  }
  
  ngOnInit() {
    
  }
  
  cancel() {
    this.router.navigate(['Events']);
  }
}