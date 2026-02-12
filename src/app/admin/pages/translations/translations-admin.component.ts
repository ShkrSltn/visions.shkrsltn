import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminApiService } from '../../services/admin-api.service';
import { ToastService, ToastComponent } from '../../components/toast/toast.component';
import {
  ConfirmDialogService,
  ConfirmDialogComponent,
} from '../../components/confirm-dialog/confirm-dialog.component';

interface TranslationRow {
  id: number;
  languageCode: string;
  namespace: string;
  key: string;
  value: string;
}

@Component({
  selector: 'app-translations-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastComponent, ConfirmDialogComponent],
  templateUrl: './translations-admin.component.html',
  styleUrl: './translations-admin.component.scss',
})
export class TranslationsAdminComponent implements OnInit {
  languages: any[] = [];
  selectedLang = '';
  translations: TranslationRow[] = [];
  filteredTranslations: TranslationRow[] = [];
  namespaces: string[] = [];
  selectedNamespace = '';
  searchQuery = '';

  selectedTranslation: TranslationRow | null = null;
  formVisible = false;
  editForm = { namespace: '', key: '', value: '' };

  constructor(
    private api: AdminApiService,
    private toast: ToastService,
    private confirm: ConfirmDialogService,
  ) {}

  ngOnInit(): void {
    this.api.get<any[]>('/languages').subscribe((data) => {
      this.languages = data;
      if (data.length > 0) {
        const defaultLang = data.find((l: any) => l.isDefault);
        this.selectedLang = defaultLang ? defaultLang.code : data[0].code;
        this.loadTranslations();
      }
    });
  }

  onLanguageChange(): void {
    this.cancelForm();
    this.loadTranslations();
  }

  loadTranslations(): void {
    if (!this.selectedLang) return;

    this.api
      .get<TranslationRow[]>(`/translations/admin/${this.selectedLang}`)
      .subscribe({
        next: (data) => {
          this.translations = data;
          this.namespaces = [
            ...new Set(data.map((t) => t.namespace)),
          ].sort();
          this.filterTranslations();
        },
        error: () => this.toast.error('Failed to load translations'),
      });
  }

  filterTranslations(): void {
    let result = this.translations;

    if (this.selectedNamespace) {
      result = result.filter((t) => t.namespace === this.selectedNamespace);
    }

    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.namespace.toLowerCase().includes(q) ||
          t.key.toLowerCase().includes(q) ||
          t.value.toLowerCase().includes(q),
      );
    }

    this.filteredTranslations = result;
  }

  selectTranslation(t: TranslationRow): void {
    this.selectedTranslation = t;
    this.editForm = { namespace: t.namespace, key: t.key, value: t.value };
    this.formVisible = true;
  }

  newTranslationMode(): void {
    this.selectedTranslation = null;
    this.editForm = { namespace: '', key: '', value: '' };
    this.formVisible = true;
  }

  cancelForm(): void {
    this.selectedTranslation = null;
    this.formVisible = false;
    this.editForm = { namespace: '', key: '', value: '' };
  }

  saveForm(): void {
    if (this.selectedTranslation) {
      // Update existing
      this.api
        .patch(`/translations/${this.selectedTranslation.id}`, { value: this.editForm.value })
        .subscribe({
          next: () => {
            this.selectedTranslation!.value = this.editForm.value;
            this.cancelForm();
            this.toast.success('Translation updated');
          },
          error: () => this.toast.error('Failed to update translation'),
        });
    } else {
      // Create new
      const body = {
        languageCode: this.selectedLang,
        namespace: this.editForm.namespace.trim(),
        key: this.editForm.key.trim(),
        value: this.editForm.value.trim(),
      };

      this.api.post('/translations', body).subscribe({
        next: () => {
          this.toast.success('Translation added');
          this.cancelForm();
          this.loadTranslations();
        },
        error: (err: any) =>
          this.toast.error(
            err?.error?.message || 'Failed to add translation',
          ),
      });
    }
  }

  async deleteTranslation(t: TranslationRow): Promise<void> {
    const ok = await this.confirm.open(
      'Delete Translation',
      `Delete "${t.namespace}.${t.key}"?`,
    );
    if (!ok) return;

    this.api.delete(`/translations/${t.id}`).subscribe({
      next: () => {
        this.toast.success('Translation deleted');
        if (this.selectedTranslation?.id === t.id) {
          this.cancelForm();
        }
        this.loadTranslations();
      },
      error: () => this.toast.error('Failed to delete translation'),
    });
  }
}
