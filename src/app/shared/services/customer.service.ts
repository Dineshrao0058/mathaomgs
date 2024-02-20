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
  cartItems() {
    return this.http.get('http://localhost:5000/cart/getcart', this.jwttoken());
  }

  editCartItems(data:any){
    return this.http.put('http://localhost:5000/cart/updatecart/'+data.id,data, this.jwttoken());
  }

  getSizes() {
    return this.http.get(
      'http://localhost:5000/size/getsizes',
      this.jwttoken()
    );
  }
  getThickness() {
    return this.http.get(
      'http://localhost:5000/thickness/getAllthickness',
      this.jwttoken()
    );
  }

  getPrices(sid: any, tid: any) {
    let data = {
      sizeId: sid,
      thicknessId: tid,
    };
    return this.http.post(
      'http://localhost:5000/price/getprices',
      data,
      this.jwttoken()
    );
  }
  // getCart() {
  //   return this.http.get(
  //     'http://localhost:5000/price/getframes',
  //     this.jwttoken()
  //   );
  // }
}
