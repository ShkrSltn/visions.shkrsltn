import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeroComponent } from '../../shared/components/hero/hero.component';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeroComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent implements AfterViewInit {
  contactForm: FormGroup;
  formSubmitted = false;
  formSuccess = false;
  formError = false;

  contactInfo = {
    email: 'contact@shkrsltnv.com',
    phone: '+076 454 74 13',
    location: 'Switzerland, Zurich'
  };

  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/username', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/username', icon: 'twitter' }
  ];

  constructor(private fb: FormBuilder) {
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

    if (this.contactForm.valid) {
      // В реальном приложении здесь был бы HTTP запрос к API
      console.log('Form submitted:', this.contactForm.value);

      // Имитация успешной отправки
      setTimeout(() => {
        this.formSuccess = true;
        this.contactForm.reset();
        this.formSubmitted = false;

        // Сбросить сообщение об успехе через 5 секунд
        setTimeout(() => {
          this.formSuccess = false;
        }, 5000);
      }, 1500);
    } else {
      this.formError = true;

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
}
