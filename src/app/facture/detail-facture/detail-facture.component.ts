import { Component, OnInit } from '@angular/core';
import {FactureService} from "../../service/facture.service";
import {Facture} from "../../models/facture";
import {ActivatedRoute} from "@angular/router";
import {detailFacture} from "../../models/detailFacture";

@Component({
  selector: 'app-detail-facture',
  templateUrl: './detail-facture.component.html',
  styleUrls: ['./detail-facture.component.css']
})
export class DetailFactureComponent implements OnInit {

  facture: Facture = new Facture();
  addDet: boolean | undefined;
  constructor(private factureService:FactureService, private service: ActivatedRoute) { }

  ngOnInit(): void {
    this.factureService.getFacturebyId(this.service.snapshot.params.id).subscribe(
      (res:Facture) =>{
        this.facture = res;
      }
    );
    this.addDet =false;
  }

 delete(id: number){
   this.factureService.deleteDetailFacture(id).subscribe(
      () => this.facture.detailFactures = this.facture.detailFactures.filter(detailFactureFilter => detailFactureFilter.idDetailFacture != id)
   );
  } 
  addDetail(){
    this.addDet = !this.addDet;
  }
}
