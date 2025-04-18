import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper/bundle';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  imports: [CommonModule]
})
export class CarouselComponent implements AfterViewInit {
  slides = [
    {
      title: 'Design Moderne',
      description: 'Un carrousel élégant pour ton site pro.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Responsive',
      description: 'S’adapte à tous les écrans sans effort.',
      image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Facile à utiliser',
      description: 'Ajoute ton contenu et c’est prêt.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Responsive',
      description: 'S’adapte à tous les écrans sans effort.',
      image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80'
    },
  ];

  ngAfterViewInit(): void {
    new Swiper('.swiper', {
      effect: 'coverflow',
      initialSlide: 1,
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 3000,
      },
    });
  }

  onSlideClick(slide: any) {
    console.log('Slide clicked:', slide);
    // Redirige ici si tu veux
  }
}
