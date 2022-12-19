import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss'],
})
export class NietoComponent {
  @Input() contador!: number;
  @Output() contadorChanged2 = new EventEmitter<number>();

  constructor() {}

  reset() {
    this.contador = 0;
    this.contadorChanged2.emit(0);
  }
}
