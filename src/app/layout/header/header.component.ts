import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, TranslateModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  logoText = 'shkrsltnv';
  fullLogoText = 'shakirsultanov';
  isScrolled = false;
  isMobileMenuOpen = false;
  isLanguageMenuOpen = false;
  currentLang = 'en';
  availableLanguages: string[] = [];

  constructor(private languageService: LanguageService) {
    this.availableLanguages = this.languageService.availableLanguages;

    this.languageService.currentLang$
      .pipe(takeUntilDestroyed())
      .subscribe(lang => {
        this.currentLang = lang;
      });
  }

  ngOnInit(): void {
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    // Template binding [class.scrolled]="isScrolled" handles the class — no DOM query needed
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    if (window.innerWidth > 768 && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector && this.isLanguageMenuOpen &&
        !languageSelector.contains(event.target as Node)) {
      this.isLanguageMenuOpen = false;
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
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
