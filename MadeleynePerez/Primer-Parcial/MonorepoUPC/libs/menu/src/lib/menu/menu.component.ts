import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'angular-monorepo-menu',
  standalone: true,
  imports: [CommonModule,MenuComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})

export class MenuComponent {

  
}
