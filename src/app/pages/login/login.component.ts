import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 public loginForm: FormGroup;
 public get controls() { return this.loginForm.controls}
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
   this.initLoginForm()
  }

  public login() {

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
