import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Binomio {
  nombre: string;
  apellido: string;
}

export interface Candidato {
  nombre: string;
  apellido: string;
  partido: string;
  binomio: Binomio;
}

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {
  private apiUrl = 'http://localhost:8080/pruebaWeb/api/candidatos';

  constructor(private http: HttpClient) {}

  obtenerCandidatos(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(`${this.apiUrl}/lista`);
  }

  crearCandidato(candidato: Candidato): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/crear`, candidato);
  }

  eliminarCandidato(nombre: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/eliminar/${nombre}`);
  }
}
