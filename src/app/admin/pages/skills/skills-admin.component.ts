import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminApiService } from '../../services/admin-api.service';
import { ToastService, ToastComponent } from '../../components/toast/toast.component';
import { ConfirmDialogService, ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-skills-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastComponent, ConfirmDialogComponent],
  templateUrl: './skills-admin.component.html',
  styleUrl: './skills-admin.component.scss',
})
export class SkillsAdminComponent implements OnInit {
  languages: any[] = [];
  selectedLanguageId: number | null = null;
  categoryFilter = 'all';
  skills: any[] = [];
  filteredSkills: any[] = [];
  techStackItems: any[] = [];
  formVisible = false;

  newSkill: any = { category: 'frontend', name: '', level: '', description: '', orderIndex: 0 };
  editingSkillId: number | null = null;
  newTechName = '';

  constructor(
    private api: AdminApiService,
    private toast: ToastService,
    private confirm: ConfirmDialogService
  ) {}

  ngOnInit(): void {
    this.api.get<any[]>('/languages').subscribe(data => {
      this.languages = data;
      if (data.length > 0) {
        this.selectedLanguageId = data.find((l: any) => l.isDefault)?.id || data[0].id;
        this.loadSkills();
      }
    });
  }

  loadSkills(): void {
    if (!this.selectedLanguageId) return;
    this.api.get<any[]>(`/skills?languageId=${this.selectedLanguageId}`).subscribe({
      next: data => { this.skills = data; this.filterSkills(); },
      error: () => this.toast.error('Failed to load skills'),
    });
    this.api.get<any[]>(`/skills/tech-stack/all?languageId=${this.selectedLanguageId}`).subscribe({
      next: data => this.techStackItems = data,
      error: () => {},
    });
  }

  filterSkills(): void {
    this.filteredSkills = this.categoryFilter === 'all'
      ? this.skills
      : this.skills.filter(s => s.category === this.categoryFilter);
  }

  newSkillMode(): void {
    this.editingSkillId = null;
    this.newSkill = { category: 'frontend', name: '', level: '', description: '', orderIndex: this.skills.length };
    this.formVisible = true;
  }

  addSkill(): void {
    const body = { ...this.newSkill, languageId: this.selectedLanguageId };

    const req = this.editingSkillId
      ? this.api.patch(`/skills/${this.editingSkillId}`, body)
      : this.api.post('/skills', body);

    req.subscribe({
      next: () => {
        this.toast.success(this.editingSkillId ? 'Skill updated' : 'Skill added');
        this.formVisible = false;
        this.resetSkillForm();
        this.loadSkills();
      },
      error: () => this.toast.error('Failed to save skill'),
    });
  }

  editSkill(skill: any): void {
    this.editingSkillId = skill.id;
    this.newSkill = { category: skill.category, name: skill.name, level: skill.level, description: skill.description, orderIndex: skill.orderIndex };
    this.formVisible = true;
  }

  cancelEdit(): void {
    this.editingSkillId = null;
    this.formVisible = false;
    this.resetSkillForm();
  }

  private resetSkillForm(): void {
    this.editingSkillId = null;
    this.newSkill = { category: 'frontend', name: '', level: '', description: '', orderIndex: 0 };
  }

  async deleteSkill(skill: any): Promise<void> {
    const ok = await this.confirm.open('Delete Skill', `Delete "${skill.name}"?`);
    if (!ok) return;
    this.api.delete(`/skills/${skill.id}`).subscribe({
      next: () => {
        this.toast.success('Skill deleted');
        if (this.editingSkillId === skill.id) {
          this.formVisible = false;
          this.resetSkillForm();
        }
        this.loadSkills();
      },
      error: () => this.toast.error('Failed to delete skill'),
    });
  }

  addTechStackItem(): void {
    this.api.post('/skills/tech-stack', {
      languageId: this.selectedLanguageId,
      name: this.newTechName,
      orderIndex: this.techStackItems.length,
    }).subscribe({
      next: () => { this.toast.success('Added'); this.newTechName = ''; this.loadSkills(); },
      error: () => this.toast.error('Failed to add'),
    });
  }

  async removeTechStackItem(item: any): Promise<void> {
    this.api.delete(`/skills/tech-stack/${item.id}`).subscribe({
      next: () => { this.toast.success('Removed'); this.loadSkills(); },
      error: () => this.toast.error('Failed to remove'),
    });
  }
}
