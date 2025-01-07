import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/home/home.component')
            .then(m => m.HomeComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('./layouts/projects/projects.component')
            .then(m => m.ProjectsComponent)
    },
    {
        path: 'about-me',
        loadComponent: () => import('./layouts/about-me/about-me.component')
            .then(m => m.AboutMeComponent)
    },
    {
        path: 'contact-me',
        loadComponent: () => import('./layouts/contact-me/contact-me.component')
            .then(m => m.ContactMeComponent)
    },
    {
        path: 'blog',
        loadComponent: () => import('./layouts/blog/blog.component')
            .then(m => m.BlogComponent)
    }
];
