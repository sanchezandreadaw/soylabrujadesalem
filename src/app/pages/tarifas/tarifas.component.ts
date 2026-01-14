import { Component } from '@angular/core';
import { FooterComponent } from "../footer-component/footer-component.component";
import { HeaderComponent } from '../header-component/header-component.component';

@Component({
  selector: 'app-tarifas',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './tarifas.component.html',
  styleUrl: './tarifas.component.css'
})
export class TarifasComponent {

}
