import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home-component.component';
import { FooterComponent } from './pages/footer-component/footer-component.component';
import { HeaderComponent } from './pages/header-component/header-component.component';
import { LearnComponent } from './pages/learn-component/learn-component.component';
import { QueEsElReikiComponent } from './pages/que-es-el-reiki/que-es-el-reiki.component';
import { PrincipiosReikiComponent } from './pages/principios-reiki/principios-reiki.component';
import { TarifasComponent } from './pages/tarifas/tarifas.component';
import { BeneficiosReikiComponent } from './pages/beneficios-reiki/beneficios-reiki.component';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "header-component", component: HeaderComponent},
  {path: "que-es-reiki", component: QueEsElReikiComponent},
  {path: "beneficios-reiki", component: BeneficiosReikiComponent},
  {path: "principios-reiki", component: PrincipiosReikiComponent},
  {path: "tarifas", component: TarifasComponent},
  {path: "footer-component", component: FooterComponent},
  {path: "learn-component", component: LearnComponent}
];
