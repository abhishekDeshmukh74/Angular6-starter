import { Component, OnInit, OnDestroy } from '@angular/core';

import { AlertService } from '../../common/services/alert.service';

@Component({
	selector: 'app-paginate',
	templateUrl: './paginate.component.html',
	styleUrls: ['./paginate.component.scss']
})

export class PaginateComponent implements OnInit, OnDestroy {

	constructor(
		private alertService: AlertService
	) { }

	ngOnInit() {


	}

	ngOnDestroy(): void {
		throw new Error('Method not implemented.');
	}

}
