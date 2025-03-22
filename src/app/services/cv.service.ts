import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageService } from './language.service';
import { switchMap } from 'rxjs/operators';

export interface CVData {
  profile: string;
  skills: {
    advanced: string[];
    intermediate: string[];
    beginner: string[];
    basic: string[];
  };
  workExperience: WorkExperience[];
  education: Education[];
  certifications: Certification[];
  languages: Language[];
  references: Reference[];
  hobbies: Hobby[];
  contact: Contact;
}

export interface WorkExperience {
  period: string;
  title: string;
  location: string;
  responsibilities: string[];
}

export interface Education {
  period: string;
  degree: string;
  location: string;
  details: string[];
}

export interface Certification {
  degree: string;
  period: string;
  location: string;
  details: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface Reference {
  name: string;
  position: string;
  contact: string;
  website?: string;
  phone?: string;
}

export interface Hobby {
  name: string;
  description: string;
}

export interface Contact {
  nationality: string;
  birthdate: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  portfolio: string;
  github: string;
}

@Injectable({
  providedIn: 'root'
})
export class CVService {
  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {}

  getCVData(): Observable<CVData> {
    return this.languageService.currentLang$.pipe(
      switchMap(lang => {
        return this.http.get<CVData>(`./assets/data/${lang}/cv-data.json`);
      })
    );
  }
}