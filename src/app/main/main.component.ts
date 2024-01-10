import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  uploadFile: any;
  showImg: boolean = false;
  hideFile: boolean = true;
  btns: boolean = false;
  btn:boolean = false;
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


