import { Component, Inject, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component({
  selector: 'user-profile',
  templateUrl: 'app/users/profile.component.html',
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
    
  constructor(private auth : AuthService,
    private builder: FormBuilder,
      private router: Router,
      @Inject(TOASTR_TOKEN) private toastr: Toastr) {
    
  }

  ngOnInit() {
    var firstName = new FormControl('' /*this.auth.currentUser.firstName*/, Validators.required);
    var lastName = new FormControl(''/*this.auth.currentUser.lastName*/, Validators.required);
    console.log(this.auth.currentUser);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName,
    })
  }
  
  saveProfile(formValues) {
    if(this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName)
        .subscribe(() => {
          this.toastr.success('Profile Saved');
        })
    }
  }
  
  cancel() {
    this.router.navigate(['events']);
  }
   
}