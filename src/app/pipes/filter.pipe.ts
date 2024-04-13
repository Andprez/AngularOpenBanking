import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (args == '' || args.length < 2) {
      return value
    };

    let response: any[] = [];
    for (let item of value) {
      if (item.nombre.toLowerCase().indexOf(args.toLowerCase()) != -1) {
        response.push(item);
      }
    }
    return response;
  }
}
