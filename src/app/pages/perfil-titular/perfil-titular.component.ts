import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { TitularIdaComponent } from "../../components/titular-ida/titular-ida.component";

@Component({
  selector: 'app-perfil-titular',
  standalone: true,
  imports: [HeroComponent, TitularIdaComponent],
  templateUrl: './perfil-titular.component.html',
  styleUrl: './perfil-titular.component.css'
})
export class PerfilTitularComponent {

}
