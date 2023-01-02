import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormImageCropComponent } from './form-image-crop.component';

describe('FormImageCropComponent', () => {
  let component: FormImageCropComponent;
  let fixture: ComponentFixture<FormImageCropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormImageCropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormImageCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
