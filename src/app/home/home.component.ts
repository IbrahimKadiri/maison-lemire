import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() {}

}
