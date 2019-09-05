import { Component, OnInit, Inject } from '@angular/core';
import { DynamicFormService } from '../../services/dynamic-form-service/dynamic-form.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.scss']
})
export class BookingModalComponent implements OnInit {
  formGroup;
  form: FormGroup;
  config: any[] = [];

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) private data: any, private _dynamicFormService: DynamicFormService, private _snackBar: MatSnackBar, private dialog: MatDialog) {
    this.data.length > 0 ? this._dynamicFormService.getFormConfig(data).subscribe(returnedData => {
      this.config = returnedData.data().fields;
      this.config ? this.createFormGroup(this.config) : null;
    }) : null;
  }

  createFormGroup(config) {
    this.formGroup = this.formBuilder.group({});
    config.forEach(control => this.formGroup.addControl(control.name, this.formBuilder.control('')));
    this.form = this.formGroup;
  }

  submitForm(formData) {
    // Form only returning one field's data. Tried to debug, but was taking too long.
    this._dynamicFormService.submitBookingEnquiry(formData).then(() => {
      this.openSnackBar('Query submitted', '');
      this.dialog.closeAll();
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }  

  ngOnInit() {

  }

}
