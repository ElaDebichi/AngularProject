import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../product.service";
import {Router} from "@angular/router";
import {async} from "rxjs";


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  product: Product;

libelle: string;
  products: Product[];



  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit()  {
    let resp= this.productService.retrieveAllProduits();
    // @ts-ignore
    resp.subscribe((data)=>{
      // @ts-ignore
      this.products=data
      console.log(data)
    });

  }

  Search(){
if (this.libelle==""){
  this.ngOnInit()

}else {
  this.products= this.products.filter(res=>{
    return res.libelle.toLocaleLowerCase().match(this.libelle.toLocaleLowerCase());

  })
}
  }

  updateProduct(idProduit : number){
    this.router.navigate(['updateform',idProduit])
}
detailsProduct(idProduit: number){
  this.router.navigate(['detailsproduct',idProduit])

}

deleteProduct(idProduit: number){
  let resp= this.productService.deleteProduct(idProduit);
  // @ts-ignore
  resp.subscribe((data)=>this.products=data);
location.reload();
  }




}
