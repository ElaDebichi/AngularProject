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

  // @ts-ignore
  product: Product[] = new Product("","",);
  showFormTemplate: boolean;
  products: Product;
  isButtonVisible: boolean;
  showListpage:boolean;

  addProduct(product: Product[]) {
    // @ts-ignore
    this.items.push(product);
  }

  constructor(private router:Router) {
  }

  ngOnInit(): void {
    this.showFormTemplate = false;
    this.isButtonVisible=false;
    this.showListpage=false;

  }
showList(){
this.showListpage=true;
  this.showFormTemplate =false;
  this.isButtonVisible=false;


}
  showForm(){
    this.showFormTemplate =true;
    this.isButtonVisible=true;
    this.showListpage=false;
  }
}
