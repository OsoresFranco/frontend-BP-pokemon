import { Component, Input, OnInit } from '@angular/core';
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons';
import { Pokemon } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: Pokemon[] = [];

  faTrashCan = faTrashCan;
  faPen = faPen;

  constructor() {}

  ngOnInit(): void {}
}
