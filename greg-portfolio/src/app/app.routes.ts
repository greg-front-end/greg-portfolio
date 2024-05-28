import { Routes } from '@angular/router';
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";

;

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    },
    {
        path: 'skills',
        loadComponent: () => import('./pages/skills/skills.component').then(m => m.SkillsComponent),
    },
    {
        path: 'portfolio',
        loadComponent: () => import('./pages/portfolio/portfolio.component').then(m => m.PortfolioComponent),
    },
    {
        path: 'portfolio/:id',
        loadComponent: () => import('./pages/portfolio/project-page/project-page.component').then(m => m.ProjectPageComponent),
    }
];
