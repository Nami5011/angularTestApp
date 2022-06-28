import { ServiceInfo } from "./service-info"
import { DeliveryInfo } from "./delivery-info"
import { Shipper } from "./shipper"
import { Receiver } from "./receiver"

export interface DeliveryReq {
	serviceInfo: ServiceInfo
	shipper: Shipper
	receiver: Receiver
	deliveryInfo: DeliveryInfo
}
export class DeliveryReq {
	constructor() {
		this.serviceInfo = new ServiceInfo();
		this.shipper = new Shipper();
		this.receiver = new Receiver();
		this.deliveryInfo = new DeliveryInfo();
	}
}
// log new DeliveryReq():
// {
// 	serviceInfo:{
// 		deliveryPlace:{
// 			code:'',
// 			name:''
// 		},
// 		deliveryType:{
// 			code:'',
// 			name:''
// 		},
// 		paymentType:{
// 			code:'',
// 			name:''
// 		},
// 		rapping:[],
// 		shiyobiDate:'',
// 		pickupDate:{
// 			date:'',
// 			name:''
// 		},
// 		pickupTime:{
// 			code:'',
// 			name:''
// 		},
// 		request:''
// 	},
// 	shipper:{
// 		firstName:'',
// 		lastName:'',
// 		firstNameKana:'',
// 		lastNameKana:'',
// 		addressCode:'',
// 		postalCode:'',
// 		prefecture:'',
// 		city:'',
// 		streetName:'',
// 		buildingName:'',
// 		companyName:'',
// 		division:'',
// 		telNumber:'',
// 		emailAddress:''
// 	},
// 	receiver:{
// 		addressCode:'',
// 		postalCode:'',
// 		prefecture:'',
// 		city:'',
// 		streetName:'',
// 		buildingName:'',
// 		facilityname:''
// 	},
// 	deliveryInfo:{
// 		hinmei:'',
// 		atsukai:[],
// 	}
// }