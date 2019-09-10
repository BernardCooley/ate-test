import { selectUserID, selectUserEmailAddress } from './../../store/selectors/auth.selectors';
import { State } from './../../store/state/index';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userservice/user.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userID: string;
  emailAddress: string;

  constructor(private user: UserService, private store: Store<State>) { }

  logout() {
    this.user.logout();
  }

  ngOnInit() {
    this.user.getUserDetails();

    this.store.pipe(select(selectUserID)).subscribe(state => {
      this.userID = state;
    });

    this.store.pipe(select(selectUserEmailAddress)).subscribe(state => {
      this.emailAddress = state;
    });
  }

}
