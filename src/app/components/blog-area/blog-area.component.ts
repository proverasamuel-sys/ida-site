import { Component, Input, OnInit } from '@angular/core';
import { NewsService, News, Category } from '../../services/news.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-blog-area',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './blog-area.component.html',
  styleUrl: './blog-area.component.css',
})
export class BlogAreaComponent implements OnInit {
  @Input() paginaId!: number; // recebe a página como input
  news: News[] = [];
  categories: Category[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    if (this.paginaId) {
      // Carregar notícias
      this.newsService.getNewsByPagina(this.paginaId).subscribe({
        next: (data) => {
          this.news = data;
        },
        error: (err) => console.error('Erro ao carregar notícias:', err),
      });

      // Carregar categorias
      this.newsService.getCategoriesByPagina(this.paginaId).subscribe({
        next: (data) => {
          this.categories = data;
        },
        error: (err) => console.error('Erro ao carregar categorias:', err),
      });
    }
  }
}

