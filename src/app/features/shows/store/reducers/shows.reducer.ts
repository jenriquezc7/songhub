import { ShowEntitiesState } from '../state/show-entities.state';
import * as ShowActions from '../actions/shows.actions';
import { Show } from '../../models/show';

const initialState: ShowEntitiesState = {
    entities: {},
    loading: false,
};

export function showsReducer(state = initialState, action: ShowActions.All) {
    switch (action.type) {
        case ShowActions.LOAD_SHOWS:
            return { ...state, loading: true };
        case ShowActions.LOAD_SHOWS_SUCCESS:
            const entities = action.payload.reduce((entities: { [id: number]: Show }, show: Show) => {
                return { ...entities, [show.id]: show };
            }, {});
            return {loading: false, entities};
        case ShowActions.LOAD_SHOWS_FAIL:
            return {...state, loading: false};
        default:
            return state;
    }
}