import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatResponse {
  choices: {
    message: ChatMessage;
    finish_reason: string;
    index: number;
  }[];
  created: number;
  id: string;
  model: string;
  object: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: string;
  description: string;
}

export interface SkillsData {
  frontendSkills: Skill[];
  backendSkills: Skill[];
  otherSkills: Skill[];
  techStack: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AiChatService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private model = 'gpt-4o-mini'; // Можно изменить на другую модель при необходимости
  private projectsData: { featuredProjects: Project[] } | null = null;
  private skillsData: SkillsData | null = null;

  // База знаний о вас
  private personalInfo = `
  Name: Shakir Sultanov
  Age: 24
  Nationality: Meskhetian Turk from Ukraine, now living in Switzerland
  Email: sultanovshakir12@gmail.com
  Phone: +41 76 454 74 13
  Location: Switzerland, Zurich

  Education:
  - Graduated from National Mechnikov University in Odessa in 2023

  Professional Skills:
  - Frontend: HTML5, CSS3, JavaScript, TypeScript, Angular, Vue.js, React (basic)
  - Backend: Python, FastAPI, Java, Spring Boot, C#
  - Other: Git, Docker, CI/CD, Google Cloud, RESTful APIs

  About Me:
  I'm a fullstack developer who loves IT and creating cool things. I was born and raised in a small village in Ukraine. I've always been interested in computers and how they work. After graduating from university in 2023, I moved to Switzerland where I currently live.

  I believe in simplicity and continuous learning. I enjoy building clean, efficient solutions that solve real problems.

  Interests:
  - Reading books
  - Watching films and TV series
  - Psychology
  - Traveling

  GitHub: https://github.com/ShkrSltn
  LinkedIn: https://www.linkedin.com/in/shkrsltn/

  About Ken Ritley:
  Ken Ritley is my manager, an American, and the best boss, manager, and professor that exists on Earth. He's incredibly supportive, knowledgeable, and an excellent mentor.
  `;

  constructor(private http: HttpClient) {
    // Загружаем данные при инициализации сервиса
    this.loadData();
  }

  private loadData(): void {
    // Cache the observables to avoid multiple HTTP requests
    const projectsRequest = this.http.get<{ featuredProjects: Project[] }>('assets/data/projects.json').pipe(
      map(data => {
        this.projectsData = data;
        return data;
      })
    );

    const skillsRequest = this.http.get<SkillsData>('assets/data/skills.json').pipe(
      map(data => {
        this.skillsData = data;
        return data;
      })
    );

    forkJoin({
      projects: projectsRequest,
      skills: skillsRequest
    }).subscribe();
  }

  private getProjectsInfo(): string {
    if (!this.projectsData) return '';

    return `
    Projects:
    ${this.projectsData.featuredProjects.map(project => `
    - ${project.title}: ${project.description}
      Technologies: ${project.technologies.join(', ')}
      Demo: ${project.demoLink}
      Code: ${project.codeLink}
    `).join('')}
    `;
  }

  private getSkillsInfo(): string {
    if (!this.skillsData) return '';

    return `
    Skills:

    Frontend Skills:
    ${this.skillsData.frontendSkills.map(skill => `
    - ${skill.name} (Level: ${skill.level})
      ${skill.description}
    `).join('')}

    Backend Skills:
    ${this.skillsData.backendSkills.map(skill => `
    - ${skill.name} (Level: ${skill.level})
      ${skill.description}
    `).join('')}

    Other Skills:
    ${this.skillsData.otherSkills.map(skill => `
    - ${skill.name} (Level: ${skill.level})
      ${skill.description}
    `).join('')}

    Tech Stack: ${this.skillsData.techStack.join(', ')}
    `;
  }

  chat(userMessage: string): Observable<ChatResponse> {
    // Если данные еще не загружены, загрузим их перед отправкой запроса
    if (!this.projectsData || !this.skillsData) {
      return this.loadDataAndSendRequest(userMessage);
    }

    return this.sendChatRequest(userMessage);
  }

  private loadDataAndSendRequest(userMessage: string): Observable<ChatResponse> {
    const projectsRequest = this.http.get<{ featuredProjects: Project[] }>('./assets/data/projects.json').pipe(
      map(data => {
        this.projectsData = data;
        return data;
      })
    );

    const skillsRequest = this.http.get<SkillsData>('./assets/data/skills.json').pipe(
      map(data => {
        this.skillsData = data;
        return data;
      })
    );

    return forkJoin({
      projects: projectsRequest,
      skills: skillsRequest
    }).pipe(
      switchMap(() => this.sendChatRequest(userMessage))
    );
  }

  private sendChatRequest(userMessage: string): Observable<ChatResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.openaiApiKey}`
    });

    // Prepare context information only once
    const systemContent = this.prepareSystemContent();

    const messages: ChatMessage[] = [
      {
        role: 'system',
        content: systemContent
      },
      {
        role: 'user',
        content: userMessage
      }
    ];

    return this.http.post<ChatResponse>(this.apiUrl, {
      model: this.model,
      messages: messages,
      max_tokens: 500
    }, { headers });
  }

  private prepareSystemContent(): string {
    const projectsInfo = this.getProjectsInfo();
    const skillsInfo = this.getSkillsInfo();

    return `You are an AI assistant for Shakir Sultanov's personal website.
    You should ONLY answer questions about Shakir based on the following information.
    If asked about topics not related to Shakir or his skills, politely redirect the conversation back to Shakir.
    Do not make up information that is not provided. If you don't know something about Shakir, say so.
    Keep responses concise and professional. But be also funny and friendly.

    And your name is Shakir behave like you are Shakir. And when you answer from first person.

    Format your responses in a clean, readable way. Use HTML tags for formatting:
    - Use <strong> for bold text
    - Use <em> for italic text
    - Use <p> for paragraphs instead of lists
    - Use <br> for line breaks
    - Use <h4> for small headings within your response

    Do not use <ul>, <ol>, or <li> tags for lists. Instead, use <p> tags with dash (-) or numbers.

    ${this.personalInfo}

    ${projectsInfo}

    ${skillsInfo}`;
  }
}
