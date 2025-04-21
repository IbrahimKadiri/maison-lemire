import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'  // Le service est accessible globalement dans l'app
  })
  export class DataService {
    constructor(private http: HttpClient){}

      // Méthode pour envoyer un message via Formsubmit
  sendMessage(formData: FormData): Observable<any> {
    const url = 'https://formsubmit.co/ajax/cc180f2c2dbad1fe14a87760608de7ae';

    // On envoie la requête et on capture les erreurs via catchError
    return this.http.post(url, formData).pipe(
      catchError(error => {
        // Gestion de l'erreur (par exemple, log de l'erreur)
        console.error('Erreur lors de l\'envoi du formulaire:', error);
        throw error;  // On relance l'erreur pour la gérer dans le composant
      })
    );
  }
  }