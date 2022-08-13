import { Component, Input, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bp-input',
  templateUrl: './bp-input.component.html',
  styleUrls: ['./bp-input.component.scss'],
})
export class BpInputComponent implements OnInit {
  @Input() _icon: boolean = false;
  @Input() _placeHolder: string = '';

  faMagnifyingGlass = faMagnifyingGlass;
  constructor() {}

  ngOnInit(): void {}
}
