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
  cartItem: any;
  sphoto: any;
  selectedFile!: File;
  cartId: any;
  uid: any;
  constructor(private api: CustomerService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.cartId = localStorage.getItem('customer');
    let customers = JSON.parse(this.cartId);
    this.uid = customers._id;

    this.addcartForm = this.fb.group({
      cartId: this.uid,
      size: ['', Validators.required],
      date: ['', Validators.required],
      photo: ['', Validators.required],
      price: ['', Validators.required],
    });
    console.log(this.addcartForm.value,'ngoninit');
  }

  getImageUrl() {
    if (this.selectedFile) {
      return URL.createObjectURL(this.selectedFile);
    }
    return '';
  }

  viewfile(event: any) {
    this.selectedFile = event.target.files[0] as File;
    // this.sphoto = this.selectedFile.name
    // console.log(this.sphoto, 'selected file');
    this.showImg = true;
    this.hideFile = false;
  }

  // uploadPhoto() {
  //   const f = this.formdata.item(0);

  //   this.api.fileupload(f).subscribe((res: any) => {
  //     console.log(res);
  //   });
  // }
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
    formData.append('price', this.addcartForm.value.price);
    formData.append('size', this.addcartForm.value.size);

    console.log(formData,'formdata');
    

    this.api.addtoCart(formData).subscribe((res: any) => {
      console.log(res, 'cart item added');
    });
  }
}
