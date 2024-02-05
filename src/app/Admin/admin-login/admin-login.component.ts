import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  username!: string;
  password!: string;

  constructor(private router: Router) {

  }

  login() {
    if (this.username === 'admin' && this.password === 'admin123') {
      alert("login sucessfull")
      this.router.navigate(['admin-dashboard'])
    } else {

      alert('Invalid username or password!');
    }
  }
  ngOnInit(): void { }

}
