import { UserState } from './user.state';
import { ShowsState } from '../../features/shows/store/state/shows.state';

export interface AppState{
    shows: ShowsState;
    user: UserState;
}