import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Product} from "../models/product";
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";

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
id : number;
  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router, private  route:ActivatedRoute) {
  }

  ngOnInit(): void {
   this.id = this.route.snapshot.params.idProduit;
    this.productService.update(this.id).subscribe( data => {
      // @ts-ignore
      this.product=data  })
    console.log(this.product);
  }


  updateProduct(id: number) {

    this.router.navigateByUrl('products')

  }

  onSubmit(form : FormGroup): void {
    this.submitted = true;
    // @ts-ignore
    this.updateProduct();
}
}
