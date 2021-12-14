import { Produit } from "./produit";

export class Promotion {

  id: number;
  idPromotion: number;
  pourcentage:number;
  libellePromotion:string;
  idProduit:Produit;
  date:Date;
}
