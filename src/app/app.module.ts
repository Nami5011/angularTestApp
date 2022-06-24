import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DeliveryReqComponent } from './components/delivery-req/delivery-req.component';
import { TrackingParcelsComponent } from './components/tracking-parcels/tracking-parcels.component';

// used to create fake backend
import { fakeBackendProvider } from './backend.interceptor';

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
