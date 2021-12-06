import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Product} from "../models/product";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  form: FormGroup;
  product: Product  =new Product("","",0);
  submitted = false;
  constructor(private fb: FormBuilder,private productService:ProductService, private router:Router) {
  }

  ngOnInit(): void {

    this.initializeForm();


  }
  newProdcut(): void {
    this.submitted = false;
    this.product =new Product("","",0);
  }
  initializeForm(): void {
    this.form = this.fb.group({

      code: 'write code here',
      label:' write label here ',
      price:'write price here',
    })



  }
  save() {
    let response = this.productService.addProduct(this.product);
    response.subscribe()
    console.log(Product);


  }

  onSubmit(form : FormGroup):void{
    this.product.code = form.value.code
    this.product.label = form.value.label
    this.product.price = form.value.price
    this.submitted = true;
    this.save();

  }


}
