import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from '@angular-monorepo/producto';

@Component({
  selector: 'angular-monorepo-pag1',
  standalone: true,
  imports: [CommonModule,ProductoComponent],
  templateUrl: './pag1.component.html',
  styleUrl: './pag1.component.css',
})
export class Pag1Component {}
