import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormelementsComponent } from './formelements.component';

describe('FormelementsComponent', () => {
  let component: FormelementsComponent;
  let fixture: ComponentFixture<FormelementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormelementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
