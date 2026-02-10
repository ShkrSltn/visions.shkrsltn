import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AdminApiService } from '../../services/admin-api.service';
import { ToastService, ToastComponent } from '../../components/toast/toast.component';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ToastComponent],
  templateUrl: './project-form.component.html',
  styleUrl: './projects-admin.component.scss',
})
export class ProjectFormComponent implements OnInit {
  isEdit = false;
  projectId: number | null = null;
  saving = false;
  languages: any[] = [];
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
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.api.get<any[]>('/languages').subscribe(data => this.languages = data);

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.projectId = +id;
      this.api.get<any>(`/projects/${id}`).subscribe({
        next: project => {
          this.form = { ...project };
          this.technologiesString = (project.technologies || []).join(', ');
        },
        error: () => this.toast.error('Failed to load project'),
      });
    }
  }

  onSubmit(): void {
    this.saving = true;
    this.form.technologies = this.technologiesString
      .split(',')
      .map((t: string) => t.trim())
      .filter((t: string) => t.length > 0);

    const request = this.isEdit
      ? this.api.patch(`/projects/${this.projectId}`, this.form)
      : this.api.post('/projects', this.form);

    request.subscribe({
      next: () => {
        this.toast.success(this.isEdit ? 'Project updated' : 'Project created');
        this.router.navigate(['/admin/projects']);
      },
      error: () => {
        this.toast.error('Failed to save project');
        this.saving = false;
      },
    });
  }
}
