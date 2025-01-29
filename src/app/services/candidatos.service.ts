import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Candidato {
  id?: number;
  nombre: string;
  apellido: string;
  partido: string;
  binomio: { nombre: string; apellido: string };
}

@Injectable({
  providedIn: 'root'
})

export class CandidatosService {
  private apiUrl = 'http://localhost:8080/pruebaWeb/api/candidatos';

  constructor(private http: HttpClient) {}

  obtenerCandidatos(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(this.apiUrl);
  }

  registrarCandidato(candidato: Candidato): Observable<Candidato> {
    return this.http.post<Candidato>(this.apiUrl, candidato);
  }

  eliminarCandidato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

