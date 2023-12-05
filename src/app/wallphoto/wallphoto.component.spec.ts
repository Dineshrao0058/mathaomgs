import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallphotoComponent } from './wallphoto.component';

describe('WallphotoComponent', () => {
  let component: WallphotoComponent;
  let fixture: ComponentFixture<WallphotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WallphotoComponent]
    });
    fixture = TestBed.createComponent(WallphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
