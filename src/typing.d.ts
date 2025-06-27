// src/typings.d.ts
import 'jquery';

declare global {
  interface JQuery {
    owlCarousel(options?: any): JQuery;
  }
}
