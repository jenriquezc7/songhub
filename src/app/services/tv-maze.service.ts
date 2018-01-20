import { Show } from '../features/shows/models/show';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class TvMazeService{

    url: string;

    constructor(private http: HttpClient){
        this.url = 'http://api.tvmaze.com';
    }

    getShows(query: string){
        let params = new HttpParams().set('q', query);
        return this.http.get<{score: number, show: Show}[]>(`${this.url}/search/shows`, {params})
            .pipe(
                map(res => res.map(res => res.show))
            );
    }
}