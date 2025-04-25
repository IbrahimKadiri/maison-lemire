import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'  // Le service est accessible globalement dans l'app
  })
  export class DataService {
    constructor(private http: HttpClient){}

    slides = [
      {
        title: 'Évènements',
        description: 'Organisation clé en main',
        image: 'assets/event.jpeg',
        link: '/evenements'
      },
      {
        title: 'Renfort & Production',
        description: 'Soutien Pro - Cuisine fiable',
        image: 'assets/production.jpeg',
        link: '/productions'
      },
      {
        title: 'Livraison',
        description: 'Repas variés livrés',
        image: 'assets/livraison.jpeg',
        link: '/livraisons'
      },
      {
        title: 'Partenariat',
        description: 'Personnel qualifié disponible via A.L. Services',
        image: 'assets/partenariat.jpeg',
        link: '/partenariat'
      },
    ];

    detailText = [
      {
        title: 'Évènementiel',
        text: `<strong>Chez Maison-Lemire</strong>, nous nous chargeons de l’organisation complète de vos événements, en veillant à ce que chaque détail soit parfaitement ajusté à <strong>vos besoins</strong>. 
        
        Nous préparons des <strong>menus personnalisés</strong>, élaborés avec des produits frais et de qualité, pour offrir à vos invités une expérience culinaire <strong>unique</strong>.

Nous nous occupons également du <strong>matériel</strong> nécessaire sur place, qu’il s’agisse de tables, chaises, vaisselle ou autres éléments pour garantir que tout soit prêt à l’accueil de vos convives. En plus de notre équipe de chefs et serveurs qualifiés, nous pouvons fournir des hôtesses d’accueil <strong>professionnelles</strong> pour recevoir vos invités et les accompagner tout au long de l’événement.

Si vous n’avez pas encore trouvé de lieu pour votre événement, nous serons <strong>heureux</strong> de vous aider à trouver le cadre idéal qui correspondra à vos attentes. 

<strong><em>Chez Maison-Lemire, chaque événement est conçu sur mesure, pour que votre journée soit inoubliable.</em></strong>`,
        image: 'assets/event2.jpeg',
        link: '/evenements'
      },
      {
        title: 'Support & productions',
        text: `
        Nous offrons un service de <strong>renfort</strong> et de <strong>production</strong> pour soutenir les professionnels du secteur, tels que les <em>traiteurs</em>, <em>restaurants</em>, <em>hôtels</em> et autres acteurs de l'événementiel.<br><br>
        Si un imprévu survient ou si un projet devient trop complexe à gérer, <strong>nous intervenons directement</strong> pour prendre en charge la production, que ce soit à la <em>dernière minute</em> ou en renfort de votre équipe.<br><br>
        Nous nous adaptons entièrement à vos besoins, en <strong>reproduisant les plats</strong>, les présentations et les process exactement comme vous le souhaitez, tout en garantissant une <em>qualité constante</em>.<br><br>
        Notre atelier est prêt à gérer des <strong>demandes urgentes</strong> ou ponctuelles, afin de vous aider à respecter vos <em>délais</em> et <em>exigences</em>.
      `,
        image: 'assets/support.jpeg',
        link: '/productions'
      },
      {
        title: 'Livraison',
        text: ``,
        image: 'assets/livraison2.jpeg',
        link: '/livraisons',
        soon: true
      },
      {
        title: 'Partenariat',
        text: `
  Nous sommes fiers de collaborer avec <strong>A.L. Services</strong>, une société spécialisée dans la mise à disposition de personnel pour tous types d'événements. <br><br>Que vous ayez besoin de <em>serveurs</em>, <em>chefs</em>, <em>barmans</em>, <em>hôtesses d'accueil</em> ou tout autre type de personnel, <strong>A.L. Services</strong> saura répondre à vos besoins avec <strong>professionnalisme</strong> et <em>efficacité</em>.<br><br>
  Leur équipe qualifiée est disponible pour vous assister à chaque étape de votre événement, garantissant ainsi un service <strong>impeccable</strong>. <br><br> <em>Pour plus d’informations : <strong><a href="https://al-services.be/" target="_blank" class="underline">A.L. Services</a></strong></em>`,
        image: 'assets/al-services.jpg',
        link: '/partenariat'
      }
    ]
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