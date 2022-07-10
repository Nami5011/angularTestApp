import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { UrlPath } from '../global/constants';
import { GetAddressfromZipResponse } from '../interface/get-addressfrom-zip-response';

@Injectable({
	providedIn: 'root'
})
export class ZipcloudService {
	// http://zipcloud.ibsnet.co.jp/doc/api

	readonly ROOT_URL = UrlPath.zipcloud;

	constructor(private _http: HttpClient) { }

	getAddressfromZip(zipCode: string) {
		let url = this.ROOT_URL + '/api/search?zipcode=' + zipCode;
		console.log(url);
		return this._http.get<GetAddressfromZipResponse>(url)
			.pipe(
				map(response => {
					if (response.status !== 200) {
						throw response;
					}
					return response;
				}),
				catchError((error: HttpErrorResponse) => {
					return throwError(() => error)
				})
			);
	}
}
// response Ex.
// {
// 	"message": null,
// 	"results": [
// 		{
// 			"address1": "北海道",
// 			"address2": "美唄市",
// 			"address3": "上美唄町協和",
// 			"kana1": "ﾎｯｶｲﾄﾞｳ",
// 			"kana2": "ﾋﾞﾊﾞｲｼ",
// 			"kana3": "ｶﾐﾋﾞﾊﾞｲﾁｮｳｷｮｳﾜ",
// 			"prefcode": "1",
// 			"zipcode": "0790177"
// 		},
// 		{
// 			"address1": "北海道",
// 			"address2": "美唄市",
// 			"address3": "上美唄町南",
// 			"kana1": "ﾎｯｶｲﾄﾞｳ",
// 			"kana2": "ﾋﾞﾊﾞｲｼ",
// 			"kana3": "ｶﾐﾋﾞﾊﾞｲﾁｮｳﾐﾅﾐ",
// 			"prefcode": "1",
// 			"zipcode": "0790177"
// 		}
// 	],
// 	"status": 200
// }