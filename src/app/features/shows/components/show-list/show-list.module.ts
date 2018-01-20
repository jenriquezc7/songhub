import { ShowListItemComponent } from './show-list-item.component';
import { ShowListComponent } from './show-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';

@NgModule({
    imports: [CommonModule, FlexLayoutModule, MatCardModule],
    declarations: [ShowListComponent, ShowListItemComponent],
    exports: [ShowListComponent]
})
export class ShowListModule{}