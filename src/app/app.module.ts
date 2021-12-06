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
import {ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { PromotionComponent } from './promotion/promotion.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    FactureComponent,
    FournisseurComponent,
    ProduitComponent,
    RayonComponent,
    StockComponent,

    LoginComponent,
    MenuComponent,
    NavbarComponent,
    PromotionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
