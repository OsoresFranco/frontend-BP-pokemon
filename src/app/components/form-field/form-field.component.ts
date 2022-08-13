import { Component, Input, OnInit } from '@angular/core';

const distribution = {
  row: ['bp-form-field__container--row'],
  column: ['bp-form-field__container--column'],
};

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements OnInit {
  @Input() set distribution(value: keyof typeof distribution) {
    this._distribution = (distribution[value] || []).join(' ');
  }
  _distribution: string = '';

  constructor() {}

  ngOnInit(): void {}
}
