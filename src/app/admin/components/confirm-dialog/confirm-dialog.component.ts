import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
  private confirmSubject = new Subject<boolean>();
  isOpen = false;
  message = '';
  title = 'Confirm';

  open(title: string, message: string): Promise<boolean> {
    this.title = title;
    this.message = message;
    this.isOpen = true;

    return new Promise<boolean>(resolve => {
      const sub = this.confirmSubject.subscribe(result => {
        sub.unsubscribe();
        this.isOpen = false;
        resolve(result);
      });
    });
  }

  confirm(): void { this.confirmSubject.next(true); }
  cancel(): void { this.confirmSubject.next(false); }
}

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss',
})
export class ConfirmDialogComponent {
  constructor(public dialogService: ConfirmDialogService) {}
}
