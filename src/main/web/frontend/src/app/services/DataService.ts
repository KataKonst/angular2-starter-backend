import { Injectable } from '@angular/core';
import { URLSearchParams, Http } from '@angular/http';
import {ServerResponse} from "http";
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

@Injectable()
export class WikipediaService {
    constructor(private jsonp: Http) {}

search (term: string) {
    var search = new URLSearchParams()
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
        return this.jsonp.get("http://localhost:8080/create?name=dfsdfs&email=asdasd").map(x=>x.text());

}
}