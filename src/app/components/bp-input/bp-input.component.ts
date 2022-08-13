import { Component, Input, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const error = {
  error: ['bp-input--error'],
  noError: [''],
};

@Component({
  selector: 'app-bp-input',
  templateUrl: './bp-input.component.html',
  styleUrls: ['./bp-input.component.scss'],
})
export class BpInputComponent implements OnInit {
  @Input() set error(value: keyof typeof error) {
    this._error = (error[value] || []).join(' ');
  }
  _error: string = '';

  @Input() _id: string = '';
  @Input() _icon: boolean = false;
  @Input() _placeHolder: string = '';

  faMagnifyingGlass = faMagnifyingGlass;
  constructor() {}

  ngOnInit(): void {}
}
