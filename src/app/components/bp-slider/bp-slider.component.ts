import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-bp-slider',
  templateUrl: './bp-slider.component.html',
  styleUrls: ['./bp-slider.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BpSliderComponent),
      multi: true,
    },
  ],
})
export class BpSliderComponent implements OnInit, ControlValueAccessor {
  constructor() {}

  ngOnInit(): void {}

  value: any;
  onChange = (value: any) => {};
  onTouched = () => {};

  changeValue($event: any): void {
    this.onChange($event.target.value);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
