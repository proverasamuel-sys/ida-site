import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { BenefitsComponent } from "../../components/benefits/benefits.component";
import { AboutComponent } from '../../components/about/about.component';
import { ServicesComponent } from '../../components/services/services.component';
import { FarmingPracticesComponent } from '../../components/farming-practices/farming-practices.component';
import { TestimonialComponent } from '../../components/testimonial/testimonial.component';
import { ContactoComponent } from '../../components/contacto/contacto.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, BenefitsComponent, AboutComponent, ServicesComponent, FarmingPracticesComponent, TestimonialComponent, ContactoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
