import { Component, Input, OnInit } from '@angular/core';
import {Promotion} from "../models/promotion";
import { PromotionService } from '../promotionservice';
@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css'],
//   host: {
//     '[style.height.px]': '0.9 * height',
//     '[style.width.px]': '0.21 * width'
//  }
})
export class PromotionComponent implements OnInit {
  promotion: Promotion;
  // @Input()divwidth=70;
  showFormTemplate: boolean;
  promotions: Promotion[];
  isButtonVisible: boolean;
  showListpage:boolean; 

  constructor(private promotionService:PromotionService) {}

  ngOnInit(): void {
    this.showFormTemplate = false;
    this.isButtonVisible=false;
    this.showListpage=false;
    this.promotionService.retrieveAllPromotion().subscribe(
      data=>{
        this.promotions=data;
        console.log("this.stocks",data);
      }
    )
  }
  showList(){
    this.showListpage=true;
      this.showFormTemplate =false;
      this.isButtonVisible=false;
    
    
    }
      showForm(){
        this.showFormTemplate =true;
        this.isButtonVisible=true;
        this.showListpage=false;
      }

//   public retrievePromotion(id: number){
//     let resp= this.promotionService.retrievePromotion(id);
//     // @ts-ignore
//     resp.subscribe((data)=>this.promortions=data);
//   }

//   public retrievePromotions(){
//     let resp= this.promotionService.retrieveAllPromotion();
//     // @ts-ignore
//     resp.subscribe((data)=>(data.constructor(Output(this.promotion.code)),Output(this.promotion.label),Output(this.promotion.price)));
//   }


//   updatePromotion(id : number){
//     let resp= this.promotionService.update(id);
//     // @ts-ignore
//     resp.subscribe((data)=>this.promotion=data);
// }


// deletePromotion(id: number){
//   let resp= this.promotionService.deletePromotion(id);
//   // @ts-ignore
//   resp.subscribe((data)=>this.promotion=data);
// }
}
