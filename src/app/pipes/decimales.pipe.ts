import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'decimales'})
export class DecimalesPipe implements PipeTransform {
  transform(numero, cantidad = 2) {
    return numero.toLocaleString('de-DE', {maximumFractionDigits: cantidad});
  }
}
