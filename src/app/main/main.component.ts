import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/services/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  cartItem: any;
  sphoto: any;
  selectedFile!: File;
  cartId: any;
  uid: any;
  frames: any;
  constructor(
    private api: CustomerService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getImageUrl();
    this.cartId = localStorage.getItem('customer');
    let customers = JSON.parse(this.cartId);
    this.uid = customers._id;

    this.addcartForm = this.fb.group({
      cartId: this.uid,
      size: ['', Validators.required],
      thickness: ['', Validators.required],
      date: ['', Validators.required],
      photo: ['', Validators.required],
      price: ['', Validators.required],
    });
    

    this.api.getFrames().subscribe((res: any) => {
      console.log(res, 'frames with sizes');
      this.frames = res;
    });
  }

  getImageUrl() {
    if (this.selectedFile) {
      return URL.createObjectURL(this.selectedFile);
    }
    return this.selectedFile;
  }

  viewfile(event: any) {
    this.selectedFile = event.target.files[0] as File;
    this.showImg = true;
    this.hideFile = false;
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
    let formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('date', this.addcartForm.value.date);
    formData.append('thickness', this.addcartForm.value.thickness);
    formData.append('price', this.addcartForm.value.price);
    formData.append('size', this.addcartForm.value.size);
    formData.append('cartId', this.uid);

    console.log(formData, 'formdata');

    this.api.addtoCart(formData).subscribe((res: any) => {
      console.log(res, 'cart item added');
      this.router.navigate(['/cart']);
    });
  }
}
