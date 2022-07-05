import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryReq } from 'src/app/interface/delivery-req';

@Component({
	selector: 'app-shipper-info',
	templateUrl: './shipper-info.component.html',
	styleUrls: ['./shipper-info.component.css']
})
export class ShipperInfoComponent implements OnInit {
	deliveryReq: DeliveryReq = JSON.parse(sessionStorage.getItem('deliveryReq') || String(new DeliveryReq()));
	pickupFlag = false;

	constructor(private _router: Router) { }

	ngOnInit(): void {
		console.log('shipper-info component');
	}

	goBack() {
		this._router.navigateByUrl('deliveryInfoMain');
	}
}
