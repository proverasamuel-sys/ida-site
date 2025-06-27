import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Hero {
  id: number;
  titulo: string;
  descricao: string;
  texto_botao?: string;
  imagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private API_URL = 'http://127.0.0.1:8000/api'; 

  constructor(private http: HttpClient) {}

  getHeroesByPagina(paginaId: number): Observable<Hero[]> {
    return this.http.get<{ status: boolean, data: Hero[] }>(`${this.API_URL}/heroes/pagina/${paginaId}`)
      .pipe(map(response => response.data));
  }
}
