// con aservice + Tab crea el esqueleto del servicio

import { Injectable, signal } from '@angular/core';
import { dbCharacter } from '../interfaces/character.interface';


//** Servicios */
//En este ejemplo usan los servicios para persistir datos a través de los componentes
//Pero para mi lo que hacen es la reutilización de lógica

@Injectable({providedIn: 'root'})
export class DragonBallService {
    
    //Traigo la lógica que estaba en el componente
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

  //**Agregar lo recibido del hijo */
  addCharacters(character: dbCharacter){
    this.dbCharacters.update( //Se actualiza el signal
      list => [...list, character]
    );
    //Esto agrega lo emitido por el hijo (dragonball-add-charts) a la lista del otro componente
  }
    
}