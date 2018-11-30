import { ComponentCanDeactivate } from './can-deactivate.component';
import { FormGroup } from '@angular/forms';

export class FormCanDeactivate extends ComponentCanDeactivate {

	// get form(): FormGroup;
	loginForm;

	canDeactivate(): boolean {
		// return this.form.touched || !this.form.dirty;
		return false;
	}
}
