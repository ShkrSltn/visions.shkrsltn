import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RippleEffectDirective } from './shared/directives/ripple-effect.directive';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RippleEffectDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    // Устанавливаем доступные языки
    this.translate.addLangs(['en', 'ru']);

    // Используем текущий язык из сервиса
    const currentLang = this.languageService.getCurrentLang();
    this.translate.use(currentLang);
  }
}
