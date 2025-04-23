import { AfterViewInit, Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { BannerSliderComponent } from '../banner-slider/banner-slider.component';
import { ContactComponent } from '../contact/contact.component';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CarouselComponent, BannerSliderComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  constructor(private _router: Router) {}

  ngAfterViewInit() {
    setTimeout(() => {
      AOS.refresh(); // ou AOS.refreshHard() si besoin
    }, 0); // attendre que le DOM soit complètement mis à jour
  }
  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -150; // Ajuste header ou spacing
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  }
}
