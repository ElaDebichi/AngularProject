export class Product {


  constructor(idProduit: number, code: string, libelle: string, prixUnitaire: number, categorie: string, quantite: number, dateajout: Date) {
    this.idProduit = idProduit;
    this.code = code;
    this.libelle = libelle;
    this.prixUnitaire = prixUnitaire;
    this.categorie = categorie;
    this.quantite = quantite;
    this.dateajout = dateajout;
  }

  idProduit: number;
  code: string;
  libelle:string;
  prixUnitaire:number;
 categorie:string;
  quantite: number;
  dateajout: Date;



}
