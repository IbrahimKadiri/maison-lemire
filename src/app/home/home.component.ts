import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { BannerSliderComponent } from '../banner-slider/banner-slider.component';
@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CarouselComponent, BannerSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() {}

}
