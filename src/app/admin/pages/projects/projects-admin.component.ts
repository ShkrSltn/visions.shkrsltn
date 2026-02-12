import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminApiService } from '../../services/admin-api.service';
import { ToastService, ToastComponent } from '../../components/toast/toast.component';
import { ConfirmDialogService, ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-projects-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastComponent, ConfirmDialogComponent],
  templateUrl: './projects-admin.component.html',
  styleUrl: './projects-admin.component.scss',
})
export class ProjectsAdminComponent implements OnInit {
  projects: any[] = [];
  languages: any[] = [];
  selectedLanguageId: number | null = null;
  selectedProject: any = null;
  formVisible = false;
  isEdit = false;
  saving = false;
  technologiesString = '';

  form: any = {
    languageId: null,
    title: '',
    description: '',
    imageUrl: '',
    demoLink: '',
    codeLink: '',
    featured: false,
    showDemo: true,
    showCode: true,
    orderIndex: 0,
    technologies: [],
  };

  constructor(
    private api: AdminApiService,
    private toast: ToastService,
    private confirm: ConfirmDialogService
  ) {}

  ngOnInit(): void {
    this.api.get<any[]>('/languages').subscribe(data => this.languages = data);
    this.loadProjects();
  }

  loadProjects(): void {
    const query = this.selectedLanguageId ? `?languageId=${this.selectedLanguageId}` : '';
    this.api.get<any[]>(`/projects${query}`).subscribe({
      next: data => this.projects = data,
      error: () => this.toast.error('Failed to load projects'),
    });
  }

  selectProject(project: any): void {
    this.selectedProject = project;
    this.isEdit = true;
    this.form = { ...project };
    this.technologiesString = (project.technologies || []).join(', ');
    this.formVisible = true;
  }

  newProject(): void {
    this.selectedProject = null;
    this.isEdit = false;
    this.form = {
      languageId: this.languages.find(l => l.isDefault)?.id || (this.languages[0]?.id ?? null),
      title: '',
      description: '',
      imageUrl: '',
      demoLink: '',
      codeLink: '',
      featured: false,
      showDemo: true,
      showCode: true,
      orderIndex: this.projects.length,
      technologies: [],
    };
    this.technologiesString = '';
    this.formVisible = true;
  }

  cancelForm(): void {
    this.formVisible = false;
    this.selectedProject = null;
    this.isEdit = false;
  }

  saveProject(): void {
    this.saving = true;
    this.form.technologies = this.technologiesString
      .split(',')
      .map((t: string) => t.trim())
      .filter((t: string) => t.length > 0);

    const request = this.isEdit
      ? this.api.patch(`/projects/${this.selectedProject.id}`, this.form)
      : this.api.post('/projects', this.form);

    request.subscribe({
      next: () => {
        this.toast.success(this.isEdit ? 'Project updated' : 'Project created');
        this.saving = false;
        this.formVisible = false;
        this.selectedProject = null;
        this.loadProjects();
      },
      error: () => {
        this.toast.error('Failed to save project');
        this.saving = false;
      },
    });
  }

  async deleteProject(project: any): Promise<void> {
    const confirmed = await this.confirm.open('Delete Project', `Are you sure you want to delete "${project.title}"?`);
    if (!confirmed) return;

    this.api.delete(`/projects/${project.id}`).subscribe({
      next: () => {
        this.toast.success('Project deleted');
        if (this.selectedProject?.id === project.id) {
          this.formVisible = false;
          this.selectedProject = null;
        }
        this.loadProjects();
      },
      error: () => this.toast.error('Failed to delete project'),
    });
  }
}
