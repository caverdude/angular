import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector:'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent{
  form: FormGroup
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }
  login(){
    console.log(this.form.value); // prints form values in json format
  }
}
