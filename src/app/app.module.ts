import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { WallclockComponent } from './wallclock/wallclock.component';
import { TransparentComponent } from './transparent/transparent.component';
import { WallphotoComponent } from './wallphoto/wallphoto.component';
import { NameplateComponent } from './nameplate/nameplate.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainComponent,
    HomeComponent,
    DesignComponent,
    WallclockComponent,
    TransparentComponent,
    WallphotoComponent,
    NameplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
