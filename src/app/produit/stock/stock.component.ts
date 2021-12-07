import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock';
import { PromotionService } from 'src/app/promotionservice';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stock: Stock;
  // promotions: Promotion[]=[];

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
}
