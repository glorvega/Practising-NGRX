import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent {
  @Input() contador!: number;
  @Output() contadorChanged = new EventEmitter<number>();

  constructor() {}

  multiplicar() {
    this.contador *= 2;
    this.contadorChanged.emit(this.contador);
  }

  dividir() {
    this.contador /= 2;
    this.contadorChanged.emit(this.contador);
  }

  resetNieto(nuevoContador: number) {
    this.contador = nuevoContador;
    this.contadorChanged.emit(this.contador);
  }
}
