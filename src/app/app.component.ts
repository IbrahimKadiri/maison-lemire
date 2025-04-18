import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


ngOnInit() {
  AOS.init({
    duration: 1000, // durée des animations (ms)
    once: true      // ne joue l'animation qu'une seule fois
  });
}
}
