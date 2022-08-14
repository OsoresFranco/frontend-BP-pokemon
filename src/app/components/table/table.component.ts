import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: Pokemon[] = [];
  @Output() editValue = new EventEmitter<any>();
  @Output() updateEmit = new EventEmitter<any>();
  faTrashCan = faTrashCan;
  faPen = faPen;

  constructor(private pokemonService: PokemonService) {}

  handleChangeEmit(pokemon: Pokemon) {
    this.editValue.emit(pokemon);
  }

  deletePokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemon(String(pokemon.id)).subscribe({
      next: (res) => {
        console.log(res)
        this.updateEmit.emit(pokemon)
      },
    });

  }

  ngOnInit(): void {}
}
