import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import {FactureComponent} from "./facture/facture/facture.component";
import {FournisseurComponent} from "./fournisseur/fournisseur/fournisseur.component";
import {ProduitComponent} from "./produit/produit/produit.component";
import {RayonComponent} from "./produit/rayon/rayon.component";
import {StockComponent} from "./produit/stock/stock.component";
import {ClientComponent} from "./client/client/client.component";
import {LoginComponent} from "./client/login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {DetailFactureComponent} from "./facture/detail-facture/detail-facture.component";
import {AddDetailFactureComponent} from "./facture/add-detail-facture/add-detail-facture.component"; 

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    FactureComponent,
    FournisseurComponent,
    ProduitComponent,
    RayonComponent,
    StockComponent,
    MenuComponent,
    LoginComponent,
    DetailFactureComponent,
    AddDetailFactureComponent, 
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
