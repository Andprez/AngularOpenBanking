import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args: any): any {
    if (args == '' || args.length < 2) return value;
    let result = [];
    for (let entity of value) {
      if (entity.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        result.push(entity);
      }
    }
    return result;
  }
}
