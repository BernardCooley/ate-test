import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { UserService } from '../../services/userservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private _user: UserService, private _formBuilder: FormBuilder) {
    this.loginForm = this._formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  login() {
    this._user.login(this.loginForm.value.email, this.loginForm.value.password);
  }

  ngOnInit() {
  }

}
