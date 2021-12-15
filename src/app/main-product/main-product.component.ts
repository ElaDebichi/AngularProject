import { Component, OnInit } from '@angular/core';
import {Fournisseur} from "../model/fournisseur";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})

export class MainProductComponent implements OnInit {
  listProduct: Fournisseur[];
  inputProduct : Fournisseur = new Fournisseur();
  showFormTemplate: boolean;
  constructor(private proService: ProductService) { }

  ngOnInit(): void {
    this.showFormTemplate = false;
    this.proService.getListProduct().subscribe(
      (data:Fournisseur[])=> this.listProduct=data
    )
  }
 like(p:Fournisseur){
    let i = this.listProduct.indexOf(p);

 }

  saveProduct(product: Fournisseur) {
    let i = this.listProduct.indexOf(product);
    if (i!= -1){
      //update a product
      this.proService.updateProduct(product).subscribe(
        ()=>this.listProduct[i]=product
      )
    }else {
      //add a new product
      this.proService.addProduct(product).subscribe(
        ()=>this.listProduct.push(product),
        ()=>console.log('error')
      )

    }
    this.showFormTemplate = false;
  }
  showForm(){
    this.showFormTemplate =true
  }
  delete(p:Fournisseur){
    let i = this.listProduct.indexOf(p);
    this.proService.deleteProduct(p.id).subscribe(
      ()=>this.listProduct.splice(i,1)
    )
  }
  updateForm(p:Fournisseur){
    this.showFormTemplate=true;
    this.inputProduct = p;


  }
}
