import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// used to create fake backend
import { fakeBackendProvider } from './backend.interceptor';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DeliveryReqComponent } from './components/delivery-req/delivery-req.component';
import { TrackingParcelsComponent } from './components/tracking-parcels/tracking-parcels.component';
import { DeliveryInfoMainComponent } from './components/delivery-info-main/delivery-info-main.component';
import { ShipperInfoComponent } from './components/shipper-info/shipper-info.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'deliveryReq', component: DeliveryReqComponent },
	{ path: 'trackingParcels', component: TrackingParcelsComponent },
	{ path: 'deliveryInfoMain', component: DeliveryInfoMainComponent },
	{ path: 'shipperInfo', component: ShipperInfoComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		FooterComponent,
		DeliveryReqComponent,
		TrackingParcelsComponent,
		DeliveryInfoMainComponent,
		ShipperInfoComponent,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'top'
		}),
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	exports: [RouterModule],
	providers: [
		// provider used to create fake backend
		fakeBackendProvider
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
