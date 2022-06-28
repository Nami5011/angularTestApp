export interface Shipper {
	firstName: string
	lastName: string
	firstNameKana: string
	lastNameKana: string
	addressCode: string
	postalCode: string
	prefecture: string
	city: string
	streetName: string
	buildingName: string
	companyName: string
	division: string
	telNumber: string
	emailAddress: string
}
export class Shipper implements Shipper {
	constructor() {
		this.firstName = '';
		this.lastName = '';
		this.firstNameKana = '';
		this.lastNameKana = '';
		this.addressCode = '';
		this.postalCode = '';
		this.prefecture = '';
		this.city = '';
		this.streetName = '';
		this.buildingName = '';
		this.companyName = '';
		this.division = '';
		this.telNumber = '';
		this.emailAddress = '';
	}
}