import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Fournisseur} from "../model/fournisseur";

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  form : FormGroup;
  private product: Fournisseur;

  @Output() addEvent = new EventEmitter<Fournisseur>()
  @Input() updateProduct : Fournisseur;

  constructor(private builder : FormBuilder) { }

  ngOnInit(): void {
    if (this.updateProduct === null){
      this.product = new Fournisseur();
    } else {
      this.product = this.updateProduct;
    }

    this.form = this.builder.group({
      'code' : [this.product.code, [Validators.required, Validators.minLength(5)]],
      'libelle' : [this.product.libelle, Validators.required],
    });
  }

  addProduct(form : FormGroup){
    this.product.code       = form.value.code;
    this.product.libelle = form.value.libelle;

    this.addEvent.emit(this.product);
  }

}
