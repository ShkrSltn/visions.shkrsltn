import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  description: string;
}

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements AfterViewInit {
  frontendSkills: Skill[] = [
    {
      name: 'HTML5 & CSS3',
      level: 'Advanced',
      description: 'Creating responsive, accessible, and semantically structured web pages with modern CSS techniques including Grid and Flexbox.'
    },
    {
      name: 'JavaScript',
      level: 'Advanced',
      description: 'Building interactive web applications with ES6+ features, asynchronous programming, and DOM manipulation.'
    },
    {
      name: 'TypeScript',
      level: 'Intermediate',
      description: 'Developing type-safe applications with interfaces, generics, and advanced typing features.'
    },
    {
      name: 'Angular',
      level: 'Intermediate',
      description: 'Creating component-based applications with services, routing, and state management.'
    },
    {
      name: 'React',
      level: 'Beginner',
      description: 'Building UI components with hooks, context API, and functional programming patterns.'
    }
  ];

  backendSkills: Skill[] = [
    {
      name: 'Node.js',
      level: 'Intermediate',
      description: 'Developing server-side applications with event-driven architecture and non-blocking I/O operations.'
    },
    {
      name: 'Express',
      level: 'Intermediate',
      description: 'Creating RESTful APIs with middleware, routing, and error handling.'
    },
    {
      name: 'MongoDB',
      level: 'Beginner',
      description: 'Designing NoSQL database schemas and performing CRUD operations with Mongoose ODM.'
    },
    {
      name: 'SQL',
      level: 'Beginner',
      description: 'Working with relational databases, writing queries, and managing database relationships.'
    }
  ];

  otherSkills: Skill[] = [
    {
      name: 'Git & GitHub',
      level: 'Advanced',
      description: 'Version control, collaborative development, branching strategies, and CI/CD workflows.'
    },
    {
      name: 'RESTful APIs',
      level: 'Intermediate',
      description: 'Designing and consuming APIs following REST principles with proper status codes and error handling.'
    },
    {
      name: 'Responsive Design',
      level: 'Advanced',
      description: 'Creating layouts that adapt to different screen sizes with media queries and mobile-first approach.'
    },
    {
      name: 'Problem Solving',
      level: 'Advanced',
      description: 'Analytical thinking, debugging complex issues, and implementing efficient solutions.'
    }
  ];

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
}
