import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { PostsComponent} from '@angular-monorepo/posts';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,PostsComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AppY';
}
