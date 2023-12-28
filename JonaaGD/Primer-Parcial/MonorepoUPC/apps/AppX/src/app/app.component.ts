import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '@angular-monorepo/menu';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MenuComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AppX';
  
}
