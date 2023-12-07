import { Routes, RouterModule } from '@angular/router';
import { Pag1Component } from './pages/pag1/pag1.component';
import { Pag2Component } from './pages/pag2/pag2.component';
import { Pag3Component } from './pages/pag3/pag3.component';

export const routes: Routes = [
  { path: 'pag1', component: Pag1Component },
  { path: 'pag2', component: Pag2Component },
  { path: 'pag3', component: Pag3Component },
];
