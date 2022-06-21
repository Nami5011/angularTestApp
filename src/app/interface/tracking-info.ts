export interface TrackingInfo {
	trackingNumber: string
	deliveryDate: string
	deliveryState: string
}

export class TrackingInfo {
	constructor() {
		this.trackingNumber = '';
		this.deliveryDate = '';
		this.deliveryState = '';
	}
}