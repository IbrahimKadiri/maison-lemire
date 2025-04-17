import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'  // Le service est accessible globalement dans l'app
  })
  export class DataService {
    constructor(){}

    navBarItems: any = [
        {
          label: 'BIENVENUE', id: 'home'
        },
        {
          label: 'CUISINE', id: 'about'
        },
        {
          label: 'EVENEMENTS', id: 'services'
        },
        {
          label: 'PRODUCTIONS', id: 'expertises'
        },
        {
          label: 'CONTACT', id: 'contact'
        },
      ];
  }