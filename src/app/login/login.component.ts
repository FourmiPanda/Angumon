import { Component, OnInit } from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  loading = false;
  loginForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: FormGroup) {

  }
}
