import { Project } from '../interfaces/project.interface';

export const FEATURED_PROJECTS: Project[] = [
    {
        title: 'Personal Portfolio Website',
        description: 'Modern, responsive portfolio website built with Angular and TailwindCSS, featuring animations and interactive elements',
        technologies: ['Angular', 'TypeScript', 'TailwindCSS', 'SCSS'],
        link: 'https://shkrsltn.dev',
        featured: true
    },
    {
        title: 'E-commerce Dashboard',
        description: 'Freelance project: Admin dashboard for small local business with inventory management and order tracking',
        technologies: ['React', 'JavaScript', 'CSS', 'Material-UI'],
        link: 'https://github.com/ShkrSltn/dashboard',
        featured: true
    },
    {
        title: 'University Projects Platform',
        description: 'Platform for managing and showcasing student projects at Odesa Mechnikov National University',
        technologies: ['JavaScript', 'HTML', 'CSS', 'PostgreSQL'],
        link: 'https://github.com/ShkrSltn/uni-projects',
        featured: true
    },
    {
        title: 'BFH Research Assistant Tools',
        description: 'Internal tools development for research department at Bern University of Applied Sciences',
        technologies: ['React', 'TypeScript', 'Node.js', 'Docker'],
        link: 'private-repository',
        featured: true
    },
    {
        title: 'BFH Research',
        description: 'Internal tools development for research department at Bern University of Applied Sciences',
        technologies: ['React', 'TypeScript', 'Node.js', 'Docker'],
        link: 'private-repository',
        featured: true
    },
    {
        title: 'E-commerce',
        description: 'Freelance project: Admin dashboard for small local business with inventory management and order tracking',
        technologies: ['React', 'JavaScript', 'CSS', 'Material-UI'],
        link: 'https://github.com/ShkrSltn/dashboard',
        featured: true
    }
];

export const ALL_PROJECTS: Project[] = [
    ...FEATURED_PROJECTS,
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
    }
    // Здесь можно добавить дополнительные проекты, которые не отображаются на главной странице
]; 