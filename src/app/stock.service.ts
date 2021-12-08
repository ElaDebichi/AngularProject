
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Stock} from "./models/stock";
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
 

  constructor(private http:HttpClient) { }

  retrieveAllStock():Observable<Stock[]>{
    // @ts-ignore
    return this.http.get<Stock[]>("http://localhost:8089/stock/list");
  }
    // @ts-ignore
  retrieveStock(id){
    return this.http.get("http://localhost:8089/stock/"+id);
  }
}
