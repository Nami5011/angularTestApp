import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../global/constants';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	title = Constants.AppTitle;

	constructor(private _router: Router) { }

	ngOnInit(): void {
		console.log('ngOnInit');
	}

}
