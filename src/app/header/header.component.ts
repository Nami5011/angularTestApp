import { Component, OnInit } from '@angular/core';
import { Constants } from '../global/constants';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	title = Constants.AppTitle;

	constructor() { }

	ngOnInit(): void {
		console.log('header component');
	}

}
