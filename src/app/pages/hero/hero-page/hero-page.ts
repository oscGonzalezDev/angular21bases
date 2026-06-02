import { Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-hero-page',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.html',
  styleUrl: './hero-page.scss',
})
export class HeroPage {
  name = signal('Ironman')
  age = signal(45)

  //**señales conmutadas
  // Signals de solo lectura que agrupan señales
  // SOlo cambian si sus señales internas cambian */
  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`
    return description;
  })

  getHeroDescription(){
    return `${this.name}- ${this.age}`
  }

  changeHero(){
      this.name.update(() => 'Spiderman');
      this.age.update(() => 22);
  }

  resetForm(){
    this.name.update(() => 'Ironman');
      this.age.update(() => 45);
  }
  
  changeAge(){
    this.age.update(() => 60);
  }

}
