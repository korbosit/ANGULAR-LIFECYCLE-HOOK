import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent implements OnChanges {
  title: string = 'Demo Component';
  @Input() message: string;
  constructor() {
    console.log('Demo component constructor called');
    console.log(this.title);
    console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Hook called');
    console.log(changes);
  }
}
