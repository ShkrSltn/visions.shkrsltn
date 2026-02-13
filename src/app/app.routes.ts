import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    pathMatch: 'full',
    title: 'Shkrsltnv | Home'
  },
  {
    path: 'about-me',
    loadComponent: () => import('./pages/about-me/about-me.component').then(m => m.AboutMeComponent),
    title: 'Shkrsltnv | About Me'
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent),
    title: 'Shkrsltnv | Projects'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-me/contact-me.component').then(m => m.ContactMeComponent),
    title: 'Shkrsltnv | Contact'
  },
  {
    path: 'ai-assistant',
    loadComponent: () => import('./pages/ai-assistant/ai-assistant.component').then(m => m.AiAssistantComponent),
    title: 'Shkrsltnv | AI Assistant'
  },
  {
    path: 'cv',
    loadComponent: () => import('./pages/virtual-cv/virtual-cv.component').then(m => m.VirtualCvComponent),
    title: 'Shkrsltnv | CV'
  },
  {
    path: 'clock',
    loadComponent: () => import('./pages/clock/clock.component').then(m => m.ClockComponent),
    title: 'Shkrsltnv | Clock'
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog-list.component').then(m => m.BlogListComponent),
    title: 'Shkrsltnv | Blog'
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./pages/blog/blog-post/blog-post.component').then(m => m.BlogPostComponent),
    title: 'Shkrsltnv | Blog Post'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES),
    title: 'Admin Panel'
  },
  {
    path: '**',
    redirectTo: '',
    title: 'Shkrsltnv | Home'
  }
];
