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
      degree: 'Bachelor of Computer Engineering',
      institution: 'Odesa I.I.Mechnikov National University',
      period: '2018 - 2022',
      description: 'Specialization in software development and information technology. We learned bases of programming, algorithms, data structures, databases, networks, etc. Lots of math, lots of theory and more. And I was a good student, I was a good student, I was a good student. You said it 3 times, so its true.'
    },
    {
      degree: 'Alumni',
      institution: 'Powercoders',
      period: '2024.04 - 2024.08',
      description: 'Powercoders its a non-profit organization that helps refugees to learn programming and find a job in Switzerland. I had chance to learn a lot of about technologies and programming. And more important, I had chance to meet a lot of people from different cultures and backgrounds. It was very great adventure.'
    }
  ];

  experience: Experience[] = [
    {
      position: 'Pratikant',
      company: 'BFH',
      period: '2024.08 - Present',
      description: 'Participation in research projects, development of software for non-profit projects. Its a nice feeling to work on projects that do not have an idea to make money, but to help people, I love it. ',
      technologies: ['Python', 'FastAPI', 'Docker', 'ML']
    }
  ];

  interests: Interest[] = [
    {
      name: 'Programming',
      icon: faCode,
      description: 'Learning new technologies and approaches. I just love feeling when I realize that I can do something that I never thought I could do.'
    },
    {
      name: 'Books',
      icon: faBook,
      description: 'Mostly any kind of books, but I love psychology most, because I have curious mind and I want to understand how people think and behave.'
    },
    {
      name: 'Movies and series',
      icon: faFilm,
      description: 'I mean, I do not understand people who not like movies. I love watching movies, I love analyzing them, I love discussing them. I love everything about movies.'
    },
    {
      name: 'Games',
      icon: faGamepad,
      description: 'Games with interesting stories, kind of same as movies, but here you can be a part of the story.'
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
