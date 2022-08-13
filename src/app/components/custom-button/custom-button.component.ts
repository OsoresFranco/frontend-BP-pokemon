import { Component, Input } from '@angular/core';

const colors = {
  primary: ['bp-button--primary'],
  secondary: ['bp-button--secondary'],
  disabled: ['bp-button--disabled'],
};

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent {
  @Input() set colors(value: keyof typeof colors) {
    this._color = (colors[value] || []).join(' ');
  }
  _color: string = 'bp-button--primary';

  @Input() set isDisabled(value: boolean) {
    this._isDisabled = value;
    this._color = 'bp-button--disabled';
  }
  _isDisabled: boolean = false;
}
