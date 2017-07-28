import { Component } from '@angular/core';

@Component({
  selector: 'yield',
  templateUrl: '../../vistas/home/home.component.html',
  styleUrls: ['../../vistas/home/home.component.styl']
})
export class HomeComponent {

  heroeActual;
  seDebeMostrarHeroe: boolean = false;

  mostrarHeroe(heroe) {
    this.seDebeMostrarHeroe = true;
    this.heroeActual = heroe;
  }

}
