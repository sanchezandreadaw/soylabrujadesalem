import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'footer-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer-component.component.html',
  styles: ``
})
export class FooterComponent {

  anyoActual!:number;

  constructor() {}

  getAnyoActual(){
    const currentDate = new Date();
    this.anyoActual = currentDate.getFullYear();
    return this.anyoActual;
  }

}
