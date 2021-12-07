import {Component, OnInit, Output} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../models/product";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  // @ts-ignore
  product: Product[] = new Product("","",0);
  showFormTemplate: boolean;
  items = ['item1', 'item2', 'item3', 'item4'];

  addProduct(product: Product[]) {
    // @ts-ignore
    this.items.push(product);
  }

  constructor(private productService: ProductService ) {
  }

  ngOnInit(): void {
    this.showFormTemplate = false;
  }

  showForm(){
    this.showFormTemplate =true
  }
}
