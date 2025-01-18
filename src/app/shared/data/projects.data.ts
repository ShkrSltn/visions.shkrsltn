import { Project } from '../interfaces/project.interface';

export const FEATURED_PROJECTS: Project[] = [
    {
        title: 'visions.shkrsltn',
        description: 'Modern, responsive portfolio website built with Angular and TailwindCSS, featuring animations and interactive elements',
        technologies: ['Angular', 'TypeScript', 'TailwindCSS', 'SCSS'],
        link: 'https://shkrsltn.dev',
        featured: true
    },
    {
        title: 'SAFI (Softwarebasierte Analyse und Förderung sozialer Integration)',
        description: 'SAFI visualizes social relationships, well-being and the climate in school classes and thus supports teachers in promoting social processes.',
        technologies: ['Vue.js', 'JavaScript/TypeScript', 'HTML/CSS', 'D3.js','FastAPI/Python','PostgreSQL','Docker','GitLab/Git','Google Cloud Platform'],
        link: 'https://github.com/ShkrSltn/dashboard',
        featured: true
    },
    {
        title: 'FaciMath',
        description: 'Hobby project about generating math problems and solving them.',
        technologies: ['Angular', 'TypeScript', 'HTML/CSS','Spring Boot/Java', 'PostgreSQL'],
        link: 'https://github.com/ShkrSltn/faci-math2.0/tree/main',
        featured: true
    },
    {
        title: 'Green Kidney App',
        description: 'Interactive quiz application focused on eco-friendly kidney health, developed for a medical conference in Bangalore, India',
        technologies: ['Vue.js/JavaScript', 'TypeScript', 'FastAPI/Python', 'Docker'],
        link: 'private-repository',
        featured: true
    },
    {
        title: 'Carpool App',
        description: 'A ride-sharing solution developed for the Schwyz Canton Administration during the Mountain Hackathon 2024 in Schwyz, Switzerland',
        technologies: ['React', 'TypeScript', 'Node.js', 'Docker'],
        link: 'https://github.com/ShkrSltn/carpool-app-vue',
        featured: true
    }
];

export const ALL_PROJECTS: Project[] = [
    ...FEATURED_PROJECTS,
  /*   {
        title: 'E-commerce',
        description: 'Freelance project: Admin dashboard for small local business with inventory management and order tracking',
        technologies: ['React', 'JavaScript', 'CSS', 'Material-UI'],
        link: 'https://github.com/ShkrSltn/dashboard',
        featured: true
    },
    {
        title: 'E-commerce',
        description: 'Freelance project: Admin dashboard for small local business with inventory management and order tracking',
        technologies: ['React', 'JavaScript', 'CSS', 'Material-UI'],
        link: 'https://github.com/ShkrSltn/dashboard',
        featured: true
    },
    {
        title: 'E-commerce',
        description: 'Freelance project: Admin dashboard for small local business with inventory management and order tracking',
        technologies: ['React', 'JavaScript', 'CSS', 'Material-UI'],
        link: 'https://github.com/ShkrSltn/dashboard',
        featured: true
    } */
    // Здесь можно добавить дополнительные проекты, которые не отображаются на главной странице
];
