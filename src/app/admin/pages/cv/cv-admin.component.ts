import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminApiService } from '../../services/admin-api.service';
import { ToastService, ToastComponent } from '../../components/toast/toast.component';
import { ConfirmDialogService, ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-cv-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastComponent, ConfirmDialogComponent],
  templateUrl: './cv-admin.component.html',
  styleUrl: './cv-admin.component.scss',
})
export class CvAdminComponent implements OnInit {
  languages: any[] = [];
  selectedLanguageId: number | null = null;
  activeTab = 'profile';

  tabs = [
    { id: 'profile', label: 'Profile', icon: 'fa-solid fa-user' },
    { id: 'skills', label: 'Skills', icon: 'fa-solid fa-star' },
    { id: 'work', label: 'Work', icon: 'fa-solid fa-briefcase' },
    { id: 'education', label: 'Education', icon: 'fa-solid fa-graduation-cap' },
    { id: 'certifications', label: 'Certs', icon: 'fa-solid fa-certificate' },
    { id: 'languages', label: 'Languages', icon: 'fa-solid fa-language' },
    { id: 'references', label: 'References', icon: 'fa-solid fa-user-group' },
    { id: 'hobbies', label: 'Hobbies', icon: 'fa-solid fa-heart' },
    { id: 'contact', label: 'Contact', icon: 'fa-solid fa-address-card' },
  ];

  // Data
  profile = { content: '' };
  cvSkills: any[] = [];
  workExperiences: any[] = [];
  educations: any[] = [];
  certifications: any[] = [];
  cvLanguages: any[] = [];
  references: any[] = [];
  hobbies: any[] = [];
  contact: any = {};

  // Form visibility
  cvSkillFormVisible = false;
  workFormVisible = false;
  eduFormVisible = false;
  certFormVisible = false;
  cvLangFormVisible = false;
  refFormVisible = false;
  hobbyFormVisible = false;

  // Forms
  skillLevelFilter = 'all';
  selectedCvSkill: any = null;
  newCvSkill: any = { level: 'advanced', name: '' };
  newWork: any = { period: '', title: '', location: '', responsibilities: '' };
  editingWorkId: number | null = null;
  newEdu: any = { period: '', degree: '', institution: '', location: '', details: '' };
  editingEduId: number | null = null;
  newCert: any = { degree: '', period: '', location: '', details: '' };
  editingCertId: number | null = null;
  newCvLang: any = { name: '', level: '' };
  editingCvLangId: number | null = null;
  newRef: any = { name: '', position: '', contact: '', website: '', phone: '' };
  editingRefId: number | null = null;
  newHobby: any = { name: '', description: '' };
  editingHobbyId: number | null = null;

  constructor(
    private api: AdminApiService,
    private toast: ToastService,
    private confirm: ConfirmDialogService
  ) {}

  ngOnInit(): void {
    this.api.get<any[]>('/languages').subscribe(data => {
      this.languages = data;
      if (data.length) {
        this.selectedLanguageId = data.find((l: any) => l.isDefault)?.id || data[0].id;
        this.loadAll();
      }
    });
  }

  switchTab(tabId: string): void {
    this.activeTab = tabId;
    this.hideAllForms();
  }

  hideAllForms(): void {
    this.cvSkillFormVisible = false;
    this.workFormVisible = false;
    this.eduFormVisible = false;
    this.certFormVisible = false;
    this.cvLangFormVisible = false;
    this.refFormVisible = false;
    this.hobbyFormVisible = false;
    this.selectedCvSkill = null;
    this.editingWorkId = null;
    this.editingEduId = null;
    this.editingCertId = null;
    this.editingCvLangId = null;
    this.editingRefId = null;
    this.editingHobbyId = null;
  }

  onLanguageChange(): void { this.loadAll(); }

  loadAll(): void {
    if (!this.selectedLanguageId) return;
    const lang = this.languages.find(l => l.id === this.selectedLanguageId);
    if (!lang) return;

    this.api.get<any>(`/cv/admin/by-language/${lang.code}`).subscribe({
      next: data => {
        this.profile.content = data.profile?.content || '';
        this.contact = data.contact || {};
        this.cvSkills = data.cvSkills || [];
        this.workExperiences = data.workExperiences || [];
        this.educations = data.educations || [];
        this.certifications = data.certifications || [];
        this.cvLanguages = data.cvLanguages || [];
        this.references = data.references || [];
        this.hobbies = data.hobbies || [];
      },
      error: () => this.toast.error('Failed to load CV data'),
    });
  }

  // ========== Profile ==========
  saveProfile(): void {
    this.api.put(`/cv/profile/${this.selectedLanguageId}`, { content: this.profile.content }).subscribe({
      next: () => this.toast.success('Profile saved'),
      error: () => this.toast.error('Failed to save profile'),
    });
  }

