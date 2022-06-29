import { Constants } from "../global/constants"

// deliveryInfo object interface
export interface Atsukai {
	code: string
	name: string
}

export interface Tempture {
	code: string
	name: string
}
export class Tempture implements Tempture {
	constructor() {
		this.code = Constants.TemptureList[0].code;
		this.name = Constants.TemptureList[0].name;
	}
}

export interface DeliveryInfo {
	hinmei: string
	// only when chosen
	atsukai: Array<Atsukai>
	tempture: Tempture
}

export class DeliveryInfo implements DeliveryInfo {
	constructor() {
		this.hinmei = '';
		this.atsukai = [];
		this.tempture = new Tempture();
	}
}