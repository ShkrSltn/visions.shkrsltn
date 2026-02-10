import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { AdminLayoutComponent } from './layout/admin-layout.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent),
    title: 'Admin | Login',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
        title: 'Admin | Dashboard',
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./pages/projects/projects-admin.component').then(m => m.ProjectsAdminComponent),
        title: 'Admin | Projects',
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('./pages/skills/skills-admin.component').then(m => m.SkillsAdminComponent),
        title: 'Admin | Skills',
      },
      {
        path: 'cv',
        loadComponent: () =>
          import('./pages/cv/cv-admin.component').then(m => m.CvAdminComponent),
        title: 'Admin | CV Data',
      },
      {
        path: 'languages',
        loadComponent: () =>
          import('./pages/languages/languages-admin.component').then(m => m.LanguagesAdminComponent),
        title: 'Admin | Languages',
      },
      {
        path: 'translations',
        loadComponent: () =>
          import('./pages/translations/translations-admin.component').then(m => m.TranslationsAdminComponent),
        title: 'Admin | Translations',
      },
    ],
  },
];
