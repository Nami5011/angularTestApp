import { Component, OnInit } from '@angular/core';
import { Constants } from '../global/constants';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
	title = Constants.AppTitle;

	constructor() { }

	ngOnInit(): void {
		console.log('footer component');
	}

}
