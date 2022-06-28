// deliveryInfo object interface
export interface Atsukai {
	code: string
	name: string
}
export interface DeliveryInfo {
	hinmei: string
	// only when chosen
	atsukai: Array<Atsukai>
}

export class DeliveryInfo implements DeliveryInfo {
	constructor() {
		this.hinmei = '';
		this.atsukai = [];
	}
}