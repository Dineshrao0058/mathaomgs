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

  fileupload(data:any): Observable<any> {
    
    return this.http.post(
      'http://localhost:5000/photo/upload',
      data,
      this.jwttoken()
    );
  }

  addtoCart(data: any) {
    return this.http.post('http://localhost:5000/cart', data, this.jwttoken());
  }
}
