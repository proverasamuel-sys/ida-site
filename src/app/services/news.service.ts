import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface News {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author_name: string;
  category_name: string;
  published_at: string;
  imagem_url: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

    private API_URL = 'http://127.0.0.1:8000/api';

    getNewsByPagina(paginaId: number): Observable<News[]> {
        return this.http.get<{ status: boolean, data: News[] }>(`${this.API_URL}/news/pagina/${paginaId}`)
            .pipe(map(response => response.data));
    }

    getCategoriesByPagina(paginaId: number): Observable<Category[]> {
        return this.http.get<{ status: boolean, data: Category[] }>(`${this.API_URL}/news/categories/pagina/${paginaId}`)
            .pipe(map(response => response.data));
    }
}
