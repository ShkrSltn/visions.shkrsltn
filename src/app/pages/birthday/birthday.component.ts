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

  // Массив с путями к фотографиям Алиша
  photos: string[] = [
    'assets/alish/photo1.jpg',
    'assets/alish/photo2.jpg',
    'assets/alish/photo3.jpg',
    'assets/alish/photo4.jpg',
    'assets/alish/photo5.jpg',
    'assets/alish/photo6.jpg',
    'assets/alish/photo7.jpg',
    'assets/alish/photo8.jpg',
    'assets/alish/photo9.jpg',
    'assets/alish/photo10.jpg',
    'assets/alish/photo11.jpg',
    'assets/alish/photo12.jpg',
    'assets/alish/photo13.jpg',
    'assets/alish/photo14.jpg',

    // Добавьте больше фотографий по необходимости
  ];

  currentPhotoIndex: number = 0;
  private targetDate: Date = new Date('2025-04-02T00:00:00');
  private timerInterval: any;
  private slideShowInterval: any;

  ngOnInit(): void {
    this.updateCountdown();
    this.timerInterval = setInterval(() => {
      this.updateCountdown();
    }, 1000);

    // Запускаем слайд-шоу
    this.startSlideShow();
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

  private startSlideShow(): void {
    // Меняем фотографию каждые 5 секунд
    this.slideShowInterval = setInterval(() => {
      this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.photos.length;
    }, 5000);
  }

  // Метод для ручного переключения фотографий
  changePhoto(direction: number): void {
    this.currentPhotoIndex = (this.currentPhotoIndex + direction + this.photos.length) % this.photos.length;
  }
}
