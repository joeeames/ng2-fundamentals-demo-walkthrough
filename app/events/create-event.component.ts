import { Component, Input, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class CreateEventComponent implements OnInit {
  newEvent: Event;
  newEventForm: FormGroup;
  
  constructor(private eventService: EventService, 
      private builder: FormBuilder, private router: Router) {
  }
  
  ngOnInit() {
    this.newEvent = new Event();
    // TODO: is this needed?

    this.newEventForm = new FormGroup({
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.pattern('\\d\+(\\.\\d{0,2})?')]),
      location: new FormGroup({
        address: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        country: new FormControl('', [Validators.required, Validators.pattern('[A-Z]{2}')])
      }),
      imageUrl: new FormControl('', Validators.required),
    })
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