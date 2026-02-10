import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { AiAssistantComponent } from './pages/ai-assistant/ai-assistant.component';
import { VirtualCvComponent } from './pages/virtual-cv/virtual-cv.component';
import { ClockComponent } from './pages/clock/clock.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    title: 'Shkrsltnv | Home'
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
    title: 'Shkrsltnv | About Me'
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Shkrsltnv | Projects'
  },
  {
    path: 'contact',
    component: ContactMeComponent,
    title: 'Shkrsltnv | Contact'
  },
  {
    path: 'ai-assistant',
    component: AiAssistantComponent,
    title: 'Shkrsltnv | AI Assistant'
  },
  {
    path: 'cv',
    component: VirtualCvComponent,
    title: 'Shkrsltnv | CV'
  },
  {
    path: 'clock',
    component: ClockComponent,
    title: 'Shkrsltnv | Clock'
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
