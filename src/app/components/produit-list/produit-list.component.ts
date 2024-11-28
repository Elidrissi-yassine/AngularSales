import { Component, OnInit } from '@angular/core';

import { Produit } from '../../models/Produits';
import { ProduitService } from '../../services/produit.service';
@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitService.getProduits().subscribe(data => {
      this.produits = data;
    });
  }

  deleteClient(id: number): void {
    this.produitService.deleteProduits(id).subscribe(() => {
      this.produits = this.produits.filter(produit => produit.id !== id);
    });
  }
}