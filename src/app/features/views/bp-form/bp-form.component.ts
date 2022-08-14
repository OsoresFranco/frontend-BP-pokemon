import {
  Component,
  ElementRef,
  Input,
  OnInit,
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

  post() {
    this.pokemonService.postPokemon(this.form.value).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  cancel() {
    this.form.reset();
  }
}
