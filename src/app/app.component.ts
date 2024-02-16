import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ANGULAR-LIFECYCLE-HOOK';
  inputVal: string = '';

  constructor() {
    console.log('App component constructor called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Hook of AppComponent called');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Hook of AppComponent called');
  }

  onBtnCkick(inputEl: HTMLInputElement) {
    this.inputVal = inputEl.value;
  }
}
