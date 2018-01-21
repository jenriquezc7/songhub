import { AppState } from '../store/state/app.state';
import { Store } from '@ngrx/store';
import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import * as UserActions from '../store/actions/user.actions';

@Injectable()
export class AuthService {

    // user: Observable<User>;

    constructor(
        private firebaseAuth: AngularFireAuth, 
        private afs: AngularFirestore,
        private store: Store<AppState>) {
        // this.user = firebaseAuth.authState
        //     .switchMap(user => {
        //         if (user)
        //             return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        //         else
        //             return Observable.of(null);
        //     });

        firebaseAuth.authState
            .switchMap(user => {
                if (user)
                    return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
                return Observable.of(null);
            })
            .subscribe(user => this.store.dispatch(new UserActions.LoadUser(user)));
    }

    login(email: string, password: string) {
        return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    }

    logout(){
        return this.firebaseAuth.auth.signOut();
    }

    signUp(user: any) {
        return this.firebaseAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    }
}