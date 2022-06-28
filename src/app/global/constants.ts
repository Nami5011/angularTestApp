import { DeliveryPlace } from "../interface/service-info";

export class Constants {
	public static AppTitle: string = 'RABIT TRANSPORT';
	public static DeliveryReqTitle: string = '集荷申し込み';
	public static TrackingParcels: string = '荷物お問合せシステム';
	public static DeliveryPlaceList: Array<DeliveryPlace> = [
		{
			code: '01',
			name: '国内'
		}, {
			code: '02',
			name: '空港'
		}, {
			code: '03',
			name: 'ゴルフ場'
		}, {
			code: '04',
			name: 'スキー場'
		}, {
			code: '05',
			name: '宿泊施設'
		}
	]
}

export class UrlPath {
	public static JsOnPlaceHolder: string = 'https://jsonplaceholder.typicode.com';
	public static PrivateApi: string = 'https://api.com';
}