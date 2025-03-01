import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  @Input() title: string = 'Featured Projects';
  @Input() projects: Project[] = [];
  @Input() displayMode: 'compact' | 'full' = 'full';
  @Input() maxTechnologies: number = 3;
}
