import { Component, signal } from '@angular/core';

//Esto debe ir en un archivo externo
interface dbCharacter {
  id: number;
  name: string;
  power: number
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.html',
  styleUrl: './dragonball-page.scss',
})

export class DragonballPage {

  dbName = signal('');
  dbPower = signal(0);

  // <dbCharacter[]> es un generic
  characters = signal<dbCharacter[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001
    },
    {
      id: 2,
      name: 'Vegueta',
      power: 8999
    },
    {
      id: 3,
      name: 'Picoro',
      power: 1001
    },
    {
      id: 4,
      name: 'Yamcha',
      power: 1
    },
  ]);

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
    this.characters.update((list) => [...list, newChar]) //se agrega el nuevo item con función con spread operator
    console.log(`${this.dbName()} ha sido guardado correctamente con ${this.dbPower()} puntos de poder`);

    this.resetFields() //Limpia los campos cuando se crea el nuevo item
  }

  resetFields(){
    this.dbName.set('');
    this.dbPower.set(0);
  }
}
