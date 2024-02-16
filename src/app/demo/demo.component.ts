import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  ElementRef,
  ViewChild,
  DoCheck,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent implements OnChanges, OnInit {
  title: string = 'Demo Component';
  @Input() message: string;
  @ViewChild('temp') tempPara: ElementRef;
  constructor() {
    console.log('Demo component constructor called');
    // console.log(this.title);
    // console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Hook called');
    // console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit Hook called');
    // console.log(this.tempPara.nativeElement.innerHTML);
  }

  DoCheck() {
    console.log('DoCheck Hook called');
    // console.log(this.tempPara.nativeElement.innerHTML);
  }
}
