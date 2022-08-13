import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  handleClick(value: any) {
    console.log(value);
    value.error = !value.error;
    console.log(value);
  }

  constructor() {}

  ngOnInit(): void {}
}
