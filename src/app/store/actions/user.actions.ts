import { User } from '../../models/user';
import { Action } from '@ngrx/store';

export const LOAD_USER = '[Auth] Load User';

export const LOGIN = '[Auth] Login';

export const LOGIN_SUCCESS = '[Auth] Login Success';

export const LOGIN_FAIL = '[Auth] Login Fail';

export const LOGOUT = '[Auth] Logout';

export const LOGOUT_SUCCESS = '[Auth] Logout Success';

export const LOGOUT_FAIL = '[Auth] Logout Fail';

export class LoadUser implements Action{
    readonly type = LOAD_USER;

    constructor(public payload: User){}
}

export class Login implements Action{
    readonly type = LOGIN;

    constructor(public payload: User){}
}

export class LoginSuccess implements Action{
    readonly type = LOGIN_SUCCESS;
}

export class LoginFail implements Action{
    readonly type = LOGIN_FAIL;

    constructor(public payload: any){}
}

export class Logout implements Action{
    readonly type = LOGOUT;
}

export class LogoutSuccess implements Action{
    readonly type = LOGOUT_SUCCESS;
}

export class LogoutFail implements Action{
    readonly type = LOGOUT_FAIL;

    constructor(public payload: any){}
}

export type All = LoadUser | Login | LoginSuccess | LoginFail | Logout | LogoutSuccess | LogoutFail