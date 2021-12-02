import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule,Routes} from "@angular/router";
import {ProduitComponent} from "./produit/produit/produit.component";
import {FactureComponent} from "./facture/facture/facture.component";
import {FournisseurComponent} from "./fournisseur/fournisseur/fournisseur.component";
import {ClientComponent} from "./client/client/client.component";
import {StockComponent} from "./produit/stock/stock.component";
import {RayonComponent} from "./produit/rayon/rayon.component";
import {AppComponent} from "./app.component";
import {MenuComponent} from "./menu/menu.component";
import {LoginComponent} from "./client/login/login.component";
import {DetailFactureComponent} from "./facture/detail-facture/detail-facture.component"; 





const ROUTES: Routes = [
  {path: 'produit',component:ProduitComponent},
  {path: 'client',component:ClientComponent},
  {path: 'facture', component: FactureComponent},
  {path: 'facture-detail/:id', component: DetailFactureComponent},
  {path: 'fournisseur',component:FournisseurComponent},
  {path: 'rayon',component:RayonComponent},
  {path:'stock',component:StockComponent},
  {path:'login',component:LoginComponent}, 
  {path:'',component:AppComponent},

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES), 
  ],
exports:[
  RouterModule
  ]
})
export class AppRoutingModule { }
