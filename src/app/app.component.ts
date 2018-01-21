import { Observable } from 'rxjs/Observable';
import { UserState } from './store/state/user.state';
import { Store } from '@ngrx/store';
import { AppState } from './store/state/app.state';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userState$: Observable<UserState>;

  constructor(private store: Store<AppState>){
    this.userState$ = store.select(state => state.user);
  }
}
