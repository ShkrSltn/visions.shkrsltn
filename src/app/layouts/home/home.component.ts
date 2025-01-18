// home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Project } from '../../shared/interfaces/project.interface';
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
import { ProjectsService } from '../../core/services/projects.service';
import { SKILLS } from '../../shared/data/skills.data';


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

  // Проекты
  projects: Project[] = [];

  // Заменяем определение массива skills на импорт
  skills: Skill[] = SKILLS;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projectsService.getFeaturedProjects().subscribe(
      projects => this.projects = projects
    );
  }

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
