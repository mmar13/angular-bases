import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {


  public counter: number = 10;
  public initualCounterValue = 10;

  operar(valor: number): void {
    this.counter += valor;
  }

  reset(): void {
    this.counter = this.initualCounterValue;
  }
}
