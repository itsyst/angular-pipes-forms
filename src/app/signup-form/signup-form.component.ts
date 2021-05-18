import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  signUp: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('******', Validators.required)
  });

  get username(){
    return this.signUp.get('username');
  };
}
