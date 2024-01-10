import { Component } from '@angular/core';

@Component({
  selector: 'app-wallclock',
  templateUrl: './wallclock.component.html',
  styleUrls: ['./wallclock.component.scss']
})
export class WallclockComponent {
  uploadFile: any;
  showImg: boolean = false;
  hideFile: boolean = true;
  btns: boolean = false;
  btn: boolean = false;
  bntStyle: any;

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



  applyShape(){
    this.bntStyle = 'rectangle'
  }


  disabledbutton() {
    this.btns = true
  }
  disablebutton(){
    this.btn = true
  }
}
