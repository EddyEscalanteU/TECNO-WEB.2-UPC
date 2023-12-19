import { Routes } from '@angular/router';
import { Pag1Component } from './pages/pag1/pag1.component';
import { Pag2Component } from './pages/pag2/pag2.component';
import { Pag3Component } from './pages/pag3/pag3.component';
import { Pag4Component } from './pages/pag4/pag4.component';

export const routes: Routes = [

    { path: 'pagA1', component: Pag1Component },
    { path: 'pagB1', component: Pag2Component },
    { path: 'pagC1', component: Pag3Component },
    { path: 'pagD1', component: Pag4Component },
]