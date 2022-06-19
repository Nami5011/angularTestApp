import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UrlPath } from '../global/constants';
import { TrackingInfo } from '../interface/tracking-info';
@Injectable({
	providedIn: 'root'
})
export class GetTrackingInfoService {
	readonly ROOT_URL = UrlPath.PrivateApi;

	constructor(private _http: HttpClient) { }

	getTrackingInfo(trackingNumber: string): Observable<TrackingInfo> {
		console.log('getTrackingInfo url:');
		console.log(this.ROOT_URL + '/search/tracking/' + trackingNumber);
		return this._http.get<TrackingInfo>(this.ROOT_URL + '/search/tracking/' + trackingNumber);
	}
}
