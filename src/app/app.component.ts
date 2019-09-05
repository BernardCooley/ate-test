import { Component } from '@angular/core';
import { UserService } from './services/userservice/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ate-test';

  constructor(public user: UserService) {

  }
}