  // ========== Contact ==========
  saveContact(): void {
    this.api.put(`/cv/contact/${this.selectedLanguageId}`, this.contact).subscribe({
      next: () => this.toast.success('Contact saved'),
      error: () => this.toast.error('Failed to save contact'),
    });
  }

  // ========== CV Skills ==========
  getFilteredCvSkills(): any[] {
    if (this.skillLevelFilter === 'all') return this.cvSkills;
    return this.cvSkills.filter(s => s.level === this.skillLevelFilter);
  }

  selectCvSkill(skill: any): void {
    this.selectedCvSkill = skill;
    this.newCvSkill = { level: skill.level, name: skill.name };
    this.cvSkillFormVisible = true;
  }

  newCvSkillMode(): void {
    this.selectedCvSkill = null;
    this.newCvSkill = { level: 'advanced', name: '' };
    this.cvSkillFormVisible = true;
  }

  addCvSkill(): void {
    if (this.selectedCvSkill) {
      this.api.patch(`/cv/skill/${this.selectedCvSkill.id}`, { ...this.newCvSkill, languageId: this.selectedLanguageId }).subscribe({
        next: () => { this.toast.success('Skill updated'); this.cvSkillFormVisible = false; this.selectedCvSkill = null; this.loadAll(); },
        error: () => this.toast.error('Failed to update skill'),
      });
    } else {
      this.api.post('/cv/skill', { ...this.newCvSkill, languageId: this.selectedLanguageId }).subscribe({
        next: () => { this.toast.success('Skill added'); this.newCvSkill = { level: 'advanced', name: '' }; this.cvSkillFormVisible = false; this.loadAll(); },
        error: () => this.toast.error('Failed to add skill'),
      });
    }
  }

  async deleteCvSkill(skill: any): Promise<void> {
    this.api.delete(`/cv/skill/${skill.id}`).subscribe({
      next: () => { this.toast.success('Deleted'); this.loadAll(); },
      error: () => this.toast.error('Failed to delete'),
    });
  }

  // ========== Work Experience ==========
  saveWork(): void {
    const body = {
      ...this.newWork,
      languageId: this.selectedLanguageId,
      responsibilities: this.parseLines(this.newWork.responsibilities),
    };
    const req = this.editingWorkId
      ? this.api.patch(`/cv/work-experience/${this.editingWorkId}`, body)
      : this.api.post('/cv/work-experience', body);
    req.subscribe({
      next: () => { this.toast.success('Saved'); this.workFormVisible = false; this.resetWork(); this.loadAll(); },
      error: () => this.toast.error('Failed to save'),
    });
  }

  editWork(item: any): void {
    this.editingWorkId = item.id;
    this.newWork = { period: item.period, title: item.title, location: item.location, responsibilities: (item.responsibilities || []).join('\n') };
    this.workFormVisible = true;
  }

  async deleteWork(item: any): Promise<void> {
    const ok = await this.confirm.open('Delete', `Delete "${item.title}"?`);
    if (!ok) return;
    this.api.delete(`/cv/work-experience/${item.id}`).subscribe({
      next: () => { this.toast.success('Deleted'); this.workFormVisible = false; this.resetWork(); this.loadAll(); },
      error: () => this.toast.error('Failed to delete'),
    });
  }

  resetWork(): void { this.editingWorkId = null; this.newWork = { period: '', title: '', location: '', responsibilities: '' }; }

  // ========== Education ==========
  saveEdu(): void {
    const body = { ...this.newEdu, languageId: this.selectedLanguageId, details: this.parseLines(this.newEdu.details) };
    const req = this.editingEduId
      ? this.api.patch(`/cv/education/${this.editingEduId}`, body)
      : this.api.post('/cv/education', body);
    req.subscribe({
      next: () => { this.toast.success('Saved'); this.eduFormVisible = false; this.resetEdu(); this.loadAll(); },
      error: () => this.toast.error('Failed to save'),
    });
  }

  editEdu(item: any): void {
    this.editingEduId = item.id;
    this.newEdu = { period: item.period, degree: item.degree, institution: item.institution || '', location: item.location, details: (item.details || []).join('\n') };
    this.eduFormVisible = true;
  }

  async deleteEdu(item: any): Promise<void> {
    const ok = await this.confirm.open('Delete', `Delete "${item.degree}"?`);
    if (!ok) return;
    this.api.delete(`/cv/education/${item.id}`).subscribe({
      next: () => { this.toast.success('Deleted'); this.eduFormVisible = false; this.resetEdu(); this.loadAll(); },
      error: () => this.toast.error('Failed'),
    });
  }

  resetEdu(): void { this.editingEduId = null; this.newEdu = { period: '', degree: '', institution: '', location: '', details: '' }; }

