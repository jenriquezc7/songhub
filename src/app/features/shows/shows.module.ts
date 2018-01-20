import { ShowsEffects } from './store/effects/shows.effect';
import { EffectsModule } from '@ngrx/effects';
import { showsReducer } from './store/reducers/shows.reducer';
import { StoreModule } from '@ngrx/store';
import { SearchResultsViewModule } from './views/search-results/search-results-view.module';
import { SearchResultsViewComponent } from './views/search-results/search-results-view.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: SearchResultsViewComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
        SearchResultsViewModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('shows', {
            shows: showsReducer
        }),
        EffectsModule.forFeature([ShowsEffects])
    ]
})
export class ShowsModule{
    static routes = routes; 
}