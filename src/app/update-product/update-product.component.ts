import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Product} from "../models/product";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  form: FormGroup;

  // @ts-ignore
  product = new Product("", "");
  submitted = false;

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {


  }


  updateProduct(id: number) {
    let resp = this.productService.update(id);
    resp.subscribe( data => {
      // @ts-ignore
      this.product=data  })
    console.log(id);
    this.router.navigateByUrl('products')

  }

  onSubmit(form : FormGroup): void {
    this.submitted = true;
    // @ts-ignore
    this.updateProduct();
}
}
