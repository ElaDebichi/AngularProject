import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Promotion } from './models/promotion';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http:HttpClient) { }
  retrieveAllPromotion():Observable<Promotion[]>{
    // @ts-ignore
    return this.http.get<Promotion[]>("http://localhost:8089/promotion/list");
  }
   // @ts-ignore
   addPromotion(promotion: Promotion){
    return this.http.post("http://localhost:8089/promotion/add",promotion,{responseType:'text' as 'json'});
  }

  // @ts-ignore
  deletePromotion(id){
    return this.http.delete("http://localhost:8089/promotion/delete/"+id);
  }
  // @ts-ignore

  update(p : Promotion){

    // @ts-ignore
    return this.http.put("http://localhost:8089/promotion/update/"+p.id,Promotion);
  }
  // @ts-ignore

  retrievePromotion(id){
    return this.http.get("http://localhost:8089/promotion/"+id);
  }
}
