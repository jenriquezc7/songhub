import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    
    user: Observable<firebase.User>;
    
    constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
        this.user = firebaseAuth.authState;
    }

    login(email: string, password: string){
        return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    }

    signUp(user: any){
        return this.firebaseAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    }
}