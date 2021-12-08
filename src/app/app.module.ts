import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";

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
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormProductComponent } from './form-product/form-product.component';
import { MainProductComponent } from './main-product/main-product.component';
import {HttpClientModule} from "@angular/common/http";
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientComponent,
    FactureComponent,
    FournisseurComponent,
    ProduitComponent,
    RayonComponent,
    StockComponent,

    LoginComponent,
    MenuComponent,
    HeaderComponent,
    FormProductComponent,
    MainProductComponent,
    UpdateProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
