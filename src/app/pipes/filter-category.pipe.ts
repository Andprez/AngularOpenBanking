import { Pipe, PipeTransform } from '@angular/core';
import { TipoProductoF } from '../models/tipo-producto-f';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(value: TipoProductoF[], arg: string = ''): any {
    if (arg === '' || arg == 'Todas') return value;
    const normalizedArg = this.normalizeString(arg);
    return value.filter(type => this.normalizeString(type.nombreTipo).includes(normalizedArg));
  }

  private normalizeString(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

}
