import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/global/constants';
import { DeliveryReq } from 'src/app/interface/delivery-req';
import { DeliveryPlace } from 'src/app/interface/service-info';

@Component({
	selector: 'app-delivery-req',
	templateUrl: './delivery-req.component.html',
	styleUrls: ['./delivery-req.component.css']
})
export class DeliveryReqComponent implements OnInit {
	title = Constants.DeliveryReqTitle;
	// 配送先
	domestic: DeliveryPlace = Constants.DeliveryPlaceList[0];
	airport: DeliveryPlace = Constants.DeliveryPlaceList[1];
	golf: DeliveryPlace = Constants.DeliveryPlaceList[2];
	skiResort: DeliveryPlace = Constants.DeliveryPlaceList[3];
	accomoddation: DeliveryPlace = Constants.DeliveryPlaceList[4];

	constructor(private _router: Router) { }

	ngOnInit(): void {
		console.log('delivery-req component');
	}

	gotoDeliveryInfoMain(deliveryPlace: DeliveryPlace) {
		let deliveryReq = new DeliveryReq();
		// 配送先を設定
		deliveryReq.serviceInfo.deliveryPlace = deliveryPlace;
		sessionStorage.setItem('deliveryReq', JSON.stringify(deliveryReq));
		this._router.navigateByUrl('deliveryInfoMain');
	}
}
