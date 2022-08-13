import {
  Component,
  forwardRef,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const error = {
  error: ['bp-input--error'],
  noError: [''],
};

@Component({
  selector: 'app-bp-input',
  templateUrl: './bp-input.component.html',
  styleUrls: ['./bp-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BpInputComponent),
      multi: true,
    },
  ],
})
export class BpInputComponent implements OnInit, ControlValueAccessor {
  @Output() newValue = new EventEmitter<any>();

  @Input() set error(value: keyof typeof error) {
    this._error = (error[value] || []).join(' ');
  }
  _error: string = '';

  @Input() _id: string = '';
  @Input() _icon: boolean = false;
  @Input() _placeHolder: string = '';

  faMagnifyingGlass = faMagnifyingGlass;
  ngOnInit(): void {}

  value: any;
  onChange = (value: any) => {};
  onTouched = () => {};

  changeValue($event: any): void {
    this.onChange($event.target.value);
    this.newValue.emit($event.target.value);
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
