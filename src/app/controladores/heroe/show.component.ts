import {Component, Input, OnInit} from '@angular/core';

import { Heroe } from '../../modelos/heroe.js';

@Component({
  selector: 'heroe',
  templateUrl: '../../vistas/heroe/show.component.html',
  styleUrls: ['../../vistas/heroe/show.component.styl']
})
export class ShowHeroeComponent implements OnInit {

  @Input() heroe:Heroe;

  ngOnInit() {
  }

}
