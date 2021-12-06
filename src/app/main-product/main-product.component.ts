import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit {
  listProduct: Product[];
  product: Product = new Product("","",0);
  showFormTemplate: boolean;

  constructor(private productService: ProductService ) {
  }

  ngOnInit(): void {
    this.showFormTemplate = false;
  }

  showForm(){
    this.showFormTemplate =true
  }
}
