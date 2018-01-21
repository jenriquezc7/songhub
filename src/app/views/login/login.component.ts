import { User } from '../../models/user';
import { Observable } from 'rxjs/Rx';
import { AppState } from '../../store/state/app.state';
import { Store } from '@ngrx/store';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import * as UserActions from '../../store/actions/user.actions';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    isLoggingIn$: Observable<boolean>;

    form: FormGroup;

    constructor(private store: Store<AppState>, fb: FormBuilder) {
        // this.isLoggingIn$ = store.select(state => (console.log(state.user), state.user.loggingIn));
    }

    login(user: User) {
        console.log(user);
        this.store.dispatch(new UserActions.Login(user));
    }
}