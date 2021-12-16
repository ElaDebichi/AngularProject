
import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock';
import { StockService } from 'src/app/stock.service';
import { ProduitService } from 'src/app/produit.service';
import { Produit } from 'src/app/models/produit';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent{
  titlePage:String;
  stocks:Stock[];
  produits:Produit[];
  name:string;
  
  constructor(private stockService:StockService,private ProduitService:ProduitService ){
  }
  ngOnInit():void{
    console.log("this.stocks");
    this.stockService.retrieveAllStock().subscribe(
      data=>{console.log("this.stocks");
        this.stocks=data;
      }
    )
    this.ProduitService.retrieveAllProduit().subscribe(
      data=>{console.log("produits",data);
        this.produits=data;
      }
    )
  }
  Search(){
    if (this.name==""){
      this.ngOnInit()
    
    }else {
      this.produits= this.produits.filter(res=>{
        return res.libelle.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    
      })
    }
      }
 
}
// export class StockComponent implements OnInit {

//   stock: Stock;
//   stocks: Stock[];
//   stockService:StockService;

//   constructor() { }

//   ngOnInit(): void {
//   }

//   public retrieveStock(id: number){
//     let resp= this.stockService.retrieveStock(id);
//     // @ts-ignore
//     resp.subscribe((data)=>this.stock=data);
//   }

//   public retrieveAllStock(){
//     let resp= this.stockService.retrieveAllStock();
//     // @ts-ignore
//     resp.subscribe((data)=>(data.constructor(Output(this.stock.code)),Output(this.stock.label),Output(this.stock.price)));
//   }
// }
