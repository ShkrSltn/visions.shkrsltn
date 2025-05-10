import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeroComponent, TranslateModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent implements AfterViewInit {
  gitHubLink = 'https://github.com/ShkrSltn';
  linkedInLink = 'https://www.linkedin.com/in/shkrsltn/';
  emailLink = 'mailto:sultanovshakir12@gmail.com';

  contactForm: FormGroup;
  formSubmitted = false;
  formSuccess = false;
  formError = false;
  isSubmitting = false;

  contactInfo = {
    email: 'sultanovshakir12@gmail.com',
    phone: '+41 76 454 74 13',
    location: 'Switzerland, Zurich'
  };

  socialLinks = [
    { name: 'GitHub', url: this.gitHubLink, icon: 'github' },
    { name: 'LinkedIn', url: this.linkedInLink, icon: 'linkedin' },
    { name: 'Email', url: this.emailLink, icon: 'email' }
  ];

  copiedText: string | null = null;

  constructor(private fb: FormBuilder, private translate: TranslateService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngAfterViewInit() {
    // Анимация для элементов при загрузке
    const animatedElements = document.querySelectorAll('.animate-in');
    animatedElements.forEach((element, index) => {
      (element as HTMLElement).style.setProperty('--animation-order', index.toString());
    });

    // Первоначальная проверка видимых элементов
    this.checkVisibility();
  }

  @HostListener('window:scroll')
  checkVisibility() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(element => {
      const position = element.getBoundingClientRect();

      // Если элемент виден в окне просмотра
      if (position.top < window.innerHeight * 0.8) {
        element.classList.add('visible');
      }
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    this.isSubmitting = true;

    if (this.contactForm.valid) {
      // В реальном приложении здесь был бы HTTP запрос к API
      console.log('Form submitted:', this.contactForm.value);

      // Имитация успешной отправки
      setTimeout(() => {
        this.formSuccess = true;
        this.contactForm.reset();
        this.formSubmitted = false;
        this.isSubmitting = false;

        // Сбросить сообщение об успехе через 5 секунд
        setTimeout(() => {
          this.formSuccess = false;
        }, 5000);
      }, 1500);
    } else {
      this.formError = true;
      this.isSubmitting = false;

      // Сбросить сообщение об ошибке через 5 секунд
      setTimeout(() => {
        this.formError = false;
      }, 5000);
    }
  }

  // Геттеры для проверки валидации формы
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
      }, 3000); // 3 секунды
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
