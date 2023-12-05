import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameplateComponent } from './nameplate.component';

describe('NameplateComponent', () => {
  let component: NameplateComponent;
  let fixture: ComponentFixture<NameplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NameplateComponent]
    });
    fixture = TestBed.createComponent(NameplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
