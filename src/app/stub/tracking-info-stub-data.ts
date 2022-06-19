import { TrackingInfo } from '../interface/tracking-info';

export class TrackingInfoStubData {
	trackingNum: string;

	constructor(EntryTrackingNumber: string) {
		this.trackingNum = EntryTrackingNumber
	}
	data1() {
		let data: TrackingInfo = {
			trackingNumber: this.trackingNum,
			deliveryDate: '2022/06/01',
			deliveryState: '出荷待ち'
		}
		return data;
	}
}
