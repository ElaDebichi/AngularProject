import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Produit} from "./models/produit";
import { Observable} from 'rxjs';
import { Promotion } from './models/promotion';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }
  retrieveAllProduit():Observable<Produit[]>{
    // @ts-ignore
    return this.http.get<Produit[]>("http://localhost:8089/produit/list");
  }
    // @ts-ignore
  retrieveProduit(id):Observable<Produit>{
    return this.http.get<Produit>("http://localhost:8089/produit/"+id);
  }
}
