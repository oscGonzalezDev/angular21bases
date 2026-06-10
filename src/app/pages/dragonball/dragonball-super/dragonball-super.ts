import { Component, inject, signal } from '@angular/core';
import { CharacterList } from "../../../components/dragonball/character-list/character-list";
import { DragonballAddChar } from "../../../components/dragonball/dragonball-add-char/dragonball-add-char";
import { DragonBallService } from '../../../services/dragonball.service';
 
@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterList, DragonballAddChar],
  templateUrl: './dragonball-super.html',
  styleUrl: './dragonball-super.scss',
})

export class DragonballSuper {

  dbName = signal('');
  dbPower = signal(0);

  //** Injeccion de dependencias antigua */
  /* constructor(
    public dragonballService: DragonBallService,
  ){}

  addCharacters(){
    this.dragonballService.addCharacters(character){}
  } */

  //** NUEVA Injeccion de dependencias */
  public dragonballService = inject(DragonBallService);


  

  //*** Esta logica se va al servicio ***
  // <dbCharacter[]> es un generic
  //Este es el input que va en el componente hijo character-list
  /* dbCharacters = signal<dbCharacter[]>([
    {id: 1,name: 'Goku',power: 9001},
    {id: 2,name: 'Vegeta',power: 8999}
  ]); */

  //**Agregar lo recibido del hijo */
  /* addCharacters(character: dbCharacter){
    this.dbCharacters.update( //Se actualiza el signal
      list => [...list, character]
    );
    //Esto agrega lo emitido por el hijo (dragonball-add-charts) a la lista del otro componente
  } */


}
