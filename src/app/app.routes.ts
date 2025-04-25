import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'evenements', component: DetailsComponent },
    { path:'productions', component: DetailsComponent },
    { path:'livraisons', component: DetailsComponent },
    { path:'partenariat', component: DetailsComponent }
];
