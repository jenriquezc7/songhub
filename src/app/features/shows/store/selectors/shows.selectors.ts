import { Show } from '../../models/show';
import { ShowsState } from '../state/shows.state';
import { ShowEntitiesState } from '../state/show-entities.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getShowsFeatureState = createFeatureSelector<ShowsState>('shows');

export const getShowsState = createSelector(
    getShowsFeatureState,
    state => state.shows
);

export const getShowsEntities = createSelector(
    getShowsState,
    state => state.entities
);

export const getAllShows = createSelector(
    getShowsEntities,
    entities => Object.keys(entities).map(id => entities[parseInt(id, 10)])
)

export const getShowsLoading = createSelector(
    getShowsState,
    state => state.loading
);