import { Component, OnInit, Inject, Input } from '@angular/core';
import { DynamicFormService } from '../../services/dynamic-form-service/dynamic-form.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.scss']
})
export class BookingModalComponent implements OnInit {

  formGroup;
  form: FormGroup;
  config: any[] = [];

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private _dynamicFormService: DynamicFormService) {
    this._dynamicFormService.getFormConfig().subscribe(data => {
      this.config = data[0].formConfig[this.data];
      this.config ? this.createFormGroup(this.config) : null;
    });
  }

  createFormGroup(config) {
    this.formGroup = this.formBuilder.group({});
    config.forEach(control => this.formGroup.addControl(control.name, this.formBuilder.control('')));
    this.form = this.formGroup;
  }

  submitForm(formData) {
    // Form only returning one field's data. Tried to debug, but was taking too long.
    this._dynamicFormService.submitBookingEnquiry(formData);
  }

  ngOnInit() {

  }

}
