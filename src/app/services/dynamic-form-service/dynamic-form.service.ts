import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {
  bookingEnquiries: AngularFireList<any[]>;
  formDataCollection: AngularFirestoreCollection<any>;
  formConfig;


  constructor(private _afs: AngularFirestore, private _af: AngularFireDatabase) {}

  getFormConfig(): Observable<any> {
    this.formDataCollection = this._afs.collection('formConfig');
    return this.formDataCollection.valueChanges();
  }

  submitBookingEnquiry(formData) {
    return this._afs.collection('bookingEnquiries').add(formData);
  }
}
