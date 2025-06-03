import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroComponent, TranslateModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent implements OnInit, OnDestroy {
  currentTime: string = '';
  timerSeconds = 0;
  timerRunning = false;
  private clockInterval?: number;
  private timerInterval?: number;

  ngOnInit() {
    this.updateTime();
    this.clockInterval = window.setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy() {
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
    }
    this.stopTimer();
  }

  updateTime() {
    this.currentTime = new Date().toLocaleTimeString();
  }

  startTimer() {
    if (!this.timerRunning) {
      this.timerRunning = true;
      this.timerInterval = window.setInterval(() => this.timerSeconds++, 1000);
    }
  }

  stopTimer() {
    if (this.timerRunning) {
      this.timerRunning = false;
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
      }
    }
  }

  resetTimer() {
    this.stopTimer();
    this.timerSeconds = 0;
  }

  formatTimer(): string {
    const hrs = Math.floor(this.timerSeconds / 3600)
      .toString()
      .padStart(2, '0');
    const mins = Math.floor((this.timerSeconds % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const secs = (this.timerSeconds % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  }
}
