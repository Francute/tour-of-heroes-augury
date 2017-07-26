import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cabecera',
  templateUrl: '../../vistas/cabecera/cabecera.component.html',
  styleUrls: ['../../vistas/cabecera/cabecera.component.styl']
})
export class CabeceraComponent implements OnInit {

  titulo = 'Tour de Héroes';

  ngOnInit() {
  }

}
