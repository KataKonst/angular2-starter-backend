import { Injectable } from '@angular/core';
import { URLSearchParams, Http } from '@angular/http';
import {ServerResponse} from "http";
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import {User} from '../models/User'

@Injectable()
export class UserService {
    constructor(private jsonp: Http) {}

    register (user: User) {
        var search = new URLSearchParams()
        search.set('name', user.name);
        search.set('email', user.email);
        search.set('password', user.password);
        alert(user.name);

        return this.jsonp.get("http://localhost:8080/create?name="+user.name+"&"+"email="+user.email+"&password="+user.password).map(x=>x.text());

    }
}
