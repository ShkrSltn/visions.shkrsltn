// src/app/shared/components/skill-card/skill-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Skill } from '../../interfaces/skill.interface';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div class="skill-card relative group"
         (mouseenter)="isHovered = true"
         (mouseleave)="isHovered = false"
         [@cardState]="isHovered ? 'hovered' : 'normal'">
      
      <div class="flex items-center gap-2 px-4 py-2 bg-neutral-800/30 rounded-full text-sm 
                   transition-all duration-300 backdrop-blur-sm">
        <fa-icon [icon]="skill.icon" [class]="skill.type === 'soft' ? 'text-blue-400' : 'text-emerald-400'"></fa-icon>
        <span>{{skill.name}}</span>
      </div>

      @if (isHovered) {
        <div [@detailsState]
             class="absolute z-10 left-1/2 -translate-x-1/2 bottom-[calc(100%+10px)] 
                    w-64 p-4 bg-neutral-800/70 backdrop-blur-sm rounded-xl 
                    shadow-lg"
             [class]="skill.type === 'soft' ? 'border border-blue-500/20' : 'border border-emerald-500/20'">
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span [class]="skill.type === 'soft' ? 'text-blue-400 font-medium' : 'text-emerald-400 font-medium'">Level:</span>
              <span class="text-sm">{{skill.details.level}}</span>
            </div>
            <div>
              <span [class]="skill.type === 'soft' ? 'text-blue-400 font-medium' : 'text-emerald-400 font-medium'">Experience:</span>
              <p class="text-sm mt-1">{{skill.details.experience}}</p>
            </div>
            <div>
              <span [class]="skill.type === 'soft' ? 'text-blue-400 font-medium' : 'text-emerald-400 font-medium'">Details:</span>
              <p class="text-sm mt-1">{{skill.details.description}}</p>
            </div>
            @if (skill.details.projects.length) {
              <div>
                <span [class]="skill.type === 'soft' ? 'text-blue-400 font-medium' : 'text-emerald-400 font-medium'">Related Projects:</span>
                <ul class="list-disc list-inside text-sm mt-1">
                  @for (project of skill.details.projects; track project) {
                    <li>{{project}}</li>
                  }
                </ul>
              </div>
            }
          </div>
          <div class="absolute -bottom-2 left-1/2 -translate-x-1/2
                      w-4 h-4 bg-neutral-800/70 rotate-45"
               [class]="skill.type === 'soft' ? 'border-r border-b border-blue-500/20' : 'border-r border-b border-emerald-500/20'"></div>
        </div>
      }
    </div>
  `,
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