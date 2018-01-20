import { Show } from '../../models/show';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'show-list',
    templateUrl: './show-list.component.html'
})
export class ShowListComponent{

    @Input() shows: Show[];
}