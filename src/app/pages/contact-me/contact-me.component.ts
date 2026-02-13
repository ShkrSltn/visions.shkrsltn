import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';
import { SOCIAL_LINKS } from '../../shared/constants/social-links';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeroComponent, TranslateModule, ScrollAnimateDirective],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  gitHubLink = SOCIAL_LINKS.github;
  linkedInLink = SOCIAL_LINKS.linkedin;
  emailLink = SOCIAL_LINKS.email;

  contactForm: FormGroup;
  formSubmitted = false;
  formSuccess = false;
  formError = false;
  isSubmitting = false;

  contactInfo = {
    email: SOCIAL_LINKS.emailRaw,
    phone: SOCIAL_LINKS.phone,
    location: SOCIAL_LINKS.location,
  };

  socialLinks = [
    { name: 'GitHub', url: this.gitHubLink, icon: 'github' },
    { name: 'LinkedIn', url: this.linkedInLink, icon: 'linkedin' },
    { name: 'Email', url: this.emailLink, icon: 'email' }
  ];

  copiedText: string | null = null;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    this.isSubmitting = true;

    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);

      setTimeout(() => {
        this.formSuccess = true;
        this.contactForm.reset();
        this.formSubmitted = false;
        this.isSubmitting = false;

        setTimeout(() => {
          this.formSuccess = false;
        }, 5000);
      }, 1500);
    } else {
      this.formError = true;
      this.isSubmitting = false;

      setTimeout(() => {
        this.formError = false;
      }, 5000);
    }
  }

  get nameControl() { return this.contactForm.get('name'); }
  get emailControl() { return this.contactForm.get('email'); }
  get subjectControl() { return this.contactForm.get('subject'); }
  get messageControl() { return this.contactForm.get('message'); }

  async copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      this.copiedText = text;
      setTimeout(() => {
        this.copiedText = null;
      }, 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
