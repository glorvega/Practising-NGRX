import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  contador: number;

  constructor() {
    this.contador = 10;
  }

  incrementar() {
    return (this.contador += 1);
    //this.contador++
  }

  decrementar() {
    return (this.contador -= 1);
    //this.contador--
  }
}
