import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product.service';
import { Product } from "../Entity/product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[];

  constructor(private service: ProductService) { }

  ngOnInit() {

    this.service.getProducts()
      .subscribe(data => {
        this.products = data;
        console.log("This is Products = ", this.products);
      }
      );
  }


  addProduct() {

  }



}
