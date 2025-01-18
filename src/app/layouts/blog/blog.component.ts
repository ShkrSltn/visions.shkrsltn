import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar, faUser, faClock, faTag, faNewspaper } from '@fortawesome/free-solid-svg-icons';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  imageUrl?: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  // Иконки
  faCalendar = faCalendar;
  faUser = faUser;
  faClock = faClock;
  faTag = faTag;
  faNewspaper = faNewspaper;

  // Демо данные для блога
  blogPosts: BlogPost[] = [
   /*  {
      id: 1,
      title: 'Getting Started with Angular 17',
      excerpt: 'Learn about the latest features in Angular 17 and how to implement them in your projects.',
      author: 'John Doe',
      date: '2024-03-15',
      readTime: '5 min',
      tags: ['Angular', 'Web Development', 'TypeScript'],
      imageUrl: 'assets/images/blog/angular.jpg'
    },
    {
      id: 2,
      title: 'Modern CSS Techniques',
      excerpt: 'Explore modern CSS techniques and best practices for creating responsive layouts.',
      author: 'Jane Smith',
      date: '2024-03-10',
      readTime: '7 min',
      tags: ['CSS', 'Web Design', 'Frontend'],
      imageUrl: 'assets/images/blog/css.jpg'
    },
    {
      id: 3,
      title: 'Advanced JavaScript Concepts',
      excerpt: 'Learn about advanced JavaScript concepts and how to implement them in your projects.',
      author: 'Alice Johnson',
      date: '2024-03-05',
      readTime: '10 min',
      tags: ['JavaScript', 'Web Development', 'Performance'],
      imageUrl: 'assets/images/blog/javascript.jpg'
    } */
    // Добавьте больше постов по необходимости
  ];

  hasImage(post: BlogPost): boolean {
    return !!post.imageUrl;
  }
}
