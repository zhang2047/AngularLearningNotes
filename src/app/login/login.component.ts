import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup(
      {
        userName: new FormControl,
        email: new FormControl("", [
          Validators.email,
          Validators.required
        ]),
        password: new FormControl("", [
          Validators.maxLength(8),
          Validators.required
        ])
      }
    );
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log("This Form", this.myForm.value);
    }
  }

}