  // ========== Certifications ==========
  saveCert(): void {
    const body = { ...this.newCert, languageId: this.selectedLanguageId, details: this.parseLines(this.newCert.details) };
    const req = this.editingCertId
      ? this.api.patch(`/cv/certification/${this.editingCertId}`, body)
      : this.api.post('/cv/certification', body);
    req.subscribe({
      next: () => { this.toast.success('Saved'); this.certFormVisible = false; this.resetCert(); this.loadAll(); },
      error: () => this.toast.error('Failed'),
    });
  }

  editCert(item: any): void {
    this.editingCertId = item.id;
    this.newCert = { degree: item.degree, period: item.period, location: item.location, details: (item.details || []).join('\n') };
    this.certFormVisible = true;
  }

  async deleteCert(item: any): Promise<void> {
    const ok = await this.confirm.open('Delete', `Delete "${item.degree}"?`);
    if (!ok) return;
    this.api.delete(`/cv/certification/${item.id}`).subscribe({
      next: () => { this.toast.success('Deleted'); this.certFormVisible = false; this.resetCert(); this.loadAll(); },
      error: () => this.toast.error('Failed'),
    });
  }

  resetCert(): void { this.editingCertId = null; this.newCert = { degree: '', period: '', location: '', details: '' }; }

  // ========== CV Languages ==========
  saveCvLang(): void {
    const body = { ...this.newCvLang, languageId: this.selectedLanguageId };
    const req = this.editingCvLangId
      ? this.api.patch(`/cv/language/${this.editingCvLangId}`, body)
      : this.api.post('/cv/language', body);
    req.subscribe({
      next: () => { this.toast.success('Saved'); this.cvLangFormVisible = false; this.resetCvLang(); this.loadAll(); },
      error: () => this.toast.error('Failed'),
    });
  }

  editCvLang(item: any): void {
    this.editingCvLangId = item.id;
    this.newCvLang = { name: item.name, level: item.level };
    this.cvLangFormVisible = true;
  }

  async deleteCvLang(item: any): Promise<void> {
    this.api.delete(`/cv/language/${item.id}`).subscribe({
      next: () => { this.toast.success('Deleted'); this.cvLangFormVisible = false; this.resetCvLang(); this.loadAll(); },
      error: () => this.toast.error('Failed'),
    });
  }

  resetCvLang(): void { this.editingCvLangId = null; this.newCvLang = { name: '', level: '' }; }

  // ========== References ==========
  saveRef(): void {
    const body = { ...this.newRef, languageId: this.selectedLanguageId };
    const req = this.editingRefId
      ? this.api.patch(`/cv/reference/${this.editingRefId}`, body)
      : this.api.post('/cv/reference', body);
    req.subscribe({
      next: () => { this.toast.success('Saved'); this.refFormVisible = false; this.resetRef(); this.loadAll(); },
      error: () => this.toast.error('Failed'),
    });
  }

  editRef(item: any): void {
    this.editingRefId = item.id;
    this.newRef = { name: item.name, position: item.position, contact: item.contact, website: item.website || '', phone: item.phone || '' };
    this.refFormVisible = true;
  }

  async deleteRef(item: any): Promise<void> {
    const ok = await this.confirm.open('Delete', `Delete "${item.name}"?`);
    if (!ok) return;
    this.api.delete(`/cv/reference/${item.id}`).subscribe({
      next: () => { this.toast.success('Deleted'); this.refFormVisible = false; this.resetRef(); this.loadAll(); },
      error: () => this.toast.error('Failed'),
    });
  }

  resetRef(): void { this.editingRefId = null; this.newRef = { name: '', position: '', contact: '', website: '', phone: '' }; }

  // ========== Hobbies ==========
  saveHobby(): void {
    const body = { ...this.newHobby, languageId: this.selectedLanguageId };
    const req = this.editingHobbyId
      ? this.api.patch(`/cv/hobby/${this.editingHobbyId}`, body)
      : this.api.post('/cv/hobby', body);
    req.subscribe({
      next: () => { this.toast.success('Saved'); this.hobbyFormVisible = false; this.resetHobby(); this.loadAll(); },
      error: () => this.toast.error('Failed'),
    });
  }

  editHobby(item: any): void {
    this.editingHobbyId = item.id;
    this.newHobby = { name: item.name, description: item.description };
    this.hobbyFormVisible = true;
  }

  async deleteHobby(item: any): Promise<void> {
    this.api.delete(`/cv/hobby/${item.id}`).subscribe({
      next: () => { this.toast.success('Deleted'); this.hobbyFormVisible = false; this.resetHobby(); this.loadAll(); },
      error: () => this.toast.error('Failed'),
    });
  }

  resetHobby(): void { this.editingHobbyId = null; this.newHobby = { name: '', description: '' }; }

  // ========== Utils ==========
  private parseLines(text: string): string[] {
    return (text || '').split('\n').map(l => l.trim()).filter(l => l.length > 0);
  }
}
