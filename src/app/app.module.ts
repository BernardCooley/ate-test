import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/userservice/user.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { AvailableServicesComponent } from './components/available-services/available-services.component';
import { BookingModalComponent } from './components/booking-modal/booking-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DynamicFormService } from './services/dynamic-form-service/dynamic-form.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { InputComponent } from './fields/input/input.component';
import { RadiosComponent } from './fields/radios/radios.component';
import { MatRadioModule } from '@angular/material/radio';
import { TextareaComponent } from './fields/textarea/textarea.component';
import { ButtonComponent } from './fields/button/button.component';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { DateComponent } from './fields/date/date.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from './environments/environment';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';


export const firestoreConfig = environment.firestore;

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AvailableServicesComponent,
    BookingModalComponent,
    DynamicFieldDirective,
    InputComponent,
    RadiosComponent,
    TextareaComponent,
    ButtonComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firestoreConfig),
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [
    UserService, 
    AngularFireAuthGuard,
    DynamicFormService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    MatDatepickerModule,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    BookingModalComponent,
    ButtonComponent,
    DateComponent,
    InputComponent,
    RadiosComponent,
    TextareaComponent
  ]
})
export class AppModule { }
