import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DeliveryReqComponent } from './delivery-req/delivery-req.component';
import { TrackingParcelsComponent } from './tracking-parcels/tracking-parcels.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'deliveryReq', component: DeliveryReqComponent },
	{ path: 'trackingParcels', component: TrackingParcelsComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		FooterComponent,
		DeliveryReqComponent,
		TrackingParcelsComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		FormsModule,
		ReactiveFormsModule
	],
	exports: [RouterModule],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
