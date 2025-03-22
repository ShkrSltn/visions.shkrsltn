import { Component, AfterViewInit, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CVService } from '../../services/cv.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-virtual-cv',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './virtual-cv.component.html',
  styleUrl: './virtual-cv.component.scss'
})
export class VirtualCvComponent implements AfterViewInit, OnInit {
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

  constructor(
    private http: HttpClient,
    private cvService: CVService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.loadCvData();
  }

  loadCvData() {
    this.cvService.getCVData().subscribe(data => {
      this.cvData = data;
      this.dataLoaded = true;
      // Проверяем видимость элементов после загрузки данных
      setTimeout(() => this.checkVisibility(), 100);
    });
  }

  ngAfterViewInit() {
    // Animation for elements on load
    const animatedElements = document.querySelectorAll('.animate-in');
    animatedElements.forEach((element, index) => {
      (element as HTMLElement).style.setProperty('--animation-order', index.toString());
    });

    // Initial check for visible elements
    this.checkVisibility();
  }

  @HostListener('window:scroll')
  checkVisibility() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(element => {
      const position = element.getBoundingClientRect();

      // If element is visible in viewport
      if (position.top < window.innerHeight * 0.8) {
        element.classList.add('visible');
      }
    });
  }

  downloadPdfCV() {
    // Create a link element
    const link = document.createElement('a');

    // Set the href to the path of the PDF file
    link.href = './assets/images/CVs/Sultanov__CV__Minimal.pdf';

    // Set download attribute to suggest filename
    link.download = 'Shakir_Sultanov_CV.pdf';

    // Append to the document
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up
    document.body.removeChild(link);
  }
}