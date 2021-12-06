import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../product.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  product: Product;


  products: Product[]=[];



  constructor(private productService: ProductService) { }

  ngOnInit(): void {

  }




  public retrieveProduct(id: number){
    let resp= this.productService.retrieveProduct(id);
    // @ts-ignore
    resp.subscribe((data)=>this.products=data);
  }

  public retrieveProducts(){
    let resp= this.productService.retrieveAllProduits();
    // @ts-ignore
    resp.subscribe((data)=>(data.constructor(Output(this.product.code)),Output(this.product.label),Output(this.product.price)));
  }


  updateProduct(id : number){
    let resp= this.productService.update(id);
    // @ts-ignore
    resp.subscribe((data)=>this.products=data);
}


deleteProduct(id: number){
  let resp= this.productService.deleteProduct(id);
  // @ts-ignore
  resp.subscribe((data)=>this.products=data);
}




}
