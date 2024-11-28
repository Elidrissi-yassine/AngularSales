import { Component, OnInit } from '@angular/core';

import { Vente } from '../../models/Ventes';
import { Client } from '../../models/Clients';
import { Produit } from '../../models/Produits'; // Assurez-vous d'avoir ce modèle
import { VenteService } from '../../services/vente.service';
import { ClientService } from '../../services/client.service';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-produit-list',
  templateUrl: './vente-list.component.html',
  styleUrls: ['./vente-list.component.css']
})
export class VenteListComponent implements OnInit {
  ventes: Vente[] = [];
  clients: Client[] = [];
  selectedClientId: number | null = null;
  selectedDate: string = '';

  constructor(
    private venteService: VenteService,
    private clientService: ClientService,
    private produitService: ProduitService
  ) {}

  ngOnInit(): void {
    // Charger les ventes et leurs détails
    this.venteService.getVents().subscribe((data: Vente[]) => {
      const ventesWithDetails = data.map((vente) => {
        this.clientService.getClient(vente.client).subscribe((client) => {
          vente.clientname = client.nom;
        });

        this.produitService.getProduit(vente.produit).subscribe((produit) => {
          vente.produitname = produit.nom;
        });

        return vente;
      });

      this.ventes = ventesWithDetails;

      // Charger la liste des clients
      this.clientService.getClients().subscribe((data: Client[]) => {
        this.clients = data;
      });
    });
  }

  deleteVente(id: number): void {
    this.venteService.deleteVente(id).subscribe(() => {
      this.ventes = this.ventes.filter(vente => vente.id !== id);
    });
  }

  genererfacture(): void {
    console.log('ID Client sélectionné:', this.selectedClientId);
    console.log('Date sélectionnée:', this.selectedDate);
  
    if (!this.selectedClientId) {
      console.log('Veuillez sélectionner un client.');
      return;
    }
  
    if (!this.selectedDate) {
      console.log('Veuillez sélectionner une date.');
      return;
    }
  
    // Filtrer les ventes par ID client et date
    const ventesFiltrees = this.ventes.filter(vente => 
      vente.client === this.selectedClientId 
    );
  
    if (ventesFiltrees.length === 0) {
      console.log('Aucune vente trouvée pour ce client à cette date.');
      return;
    }
  
    console.log(`Ventes effectuées par le client ID ${this.selectedClientId} le ${this.selectedDate}:`);
    
    ventesFiltrees.forEach(vente => {
      console.log(`Vente ID: ${vente.id}, Produit: ${vente.produitname}, Quantité: ${vente.quantite}`);
    });
  }
  
  
}
