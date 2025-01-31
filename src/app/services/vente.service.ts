import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Vente } from '../models/Ventes';
@Injectable({
  providedIn: 'root'
})
export class VenteService {

  private baseUrl = 'http://localhost:8080/SaleManagementService/api/ventes'; // Your Spring Boot API base URL

  constructor(private http: HttpClient) { }

  // Fetch all clients
  getVents(): Observable<Vente[]> {
    return this.http.get<Vente[]>(this.baseUrl);
  }

  // Fetch a single client by ID
  getVente(id: number): Observable<Vente> {
    return this.http.get<Vente>(`${this.baseUrl}/${id}`);
  }

  // Create a new client
  createVente(client: Vente): Observable<Vente> {
    return this.http.post<Vente>(this.baseUrl, client);
  }

  // Update a client
  updateVente(id: number, vente: Vente): Observable<Vente> {
    return this.http.put<Vente>(`${this.baseUrl}/${id}`, vente);
  }

  // Delete a client
  deleteVente(id: number): Observable<Vente> {
    return this.http.delete<Vente>(`${this.baseUrl}/${id}`);
  }
}