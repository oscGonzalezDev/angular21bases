import { Component, signal } from '@angular/core';
import { CharacterList } from "../../../components/dragonball/character-list/character-list";
import { dbCharacter } from '../../../interfaces/character.interface';
import { DragonballAddChar } from "../../../components/dragonball/dragonball-add-char/dragonball-add-char";
 
@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterList, DragonballAddChar],
  templateUrl: './dragonball-super.html',
  styleUrl: './dragonball-super.scss',
})

export class DragonballSuper {

  dbName = signal('');
  dbPower = signal(0);

  // <dbCharacter[]> es un generic
  dbCharacters = signal<dbCharacter[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 8999
    }
  ]);
}
