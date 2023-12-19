import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-z-producto-standalone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-standalone.component.html',
  styleUrl: './producto-standalone.component.css',
})
export class ProductoStandaloneComponent {}
