import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/services/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  addcartForm!: FormGroup;
  uploadFile: any;
  showImg: boolean = false;
  hideFile: boolean = true;

  hexagon1: boolean = false;
  square1: boolean = false;
  circle1: boolean = false;
  uToken: any;
  formdata: any;
  cartItem: any;
  photo: any;
  selectedFile!: File;
  cartId: any;
  uid: any;
  constructor(private api: CustomerService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cartId = localStorage.getItem('customer');
    this.uid = JSON.parse(this.cartId._id);
    console.log(this.uid, this.cartId, 'cartid');

    this.addcartForm = this.fb.group({
      cartId: this.uid,
      size: ['', Validators.required],
      date: ['', Validators.required],
      photo: [this.getImageUrl(), Validators.required],
      price: ['', Validators.required],
    });
  }

  getImageUrl() {
    if (this.selectedFile) {
      return URL.createObjectURL(this.selectedFile);
    }
    return '';
  }

  viewfile(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile, 'selected file');

    this.showImg = true;
    this.hideFile = false;
    this.formdata = event.target.files;
    console.log('http://localhost:5000/uploads/' + this.formdata[0].name);
  }

  uploadPhoto() {
    const f = this.formdata.item(0);

    this.api.fileupload(f).subscribe((res: any) => {
      console.log(res);
    });
  }
  hexagonShape() {
    this.hexagon1 = true;
  }
  squareShape() {
    this.square1 = true;
  }
  circleShape() {
    this.circle1 = true;
  }

  addCart() {
    
    console.log(this.addcartForm.value, 'this.addcartForm.value');

    const f = this.formdata.item(0);
    const formData = new FormData();
    formData.append('photo', f.name);
    formData.append('size', this.addcartForm.value.size);
    formData.append('price', this.addcartForm.value.price);
    formData.append('date', this.addcartForm.value.date);
    // let carts = {
    //   size: this.addcartForm.value.size,
    //   date: this.addcartForm.value.date,
    //   price: this.addcartForm.value.price,
    //   photo: f.name,
    // };
    console.log(formData, 'cccccc');

    this.api.addtoCart(formData).subscribe((res: any) => {
      console.log(res, 'cart item added');
    });
  }
}
