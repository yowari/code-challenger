import { AppUser } from './../models/app-user';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) {
  }

  save(user: firebase.User): void {
    this.db.object(`/users/${user.uid}`).update({
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL
    });
  }

  get(uid: string): Observable<AppUser> {
    return this.db.object<AppUser>(`/users/${uid}`).valueChanges();
  }

}
