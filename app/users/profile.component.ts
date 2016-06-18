import { Component } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators } from '@angular/common';
import { Router } from '@angular/router-deprecated';
import { AuthService } from './auth.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'user-profile',
  templateUrl: 'app/users/profile.component.html',
})
export class ProfileComponent {
  firstName: Control;
  lastName: Control;
  profileForm: ControlGroup;
    
  constructor(private auth : AuthService,
    private builder: FormBuilder,
      private router: Router,
      private toastr: ToastrService) {
    this.firstName = new Control(this.auth.currentUser.firstName, Validators.required);
    this.lastName = new Control(this.auth.currentUser.lastName, Validators.required);

    this.profileForm = builder.group({
      firstName: this.firstName,
      lastName: this.lastName,
    })
  }
  
  saveProfile(formValues) {
    if(this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.toastr.success('Profile Saved');
    }
  }
  
  cancel() {
    this.router.navigate(['Events']);
  }
   
}