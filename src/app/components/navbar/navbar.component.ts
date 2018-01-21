import { AppState } from '../../store/state/app.state';
import { Store } from '@ngrx/store';
import { UserState } from '../../store/state/user.state';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import * as UserActions from '../../store/actions/user.actions';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit{

    @Input() userState: UserState;

    query: string;

    constructor(private store: Store<AppState>, private route: ActivatedRoute, private router: Router){}

    ngOnInit(){
        this.route.queryParamMap
            .pipe(
                filter(params => params.get('q') != this.query),
                map(params => params.get('q'))
            )
            .subscribe(query => this.query = query);
    }

    onLogout(){
        this.store.dispatch(new UserActions.Logout());
    }

    onSearch(){
        this.router.navigate(['shows'], {queryParams: {q: this.query}});
    }
}