import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/Pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  url: string = 'https://bp-pokemons.herokuapp.com/?idAuthor=1';

  constructor(private http: HttpClient) {}

  getPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url);
  }

  postPokemon(pokemon: Pokemon): Observable<Pokemon[]> {
    return this.http.post<Pokemon[]>(this.url, pokemon);
  }

  putPokemon(pokemon: Pokemon, id: string): Observable<Pokemon[]> {
    return this.http.put<Pokemon[]>(
      `https://bp-pokemons.herokuapp.com/${id}`,
      pokemon
    );
  }

  deletePokemon(id: string): Observable<Pokemon[]> {
    return this.http.delete<Pokemon[]>(
      `https://bp-pokemons.herokuapp.com/${id}`
    );
  }
}
