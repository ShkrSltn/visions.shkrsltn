// home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleDirective } from '../../shared/directives/ripple.directive';
import { trigger, transition, style, animate } from '@angular/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Skill } from '../../shared/interfaces/skill.interface';
import {
  faAngular,
  faJs,
  faNode,
  faPython,
  faDocker,
  faGitAlt,
  faJava,
  faHtml5,
  faCss3,
  faReact,
  faVuejs
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faUsers,
  faBrain,
  faComments,
  faTasks,
  faChalkboardTeacher,
  faArrowRight,
  faPaperPlane,
  faPuzzlePiece,
  faCloud,
  faCogs
} from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { SkillCardComponent } from '../../shared/components/skill-card/skill-card.component';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}


interface ContactData {
  name: string;
  email: string;
  message: string;
}

interface SocialLink {
  icon: [string, string];
  url: string;
  label: string;
}

interface Section {
  title: string;
  subtitle: string;
}

interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  location: string;
}

interface Tag {
  label: string;
  color: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RippleDirective,
    FontAwesomeModule,
    FormsModule,
    SkillCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  // Персональная информация
  personalInfo: PersonalInfo = {
    name: 'Shakir Sultanov',
    title: 'Fullstack developer',
    description: 'Fullstack developer, just a guy who loves to code and learn new things. Oh, and I love to read psychology books. Oh, and watch good, very good movies and series.',
    location: 'Odesa/Zürich'
  };

  // Секции
  sections = {
    about: {
      title: 'me:',
      description: 'Don\'t feel bad, because you don\'t deserve it.'
    },
    projects: {
      title: 'Projects',
      emptyMessage: 'No projects available at the moment'
    },
    contact: {
      title: 'Contact me',
      description: 'Interested in collaboration or have questions? Feel free to reach out through any convenient channel.'
    }
  };

  // Социальные ссылки
  socialLinks: SocialLink[] = [
    {
      icon: ['fas', 'envelope'],
      url: 'mailto:sultanovshakir12@gmail.com',
      label: 'sultanovshakir12@gmail.com'
    },
    {
      icon: ['fab', 'linkedin'],
      url: 'https://linkedin.com/in/shkrsltn',
      label: 'LinkedIn Profile'
    },
    {
      icon: ['fab', 'github'],
      url: 'https://github.com/ShkrSltn',
      label: 'GitHub Profile'
    }
  ];

  // Проекты (существующий код)
  projects: Project[] = [
    {
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website built with Angular and TailwindCSS, featuring animations and interactive elements',
      technologies: ['Angular', 'TypeScript', 'TailwindCSS', 'SCSS'],
      link: 'https://shkrsltn.dev'
    },
    {
      title: 'E-commerce Dashboard',
      description: 'Freelance project: Admin dashboard for small local business with inventory management and order tracking',
      technologies: ['React', 'JavaScript', 'CSS', 'Material-UI'],
      link: 'https://github.com/ShkrSltn/dashboard'
    },
    {
      title: 'University Projects Platform',
      description: 'Platform for managing and showcasing student projects at Odesa Mechnikov National University',
      technologies: ['JavaScript', 'HTML', 'CSS', 'PostgreSQL'],
      link: 'https://github.com/ShkrSltn/uni-projects'
    },
    {
      title: 'BFH Research Assistant Tools',
      description: 'Internal tools development for research department at Bern University of Applied Sciences',
      technologies: ['React', 'TypeScript', 'Node.js', 'Docker'],
      link: 'private-repository'
    },
    {
      title: 'BFH Research',
      description: 'Internal tools development for research department at Bern University of Applied Sciences',
      technologies: ['React', 'TypeScript', 'Node.js', 'Docker'],
      link: 'private-repository'
    },
    {
      title: 'E-commerce',
      description: 'Freelance project: Admin dashboard for small local business with inventory management and order tracking',
      technologies: ['React', 'JavaScript', 'CSS', 'Material-UI'],
      link: 'https://github.com/ShkrSltn/dashboard'
    }
  ];

