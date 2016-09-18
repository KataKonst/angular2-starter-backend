import { Injectable } from '@angular/core';
import { URLSearchParams, Http } from '@angular/http';
import {ServerResponse} from "http";
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import {User} from '../models/User'
import {md5} from '../utils/md5'

@Injectable()
export class UserService {
    constructor(private jsonp: Http) {}

    register (user: User) {
        var params= new URLSearchParams()
        params.set('name', user.name);
        params.set('email', user.email);
        params.set('password', md5(user.password));

        return this.jsonp.get('http://localhost:8080/create',{ search:params }).map(x=>x.text());

    }
    login (user: User) {
        var params= new URLSearchParams()
        params.set('name', user.name);
        params.set('password', md5(user.password));

        return this.jsonp.get('http://localhost:8080/checkPass',{ search:params }).map(x=>x.json());

    }
}
