import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lista: Pokemon[] = [
    {
      id: 2625,
      name: 'Charmeleon ',
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
      attack: 18,
      defense: 54,
      hp: 1,
      type: 'Base',
      id_author: 1,
    },
    {
      id: 2651,
      name: 'Golbat',
      image:
        'https://www.pngplay.com/wp-content/uploads/11/Golbat-Pokemon-Background-PNG.png',
      attack: 80,
      defense: 70,
      hp: 75,
      type: 'Veneno/Volado',
      id_author: 1,
    },
    {
      id: 2659,
      name: 'pika pika 2',
      image: 'https://images5.alphacoders.com/481/481903.png',
      attack: 50,
      defense: 75,
      hp: 1,
      type: 'Base',
      id_author: 1,
    },
    {
      id: 2662,
      name: 'vamo a calmarno 25',
      image: 'https://www.picng.com/upload/pokemon/png_pokemon_43608.png',
      attack: 100,
      defense: 8,
      hp: 26,
      type: 'Base20',
      id_author: 1,
    },
    {
      id: 2666,
      name: 'mewtwo',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
      attack: 93,
      defense: 90,
      hp: 1,
      type: 'Base',
      id_author: 1,
    },
    {
      id: 2667,
      name: 'Raichu',
      image:
        'https://static.pokemonpets.com/images/monsters-images-800-800/26-Raichu.webp',
      attack: 50,
      defense: 75,
      hp: 1,
      type: 'Base',
      id_author: 1,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
