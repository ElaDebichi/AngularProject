import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Fournisseur} from "../model/fournisseur";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Fournisseur;
  @Output() notification= new EventEmitter<Fournisseur>()
  @Output() deleteEvent = new EventEmitter<Fournisseur>()
  @Output() updateEvent = new EventEmitter<Fournisseur>()
  constructor() { }

  ngOnInit(): void {
  }
  notifyParent(){
    //traitement
    this.notification.emit(this.product)
  }
  deleteNotif(){
    this.deleteEvent.emit(this.product)
  }
  updateNotif(){
    this.updateEvent.emit(this.product)
  }
}
