import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../product.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  product: Product;


  products: Product[];



  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit()  {
    let resp= this.productService.retrieveAllProduits();
    // @ts-ignore
    resp.subscribe((data)=>this.products=data);

  }






  public retrieveProduct(id: number){
    let resp= this.productService.retrieveProduct(id);
    // @ts-ignore
    resp.subscribe((data)=>this.products=data);

  }



  updateProduct(id : number){
    let resp= this.productService.update(id);
    // @ts-ignore
    resp.subscribe((data)=>this.products=data);
    // @ts-ignore
    this.router.navigate('formprod')
}


deleteProduct(id: number){
  let resp= this.productService.deleteProduct(id);
  // @ts-ignore
  resp.subscribe((data)=>this.products=data);
}




}
