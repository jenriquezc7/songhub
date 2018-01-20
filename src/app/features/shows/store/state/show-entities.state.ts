import { Show } from '../../models/show';

export interface ShowEntitiesState {
    entities: { [id: number]: Show };
    loading: boolean;
}