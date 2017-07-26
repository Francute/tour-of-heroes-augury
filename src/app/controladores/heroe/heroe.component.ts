import { Component, OnInit } from '@angular/core';

import { Heroe } from '../../modelos/heroe.js';

@Component({
  selector: 'heroe',
  templateUrl: '../../vistas/heroe/heroe.component.html',
  styleUrls: ['../../vistas/heroe/heroe.component.styl']
})
export class HeroeComponent implements OnInit {

  heroe = new Heroe(1, 'Tormenta', 8);

  ngOnInit() {
  }

}
