import { Component, inject, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { initializeIcons } from '../../core/config/icons.config';
import { CommonModule } from '@angular/common';
import { BlurService } from '../../core/services/blur.service';

interface NavigationLink {
  path: string;
  label: string;
  icon: [iconType: string, iconName: string];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FontAwesomeModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private library = inject(FaIconLibrary);
  private blurService = inject(BlurService);
  isScrolled = false;
  isMobileMenuOpen = false;
  isEyeOpen = true;

  constructor() {
    initializeIcons(this.library);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  logoPath = '/';
  logoText = 'visions.shkrsltnv';

  navigationLinks: NavigationLink[] = [
    { path: '/about-me', label: 'About', icon: ['fas', 'user'] },
    { path: '/blog', label: 'Blog', icon: ['fas', 'pen'] },
    { path: '/projects', label: 'Projects', icon: ['fas', 'code'] },
    { path: '/contact-me', label: 'Contact me', icon: ['fas', 'envelope'] }
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleEye(): void {
    this.isEyeOpen = !this.isEyeOpen;
    this.blurService.toggleBlur();
  }
}
