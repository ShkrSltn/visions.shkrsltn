import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageService } from './language.service';
import { switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  details: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details: string[];
}

export interface Language {
  name: string;
  level: string;
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
  languages: Language[];
  contact: Contact;
  references: any[];
  hobbies: any[];
  certifications: any[];
}

@Injectable({
  providedIn: 'root'
})
export class CvDataService {
  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {}

  getCvData(): Observable<CVData> {
    return this.languageService.currentLang$.pipe(
      switchMap(lang =>
        this.http.get<CVData>(
          `${environment.apiUrl}/cv/by-language/${lang}`
        )
      )
    );
  }
}