  // Навыки (существующий код)
  // Обновляем skills массив:
  skills: Skill[] = [
    {
      name: 'Angular',
      type: 'hard',
      icon: faAngular,
      details: {
        level: 'Advanced',
        experience: '2+ years',
        description: 'Development of complex web applications using Angular 17+, RxJS, NgRx',
        projects: ['Current Work Projects', 'Personal Portfolio']
      }
    },
    {
      name: 'Vue',
      type: 'hard',
      icon: faVuejs,
      details: {
        level: 'Advanced',
        experience: '2+ years',
        description: 'Creating interactive web applications with Vue 3, Vuex, Composition API',
        projects: ['E-commerce Dashboard', 'Client Projects']
      }
    },
    {
      name: 'Spring Boot',
      type: 'hard',
      icon: faJava,
      details: {
        level: 'Intermediate',
        experience: '1+ year',
        description: 'Development of REST APIs and microservices using Spring Boot',
        projects: ['Backend Services', 'API Development']
      }
    },
    {
      name: 'FastAPI',
      type: 'hard',
      icon: faPython,
      details: {
        level: 'Intermediate',
        experience: '1+ year',
        description: 'Building high-performance APIs using FastAPI and Python',
        projects: ['Data Processing API', 'Integration Services']
      }
    },
    {
      name: 'Docker',
      type: 'hard',
      icon: faDocker,
      details: {
        level: 'Intermediate',
        experience: '6+ months',
        description: 'Application containerization, creating Docker-compose configurations',
        projects: ['Microservices Deployment', 'Development Environments']
      }
    },
    {
      name: 'Cloud Services',
      type: 'hard',
      icon: faCloud,
      details: {
        level: 'Intermediate',
        experience: '6+ months',
        description: 'Working with GCP, application deployment and scaling',
        projects: ['Cloud Infrastructure', 'Production Deployments']
      }
    },
    {
      name: 'Git',
      type: 'hard',
      icon: faGitAlt,
      details: {
        level: 'Advanced',
        experience: '2+ years',
        description: 'Version control, branching strategies, code review',
        projects: ['All Projects']
      }
    },
    {
      name: 'CI/CD',
      type: 'hard',
      icon: faCogs,
      details: {
        level: 'Advanced',
        experience: '2+ years',
        description: 'Setting up pipelines in GitHub Actions and GitLab CI',
        projects: ['Automation Projects', 'Development Workflows']
      }
    },
    {
      name: 'HTML5',
      type: 'hard',
      icon: faHtml5,
      details: {
        level: 'Advanced',
        experience: '3+ years',
        description: 'Semantic markup, accessibility, SEO optimization',
        projects: ['All Frontend Projects']
      }
    },
    {
      name: 'CSS3',
      type: 'hard',
      icon: faCss3,
      details: {
        level: 'Advanced',
        experience: '3+ years',
        description: 'Responsive design, CSS Grid, Flexbox, animations',
        projects: ['UI Development', 'Personal Projects']
      }
    },
    {
      name: 'JavaScript',
      type: 'hard',
      icon: faJs,
      details: {
        level: 'Advanced',
        experience: '3+ years',
        description: 'ES6+, asynchronous programming, DOM manipulation',
        projects: ['Frontend Development', 'Web Applications']
      }
    },
    {
      name: 'Communication',
      type: 'soft',
      icon: faComments,
      details: {
        level: 'Advanced',
        experience: 'Ongoing',
        description: 'Effective communication in international teams',
        projects: ['Team Projects']
      }
    },
    {
      name: 'Problem Solving',
      type: 'soft',
      icon: faBrain,
      details: {
        level: 'Advanced',
        experience: 'Ongoing',
        description: 'Analytical thinking and solving complex technical challenges',
        projects: ['All Projects']
      }
    },
    {
      name: 'English',
      type: 'soft',
      icon: faComments,
      details: {
        level: 'Professional (B2-C1)',
        experience: '10+ years',
        description: 'Professional working proficiency, daily use in international work environment in Switzerland',
        projects: ['International Team Communication', 'Technical Documentation']
      }
    },
    {
      name: 'Turkish',
      type: 'soft',
      icon: faComments,
      details: {
        level: 'Native',
        experience: 'Lifetime',
        description: 'Native language, heritage language from family background',
        projects: ['Cultural Projects', 'Family Communication']
      }
    },
    {
      name: 'Russian',
      type: 'soft',
      icon: faComments,
      details: {
        level: 'Native',
        experience: 'Lifetime',
        description: 'Native proficiency, grew up speaking Russian in Ukraine',
        projects: ['Business Communication', 'Technical Writing']
      }
    },
    {
      name: 'Ukrainian',
      type: 'soft',
      icon: faComments,
      details: {
        level: 'Native',
        experience: 'Lifetime',
        description: 'Native proficiency, grew up in Ukraine',
        projects: ['Local Projects', 'Official Documentation']
      }
    },
    {
      name: 'German',
      type: 'soft',
      icon: faComments,
      details: {
        level: 'Basic (A1-A2)',
        experience: '1.5 years',
        description: 'Currently learning German since moving to Switzerland',
        projects: ['Daily Communication', 'Language Courses']
      }
    }
  ];


  // Форма контактов
  contactData: ContactData = {
    name: '',
    email: '',
    message: ''

  };

  // Геттеры для навыков остаются теми же
  get hardSkills(): Skill[] {
    return this.skills.filter(skill => skill.type === 'hard');
  }

  get softSkills(): Skill[] {
    return this.skills.filter(skill => skill.type === 'soft');
  }

  // Обработка формы
  onSubmit(): void {
    console.log('Form submitted:', this.contactData);

    // Добавим базовую валидацию
    if (!this.contactData.name || !this.contactData.email || !this.contactData.message) {
      console.error('Please fill in all fields');
      return;
    }

    // Здесь можно добавить отправку данных на сервер

    // Очистка формы после отправки
    this.contactData = {
      name: '',
      email: '',
      message: ''
    };
  }

  ngOnInit() {
    // Инициализация компонента если потребуется
  }

  faArrowRight = faArrowRight;
  faPaperPlane = faPaperPlane;

  // Добавь массив тегов
  tags: Tag[] = [
    {
      label: 'Fullstack Developer',
      color: 'emerald'
    },
    {
      label: 'Сhill guy',
      color: 'blue'
    },
    /*     {
          label: 'Bachelor of Science',
          color: 'purple'
        } */
  ];

  // Метод для получения стилей тега
  getTagStyles(color: string): { [key: string]: string } {
    const colors: { [key: string]: { bg: string; text: string } } = {
      emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
      blue: { bg: 'bg-blue-500/10', text: 'text-blue-400' },
      purple: { bg: 'bg-purple-500/10', text: 'text-purple-400' }
    };

    const colorSet = colors[color] || colors['emerald'];

    return {
      background: colorSet.bg,
      color: colorSet.text
    };
  }
}