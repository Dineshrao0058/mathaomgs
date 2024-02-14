import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  jwttoken(): any {
    const header = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    };
    return header;
  }

  constructor(private http: HttpClient) {}

  customerLogin(data: any) {
    return this.http.post('http://localhost:5000/customer/login', data);
  }
  customerRegister(data: any) {
    return this.http.post('http://localhost:5000/customer', data);
  }

  addtoCart(data: any) {
    return this.http.post('http://localhost:5000/cart', data, this.jwttoken());
  }
  cartItems(id: any) {
    return this.http.get(
      'http://localhost:5000/cart/getcartBy/' + id,
      this.jwttoken()
    );
  }

  getFrames() {
    return this.http.get(
      'http://localhost:5000/frames/getframes',
      this.jwttoken()
    );
  }
}
