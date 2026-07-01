// con aservice + Tab crea el esqueleto del servicio

import { effect, Injectable, signal } from '@angular/core';
import { dbCharacter } from '../interfaces/character.interface';

//**Obtener del localStorage */
// Se puede hacer fuera del servicio
const getFromLocalStorage = (): dbCharacter[] => {
  const characters = localStorage.getItem('characters');

  return characters ? JSON.parse(characters) : [];
  //Hace el JSON.parse, de lo que sea que hay en const characters
}


//** Servicios */
//En este ejemplo usan los servicios para persistir datos a través de los componentes
//Pero para mi lo que hacen es la reutilización de lógica

@Injectable({providedIn: 'root'})
export class DragonBallService {
    
  //Traigo la lógica que estaba en el componente
  /* dbCharacters = signal<dbCharacter[]>([
    { id: 1, name: 'Goku', power: 9001},
    { id: 2, name: 'Vegeta', power: 8999}
  ]); */
  
  dbCharacters = signal<dbCharacter[]>(getFromLocalStorage()); //Llamo la función de obtener de LS

  //**Effect */
  //Es una operación que cambia si su señal cambia, se usa mayormente para el localstorage
  saveItemLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.dbCharacters()));    
  })


  //**Agregar lo recibido del hijo */
  addCharacters(character: dbCharacter){
    this.dbCharacters.update( //Se actualiza el signal
      list => [...list, character]
    );
    //Esto agrega lo emitido por el hijo (dragonball-add-charts) a la lista del otro componente
  }
    
}