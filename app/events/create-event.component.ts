import { Component, Input, OnInit } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators } from '@angular/common';
import { EventService, Event, Session } from './shared/index';
import { Router } from '@angular/router';

function exactly2(control: any): {[key: string]: boolean} {
  return control.value.length !== 3 ? { "exactly3": true} : null
}

@Component({
  selector: 'create-event',
  templateUrl: "/app/events/create-event.component.html",
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; } 
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :ms-input-placeholder  { color: #999; }
  `],
  directives: [FORM_DIRECTIVES]
})
export class CreateEventComponent implements OnInit {
  newEvent: Event;
  newEventForm: ControlGroup;
  name: Control;
  date: Control;
  time: Control;
  price: Control;
  address: Control;
  city: Control;
  country: Control;
  imageUrl: Control;
  
  constructor(private eventService: EventService, 
      private builder: FormBuilder, private router: Router) {
    this.name = new Control('', Validators.required);
    this.date = new Control('', Validators.required);
    this.time = new Control('', Validators.required);
    this.price = new Control('', Validators.compose([Validators.required, Validators.pattern('\\d\+(\\.\\d{0,2})?')]));
    this.address = new Control('', Validators.required);
    this.city = new Control('', Validators.required);
    this.country = new Control('', Validators.compose([Validators.required, Validators.pattern('[A-Z]{2}')]));
    this.imageUrl = new Control('', Validators.required);
    // this.country = new Control('', exactly2);
    
    this.newEventForm = builder.group({
      name: this.name,
      date: this.date,
      time: this.time,
      price: this.price,
      location: builder.group({
        address: this.address,
        city: this.city,
        country: this.country
      }),
      imageUrl: this.imageUrl,
    })
  }
  
  ngOnInit() {
    this.newEvent = new Event();
    // TODO: is this needed?
  }
  
  isLocationComplete(location) {
    var controls = location.controls
  
    return (!controls.address.errors || !controls.address.errors.required || !controls.address.dirty) && 
      (!controls.city.errors || !controls.city.errors.required || !controls.city.dirty) &&
      (!controls.country.errors || !controls.country.errors.required || !controls.country.dirty)
  }
  
  saveEvent(formValues) {
    if(this.newEventForm.valid) {
      var newEvent = {
        name: formValues.name,
        date: formValues.date,
        time: formValues.time,
        price: formValues.price,
        location: {
          address: formValues.location.address,
          city: formValues.location.city,
          country: formValues.location.country
        },
        imageUrl: formValues.imageUrl,
      }
      console.log(formValues)
      console.log(newEvent)
      this.eventService.createEvent(newEvent)
        .subscribe(event => {
          this.router.navigate(['/events', event.id]);
        })
    }
  }
  
  cancelEvent() {
    this.router.navigate(['/events']);
  }
  

}