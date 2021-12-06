import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Product} from "./models/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  retrieveAllProduits(){
    // @ts-ignore
    return this.http.get("http://localhost:8089/produit/list");
  }
  // @ts-ignore
  addProduct(product: Product){
    return this.http.post("http://localhost:8089/produit/add",product,{responseType:'text' as 'json'});
  }

  // @ts-ignore
  deleteProduct(id){
    return this.http.delete("http://localhost:8089/produit/"+id);
  }
  // @ts-ignore

  update(id){

    // @ts-ignore
    return this.http.put("http://localhost:8089/produit/"+id);
  }
  // @ts-ignore

  retrieveProduct(id){
    return this.http.get("http://localhost:8089/produit/"+id);
  }

}
