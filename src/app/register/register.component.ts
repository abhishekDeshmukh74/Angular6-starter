import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../../common/services/alert.service';
import { UserService } from '../../common/services/user.service';
import { FormCanDeactivate } from '../can-deactivate/form-can-deactivate';

@Component({ templateUrl: 'register.component.html', styleUrls: ['./register.component.scss'] })
export class RegisterComponent extends FormCanDeactivate implements OnInit {

	@ViewChild('registerForm')
	registerForm: FormGroup;
	loading = false;
	submitted = false;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private userService: UserService,
		private alertService: AlertService
	) {
		super();
	}

	ngOnInit() {
		this.registerForm = this.formBuilder.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			username: ['', Validators.required],
			email: ['', Validators.required],
			mobileNo: ['', Validators.required],
			password: ['', [Validators.required, Validators.minLength(6)]],
		});
	}

	get f() {
		return this.registerForm.controls;
	}

	onSubmit() {
		this.submitted = true;

		if (this.registerForm.invalid) {
			return;
		}

		this.loading = true;
		this.userService
			.register(this.registerForm.value)
			.pipe(first())
			.subscribe(
				data => {
					this.alertService.success('Registration successful', true);
					this.router.navigate(['/login']);
				},
				error => {
					this.alertService.error(error);
					this.loading = false;
				}
			);
	}
}
