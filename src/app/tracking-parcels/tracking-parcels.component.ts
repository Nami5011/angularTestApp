import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Constants } from '../global/constants';
import { TrackingInfo } from '../interface/tracking-info';
import { User } from '../interface/user';
import { GetTrackingInfoService } from '../service/get-tracking-info.service';
import { UserService } from '../service/user.service';

@Component({
	selector: 'app-tracking-parcels',
	templateUrl: './tracking-parcels.component.html',
	styleUrls: ['./tracking-parcels.component.css']
})

export class TrackingParcelsComponent implements OnInit {
	title = Constants.TrackingParcels;
	user = new User();
	trackingList: TrackingInfo[] = [];

	constructor(private _router: Router, private _userService: UserService, private _trackingService: GetTrackingInfoService) { }

	ngOnInit(): void {
		console.log('trackingParcels component');

		// 送り状番号検索初期表示
		for (let tInfo = 0; tInfo < 5; tInfo++) {
			let traking = new TrackingInfo();
			this.trackingList.push(traking);
		}
		console.log(this.trackingList);
		// セッションがあれば配送情報を表示
		let sessionTrackingList: TrackingInfo[] = JSON.parse(sessionStorage.getItem('trackingList') || '[]');
		if (sessionTrackingList) {
			sessionTrackingList.forEach((val: TrackingInfo, index: number) => {
				this.trackingList[index] = val;
			});
		}
	}

	gotoTop() {
		this._router.navigateByUrl('');
	}

	clear() {
		this.trackingList.forEach((val: TrackingInfo, index: number) => {
			this.trackingList[index] = new TrackingInfo();
		});
	}

	getUser(): void {
		this._userService.getUser()
			.subscribe((user) => {
				this.user = user;
				console.log(this.user);
			});
		// .subscribe(user => this.user = user);
	}

	getTrackingInfoList(): void {
		// 配送情報取得一覧API呼び出し
		this._trackingService.getTrackingInfoList(this.trackingList)
			.subscribe((response) => {
				this.trackingList = response.trackingInfoList;
				console.log('response');
				console.log(response.trackingInfoList);
			});
	}
}
