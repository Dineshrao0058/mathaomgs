import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { MainComponent } from './main/main.component';
import { WallclockComponent } from './wallclock/wallclock.component';
import { TransparentComponent } from './transparent/transparent.component';
import { WallphotoComponent } from './wallphoto/wallphoto.component';
import { FrameComponent } from './frame/frame.component';
import { MagnetComponent } from './magnet/magnet.component';
import { NameplateComponent } from './nameplate/nameplate.component';
import { SigninSignupComponent } from './signin-signup/signin-signup.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', component: FrameComponent },
  { path: 'frame', component: FrameComponent },
  { path: 'signup', component: SigninSignupComponent },
  { path: 'login', component: SigninSignupComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'main', component: MainComponent },
      { path: 'design', component: DesignComponent },
      { path: 'clock', component: WallclockComponent },
      { path: 'transparent', component: TransparentComponent },
      { path: 'wallphoto', component: WallphotoComponent },
      { path: 'nameplate', component: NameplateComponent },
      { path: 'magnet', component: MagnetComponent },
      { path: 'cart', component: CartpageComponent },
      { path: 'checkout', component: CheckoutComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
