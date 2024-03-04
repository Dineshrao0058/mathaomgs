
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CustomerService } from '../shared/services/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-wallphoto',
  templateUrl: './wallphoto.component.html',
  styleUrls: ['./wallphoto.component.scss']
})
export class WallphotoComponent implements OnInit {
  addcartForm!: FormGroup;
  uploadFile: any;

  showImg: boolean = false;
  hideFile: boolean = true;

  square1: boolean = false;
  square2: boolean = false;
  square3: boolean = false;

  uToken: any;
  cartItem: any;
  sphoto: any;
  selectedFile!: File;
  cartId: any;
  uid: any;

  sizes: any;
  thickness: any;
  prices: any;

  photoSize: any;
  photoThickness: any;

  totalPrice = 0;
  qty = 0;
  total = 0;

  
 
  selectedBackgroundImage: string | null = null;
  // BackgroundImage:any
  // backgroundImages: BackgroundImage[] = [
  //   { name: 'Image 1', path: 'assets/images/image1.jpg' },
  //   { name: 'Image 2', path: 'assets/images/image2.jpg' },
  //   { name: 'Image 3', path: 'assets/images/image3.jpg' }
  // ];
  
  @ViewChild('imageElement')
  imageElement!: ElementRef;
  constructor(
    private api: CustomerService,
    private fb: FormBuilder,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.getImageUrl();
    this.cartId = localStorage.getItem('customer');
    let customers = JSON.parse(this.cartId);
    this.uid = customers._id;

    this.addcartForm = this.fb.group({
      cartId: this.uid,
      sizeId: ['', Validators.required],
      thicknessId: ['', Validators.required],
      quantity: ['', Validators.required],
      photo: ['', Validators.required],
      price: ['', Validators.required],
    });

    this.api.getSizes().subscribe((res: any) => {
      this.sizes = res;
      // console.log(this.sizes, 'frames with sizes');
    });

    this.api.getThickness().subscribe((res: any) => {
      this.thickness = res;
      // console.log(this.thickness, 'frames with thickness');
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

  squareShape1() {
    this.square1 = true;
  }
  squareShape2() {
    this.square2 = true;
  }
  squareShape3() {
    this.square3 = true;
  }

  selectedSize(event: any) {
    this.photoSize = event.target.value;
    console.log(this.photoSize);
  }

  selectedThickness(event: any) {
    this.photoThickness = event.target.value;
    console.log(this.photoThickness);
    this.api
      .getPrices(this.photoSize, this.photoThickness)
      .subscribe((res: any) => {
        this.prices = res;
        console.log(this.prices, 'frames with prices');
        let tp = this.prices.map((p: any) => p.price);
        this.totalPrice = Number(tp);
        console.log(this.totalPrice, 'total price 1');
        this.addcartForm.patchValue({
          price: this.totalPrice,
        });
      });
  }

  selectQuantity(event: any) {
    this.qty = event.target.value;
    console.log(Number(this.qty));
    this.total = this.totalPrice * this.qty;
    console.log(this.totalPrice, 'price with quantity');
    this.addcartForm.patchValue({
      price: this.totalPrice,
    });
  }

  buyNow() {
    let formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('sizeId', this.addcartForm.value.sizeId);
    formData.append('thicknessId', this.addcartForm.value.thicknessId);
    formData.append('quantity', this.addcartForm.value.quantity);
    formData.append('price', this.addcartForm.value.price);
    formData.append('cartId', this.uid);

    console.log(formData, 'formdata');

    this.api.addtoCart(formData).subscribe((res: any) => {
      console.log(res, 'cart item added');
      this.router.navigate(['/cart']);
    });
  }

  zoomIn() {
    const img = this.imageElement.nativeElement;
    const currentWidth = img.clientWidth;
    const currentHeight = img.clientHeight;
    const newWidth = currentWidth * 1.1; // Increase size by 10%
    const newHeight = currentHeight * 1.1;
    this.renderer.setStyle(img, 'width', `${newWidth}px`);
    this.renderer.setStyle(img, 'height', `${newHeight}px`);
  }

  zoomOut() {
    const img = this.imageElement.nativeElement;
    const currentWidth = img.clientWidth;
    const currentHeight = img.clientHeight;
    const newWidth = currentWidth * 0.9; // Decrease size by 10%
    const newHeight = currentHeight * 0.9;
    this.renderer.setStyle(img, 'width', `${newWidth}px`);
    this.renderer.setStyle(img, 'height', `${newHeight}px`);
  }

 
  // toggleBackground(backgroundImage: BackgroundImage): void {
  //   if (backgroundImage === this.selectedBackgroundImage) {
  //     // If the clicked image is already selected, remove the background
  //     this.selectedBackgroundImage = null;
  //   } else {
  //     // Otherwise, set the clicked image as the background
  //     this.selectedBackgroundImage = backgroundImage;
  //   }
  // }

}
