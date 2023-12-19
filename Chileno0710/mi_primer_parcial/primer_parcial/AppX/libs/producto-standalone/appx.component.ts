import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appx',
  templateUrl: './appx.component.html',
  styleUrls: ['./appx.component.css']
})
export class AppXComponent {

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    const users = this.http.get('https://jsonplaceholder.typicode.com/users');
    this.users = users.json();
  }

}