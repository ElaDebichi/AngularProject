import { Injectable } from '@angular/core';
import {Fournisseur} from "../model/fournisseur";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url= environment.url+"fournisseurs/"
  constructor(private http: HttpClient) { }
  getListProduct(){
    return this.http.get<Fournisseur[]>(this.url);
  }

  addProduct(product:Fournisseur){
    return this.http.post(this.url, product)
  }

  deleteProduct(id:string){
    return this.http.delete(this.url+id)
  }
  updateProduct(product: Fournisseur){
    return this.http.put(this.url+product.id, product)
  }



  getProductTitle(criteria: string){}
}
