import { Pipe, PipeTransform } from '@angular/core';
import orderBy from 'lodash.orderby';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: any[], order = '', column: string = ''): any[] {
    if (!value || order === '' || !order) {
      return value;
    } // no array
    if (value.length <= 1) {
      return value;
    } // array with only one item
    if (!column || column === '') {
      if (order === 'asc') {
        return value.sort();
      } else {
        return value.sort().reverse();
      }
    } // sort 1d array
    if (column === 'level') {
      value = value.map(el => {
        el = { ...el, level: Number(el.level) };
        return el;
      });
    }
    return orderBy(value, [column], [order]);
  }
}
