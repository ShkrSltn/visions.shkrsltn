import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminAuthService } from '../services/admin-auth.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent {
  sidebarCollapsed = false;

  navItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: 'fa-solid fa-gauge-high' },
    { path: '/admin/projects', label: 'Projects', icon: 'fa-solid fa-diagram-project' },
    { path: '/admin/skills', label: 'Skills', icon: 'fa-solid fa-code' },
    { path: '/admin/cv', label: 'CV Data', icon: 'fa-solid fa-file-lines' },
    { path: '/admin/languages', label: 'Languages', icon: 'fa-solid fa-globe' },
    { path: '/admin/translations', label: 'Translations', icon: 'fa-solid fa-language' },
  ];

  constructor(private authService: AdminAuthService) {}

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  logout(): void {
    this.authService.logout();
  }
}
