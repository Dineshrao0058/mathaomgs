import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit {

  username!: string;
  mobileno!: string;
  loginForm!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      mobileno: ['', Validators.required]
    })
  }


  login() {
    if (this.username === 'matha' && this.mobileno  ==='8367616146' ) {
      alert("login sucessfull")
      this.router.navigate(['/admin'])
      console.log('hello');

    } else {

      alert('Invalid username or password!');
    }
  }


}
