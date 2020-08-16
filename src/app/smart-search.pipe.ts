import { Pipe, PipeTransform } from '@angular/core';
import { UtilsService } from './utils.service';
@Pipe({
  name: 'smartSearch',
})
export class SmartSearchPipe implements PipeTransform {
  constructor(private utilsSerice: UtilsService) {}
  transform(value: any[], query?: string): unknown {
    let filtered = [...value];
    if (query) {
      filtered = value.filter((element) => {
        return this.utilsSerice.smartSearchHelper(element, query);
      });
    }
    return filtered;
  }
}
