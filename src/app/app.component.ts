import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  Sanya: string = 'Сань ты пидор, тебя не взламывали';
  Sanya2: string = 'Та невже';
  isTextVisible: boolean = false;
  isTextVisible2: boolean = false;
  showText() {
    this.isTextVisible = true;
  }

  showText2() {
    this.isTextVisible2 = true;
  }

}
