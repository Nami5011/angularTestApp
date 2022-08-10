import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/global/constants';
import { DeliveryReq } from 'src/app/interface/delivery-req';
import { FunctionsService } from 'src/app/global/functions.service';

@Component({
	selector: 'app-delivery-info-main',
	templateUrl: './delivery-info-main.component.html',
	styleUrls: ['./delivery-info-main.component.css']
})
export class DeliveryInfoMainComponent implements OnInit {
	deliveryReq: DeliveryReq = JSON.parse(sessionStorage.getItem('deliveryReq') || String(new DeliveryReq()));
	shipperPlaceName = this.deliveryReq.serviceInfo.deliveryPlace.name;
	isEmpty = new FunctionsService().isEmpty;

	constructor(private _router: Router) { }

	ngOnInit(): void {
		console.log('delivery-info-main component');
	}

	goBack() {
		this._router.navigateByUrl('deliveryReq');
	}

	gotoShipperInfo() {
		this._router.navigateByUrl('shipperInfo');
	}

	gotoServiceInfo() {
		this._router.navigateByUrl('deliveryServiceInfo');
	}
}
