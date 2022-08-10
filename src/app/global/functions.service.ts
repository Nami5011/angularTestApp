import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FunctionsService {

	constructor() { }

	isEmpty(val: any) {
		return val === undefined || val === '' || val === null || val === NaN || val.langth === 0;
	}
}
