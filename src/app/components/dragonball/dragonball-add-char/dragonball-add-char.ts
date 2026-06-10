import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { dbCharacter } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-add-char',
  imports: [],
  templateUrl: './dragonball-add-char.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballAddChar {

  dbName = signal('');
  dbPower = signal(0);

  //**Evento a Emitir */
  newCharacter = output<dbCharacter>(); //Esto se enviará al padre (dragonball-super) 

  addChar(){
    if(!this.dbName() || !this.dbPower() || this.dbPower() <= 0){
      return;
    }
    
    const newChar: dbCharacter = {
      //id: this.characters.length +1,
      id: Math.floor(Math.random() * 1000),
      name: this.dbName(),
      power: this.dbPower()
    }
    
    //this.characters().push(newChar);
    //this.characters.update((list) => [...list, newChar]) //se agrega el nuevo item con función con spread operator
    console.log(`${this.dbName()} ha sido guardado correctamente con ${this.dbPower()} puntos de poder`);

    //**Emitir output */
    this.newCharacter.emit(newChar);  //Se emite hacia el padre dragpnball-super

    this.resetFields() //Limpia los campos cuando se crea el nuevo item
  }

  resetFields(){
    this.dbName.set('');
    this.dbPower.set(0);
  }
}
