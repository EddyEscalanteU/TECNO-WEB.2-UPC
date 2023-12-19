import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommentsComponent} from '@angular-monorepo/comments';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CommentsComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AppZ';
}
