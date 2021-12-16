import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from 'src/app/Models/facture';
import { FactureService } from 'src/app/Services/facture.service';
import {jsPDF} from 'jspdf';
import { NotificationsService } from 'angular2-notifications';
import "pdfmake/build/pdfmake"
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-list-factures',
  templateUrl: './list-factures.component.html',
  styleUrls: ['./list-factures.component.css']
})
export class ListFacturesComponent implements OnInit {

  listFactures : Facture[];
  searchVal : string ;

  constructor(private factureService : FactureService, private router : Router ,private services?:NotificationsService ) { }

  ngOnInit(): void {
    this.retrieveNotPaidFacture()
  }
  
  retrieveNotPaidFacture(){
    this.factureService.getActiveFactures().subscribe(
      res => {
        console.log('Factures :');
        this.listFactures= res ;
        console.log(this.listFactures);
      });
    err => {
      console.log(err);
    }
  }

  searchNotPaidFacture(){
    if (this.searchVal===""){
      this.retrieveNotPaidFacture();
    }else{
      this.factureService.searchActiveFactures(this.searchVal).subscribe(
        res => {
          console.log('Factures :');
          this.listFactures= res ;
          console.log(this.listFactures);
        });
      err => {
        console.log(err);
      }
    }
    
  }
  deleteFacture(idFacture: number){
    this.factureService.deleteFactureById(idFacture).subscribe(
      res => {
        console.log('Facture deleted!');
        this.retrieveNotPaidFacture();
        
      });
    err => {
      console.log(err);
    }
  }
  updateFacture(id:number){
    this.router.navigate(['/facture/update',id])
  }

public downloadAsPDF()
  {

  var element = document.getElementById('contentToConvert') as HTMLElement;
  html2canvas(element).then(canvas => {
    var imgW = 200;
    var imgH = canvas.height * imgW /canvas.width	;
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jsPDF('p','mm','a4');
    var position = 0;
    pdf.html("")
    pdf.addImage(contentDataURL,'PNG',0,position,imgW,imgH)
    pdf.save("FactureNonPayee.pdf");  
  });

  this.onError("Check Your PDF File !");
}


onSucces(message) {
  this.services.success('success', message, {
    position: ['bottom', 'right'],
    timeOut: 6000,
    Animation: 'fade',
    showProgressBar: true,
  });
  

}
onError(message) {
  this.services.alert('Downloaded Seccessfully', message, {
    position: ['bottom', 'right'],
    timeOut: 8000,
    Animation: 'fade',
    showProgressBar: true,
  });
}
}
