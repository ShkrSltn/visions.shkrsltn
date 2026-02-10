import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminApiService } from '../../services/admin-api.service';
import { ToastService, ToastComponent } from '../../components/toast/toast.component';
import { ConfirmDialogService, ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-languages-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastComponent, ConfirmDialogComponent],
  templateUrl: './languages-admin.component.html',
  styleUrl: './languages-admin.component.scss',
})
export class LanguagesAdminComponent implements OnInit {
  languages: any[] = [];
  editingId: number | null = null;
  formVisible = false;
  form: any = { code: '', name: '', isActive: true, isDefault: false };

  constructor(
    private api: AdminApiService,
    private toast: ToastService,
    private confirm: ConfirmDialogService
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.api.get<any[]>('/languages/all').subscribe({
      next: data => this.languages = data,
      error: () => this.toast.error('Failed to load languages'),
    });
  }

  newLang(): void {
    this.editingId = null;
    this.form = { code: '', name: '', isActive: true, isDefault: false };
    this.formVisible = true;
  }

  save(): void {
    const req = this.editingId
      ? this.api.patch(`/languages/${this.editingId}`, this.form)
      : this.api.post('/languages', this.form);

    req.subscribe({
      next: () => {
        this.toast.success(this.editingId ? 'Language updated' : 'Language created');
        this.cancelEdit();
        this.load();
      },
      error: (err: any) => this.toast.error(err?.error?.message || 'Failed to save'),
    });
  }

  edit(lang: any): void {
    this.editingId = lang.id;
    this.form = { code: lang.code, name: lang.name, isActive: lang.isActive, isDefault: lang.isDefault };
    this.formVisible = true;
  }

  cancelEdit(): void {
    this.editingId = null;
    this.formVisible = false;
    this.form = { code: '', name: '', isActive: true, isDefault: false };
  }

  async remove(lang: any): Promise<void> {
    const ok = await this.confirm.open('Delete Language', `Delete "${lang.name}" (${lang.code})? This may affect linked data.`);
    if (!ok) return;

    this.api.delete(`/languages/${lang.id}`).subscribe({
      next: () => {
        this.toast.success('Language deleted');
        if (this.editingId === lang.id) {
          this.formVisible = false;
          this.editingId = null;
        }
        this.load();
      },
      error: () => this.toast.error('Failed to delete language'),
    });
  }
}
