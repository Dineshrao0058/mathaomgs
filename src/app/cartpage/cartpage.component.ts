import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/services/customer.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss'],
})
export class CartpageComponent implements OnInit {
  [x: string]: any;
  quatityForm!: FormGroup;

  cartId: any;
  uid: any;
  cartList: any;
  imgs: any;
  grandTotal: any;
  subtotal: any;
  itemCount: any;
  cid: any;
  constructor(
    private api: CustomerService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.imgs = '../../assets/images/adminmain.jpg';
    this.cartId = localStorage.getItem('customer');
    let customers = JSON.parse(this.cartId);
    this.uid = customers._id;
    console.log(this.uid);

    this.api.cartItems().subscribe((res: any) => {
      console.log(res, 'cart items');
      this.cartList = res.filter((u: any) => u.cartId === this.uid);

      let gtotal = this.cartList.map((i: any) => i.price);
      console.log(gtotal);

      this.grandTotal = gtotal.reduce((a: any, b: any) => a + b, 0);
      console.log(gtotal, this.grandTotal, 'total price');

      let items = this.cartList.map((i: any) => i.quantity);
      console.log(items, 'quantity');
      this.itemCount = items.reduce((a: any, b: any) => a + b, 0);

      console.log(this.itemCount, 'total items');
      // this.grandTotal =  this.subtotal;
      // console.log(this.grandTotal);
    });

    // this.api.getCart().subscribe((res: any) => {
    //   console.log(res, 'carts');
    //   this.cartList = res;
    // });

    this.quatityForm = this.fb.group({
      quantity: [''],
      id: this.cid,
    });
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }

  increseQuantity(c: any) {
    let d = {
      quantity: this.quatityForm.value.quantity,
      id: c._id,
    };
    this.api.editCartItems(d).subscribe((res: any) => {
      console.log(res);
    });
  }
}
