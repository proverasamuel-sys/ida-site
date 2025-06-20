import { Component } from '@angular/core';
import { HeroBreadcrumbComponent } from "../../components/hero-breadcrumb/hero-breadcrumb.component";
import { ProjectosAgricolasComponent } from "../../components/projectos-agricolas/projectos-agricolas.component";

@Component({
  selector: 'app-projectos',
  standalone: true,
  imports: [HeroBreadcrumbComponent, ProjectosAgricolasComponent],
  templateUrl: './projectos.component.html',
  styleUrl: './projectos.component.css'
})
export class ProjectosComponent {

}
