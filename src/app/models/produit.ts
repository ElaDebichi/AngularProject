import { Stock } from "./stock";

export class Produit {
    idproduit:number;
    code: number;
    libelle: string;
    prixUnitaire:number;
    stock:Stock;
}