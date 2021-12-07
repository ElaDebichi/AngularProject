import { Component, OnInit } from '@angular/core';
import {Promotion} from "../models/promotion";
import { PromotionService } from '../promotionservice';
@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
  promotion: Promotion;


  promotions: Promotion[]=[];

  constructor(private promotionService:PromotionService) { }

  ngOnInit(): void {
  }

  public retrievePromotion(id: number){
    let resp= this.promotionService.retrievePromotion(id);
    // @ts-ignore
    resp.subscribe((data)=>this.promortions=data);
  }

  public retrievePromotions(){
    let resp= this.promotionService.retrieveAllPromotion();
    // @ts-ignore
    resp.subscribe((data)=>(data.constructor(Output(this.promotion.code)),Output(this.promotion.label),Output(this.promotion.price)));
  }


  updatePromotion(id : number){
    let resp= this.promotionService.update(id);
    // @ts-ignore
    resp.subscribe((data)=>this.promotion=data);
}


deletePromotion(id: number){
  let resp= this.promotionService.deletePromotion(id);
  // @ts-ignore
  resp.subscribe((data)=>this.promotion=data);
}
}
