import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import moment from 'moment';
import 'moment/locale/es';

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
    this.anyoActual = moment().year();
    return this.anyoActual;
  }

}
