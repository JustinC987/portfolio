import { Component, OnInit } from '@angular/core';
@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: [ './home-page.component.scss' ]
})
export class HomePageComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	openResume() {
		window.open('../../assets/resume/JustinClappsy_Resume(Final).pdf');
	}
}
