import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";
import {window} from "rxjs/operators";
import {Product} from "../models/product";
import {formatDate} from "@angular/common";


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  form: FormGroup;

  // @ts-ignore
  product = new Product("","");
  submitted = false;
  mydate = this.product.dateajout;
  constructor(private fb: FormBuilder,private productService:ProductService, private router:Router) {
  }

  ngOnInit(): void {

    this.initializeForm();


  }

  initializeForm(): void {
    this.form = this.fb.group({

      code: 'write code here',
      libelle:' write libelle here ',
      prixUnitaire:'write prix here',
      categorie:'select Category',
      quantite:'write quantité here',

    })



  }
  save() {
    let response = this.productService.addProduct(this.product);
    response.subscribe()
    console.log(Product);
location.reload();

  }

  onSubmit(form : FormGroup):void {
    this.product.code = form.value.code
    this.product.libelle = form.value.libelle
    this.product.prixUnitaire = form.value.prixUnitaire
    this.product.categorie= form.value.categorie
    this.product.quantite= form.value.quantite
    // @ts-ignore
    this.product.dateajout= form.value.dateajout;
    this.submitted = true;
    this.save();
  }


  }



