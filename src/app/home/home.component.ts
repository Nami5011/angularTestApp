import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../global/constants';
import { TrackingInfo } from '../interface/tracking-info';
import { GetTrackingInfoService } from '../service/get-tracking-info.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	trackingNumber: string = sessionStorage.getItem('trackingNumber') || '';

	constructor(private _router: Router, private _trackingService: GetTrackingInfoService) { }

	ngOnInit(): void {
		console.log('home component');
		sessionStorage.removeItem('trackingNumber');
	}

	gotoTrackingParcel() {
		// 配送情報取得API呼び出し
		this._trackingService.getTrackingInfo(this.trackingNumber)
			.subscribe((response) => {
				// 配送情報をセッションに設定
				let trakingInfo = new TrackingInfo();
				trakingInfo = response;
				console.log(trakingInfo);
				sessionStorage.setItem('trackingList', JSON.stringify([trakingInfo]));
				// 荷物お問合せシステムに遷移
				this._router.navigateByUrl('/trackingParcels');
			});
	}

	gotoDelivryReq() {
		this._router.navigateByUrl('/deliveryReq');
	}

}
