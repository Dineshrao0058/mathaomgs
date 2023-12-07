import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnetComponent } from './magnet.component';

describe('MagnetComponent', () => {
  let component: MagnetComponent;
  let fixture: ComponentFixture<MagnetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MagnetComponent]
    });
    fixture = TestBed.createComponent(MagnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
