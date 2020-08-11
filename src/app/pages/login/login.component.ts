import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {AuthorizationUser, User} from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 public loginForm: FormGroup;
 public get controls() { return this.loginForm.controls}
  constructor(
    private formBuilder: FormBuilder,
    private authentication: AuthenticationService,
  ) { }

  ngOnInit(): void {
   this.initLoginForm()
  }

  public login(): void {
   console.log('test');
    this.authentication.login(new AuthorizationUser(
      this.controls.login.value,
      this.controls.password.value
    )).subscribe( (response: User) => {

    });
  }

  public initLoginForm(): void {
   this.loginForm = this.formBuilder.group({
     login: new FormControl('', [
       Validators.required,
     ]),
     password: new FormControl('', [
       Validators.required,
     ])
   })
  }

}
