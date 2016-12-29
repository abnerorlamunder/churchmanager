import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-groups',
	templateUrl: 'groups.html'
})
export class Groups {

	groups: Array<{ name: string, imageUrl?: string }>;

	constructor(public navCtrl: NavController) {
		this.groups = [
			{
				name: "GP Mix",
				imageUrl: 'assets/gpmix.jpg'
			},
			{
				name: "Louvor NJ",
				imageUrl: 'assets/splash.png'
			},
			{
				name: "Louvor IDN"
			}
		]
	}

	gotoGroup: (groupName: string) => void
	= (groupName: string) => {
		console.log(groupName);
	};

}
