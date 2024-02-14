import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/services/customer.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss'],
})
export class CartpageComponent implements OnInit {
  cartId: any;
  uid: any;
  cartList: any;
  constructor(private api: CustomerService) {}
  ngOnInit(): void {
    this.cartId = localStorage.getItem('customer');
    let customers = JSON.parse(this.cartId);
    this.uid = customers._id;
    console.log(this.uid);

    this.api.cartItems(this.uid).subscribe((res: any) => {
      console.log(res, 'cart items');
      this.cartList = res;
    });
  }
}
