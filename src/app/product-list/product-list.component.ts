import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product.service';
import { Product } from "../Entity/product";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

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

  editProduct() {

  }



}
