import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from '../../nx-welcome.component';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'monorepo-upc-nav-bar',
  standalone: true,
  imports: [CommonModule,NxWelcomeComponent, RouterOutlet, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {}
