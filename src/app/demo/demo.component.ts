import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  ElementRef,
  ViewChild,
  DoCheck,
  AfterContentInit,
  ContentChild,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  title: string = 'Demo Component';
  @Input() message: string;
  @ViewChild('temp') tempPara: ElementRef;
  @ContentChild('temp') paraContent: ElementRef;
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

  ngDoCheck() {
    console.log('DoCheck Hook called');
    // console.log(this.tempPara.nativeElement.innerHTML);
    // console.log('In ngDoCheck', this.paraContent);
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit Hook called');
    // console.log(this.tempPara.nativeElement.innerHTML);
    // console.log('In ngAfterContentInit', this.paraContent.nativeElement);
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Hook called');
    // console.log('In ngAfterContentChecked', this.tempPara);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Hook called');
    // console.log('In ngAfterViewInit', this.tempPara);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Hook called');
    console.log(this.tempPara.nativeElement.textContent);
  }
}
