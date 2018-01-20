import { TvMazeService } from '../../../../services/tv-maze.service';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as ShowActions from '../actions/shows.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ShowsEffects{

    constructor(private actions$: Actions, private tvMazeService: TvMazeService){}

    @Effect()
    loadShows$ = this.actions$
        .ofType(ShowActions.LOAD_SHOWS)
        .pipe(
            switchMap((action: ShowActions.LoadShows) => {
                return this.tvMazeService.getShows(action.payload)
                    .pipe(
                        map(shows => new ShowActions.LoadShowsSuccess(shows)),
                        catchError(error => of(new ShowActions.LoadShowsFail(error)))
                    );
            })
        );
}