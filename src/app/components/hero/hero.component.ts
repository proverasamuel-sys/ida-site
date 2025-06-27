import { Component, Input, OnInit } from '@angular/core';
import { Hero, HeroService } from '../../services/hero.service';
import { NgForOf, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone:true,
  imports:[NgStyle, NgIf, NgForOf],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() paginaId!: number; // recebe a página como input
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    if (this.paginaId) {
      this.heroService.getHeroesByPagina(this.paginaId).subscribe({
        next: (data) => {
          this.heroes = data;
          setTimeout(() => {
            // Reativar carousel se estiver usando Owl
            $('.welcome-slides').owlCarousel({
              items: 1,
              loop: true,
              autoplay: true
            });
          }, 0);
        },
        error: (err) => console.error('Erro ao carregar heroes:', err)
      });
    }
  }
}
