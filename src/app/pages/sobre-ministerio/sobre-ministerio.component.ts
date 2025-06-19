import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { AboutMinisterioSectionComponent } from "../../components/about-ministerio-section/about-ministerio-section.component";
import { MinisterioTeamComponent } from "../../components/ministerio-team/ministerio-team.component";

@Component({
  selector: 'app-sobre-ministerio',
  standalone: true,
  imports: [HeroComponent, AboutMinisterioSectionComponent, MinisterioTeamComponent],
  templateUrl: './sobre-ministerio.component.html',
  styleUrl: './sobre-ministerio.component.css'
})
export class SobreMinisterioComponent {

}
