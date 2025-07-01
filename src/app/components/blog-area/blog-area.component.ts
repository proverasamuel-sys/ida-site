import { Component, Input, OnInit } from '@angular/core';
import { NewsService, News } from '../../services/news.service';
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

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    if (this.paginaId) {
      this.newsService.getNewsByPagina(this.paginaId).subscribe({
        next: (data) => {
           this.news = data;
         
        },
        error: (err) => console.error('Erro ao carregar notícias:', err),
      });
    }
  }
}
