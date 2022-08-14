import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-bp-form',
  templateUrl: './bp-form.component.html',
  styleUrls: ['./bp-form.component.scss'],
})
export class BpFormComponent implements OnInit {
  form!: FormGroup;
  queHacer:any;
  testing:any

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      attack: new FormControl(50),
      defense: new FormControl(50),
    });
  }

  test() {
    this.testing = 'secondary'
  }
}
