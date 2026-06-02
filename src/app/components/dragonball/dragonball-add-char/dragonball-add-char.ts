import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { dbCharacter } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-add-char',
  imports: [],
  templateUrl: './dragonball-add-char.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballAddChar {

  characters = input.required<dbCharacter[]>(); //el required dice que el input es obligatorio
  dbName = signal('');
  dbPower = signal(0);

  addChar(){
    if(!this.dbName() || !this.dbPower() || this.dbPower() <= 0){
      return;
    }
    
    const newChar: dbCharacter = {
      id: this.characters.length +1,
      name: this.dbName(),
      power: this.dbPower()
    }
    
    //this.characters().push(newChar);
    //this.characters.update((list) => [...list, newChar])
    console.log(`${this.dbName()} ha sido guardado correctamente con ${this.dbPower()} puntos de poder`);

    this.resetFields()
  }

  resetFields(){
    this.dbName.set('');
    this.dbPower.set(0);
  }
}
