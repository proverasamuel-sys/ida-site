import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { EventosComponent } from "../../components/eventos/eventos.component";
import { OutrosEventosComponent } from "../../components/outros-eventos/outros-eventos.component";

@Component({
  selector: 'app-eventos-agro',
  standalone: true,
  imports: [HeroComponent, EventosComponent, OutrosEventosComponent],
  templateUrl: './eventos-agro.component.html',
  styleUrl: './eventos-agro.component.css'
})
export class EventosAgroComponent {

}
