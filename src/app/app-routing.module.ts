import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {NotfoundComponent} from "./notfound/notfound.component";

import {MainProductComponent} from "./main-product/main-product.component";

const ROUTES: Routes = [

  {path:'fournisseur', component: MainProductComponent},
  {path: 'home', component:HomeComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: '**', component: NotfoundComponent}
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
