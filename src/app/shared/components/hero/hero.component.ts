import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() translateKeys: boolean = false;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    if (this.translateKeys && this.title) {
      this.translate.get(this.title).subscribe((translatedTitle) => {
        this.title = translatedTitle;
      });
    }

    if (this.translateKeys && this.subtitle) {
      this.translate.get(this.subtitle).subscribe((translatedSubtitle) => {
        this.subtitle = translatedSubtitle;
      });
    }
  }
}
