import { Show } from '../../models/show';
import { Action } from '@ngrx/store';

export const LOAD_SHOWS = '[Shows] Load Shows';
export const LOAD_SHOWS_SUCCESS = '[Shows] Load Shows Success';
export const LOAD_SHOWS_FAIL = '[Shows] Load Shows Fail';

export class LoadShows implements Action{
    readonly type = LOAD_SHOWS;

    constructor(public payload: string){}
}

export class LoadShowsSuccess implements Action{
    readonly type = LOAD_SHOWS_SUCCESS;

    constructor(public payload: Show[]){}
}

export class LoadShowsFail implements Action{
    readonly type = LOAD_SHOWS_FAIL;

    constructor(public payload: any){}
}

export type All = LoadShows | LoadShowsSuccess | LoadShowsFail;