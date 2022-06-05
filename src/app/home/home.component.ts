import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../global/constants';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	trackingNumber: string = sessionStorage.getItem('trackingNumber') || '';

	constructor(private _router: Router) { }

	ngOnInit(): void {
		console.log('home component');
		sessionStorage.removeItem('trackingNumber');
	}

	gotoTrackingParcel() {
		sessionStorage.setItem('trackingNumber', this.trackingNumber);
		this._router.navigateByUrl('/trackingParcels');
	}

	gotoDelivryReq() {
		this._router.navigateByUrl('/deliveryReq');
	}

}
