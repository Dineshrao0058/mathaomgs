import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../shared/services/admin.service';
import { CustomerService } from '../shared/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-signup',
  templateUrl: './signin-signup.component.html',
  styleUrls: ['./signin-signup.component.scss'],
})
export class SigninSignupComponent implements OnInit {
  loginForm!: FormGroup;
  signupForm!: FormGroup;
  constructor(
    private api: CustomerService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      mobileno: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.signupForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      mobileno: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.api.customerLogin(this.loginForm.value).subscribe((res: any) => {
      console.log(res, 'customer login success');
      localStorage.setItem('customer', JSON.stringify(res.Customer));
      localStorage.setItem('userToken', res.token);
      this.router.navigate(['/home']);
    });
  }

  signUp() {
    this.api.customerRegister(this.signupForm.value).subscribe((res:any)=>{
      console.log(res,'customer signup success');
      this.router.navigate(['/login']);
    })
  }
}
