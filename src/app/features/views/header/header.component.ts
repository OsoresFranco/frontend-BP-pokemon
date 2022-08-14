import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() createEmit = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      control: new FormControl(''),
    });
  }

  @Output() newValue = new EventEmitter<any>();

  handleChangeEmit(value: any) {
    this.newValue.emit(value);
  }

  create(val: string) {
    this.createEmit.emit(val);
  }

  ngOnInit(): void {}
}
