import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTS } from '../../server/constants';
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  serverUrl = CONSTANTS.serverUrl
  customerUrl = CONSTANTS.customerUrl
  cartUrl = CONSTANTS.cartUrl
  sizeUrl = CONSTANTS.sizeUrl
  thicknessUrl = CONSTANTS.thicknessUrl
  priceUrl = CONSTANTS.priceUrl
  jwttoken(): any {
    const header = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
      }),
    };
    return header;
  }


  constructor(private http: HttpClient) { }

  customerLogin(data: any) {
    return this.http.post(this.serverUrl + '/customer/login', data);

  }
  customerRegister(data: any) {
    return this.http.post(this.customerUrl, data);
  }

  addtoCart(data: any) {
    return this.http.post(this.cartUrl, data, this.jwttoken());
  }
  cartItems() {
    return this.http.get(this.cartUrl + '/getcart', this.jwttoken());
  }

  editCartItems(data: any) {
    return this.http.put(
      this.cartUrl + '/updatecart/' + data.id,
      data,
      this.jwttoken()
    );
  }

  getSizes() {
    return this.http.get(
      this.sizeUrl,
      this.jwttoken()
    );
  }
  getThickness() {
    return this.http.get(
      this.thicknessUrl,
      this.jwttoken()
    );
  }

  getPrices(sid: any, tid: any) {
    let data = {
      sizeId: sid,
      thicknessId: tid,
    };
    return this.http.post(
      this.priceUrl,
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

  addAddresses(data: any) {
    return this.http.post(
      this.cartUrl + '/addcheckout',
      data,
      this.jwttoken()
    );
  }

  getAddress(id: any) {
    return this.http.get(
      this.cartUrl + '/viewCheckoutbyId/' + id,
      this.jwttoken()
    );
  }
}
