import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from '../../nx-welcome.component';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'monorepo-upc-menu-mega',
  standalone: true,
  imports: [CommonModule,NxWelcomeComponent, RouterOutlet, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './menu-mega.component.html',
  styleUrl: './menu-mega.component.scss',
})
export class MenuMegaComponent {}
