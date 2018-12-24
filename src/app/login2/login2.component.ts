import { Component, OnInit } from '@angular/core';
import { UserModel } from "../Entity/user-model";

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  userModel: UserModel;
  constructor() {
    this.userModel = new UserModel();
  }

  ngOnInit() {
    this.userModel.userName = "User Name";
  }

}
