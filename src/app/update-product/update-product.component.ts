import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Product} from "../models/product";
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {toNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  myform: FormGroup;

  // @ts-ignore
  product = new Product("", "");
  submitted = false;
id : number;
  // @ts-ignore
  products : Product[];
  filterProduct: Product;
  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router, private  route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.myform = this.fb.group({

      code: 'write code here',
      libelle:' write libelle here ',
      prixUnitaire:'write prix here',
      categorie:'select Category',
      quantite:'write quantité here',

    })
   this.id = parseInt(this.route.snapshot.params.idProduit);
    let resp= this.productService.retrieveAllProduits();
    // @ts-ignore
    resp.subscribe((data)=>this.products=data);
  }


  updateProduct(id: number) {
    id=this.id;
    this.product.idProduit=id;

    let resp =this.productService.update(id,this.product);
    resp.subscribe( data => {
      // @ts-ignore
      this.product=data  })
    console.log(this.product);
    this.router.navigateByUrl('products')

  }

  onSubmit(myform : FormGroup): void {
    this.product.code = myform.value.code
    this.product.libelle = myform.value.libelle
    this.product.prixUnitaire = myform.value.prixUnitaire
    this.product.categorie= myform.value.categorie
    this.product.quantite= myform.value.quantite
    // @ts-ignore
    this.product.dateajout= myform.value.dateajout;
    this.submitted = true;
    // @ts-ignore
    this.updateProduct();
}
}
