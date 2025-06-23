import { Component } from '@angular/core';
import { HeroBreadcrumbComponent } from "../../components/hero-breadcrumb/hero-breadcrumb.component";
import { BlogAreaComponent } from "../../components/blog-area/blog-area.component";

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [HeroBreadcrumbComponent, BlogAreaComponent],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {

}
