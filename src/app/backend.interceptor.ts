import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { UserStubData } from './stub/user-stub-data';
import { User } from './interface/user';
import { UrlPath } from './global/constants';
import { TrackingInfoStubData } from './stub/tracking-info-stub-data';



@Injectable()
export class BackendInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const { url, method, headers, body } = request;

		// wrap in delayed observable to simulate server api call
		return of(null)
			.pipe(mergeMap(handleRoute))
			.pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
			.pipe(delay(500))
			.pipe(dematerialize());

		function handleRoute() {
			switch (true) {
				case url.endsWith('/users/1'):
					return getUser();
				case url.startsWith(UrlPath.PrivateApi + '/search/tracking/'):
					return getTrackingInfo();
				default:
					return next.handle(request);

			}
		}

		function ok(body?: any) {
			return of(new HttpResponse({ status: 200, body }))
		}
		function getUser() {
			// registered users
			let userData = new UserStubData();
			return ok(userData.data1);
		}
		function getTrackingInfo() {
			let urlArray = url.split('/');
			let trackingInfo = new TrackingInfoStubData(urlArray[urlArray.length - 1]);
			return ok(trackingInfo.data1());
		}
		function error(message: any) {
			return throwError(() => { error: { message } });
		}
	}


}
export const fakeBackendProvider = {
	// use fake backend in place of Http service for backend-less development
	provide: HTTP_INTERCEPTORS,
	useClass: BackendInterceptor,
	multi: true
};