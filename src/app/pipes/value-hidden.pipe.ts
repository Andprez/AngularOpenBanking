import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueHidden',
})
export class ValueHiddenPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    const length = value.length;
    const asterisks = length - 4;
    return '*'.repeat(asterisks) + value.slice(asterisks);
  }
}
