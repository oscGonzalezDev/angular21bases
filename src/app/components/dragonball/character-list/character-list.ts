import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { dbCharacter } from '../../../interfaces/character.interface';

//** Angular Schematics generate a file
// Este componente fue creado con click derecho "Angular Schematics generate a file"
// Se crea con "external template" y "skipStyle" */

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterList {
  //**Input signal */
  characters = input.required<dbCharacter[]>(); //el required dice que el input es obligatorio
  listTitle = input.required();
}
