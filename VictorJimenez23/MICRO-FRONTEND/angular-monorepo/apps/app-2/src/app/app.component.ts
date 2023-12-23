import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule,RouterModule, RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-2';
}
