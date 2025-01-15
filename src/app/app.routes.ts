import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home-component.component';
import { FooterComponent } from './pages/footer-component/footer-component.component';
import { HeaderComponent } from './pages/header-component/header-component.component';
import { LearnComponent } from './pages/learn-component/learn-component.component';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "header-component", component: HeaderComponent},
  {path: "footer-component", component: FooterComponent},
  {path: "learn-component", component: LearnComponent}
];
