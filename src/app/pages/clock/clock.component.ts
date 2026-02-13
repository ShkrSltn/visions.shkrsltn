import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss',
  host: {
    '[class.timer-running]': 'timerRunning'
  }
})
export class ClockComponent implements OnInit, OnDestroy {
  currentTime = '';
  timerSeconds = 0;
  timerRunning = false;
  private clockInterval?: number;
  private timerInterval?: number;
  private audioContext: AudioContext | null = null;

  ngOnInit() {
    this.updateTime();
    this.clockInterval = window.setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy() {
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
    }
    this.stopTimer();
    this.audioContext?.close();
    this.audioContext = null;
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  startTimer() {
    if (!this.timerRunning) {
      this.timerRunning = true;
      this.timerInterval = window.setInterval(() => {
        this.timerSeconds++;
        this.playBeep();
      }, 1000);
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

  getFormattedHours(): string {
    return Math.floor(this.timerSeconds / 3600).toString().padStart(2, '0');
  }

  getFormattedMinutes(): string {
    return Math.floor((this.timerSeconds % 3600) / 60).toString().padStart(2, '0');
  }

  getFormattedSeconds(): string {
    return (this.timerSeconds % 60).toString().padStart(2, '0');
  }

  formatTimer(): string {
    const hrs = this.getFormattedHours();
    const mins = this.getFormattedMinutes();
    const secs = this.getFormattedSeconds();
    return `${hrs}:${mins}:${secs}`;
  }

  private getAudioContext(): AudioContext | null {
    if (!this.audioContext) {
      try {
        this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      } catch {
        return null;
      }
    }
    return this.audioContext;
  }

  private playBeep() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.frequency.value = 800;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.1);
    } catch {
      // Fallback silently
    }
  }
}
