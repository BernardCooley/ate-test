import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {
  bookingEnquiries: AngularFireList<any[]>;
  formConfig;

  constructor(private _afs: AngularFirestore, private _af: AngularFireDatabase) {}

  getFormConfig(formName) {
    return this._afs.collection('formConfigTest').doc(formName).get();
  }

  submitBookingEnquiry(formData) {
    delete formData['undefined'];
    return this._afs.collection('bookingEnquiries').add(formData);
  }
}
