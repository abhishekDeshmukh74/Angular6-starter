import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../../common/services/alert.service';

@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html',
	styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

	contactsForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private route: ActivatedRoute,
		private router: Router,
		private alertService: AlertService
	) { }

	ngOnInit() {

		this.contactsForm = this.formBuilder.group({
			name: ['', Validators.required],
			nickname: ['', Validators.required],
			city: ['', Validators.required],
			phoneNo: ['', Validators.required],
		});
	}

	get f() {
		return this.contactsForm.controls;
	}

	onSubmit() {

		if (this.contactsForm.invalid) {
			return;
		}

		// this.authenticationService
		// 	.login(this.f.username.value, this.f.password.value)
		// 	.pipe(first())
		// 	.subscribe(
		// 		data => {
		// 			this.router.navigate(['/contacts']);
		// 		},
		// 		error => {
		// 			this.alertService.error(error);
		// 			this.loading = false;
		// 		}
		// 	);
	}


}
