import { Component } from '@angular/core';

interface UserData {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-pag1',
  standalone: true,
  imports: [],
  templateUrl: './pag1.component.html',
  styleUrl: './pag1.component.scss'
})
export class Pag1Component {

  users: UserData[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];
}
