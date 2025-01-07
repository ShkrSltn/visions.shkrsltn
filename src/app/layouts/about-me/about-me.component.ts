import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGraduationCap,
  faBriefcase,
  faCode,
  faBook,
  faFilm,
  faGamepad,
  faCoffee
} from '@fortawesome/free-solid-svg-icons';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

interface Interest {
  name: string;
  icon: any;
  description: string;
}

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {
  education: Education[] = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Odesa I.I.Mechnikov National University',
      period: '2019 - 2023',
      description: 'Specialization in software development and information technology'
    },
    {
      degree: 'Full Stack Development',
      institution: 'Bern University of Applied Sciences',
      period: '2023 - Present',
      description: 'In-depth study of modern web technologies and development practices'
    }
  ];

  experience: Experience[] = [
    {
      position: 'Full Stack Developer',
      company: 'Freelance',
      period: '2021 - Present',
      description: 'Development of web applications for various clients, from small businesses to startups',
      technologies: ['Angular', 'React', 'Node.js', 'PostgreSQL']
    },
    {
      position: 'Research Assistant',
      company: 'BFH',
      period: '2023 - Present',
      description: 'Participation in research projects, development of data analysis tools',
      technologies: ['Python', 'FastAPI', 'Docker', 'ML']
    }
  ];

  interests: Interest[] = [
    {
      name: 'Programming',
      icon: faCode,
      description: 'Learning new technologies and creating useful projects'
    },
    {
      name: 'Books',
      icon: faBook,
      description: 'Psychology, science fiction and technical literature'
    },
    {
      name: 'Movies',
      icon: faFilm,
      description: 'Art house, science fiction and documentaries'
    },
    {
      name: 'Games',
      icon: faGamepad,
      description: 'Strategy games and games with interesting storylines'
    },
    {
      name: 'Coffee',
      icon: faCoffee,
      description: 'Love good coffee and coffee culture'
    }
  ];

  // Icons
  faGraduationCap = faGraduationCap;
  faBriefcase = faBriefcase;

  yearsOfExperience: number = 0;
  projectsCompleted: number = 0;

  ngOnInit() {
    // Calculate experience since 2019
    const startYear = 2019;
    const currentYear = new Date().getFullYear();
    this.yearsOfExperience = currentYear - startYear;

    // Set the actual number of projects
    this.projectsCompleted = 15; // Example value
  }
}
