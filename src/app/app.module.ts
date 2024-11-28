import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { ClientAddComponent } from './components/client-add/client-add.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProduitListComponent } from './components/produit-list/produit-list.component';
import { ProduitAddComponent } from './components/produit-add/produit-add.component';
import { ProduitEditComponent } from './components/produit-edit/produit-edit.component';
import { VenteAddComponent } from './components/vente-add/vente-add.component';
import { VenteListComponent } from './components/vente-list/vente-list.component';
import { VenteEditComponent } from './components/vente-edit/vente-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientEditComponent,
    ClientAddComponent,
    NavbarComponent,
    ProduitListComponent,
    ProduitAddComponent,
    ProduitEditComponent,
    VenteAddComponent,
    VenteListComponent,
    VenteEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
