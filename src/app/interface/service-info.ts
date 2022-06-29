// serviceInfo object interface
export interface DeliveryPlace {
	code: string
	name: string
}
export class DeliveryPlace implements DeliveryPlace {
	constructor() {
		this.code = '';
		this.name = '';
	}
}

export interface DeliveryType {
	code: string
	name: string
}
export class DeliveryType implements DeliveryType {
	constructor() {
		this.code = '';
		this.name = '';
	}
}

export interface PaymentType {
	code: string
	name: string
}
export class PaymentType implements PaymentType {
	constructor() {
		this.code = '';
		this.name = '';
	}
}

export interface Rapping {
	code: string
	name: string
}
export class Rapping implements Rapping {
	constructor() {
		this.code = '';
		this.name = '';
	}
}

export interface PickupDate {
	code: string
	name: string
}
export class PickupDate implements PickupDate {
	constructor() {
		this.code = '';
		this.name = '';
	}
}

export interface PickupTime {
	code: string
	name: string
}
export class PickupTime implements PickupTime {
	constructor() {
		this.code = '';
		this.name = '';
	}
}

export interface ServiceInfo {
	deliveryPlace: DeliveryPlace
	deliveryType: DeliveryType
	paymentType: PaymentType
	rapping: Array<Rapping>
	shiyobiDate: string
	pickupDate: PickupDate
	pickupTime: PickupTime
	request: string
}
export class ServiceInfo implements ServiceInfo {
	constructor() {
		this.deliveryPlace = new DeliveryPlace();
		this.deliveryType = new DeliveryType();
		this.paymentType = new PaymentType();
		this.rapping = [];
		this.shiyobiDate = '';
		this.pickupDate = new PickupDate();
		this.pickupTime = new PickupTime();
		this.request = '';
	}
}
