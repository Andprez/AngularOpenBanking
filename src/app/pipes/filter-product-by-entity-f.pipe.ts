import { Pipe, PipeTransform } from '@angular/core';
import { EntidadFinanciera } from '../models/entidad-financiera';

@Pipe({
  name: 'filterProductByEntityF',
})
export class FilterProductByEntityFPipe implements PipeTransform {
  transform(
    value: any[] = [],
    arg: string = '',
    entities: EntidadFinanciera[] = []
  ): any {
    if (arg == '' || arg.length < 2) return value;
    let resultProducts: any[] = [];
    let entidades = entities.filter(
      (entity) => entity.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1
    );
    for (const product of value) {
      for (const entidad of entidades) {
        if (product.idEntidadFinanciera == entidad.idEntidadFinanciera) {
          resultProducts.push(product);
        }
      }
    }
    return resultProducts;
  }
}
