import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Skill } from '../../interfaces/skill.interface';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './skill-card.component.html',
  styles: [`
    :host {
      display: inline-block;
    }
    .skill-card {
      position: relative;
    }
  `],
  animations: [
    trigger('cardState', [
      state('normal', style({
        transform: 'scale(1)',
      })),
      state('hovered', style({
        transform: 'scale(1.05)',
      })),
      transition('normal <=> hovered', animate('200ms ease-in-out'))
    ]),
    trigger('detailsState', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(5px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class SkillCardComponent {
  @Input({ required: true }) skill!: Skill;
  isHovered = false;
}