import { Component } from '@angular/core';

@Component({
  selector: 'app-wallphoto',
  templateUrl: './wallphoto.component.html',
  styleUrls: ['./wallphoto.component.scss']
})
export class WallphotoComponent {
  uploadFile: any;
  showImg: boolean = false;
  hideFile: boolean = true;
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
}
