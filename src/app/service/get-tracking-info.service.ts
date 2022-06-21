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
		let url = this.ROOT_URL + '/search/tracking/' + trackingNumber;
		console.log('getTrackingInfo url:');
		console.log(url);

		return this._http.get<TrackingInfo>(url);
	}

	getTrackingInfoList(trackingNumber: Array<TrackingInfo>): Observable<any> {
		let url = this.ROOT_URL + '/search/trackingList';
		console.log('getTrackingInfoList url:');
		console.log(url);

		let trackingNumberList: Array<string> = [];
		trackingNumber.forEach(function (val) {
			trackingNumberList.push(val.trackingNumber);
		});
		let inputData = {
			trackingNumberList: trackingNumberList
		}

		return this._http.post<any>(url, inputData);
	}
}
