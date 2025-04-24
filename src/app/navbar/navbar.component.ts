import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  navBarItems: any = [];
  ismobileMenuOpen = false;
  currentRoute: string = '';

  constructor(private _router: Router, private _dataService: DataService) {}

  ngOnInit(): void {
       // Écouter les événements de navigation et obtenir l'URL après la redirection
       this._router.events.pipe(
        filter(event => event instanceof NavigationEnd)  // Filtrer les événements pour les NavigationEnd
      ).subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects;  // Stocker l'URL dans la variable
        console.log('currentRoute', this.currentRoute)

      });
  }

  // Ferme le menu lorsque l'utilisateur clique sur un onglet
  closeMenu() {
    this.ismobileMenuOpen = false;
  }
  

  toggleMobileMenu() {
    this.ismobileMenuOpen = !this.ismobileMenuOpen;
    console.log('toggleMobileMenu', this.ismobileMenuOpen)
  }
}
