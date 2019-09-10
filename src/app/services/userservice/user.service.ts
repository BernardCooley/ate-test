import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../store/actions/autnetication.actions';
import { State } from '../../store/state';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uid = this.afAuth.authState.pipe(
    map(authState => !authState ? null : authState.uid)
  );
  isAdmin = observableOf(true);

  constructor(private afAuth: AngularFireAuth, private router: Router, private store: Store<State>) { }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
      this.store.dispatch(
        AuthActions.getUserDetails({
          userID: this.afAuth.auth.currentUser.uid,
          emailAddress: this.afAuth.auth.currentUser.email
        })
      );

      this.router.navigate(['/home']);
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  register(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['/home']);
    })
  }
}
