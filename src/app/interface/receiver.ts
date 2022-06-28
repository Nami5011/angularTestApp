export interface Receiver {
	addressCode: string
	postalCode: string
	prefecture: string
	city: string
	streetName: string
	buildingName: string
	facilityname: string
}
export class Receiver implements Receiver {
	constructor() {
		this.addressCode = '';
		this.postalCode = '';
		this.prefecture = '';
		this.city = '';
		this.streetName = '';
		this.buildingName = '';
		this.facilityname = '';
	}
}