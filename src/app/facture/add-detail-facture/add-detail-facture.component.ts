import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../../service/produit.service";
import {Produit} from "../../models/produit";
import {detailFacture} from "../../models/detailFacture";
import {FactureService} from "../../service/facture.service";
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-detail-facture',
  templateUrl: './add-detail-facture.component.html',
  styleUrls: ['./add-detail-facture.component.css']
})
export class AddDetailFactureComponent implements OnInit {

  listeProduit: Produit[] =[];
  detailFacture: detailFacture =new detailFacture();
  idProduit!: number;
  constructor(private serviceProduit:ProduitService, private serviceFacture: FactureService) { }

  ngOnInit(): void {
    this.serviceProduit.getProduits().subscribe(
      (res: Produit[]) => {
        this.listeProduit =res
      }
    );
  }


  ajouter(addForm:NgForm):void{
  //  this.detailFacture.facture.idFacture =1;
    //this.detailFacture.produit.idProduit =this.idProduit;
    console.log(addForm.value);
    this.serviceFacture.ajouterDetailFacture(addForm.value).subscribe(

(Response:detailFacture)=> {

  Swal.fire('success', 'furniture add successfully', 'success');
     
  addForm.reset()

},
(error:HttpErrorResponse)=>{
  Swal.fire('Oops...', 'Something went wrong!', 'error');
},



    );
    ;
  }

}
