import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { PartnersComponent } from "../../components/partners/partners.component";
import { AboutComponent } from "../../components/about/about.component";

@Component({
  selector: 'app-parceiros',
  standalone: true,
  imports: [HeroComponent, PartnersComponent, AboutComponent],
  templateUrl: './parceiros.component.html',
  styleUrl: './parceiros.component.css'
})
export class ParceirosComponent {

}
