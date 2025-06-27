import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export interface Recurso {
  id: number;
  titulo: string;
  imagem: string;
}
@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  private API_URL = 'http://127.0.0.1:8000/api'; 

  constructor(private http: HttpClient) {}

  getRecursosByPagina(paginaId: number): Observable<Recurso[]> {
    return this.http.get<{ status: boolean, data: Recurso[] }>(`${this.API_URL}/paginas/${paginaId}/recursos`)
      .pipe(map(response => response.data));
  }
}
