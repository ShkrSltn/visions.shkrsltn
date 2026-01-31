import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageService } from './language.service';
import { switchMap } from 'rxjs/operators';

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
      switchMap(lang => {
        return this.http.get<SkillsData>(`/data/${lang}/skills.json`);
      })
    );
  }
}