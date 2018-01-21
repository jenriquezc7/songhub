import { AuthService } from '../../services/auth.service';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as UserActions from '../actions/user.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable'; 
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserEffects{

    constructor(private actions$: Actions, private authService: AuthService){}

    @Effect()
    login$ =  this.actions$
        .ofType(UserActions.LOGIN)
        .pipe(
            switchMap((action: UserActions.Login) => {
                return Observable
                    .fromPromise(this.authService.login(action.payload.email, action.payload.password))
                    .pipe(
                        map(user => new UserActions.LoginSuccess()),
                        catchError(error => of(new UserActions.LoginFail(error)))
                    );
            })
        );

    @Effect()
    logout$ = this.actions$
        .ofType(UserActions.LOGOUT)
        .pipe(
            switchMap((action: UserActions.Logout) => {
                return Observable
                    .fromPromise(this.authService.logout())
                    .pipe(
                        map(() => new UserActions.LogoutSuccess()),
                        catchError(error => of(new UserActions.LogoutFail(error)))
                    );
            })
        );
}