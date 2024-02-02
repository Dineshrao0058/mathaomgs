import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magnet',
  templateUrl: './magnet.component.html',
  styleUrls: ['./magnet.component.scss']
})
export class MagnetComponent {
  ngSwitch!: any;
  uploadFile: any;
  showImg: boolean = false;
  hideFile: boolean = true;
  btns: boolean = false;
  btn: boolean = false;
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
  disabledbutton() {
    this.btns = true
  }
  disablebutton() {
    this.btn = true
  }
}

