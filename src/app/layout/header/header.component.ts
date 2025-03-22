import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, TranslateModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  logoText: string = 'shkrsltnv';
  fullLogoText: string = 'shakirsultanov';
  isScrolled: boolean = false;
  isMobileMenuOpen: boolean = false;
  isLanguageMenuOpen: boolean = false;
  currentLang: string = 'en';
  availableLanguages: string[] = [];

  constructor(private languageService: LanguageService) {
    this.availableLanguages = this.languageService.availableLanguages;
  }

  ngOnInit(): void {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });

    // Начальная проверка прокрутки
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    const headerElement = document.querySelector('header');
    if (headerElement) {
      if (this.isScrolled) {
        headerElement.classList.add('scrolled');
      } else {
        headerElement.classList.remove('scrolled');
      }
    }
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    // Закрыть мобильное меню при изменении размера окна (больше 768px)
    if (window.innerWidth > 768 && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Закрыть выпадающее меню языков при клике вне его
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector && this.isLanguageMenuOpen &&
        !languageSelector.contains(event.target as Node)) {
      this.isLanguageMenuOpen = false;
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.classList.toggle('no-scroll', this.isMobileMenuOpen);
  }

  closeMobileMenu() {
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
      document.body.classList.remove('no-scroll');
    }
  }

  toggleLanguageMenu(event: Event) {
    event.stopPropagation();
    this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  selectLanguage(lang: string): void {
    this.languageService.setLanguage(lang);
    this.isLanguageMenuOpen = false;
  }

  getLanguageDisplay(lang: string): string {
    return this.languageService.getLanguageDisplay(lang);
  }
}


