import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit{

    query: string;

    constructor(private route: ActivatedRoute, private router: Router){}

    ngOnInit(){
        
        this.route.queryParamMap
            .pipe(
                filter(params => params.get('q') != this.query),
                map(params => params.get('q'))
            )
            .subscribe(query => this.query = query);
    }

    onSearch(){
        this.router.navigate(['shows'], {queryParams: {q: this.query}});
    }
}