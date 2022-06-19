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
	traking = new TrackingInfo();
	user = new User();
	posts!: Observable<any>;

	constructor(private _router: Router, private _userService: UserService, private _trackingService: GetTrackingInfoService) { }

	ngOnInit(): void {
		console.log('trackingParcels component');
		this.traking.trackingNumber = sessionStorage.getItem('trackingNumber') || '';
	}

	gotoTop() {
		this._router.navigateByUrl('');
	}

	clear() {
		this.traking.trackingNumber = '';
	}

	getUser(): void {
		this._userService.getUser()
			.subscribe((user) => {
				this.user = user;
				console.log(this.user);
			});
		// .subscribe(user => this.user = user);
	}
	getTrackingInfo(): void {
		this._trackingService.getTrackingInfo(this.traking.trackingNumber)
			.subscribe((trakingInfo) => {
				this.traking = trakingInfo;
				console.log(this.traking);
			});
	}
}
