import { Geo } from './geo';

export interface Address {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: Geo
}

export class Address implements Address {
	constructor() {
		this.street = '';
		this.suite = '';
		this.city = '';
		this.zipcode = '';
		this.geo = new Geo();
	}
}