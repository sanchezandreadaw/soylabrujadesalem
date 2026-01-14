import { Component } from '@angular/core';
import { FooterComponent } from "../footer-component/footer-component.component";
import { HeaderComponent } from '../header-component/header-component.component';

@Component({
  selector: 'app-principios-reiki',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './principios-reiki.component.html',
  styleUrl: './principios-reiki.component.css'
})
export class PrincipiosReikiComponent {

}
