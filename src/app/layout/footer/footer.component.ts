import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SOCIAL_LINKS } from '../../shared/constants/social-links';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, CommonModule, TranslateModule],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  logoText = 'shkrsltnv';
  currentYear = new Date().getFullYear();
  socialLinks = SOCIAL_LINKS;
}
