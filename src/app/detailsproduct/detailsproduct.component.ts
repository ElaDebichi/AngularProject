import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detailsproduct',
  templateUrl: './detailsproduct.component.html',
  styleUrls: ['./detailsproduct.component.css']
})
export class DetailsproductComponent implements OnInit {
  product: Product
  id: number;


  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.idProduit;
    this.productService.retrieveProduct(this.id).subscribe((data)=>{
      // @ts-ignore
      this.product = data;
    });  }



  }

