import { getAllShows, getShowsLoading } from '../../store/selectors/shows.selectors';
import { Show } from '../../models/show';
import { AppState } from '../../../../store/state/app.state';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as ShowActions from '../../store/actions/shows.actions';
import { filter, map } from 'rxjs/operators'; 
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'search-results-view',
    templateUrl: './search-results-view.component.html'
})
export class SearchResultsViewComponent implements OnInit{

    shows$: Observable<Show[]>;

    loading$: Observable<boolean>;

    constructor(private store: Store<AppState>, private route: ActivatedRoute){
        this.shows$ = this.store.select(getAllShows);
        this.loading$ = this.store.select(getShowsLoading);
    }

    ngOnInit(){
        this.route.queryParamMap
            .pipe(
                filter(params => !!params.get('q')),
                map(params => params.get('q'))
            )
            .subscribe(query => this.store.dispatch(new ShowActions.LoadShows(query)));
    }
}