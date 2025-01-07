import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ContactLink {
  url: string;
  label: string;
  isEmail?: boolean;
}

interface NavigationLink {
  path: string;
  label: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  contactLinks: ContactLink[] = [
    {
      url: 'mailto:shakirsultanov12@gmail.com',
      label: 'shakirsultanov12@gmail.com',
      isEmail: true
    },
    {
      url: 'https://github.com/shkrsltn',
      label: 'GitHub'
    },
    {
      url: 'https://linkedin.com/in/shkrsltn',
      label: 'LinkedIn'
    }
  ];

  navigationLinks: NavigationLink[] = [
    {
      path: '/about',
      label: 'About'
    },
    {
      path: '/blog',
      label: 'Blog'
    },
    {
      path: '/projects',
      label: 'Projects'
    }
  ];

  locations: string[] = [
    'Odesa, Ukraine',
    'Zürich, Switzerland'
  ];

  copyrightText = 'visions.shkrsltnv All rights reserved.';
}
