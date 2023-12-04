import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallclockComponent } from './wallclock.component';

describe('WallclockComponent', () => {
  let component: WallclockComponent;
  let fixture: ComponentFixture<WallclockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WallclockComponent]
    });
    fixture = TestBed.createComponent(WallclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
