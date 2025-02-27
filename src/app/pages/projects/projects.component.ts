import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  featuredProjects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution with secure payment processing, user authentication, and responsive design. Features include product catalog, shopping cart, and order management.',
      image: 'assets/images/projects/ecommerce-placeholder.jpg',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
      demoLink: 'https://demo-ecommerce.example.com',
      codeLink: 'https://github.com/username/ecommerce-project',
      featured: true
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates and team collaboration features. Includes task assignment, progress tracking, and deadline notifications.',
      image: 'assets/images/projects/taskmanager-placeholder.jpg',
      technologies: ['React', 'Express', 'Socket.io', 'PostgreSQL', 'Redux'],
      demoLink: 'https://task-manager.example.com',
      codeLink: 'https://github.com/username/task-manager',
      featured: true
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization platform with interactive charts and customizable reporting features. Provides insights through real-time data analysis and exportable reports.',
      image: 'assets/images/projects/analytics-placeholder.jpg',
      technologies: ['TypeScript', 'D3.js', 'PostgreSQL', 'Express', 'Chart.js'],
      demoLink: 'https://analytics-dashboard.example.com',
      codeLink: 'https://github.com/username/analytics-dashboard',
      featured: true
    }
  ];

  otherProjects: Project[] = [
    {
      title: 'Weather Application',
      description: 'Real-time weather forecasting app with location detection and interactive maps. Provides hourly and weekly forecasts with visual representations.',
      image: 'assets/images/projects/weather-placeholder.jpg',
      technologies: ['JavaScript', 'OpenWeather API', 'Leaflet.js', 'HTML5', 'CSS3'],
      demoLink: 'https://weather-app.example.com',
      codeLink: 'https://github.com/username/weather-app',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills. Features responsive design, animations, and contact form integration.',
      image: 'assets/images/projects/portfolio-placeholder.jpg',
      technologies: ['Angular', 'SCSS', 'TypeScript', 'GitHub Pages', 'Responsive Design'],
      demoLink: 'https://portfolio.example.com',
      codeLink: 'https://github.com/username/portfolio',
      featured: false
    },
    {
      title: 'Recipe Finder',
      description: 'Recipe search application with filtering options and user favorites. Includes ingredient-based search and nutritional information.',
      image: 'assets/images/projects/recipe-placeholder.jpg',
      technologies: ['React', 'Food API', 'CSS Modules', 'LocalStorage', 'Responsive Design'],
      demoLink: 'https://recipe-finder.example.com',
      codeLink: 'https://github.com/username/recipe-finder',
      featured: false
    },
    {
      title: 'Fitness Tracker',
      description: 'Workout tracking application with progress visualization and goal setting. Includes exercise library and personalized workout plans.',
      image: 'assets/images/projects/fitness-placeholder.jpg',
      technologies: ['Vue.js', 'Firebase', 'Chart.js', 'PWA', 'Vuetify'],
      demoLink: 'https://fitness-tracker.example.com',
      codeLink: 'https://github.com/username/fitness-tracker',
      featured: false
    },
    {
      title: 'Chat Application',
      description: 'Real-time messaging platform with private and group chat functionality. Features include message encryption, file sharing, and user presence indicators.',
      image: 'assets/images/projects/chat-placeholder.jpg',
      technologies: ['React', 'Firebase', 'WebSockets', 'Redux', 'Material UI'],
      demoLink: 'https://chat-app.example.com',
      codeLink: 'https://github.com/username/chat-application',
      featured: false
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
