import { Component, Input, OnInit} from '@angular/core';
import { Recurso, RecursosService } from '../../services/recursos.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [NgFor],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css'
})
export class BenefitsComponent {
   @Input() paginaId!: number; // recebe a página como input
    recursos: Recurso[] = [];
  constructor(private recursosService: RecursosService) {}
  ngOnInit(): void {
    if (this.paginaId) {
      this.recursosService.getRecursosByPagina(this.paginaId).subscribe({
        next: (data) => {
          this.recursos = data;
        },
        error: (err) => console.error('Erro ao carregar recursos:', err)
      });
    }
  }
}
