import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProduitService } from '../produit.service';
import { PromotionService } from '../promotionservice';
import {Promotion} from "../models/promotion";
import { Produit } from '../models/produit';

@Component({
  selector: 'app-form-promotion',
  templateUrl: './form-promotion.component.html',
  styleUrls: ['./form-promotion.component.css']
})
export class FormPromotionComponent implements OnInit {
  form: FormGroup;
  // @ts-ignore
  promotion = new Promotion("","");
  submitted = false;
  produits:Produit[];
  constructor(private produitService:ProduitService,private promotionService:PromotionService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
    this.produitService.retrieveAllProduit().subscribe(
      data=>{
        console.log("produitsss",data);
        this.produits=data;
      }
    )
  }

  initializeForm(): void {
    this.form = this.fb.group({

      label: 'write code here',
      pourcentage:' write libelle here ',
      product:'write prix here',
    })
}
  save() {
    console.log("PROMO",this.promotion.idProduit);
    let response = this.promotionService.addPromotion(this.promotion);
    response.subscribe()
  location.reload();
  }
  onSubmit(form : FormGroup):void {
    console.log("test",form.value.product);
    this.promotion.libellePromotion = form.value.label
    this.promotion.pourcentage = form.value.pourcentage
    this.promotion.idProduit = form.value.product
    // this.promotion.date = form.value.date
    this.submitted = true;
    this.save();
  }
}
