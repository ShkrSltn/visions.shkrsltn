import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { AiAssistantComponent } from './pages/ai-assistant/ai-assistant.component';

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
    path: '**',
    redirectTo: '',
    title: 'Shkrsltnv | Home'
  }
];
