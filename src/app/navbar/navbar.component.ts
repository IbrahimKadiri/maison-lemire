import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  navBarItems: any = [];
  ismobileMenuOpen = false;

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
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
