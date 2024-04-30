import { Pipe, PipeTransform } from '@angular/core';
import { TipoProductoF } from '../models/tipo-producto-f';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(value: TipoProductoF[], arg: string = ''): any {
    if (arg === '' || arg == 'Todas') return value;
    const resultTypes = [];
    for (const type of value) {
      if (type.nombreTipo.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultTypes.push(type);
      }
    }
    return resultTypes;
  }

}
