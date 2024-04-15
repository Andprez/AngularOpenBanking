import { Pipe, PipeTransform } from '@angular/core';
import { EntidadFinanciera } from '../models/entidad-financiera';

@Pipe({
  name: 'filterEntityF',
})
export class FilterEntityFPipe implements PipeTransform {
  transform(value: EntidadFinanciera[], arg: string): any {
    // if (!Array.isArray(value)) {
    //   return value;
    // }
    if (arg === '' || arg.length < 2) return value;
    const resultEntities = [];
    for (const entity of value) {
      if (entity.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultEntities.push(entity);
      }
    }
    return resultEntities;
  }
}
