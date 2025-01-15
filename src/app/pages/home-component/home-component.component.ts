import { Component } from '@angular/core';
import { HeaderComponent } from "../header-component/header-component.component";
import { LearnComponent } from "../learn-component/learn-component.component";
import { FooterComponent} from "../footer-component/footer-component.component";

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [HeaderComponent, LearnComponent, FooterComponent],
  templateUrl: './home-component.component.html'
})
export class HomeComponent {

}
