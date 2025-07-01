import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-ministerio-section',
  standalone: true,
  imports: [NgClass],
  templateUrl: './about-ministerio-section.component.html',
  styleUrl: './about-ministerio-section.component.css'
})
export class AboutMinisterioSectionComponent {
 

atribuicoesExpanded = false;

  toggleAtribuicoes() {
    this.atribuicoesExpanded = !this.atribuicoesExpanded;
  }
}
