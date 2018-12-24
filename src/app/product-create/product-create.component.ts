import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductService } from "../Service/product.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  myForm: FormGroup;

  constructor(private service: ProductService, private router: Router) {
    this.myForm = new FormGroup({
      id: new FormControl("", [Validators.required])
      , title: new FormControl("", [Validators.required])
      , detail: new FormControl("", [Validators.required])
      , price: new FormControl("", [Validators.required])
    });
  }

  ngOnInit() {
  }


  onSubmit() {
    if (this.myForm.valid) {
      this.service.createProduct(this.myForm.value)
        .subscribe(data => {
          this.router.navigate(['product-list']);
        });
    }
  }
}
