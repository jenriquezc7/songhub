import { ShowListModule } from '../../components/show-list/show-list.module';
import { CommonModule } from '@angular/common';
import { SearchResultsViewComponent } from './search-results-view.component';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
    imports: [FlexLayoutModule, MatCardModule, CommonModule, ShowListModule, MatProgressSpinnerModule],
    declarations: [SearchResultsViewComponent],
    exports: [SearchResultsViewComponent]
})
export class SearchResultsViewModule{}