import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Heroe } from '../../modelos/heroe.js';

@Component({
  selector: 'lista-de-heroes',
  templateUrl: '../../vistas/heroe/lista.component.html',
  styleUrls: ['../../vistas/heroe/lista.component.styl']
})
export class ListaDeHeroesComponent {

  heroes = HEROES;
  @Output() heroeSeleccionado = new EventEmitter<Heroe>();

  seleccionarHeroe(heroe) {
    this.heroeSeleccionado.emit(heroe);
  }

}

const HEROES: Heroe[] = [
  new Heroe(11, 'Hombre Árbol', 39),
  new Heroe(12, 'VolcanoWoman', 16),
  new Heroe(13, 'Calcetín con Rombos Man', 22.4675),
  new Heroe(14, 'NarcotraficanteMan', 47),
  new Heroe(15, 'WoManTeca', 26),
  new Heroe(16, 'Señor Buenito', -1),
  new Heroe(17, 'Mujer Poroto', 50),
  new Heroe(18, 'SarcasmoMan', 53),
  new Heroe(19, 'Super Coeficiente Intelectual', 3),
  new Heroe(20, 'Tormenta', 8),
  new Heroe(21, 'Bombástico', 11)
];
