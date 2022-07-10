import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryReq } from 'src/app/interface/delivery-req';
import { ZipcloudService } from 'src/app/service/zipcloud.service';

@Component({
	selector: 'app-shipper-info',
	templateUrl: './shipper-info.component.html',
	styleUrls: ['./shipper-info.component.css']
})
export class ShipperInfoComponent implements OnInit {
	deliveryReq: DeliveryReq = JSON.parse(sessionStorage.getItem('deliveryReq') || String(new DeliveryReq()));
	// 集荷お伺い先
	pickupPlaceVal1 = 'home';
	pickupPlaceVal2 = 'company';
	pickupPlace = this.deliveryReq.shipper.companyName === '' && this.deliveryReq.shipper.division === '' ? this.pickupPlaceVal1 : this.pickupPlaceVal2;
	// メールアドレス
	emailAddressReinput = this.deliveryReq.shipper.emailAddress || '';

	constructor(private _router: Router, private _zipcloudService: ZipcloudService) { }

	ngOnInit(): void {
		console.log('shipper-info component');
	}

	searchAddress() {
		this._zipcloudService.getAddressfromZip(this.deliveryReq.shipper.postalCode)
			.subscribe({
				next: (response) => {
					this.deliveryReq.shipper.prefecture = response.results[0].address1;
					this.deliveryReq.shipper.city = response.results[0].address2;
					this.deliveryReq.shipper.oaza = response.results[0].address3;
					console.log(this.deliveryReq.shipper);
				}, error: (error) => {
					alert(error.message);
				}, complete: () => {
				}
			});
		// .subscribe(
		// 	result => {
		// 		this.deliveryReq.shipper.prefecture = result.results[0].address1;
		// 		this.deliveryReq.shipper.city = result.results[0].address2;
		// 		this.deliveryReq.shipper.oaza = result.results[0].address3;
		// 	},
		// 	error => {
		// 		alert(error.message);
		// 	},
		// 	() => {
		// 		// 'onCompleted' callback.
		// 		// No errors, route to new page here
		// 	}
		// );
	}

	goBack() {
		this._router.navigateByUrl('deliveryInfoMain');
	}

	submit() {
		sessionStorage.setItem('deliveryReq', JSON.stringify(this.deliveryReq))
		this._router.navigateByUrl('deliveryInfoMain');
	}
}
