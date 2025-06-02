import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLangSubject = new BehaviorSubject<string>('en');
  currentLang$ = this.currentLangSubject.asObservable();

  // Доступные языки
  availableLanguages = [
    'en',
    // 'ru',
    'de',
    // 'tr',
    // 'ua'
  ];

  constructor(private translate: TranslateService) {
    // Получаем сохраненный язык или используем язык браузера
    const savedLang = localStorage.getItem('language') ||
                      this.getBrowserLang() ||
                      'en';

    this.setLanguage(savedLang);
  }

  private getBrowserLang(): string {
    const browserLang = navigator.language.toLowerCase();

    // if (browserLang.includes('ru')) {
    //   return 'ru';
    // } else
    if (browserLang.includes('de')) {
      return 'de';
    // } else if (browserLang.includes('tr')) {
    //   return 'tr';
    // } else if (browserLang.includes('ua')) {
    //   return 'ua';
    }

    return 'en';
  }

  setLanguage(lang: string): void {
    // Проверяем, что язык поддерживается
    if (this.availableLanguages.includes(lang)) {
      this.translate.use(lang);
      localStorage.setItem('language', lang);
      this.currentLangSubject.next(lang);
    } else {
      // Если язык не поддерживается, используем английский по умолчанию
      this.translate.use('en');
      localStorage.setItem('language', 'en');
      this.currentLangSubject.next('en');
    }
  }

  getCurrentLang(): string {
    return this.currentLangSubject.value;
  }

  // Метод для циклического переключения между языками
  toggleLanguage(): void {
    const currentLang = this.getCurrentLang();
    const currentIndex = this.availableLanguages.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % this.availableLanguages.length;
    const newLang = this.availableLanguages[nextIndex];

    this.setLanguage(newLang);
  }

  // Получить название языка для отображения
  getLanguageDisplay(lang: string): string {
    const langMap = {
      'en': 'EN',
      // 'ru': 'RU',
      'de': 'DE',
      // 'tr': 'TR',
      // 'ua': 'UA'
    };

    return langMap[lang as keyof typeof langMap] || 'EN';
  }
}