import { TrackingInfo } from '../interface/tracking-info';

export class TrackingInfoStubData {
	// trackingNum: string;

	// constructor(EntryTrackingNumber: string) {
	// 	this.trackingNum = EntryTrackingNumber
	// }
	data1(trackingNum: string) {
		let data: TrackingInfo = {
			// trackingNumber: this.trackingNum,
			trackingNumber: trackingNum,
			deliveryDate: '2022/06/01',
			deliveryState: '出荷待ち'
		}
		return data;
	}
	dataList1(trackingNumberList: Array<string>) {
		let trackingInfoList: Array<TrackingInfo> = [];
		let deliveryDateOption = ['2022/06/01', '2022/06/12', '2022/06/24'];
		let deliveryStateOption = ['出荷待ち', '出荷済み', '配送中', '配送済み'];

		trackingNumberList.forEach(function (val) {
			trackingInfoList.push({
				trackingNumber: val,
				deliveryDate: val !== '' ? deliveryDateOption[Math.floor(Math.random() * deliveryDateOption.length)] : '',
				deliveryState: val !== '' ? deliveryStateOption[Math.floor(Math.random() * deliveryStateOption.length)] : ''
			})
		})
		let data = {
			trackingInfoList: trackingInfoList
		}
		return data;
	}
}
