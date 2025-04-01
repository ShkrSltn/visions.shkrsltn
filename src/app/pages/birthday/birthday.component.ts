import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-birthday',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './birthday.component.html',
  styleUrl: './birthday.component.scss'
})
export class BirthdayComponent implements OnInit, OnDestroy {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  countdownEnded: boolean = false;
  isBirthdayToday: boolean = false;


  currentPhotoIndex: number = 0;
  private targetDate: Date = new Date('2025-04-02T00:00:00');
  private timerInterval: any;
  private slideShowInterval: any;

  ngOnInit(): void {
    this.updateCountdown();
    this.timerInterval = setInterval(() => {
      this.updateCountdown();
    }, 1000);


    // Проверяем, наступил ли день рождения
    const today = new Date();
    const birthdayDate = new Date(2024, 5, 15); // 15 июня 2024 (месяцы начинаются с 0)

    // Сравниваем только день и месяц
    this.isBirthdayToday =
      today.getDate() >= birthdayDate.getDate() &&
      today.getMonth() >= birthdayDate.getMonth() &&
      today.getFullYear() >= birthdayDate.getFullYear();
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    if (this.slideShowInterval) {
      clearInterval(this.slideShowInterval);
    }
  }

  private updateCountdown(): void {
    const currentDate = new Date();
    const difference = this.targetDate.getTime() - currentDate.getTime();

    if (difference > 0) {
      this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
      this.countdownEnded = false;
    } else {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      this.countdownEnded = true;
    }
  }


}
