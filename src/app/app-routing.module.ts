import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './components/client-list/client-list.component'
import { ClientAddComponent } from './components/client-add/client-add.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { ProduitListComponent } from './components/produit-list/produit-list.component';
import { ProduitAddComponent } from './components/produit-add/produit-add.component';
import { ProduitEditComponent } from './components/produit-edit/produit-edit.component';
import { VenteListComponent } from './components/vente-list/vente-list.component';
import { VenteAddComponent } from './components/vente-add/vente-add.component';
import { VenteEditComponent } from './components/vente-edit/vente-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'clients', component: ClientListComponent },
  { path: 'add-client', component: ClientAddComponent },
  { path: 'edit-client/:id', component: ClientEditComponent },
  { path: 'edit-produit/:id', component: ProduitEditComponent },
  { path: 'produits', component: ProduitListComponent },
  { path: 'add-produits', component: ProduitAddComponent },
  { path: 'ventes', component: VenteListComponent },
  { path: 'add-vente', component: VenteAddComponent },
  { path: 'edit-vente/:id', component: VenteEditComponent },
  
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
