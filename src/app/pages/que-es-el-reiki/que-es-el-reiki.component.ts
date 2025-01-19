import { Component } from '@angular/core';
import { FooterComponent } from "../footer-component/footer-component.component";
import { HelperViewComponent } from "../helper-view/helper-view.component";
import { HeaderComponent } from "../header-component/header-component.component";

@Component({
  selector: 'app-que-es-el-reiki',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './que-es-el-reiki.component.html',
  styleUrl: './que-es-el-reiki.component.css'
})
export class QueEsElReikiComponent {

}
