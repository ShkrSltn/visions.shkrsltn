import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CVService } from '../../services/cv.service';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-virtual-cv',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, ScrollAnimateDirective],
  templateUrl: './virtual-cv.component.html',
  styleUrl: './virtual-cv.component.scss'
})
export class VirtualCvComponent implements OnInit {
  cvData: any = {
    contact: {},
    skills: {
      advanced: [],
      intermediate: [],
      beginner: [],
      basic: []
    },
    languages: [],
    references: [],
    hobbies: [],
    workExperience: [],
    education: [],
    certifications: []
  };
  currentDate = new Date();
  dataLoaded = false;

  private destroyRef = inject(DestroyRef);

  constructor(private cvService: CVService) {}

  ngOnInit() {
    this.cvService.getCVData()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(data => {
        this.cvData = data;
        this.dataLoaded = true;
      });
  }

  downloadPdfCV() {
    const link = document.createElement('a');
    link.href = '/images/CVs/Sultanov__CV__Minimal.pdf';
    link.download = 'Shakir_Sultanov_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
