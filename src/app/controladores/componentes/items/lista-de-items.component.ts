import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'lista-de-items',
  templateUrl: '../../../vistas/componentes/items/lista.component.html',
  styleUrls: ['../../../vistas/componentes/items/lista.component.styl']
})
export class ListaDeItemsComponent {

  @Input() items = [];
  @Output() seleccionarItem = new EventEmitter<any>();
  itemSeleccionado;

  seleccionar(item) {
    this.seleccionarItem.emit(item);
    this.itemSeleccionado = item;
  }

}
