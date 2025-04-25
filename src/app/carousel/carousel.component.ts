import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper/bundle';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  imports: [CommonModule]
})
export class CarouselComponent implements OnInit, AfterViewInit {
  slides: any;
  constructor(private _router: Router, private _dataService: DataService) {}
  
  ngOnInit(): void {
    this.slides = this._dataService.slides;
  }
  
  ngAfterViewInit(): void {
    new Swiper('.swiper', {
      effect: 'coverflow',
      initialSlide: 1,
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      loop: true,
    });
  }

  onSlideClick(slide: any) {
    this._router.navigate([slide.link])
  }
}
