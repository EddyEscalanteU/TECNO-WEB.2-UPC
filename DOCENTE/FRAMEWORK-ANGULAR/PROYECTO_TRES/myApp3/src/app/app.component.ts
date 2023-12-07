import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

interface UserData {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users: UserData[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Israel', email: 'john@example.com' },
    { id: 4, name: 'Bryan', email: 'jane@example.com' },
    { id: 5, name: 'Daniel', email: 'john@example.com' },
    { id: 6, name: 'Jose Manuel', email: 'jane@example.com' },
  ];

  title = 'myApp3';
}
