import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RippleEffectDirective } from './shared/directives/ripple-effect.directive';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, RippleEffectDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  isAdminRoute = false;

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService,
    private router: Router
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isAdminRoute = event.urlAfterRedirects?.startsWith('/admin');
      });
  }

  ngOnInit() {
    // Устанавливаем доступные языки
    this.translate.addLangs(['en', 'ru']);

    // Используем текущий язык из сервиса
    const currentLang = this.languageService.getCurrentLang();
    this.translate.use(currentLang);
  }
}
