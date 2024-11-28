
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../../models/Produits';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-produit-add',
  templateUrl: './produit-add.component.html',
  styleUrls: ['./produit-add.component.css']
})
export class ProduitAddComponent {
  produit: Produit = new Produit();

  constructor(private produitService: ProduitService, private router: Router) {}

  addProduit(): void {
    this.produitService.createProduit(this.produit).subscribe(() => {
      this.router.navigate(['/produits']);
    });
  }
}