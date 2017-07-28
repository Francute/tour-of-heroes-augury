import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'tarjeta',
  templateUrl: '../../../vistas/componentes/tarjeta/tarjeta.component.html',
  styleUrls: ['../../../vistas/componentes/tarjeta/tarjeta.component.styl']
})
export class TarjetaComponent {

  @Input() titulo: string = 'Falta completar la cabecera';

}
