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

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'main', component: MainComponent },
      { path: 'main', component: MainComponent },
      { path: 'design', component: DesignComponent },
      { path: 'clock', component: WallclockComponent },
      { path: 'transparent', component: TransparentComponent },
      { path: 'wallphoto', component: WallphotoComponent },
      { path: 'nameplate', component: WallphotoComponent },
      { path: 'frame', component: FrameComponent },
      { path: 'magnet', component: MagnetComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
