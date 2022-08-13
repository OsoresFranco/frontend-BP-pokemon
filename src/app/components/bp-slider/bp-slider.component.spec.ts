import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpSliderComponent } from './bp-slider.component';

describe('BpSliderComponent', () => {
  let component: BpSliderComponent;
  let fixture: ComponentFixture<BpSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
