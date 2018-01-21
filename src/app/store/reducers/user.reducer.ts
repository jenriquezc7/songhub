import { UserState } from '../state/user.state';
import * as UserActions from '../actions/user.actions';

const initialState: UserState = {
    entity: null,
    loggingIn: false,
    loggingOut: false,
    creating: false
}

export function userReducer(state = initialState, action: UserActions.All): UserState{
    switch(action.type){
        case UserActions.LOAD_USER:
            return {...state, entity: action.payload};
        case UserActions.LOGIN:
            return {...state, loggingIn: true};
        case UserActions.LOGIN_SUCCESS:
        case UserActions.LOGIN_FAIL:
            return {...state, loggingIn: false};
        case UserActions.LOGOUT:
            return {...state, loggingOut: true};
        case UserActions.LOGOUT_SUCCESS:
            return {...state, entity: null, loggingOut: false};
        case UserActions.LOGOUT_FAIL:
            return {...state, loggingOut: false};
        default:
            return state;
    }
}