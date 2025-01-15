import { Routes } from '@angular/router';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { FooterComponentComponent } from './pages/footer-component/footer-component.component';
import { HeaderComponentComponent } from './pages/header-component/header-component.component';
import { LearnComponentComponent } from './pages/learn-component/learn-component.component';

export const routes: Routes = [
  {path: "", component: HomeComponentComponent},
  {path: "header-component", component: HeaderComponentComponent},
  {path: "footer-component", component: FooterComponentComponent},
  {path: "learn-component", component: LearnComponentComponent}
];
