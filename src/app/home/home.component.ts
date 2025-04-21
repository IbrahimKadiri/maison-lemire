import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { BannerSliderComponent } from '../banner-slider/banner-slider.component';
import { ContactComponent } from '../contact/contact.component';
@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CarouselComponent, BannerSliderComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() {}

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
