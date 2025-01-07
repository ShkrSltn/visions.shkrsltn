import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTelegram
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  contactForm: FormGroup;

  // Иконки
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faTelegram = faTelegram;
  faEnvelope = faEnvelope;

  socialLinks = [
    {
      icon: this.faGithub,
      url: 'https://github.com/yourusername',
      label: 'GitHub'
    },
    {
      icon: this.faLinkedin,
      url: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn'
    },
    {
      icon: this.faTelegram,
      url: 'https://t.me/yourusername',
      label: 'Telegram'
    },
    {
      icon: this.faEnvelope,
      url: 'mailto:your.email@example.com',
      label: 'Email'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Здесь будет логика отправки формы
    }
  }
}
