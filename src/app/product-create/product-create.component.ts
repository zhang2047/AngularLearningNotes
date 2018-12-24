import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      id: new FormControl("", [Validators.required])
      , title: new FormControl("", [Validators.required])
      , detail: new FormControl("", [Validators.required])
      , price: new FormControl("", [Validators.required])
    });
  }

  ngOnInit() {
  }

}
