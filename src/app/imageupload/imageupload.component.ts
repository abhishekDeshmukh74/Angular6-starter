import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
	selector: 'app-imageupload',
	templateUrl: './imageupload.component.html',
	styleUrls: ['./imageupload.component.scss']
})
export class ImageuploadComponent implements OnInit {

	public uploadForm: FormGroup;
	public fileName = '';

	constructor(
		private fb: FormBuilder
	) { }

	ngOnInit() {
		this.createForm();
	}

	public createForm(): void {
		this.uploadForm = this.fb.group({
			name: ['', Validators.required],
			image: null
		});
	}

	public onFileChange(event): void {
		const reader = new FileReader();
		if (event.target.files && event.target.files.length > 0) {
			const file = event.target.files[0];
			reader.readAsDataURL(file);
			this.fileName = file.name;
			reader.onload = () => {
				this.uploadForm.get('image').setValue({
					filename: file.name,
					filetype: file.type,
					value: reader.result.split(',')[1]
				});
			};
		}
	}

	public apicall() {
		console.log('Form data: ' + JSON.stringify(this.uploadForm.value));
		console.log('API call of the form data');
	}

}
