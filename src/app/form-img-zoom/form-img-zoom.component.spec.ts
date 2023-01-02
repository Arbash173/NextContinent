import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormImgZoomComponent } from './form-img-zoom.component';

describe('FormImgZoomComponent', () => {
  let component: FormImgZoomComponent;
  let fixture: ComponentFixture<FormImgZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormImgZoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormImgZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
