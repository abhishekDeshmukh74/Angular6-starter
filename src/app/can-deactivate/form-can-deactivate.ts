import { ComponentCanDeactivate } from './component-can-deactivate';
import { FormGroup } from '@angular/forms';

export abstract class FormCanDeactivate extends ComponentCanDeactivate {

	abstract get form(): FormGroup;

	canDeactivate(): boolean {
		return !this.form.dirty;
	}
}
