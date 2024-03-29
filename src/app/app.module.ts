import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { FrameComponent } from './frame/frame.component';
import { DesignComponent } from './design/design.component';
import { WallclockComponent } from './wallclock/wallclock.component';
import { TransparentComponent } from './transparent/transparent.component';
import { WallphotoComponent } from './wallphoto/wallphoto.component';
import { NameplateComponent } from './nameplate/nameplate.component';
import { MagnetComponent } from './magnet/magnet.component';
import { UploadComponent } from './upload/upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninSignupComponent } from './signin-signup/signin-signup.component';
import { HttpClientModule } from '@angular/common/http';
import { CartpageComponent } from './cartpage/cartpage.component';
import { HeaderComponent } from './header/header.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    DesignComponent,
    FrameComponent,
    WallclockComponent,
    TransparentComponent,
    WallphotoComponent,
    NameplateComponent,
    MagnetComponent,
    UploadComponent,
    SigninSignupComponent,
    CartpageComponent,
    HeaderComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
