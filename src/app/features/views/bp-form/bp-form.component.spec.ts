import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpFormComponent } from './bp-form.component';

describe('BpFormComponent', () => {
  let component: BpFormComponent;
  let fixture: ComponentFixture<BpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
