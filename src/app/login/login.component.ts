import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthentService} from '../services/authent.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  loading = false;
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router, private authentService: AuthentService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    if (this.authentService.isAuthenticated()) {
      console.log('implement call start route');
      this.router.navigate(['/start']);
    }


  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authentService.login(this.f.username.value, this.f.password.value);
    this.loading = false;
    this.router.navigate(['/start']);

  }
}
