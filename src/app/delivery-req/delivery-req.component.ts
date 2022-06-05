import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../global/constants';

@Component({
	selector: 'app-delivery-req',
	templateUrl: './delivery-req.component.html',
	styleUrls: ['./delivery-req.component.css']
})
export class DeliveryReqComponent implements OnInit {
	title = Constants.DeliveryReqTitle;

	constructor(private _router: Router) { }

	ngOnInit(): void {
		console.log('delivery-req component');
	}

}
