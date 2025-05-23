import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent), },
];