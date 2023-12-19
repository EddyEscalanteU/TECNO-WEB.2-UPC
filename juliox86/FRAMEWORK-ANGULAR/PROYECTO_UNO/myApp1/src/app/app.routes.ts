import { Routes } from '@angular/router';
import { Pag1Component } from './pages/pag1/pag1.component';
import { Pag2Component } from './pages/pag2/pag2.component';

export const routes: Routes = [

    { path: 'pagA1', component: Pag1Component },
    { path: 'pagB1', component: Pag2Component },

  ]