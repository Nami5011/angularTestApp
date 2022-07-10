import { Tempture } from "../interface/delivery-info";
import { DeliveryPlace, DeliveryType, PaymentType } from "../interface/service-info";

export class Constants {
	public static AppTitle: string = 'RABIT TRANSPORT';
	public static DeliveryReqTitle: string = '集荷申し込み';
	public static TrackingParcels: string = '荷物お問合せシステム';
	public static DeliveryPlaceList: Array<DeliveryPlace> = [
		{
			code: '00',
			name: '国内'
		}, {
			code: '01',
			name: '空港'
		}, {
			code: '02',
			name: 'ゴルフ場'
		}, {
			code: '03',
			name: 'スキー場'
		}, {
			code: '04',
			name: '宿泊施設'
		}
	];
	public static TemptureList: Array<Tempture> = [
		{
			code: '00',
			name: '一般'
		}, {
			code: '01',
			name: '冷蔵'
		}, {
			code: '02',
			name: '冷凍'
		}
	];
	public static DeliveryTypeList: Array<DeliveryType> = [
		{
			code: '00',
			name: '宅急便'
		}, {
			code: '01',
			name: '宅急便コンパクト'
		}, {
			code: '02',
			name: 'クール宅急便'
		}, {
			code: '03',
			name: 'パソコン宅急便'
		}
	];
	public static PaymentTypeList: Array<PaymentType> = [
		{
			code: '00',
			name: '発払い'
		}, {
			code: '01',
			name: '後払い'
		}
	];
}

export class UrlPath {
	public static JsOnPlaceHolder: string = 'https://jsonplaceholder.typicode.com';
	public static PrivateApi: string = 'https://api.com';
	public static zipcloud: string = 'https://zipcloud.ibsnet.co.jp';
}