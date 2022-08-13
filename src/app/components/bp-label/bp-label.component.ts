import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bp-label',
  templateUrl: './bp-label.component.html',
  styleUrls: ['./bp-label.component.scss'],
})
export class BpLabelComponent implements OnInit {
  @Input() _for: string = '';
  constructor() {}

  ngOnInit(): void {}
}
