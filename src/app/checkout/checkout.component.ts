import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/services/customer.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  cartId: any;
  uid: any;
  cartList: any;
  imgs: any;
  grandTotal: any;
  subtotal: any;
  itemCount: any;
  cid: any;
  addressForm!: FormGroup;
  customers: any;
  deliveryAddress: any;

  constructor(
    private api: CustomerService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.imgs = '../../assets/images/adminmain.jpg';
    this.cartId = localStorage.getItem('customer');
    console.log(this.cartId, 'customer');

    this.customers = JSON.parse(this.cartId);
    this.uid = this.customers._id;
    console.log(this.uid);
    this.addressForm = this.fb.group({
      addressId: this.uid,
      fullname: [''],
      email: [''],
      mobileno: [''],
      altmobileno: [''],
      houseno: [''],
      landmark: [''],
      village: [''],
      city: [''],
      state: [''],
      pincode: [''],
    });
    console.log(this.uid, 'addressid');
    this.api.getAddress(this.uid).subscribe((res: any) => {
      console.log(res, 'address by addressid');
      this.deliveryAddress = res;
    });

    this.api.cartItems().subscribe((res: any) => {
      console.log(res, 'cart items');
      this.cartList = res.filter((u: any) => u.cartId === this.uid);

      let gtotal = this.cartList.map((i: any) => i.price * i.quantity);
      console.log(gtotal);

      this.grandTotal = gtotal.reduce((a: any, b: any) => a + b, 0);
      console.log(gtotal, this.grandTotal, 'total price');

      let items = this.cartList.map((i: any) => i.quantity);
      console.log(items, 'quantity');
      this.itemCount = items.reduce((a: any, b: any) => a + b, 0);

      console.log(this.itemCount, 'total items');
    });
  }
  isVisible: boolean = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;

    this.addressForm.patchValue({
      fullname: this.customers.fullname,
      email: this.customers.email,
      mobileno: this.customers.mobileno,
    });
  }

  addAddress() {
    this.api.addAddresses(this.addressForm.value).subscribe((res: any) => {
      console.log(res, 'addresses');
      this.router.navigate(['checkout']);
    });
    
  }
  payment() {}
}
