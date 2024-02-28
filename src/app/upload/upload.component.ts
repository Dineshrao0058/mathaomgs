import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  myTextField: string = '';
  uploadFile: any;
  showImg: boolean = false;
  hideFile: boolean = true;
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      myTextField: ['', Validators.required]
    });
  }
  viewfile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var image1 = new FileReader();
      image1.readAsDataURL(event.target.files[0]);
      image1.onload = (event) => {
        this.uploadFile = '';
        this.uploadFile = event.target?.result
        this.hideFile = false;
        this.showImg = true;

        console.log(this.uploadFile);
      }

    }
   
  }
  deleteItem(event: Event) {
    // Your delete logic here
    console.log('Delete function called');

    // Accessing the fabid attribute value
    const fabId = (event.target as HTMLElement).getAttribute('fabid');
    console.log('fabId:', fabId);
  }
}
