import { Component } from '@angular/core';
import { HeroBreadcrumbComponent } from "../../components/hero-breadcrumb/hero-breadcrumb.component";
import { AboutIdaComponent } from '../../components/about-ida/about-ida.component';
import { TestimonialComponent } from '../../components/testimonial/testimonial.component';
import { IdaTeamComponent } from '../../components/ida-team/ida-team.component';

@Component({
  selector: 'app-sobre-ida',
  standalone: true,
  imports: [HeroBreadcrumbComponent, AboutIdaComponent, TestimonialComponent, IdaTeamComponent],
  templateUrl: './sobre-ida.component.html',
  styleUrl: './sobre-ida.component.css'
})
export class SobreIdaComponent {

}
