import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageService } from './language.service';
import { switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

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
export class SkillsService {
  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {}

  getSkills(): Observable<SkillsData> {
    return this.languageService.currentLang$.pipe(
      switchMap(lang =>
        this.http.get<SkillsData>(
          `${environment.apiUrl}/skills/by-language/${lang}`
        )
      )
    );
  }
}