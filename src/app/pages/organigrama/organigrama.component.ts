import { Component } from '@angular/core';
import { OrganigramSectionComponent } from "../../components/organigram-section/organigram-section.component";
import { HeroComponent } from "../../components/hero/hero.component";

@Component({
  selector: 'app-organigrama',
  standalone: true,
  imports: [OrganigramSectionComponent, HeroComponent],
  templateUrl: './organigrama.component.html',
  styleUrl: './organigrama.component.css'
})
export class OrganigramaComponent {

}
