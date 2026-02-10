import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminApiService } from '../../services/admin-api.service';
import { ToastComponent } from '../../components/toast/toast.component';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, ToastComponent, ConfirmDialogComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  stats = { projects: 0, skills: 0, languages: 0, cvSections: 8 };

  constructor(private api: AdminApiService) {}

  ngOnInit(): void {
    this.api.get<any[]>('/languages').subscribe({
      next: data => this.stats.languages = data.length,
      error: () => {},
    });
    this.api.get<any[]>('/projects').subscribe({
      next: data => this.stats.projects = data.length,
      error: () => {},
    });
    this.api.get<any[]>('/skills').subscribe({
      next: data => this.stats.skills = data.length,
      error: () => {},
    });
  }
}
