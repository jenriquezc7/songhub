import { Show } from '../../models/show';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'show-list-item',
    templateUrl: './show-list-item.component.html',
    styleUrls: ['./show-list-item.component.scss']
})
export class ShowListItemComponent{

    @Input() show: Show;
}