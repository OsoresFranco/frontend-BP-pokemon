import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BpInputComponent } from 'src/app/components/bp-input/bp-input.component';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-bp-form',
  templateUrl: './bp-form.component.html',
  styleUrls: ['./bp-form.component.scss'],
})
export class BpFormComponent implements OnInit {
  @ViewChild('name') name!: BpInputComponent;
  @Input() _title: string = 'Nuevo Pokemon';
  @Input() _pokemon?: any;
  @Output() updateEmit = new EventEmitter<any>();

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      idAuthor: 1,
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      attack: new FormControl(50),
      defense: new FormControl(50),
      hp: 100,
      type: 'Unknown',
    });
  }

  submit() {
    let pokemon: Pokemon = {
      idAuthor: 1,
      name: this.form.get('name')?.value,
      image: this.form.get('image')?.value,
      attack: this.form.get('attack')?.value,
      defense: this.form.get('defense')?.value,
      hp: 100,
      type: 'Unknown',
    };

    if (this._title === 'Nuevo Pokemon') {
      this.pokemonService.postPokemon(pokemon).subscribe({
        next: (res) => {
          console.log(res);
          this.updateEmit.emit(res);
          this.form.reset();
        },
      });
    } else if (this._title.includes('Modificar Pokemon')) {
      this.pokemonService.putPokemon(pokemon, this._pokemon.id).subscribe({
        next: (res) => {
          console.log(res);
          this.updateEmit.emit(res);
          this.form.reset();
        },
      });
    }
  }

  cancel() {
    this.form.reset();
  }
}
