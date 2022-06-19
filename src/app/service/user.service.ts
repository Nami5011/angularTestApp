import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interface/user';
import { UrlPath } from '../global/constants';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	readonly ROOT_URL = UrlPath.JsOnPlaceHolder;

	constructor(private _http: HttpClient) { }

	getUsers(): Observable<User[]> {
		return this._http.get<User[]>(this.ROOT_URL + '/users')
	}
	getUser(): Observable<User> {
		return this._http.get<User>(this.ROOT_URL + '/users/1')
	}
}
