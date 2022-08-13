import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpLabelComponent } from './bp-label.component';

describe('BpLabelComponent', () => {
  let component: BpLabelComponent;
  let fixture: ComponentFixture<BpLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
