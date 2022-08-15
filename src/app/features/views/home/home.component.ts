import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  snack: boolean = true;
  editPokemon!: Pokemon;
  titulo: string = 'Nuevo Pokemon';
  searchTerm = '';
  pokemonSearch: Pokemon[] = [];
  lista: Pokemon[] = [];
  message: string = '';

  constructor(private pokemonService: PokemonService) {}

  handleEmit($event: any) {
    this.titulo = $event;
  }

  handleChangeEmit($event: any) {
    this.editPokemon = $event;
    this.titulo = 'Modificar Pokemon: ' + $event.name;
  }

  ngOnInit(): void {
    this.updateTable();
  }

  toggle() {
    this.snack = !this.snack;
    this.message = 'Accion realizada con exito';
  }

  updateTable() {
    this.pokemonService.getPokemon().subscribe({
      next: (res) => {
        this.lista = res;
        this.pokemonSearch = res;
        this.toggle();
      },
      error: (error) => alert(error),
    });
  }

  handle() {}
  setSearchTerm(value: any) {
    this.searchTerm = value;
    this.search(this.searchTerm);
  }

  search(value: string): void {
    let normalized = value.toLowerCase();
    this.pokemonSearch = this.lista.filter((val) =>
      val.name.toLowerCase().includes(normalized)
    );
  }
}
