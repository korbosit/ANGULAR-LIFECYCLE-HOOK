import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {
  title: string = 'Demo Component';
  @Input() message: string = 'Hello';
  constructor() {
    console.log('Demo component constructor called');
    console.log(this.title);
    console.log(this.message);
  }
}
