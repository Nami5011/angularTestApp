export interface Geo {
	lat: string
	lng: string
}

export class Geo implements Geo {
	constructor() {
		this.lat = '';
		this.lng = '';
	}
}