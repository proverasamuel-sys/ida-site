import { Component } from '@angular/core';
import { HeroBreadcrumbComponent } from "../../components/hero-breadcrumb/hero-breadcrumb.component";
import { AboutComponent } from "../../components/about/about.component";
import { ProgramaInscricaoComponent } from "../../components/programa-inscricao/programa-inscricao.component";
import { ProgramasAgricolasComponent } from '../../components/programas-agricolas/programas-agricolas.component';
import { FaqsComponent } from "../../components/faqs/faqs.component";


@Component({
  selector: 'app-programas',
  standalone: true,
  imports: [HeroBreadcrumbComponent, AboutComponent, ProgramasAgricolasComponent, ProgramaInscricaoComponent, FaqsComponent],
  templateUrl: './programas.component.html',
  styleUrl: './programas.component.css'
})
export class ProgramasComponent {

}
