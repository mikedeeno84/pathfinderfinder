import { Pipe, PipeTransform } from '@angular/core';
import { UtilsService } from './utils.service';
@Pipe({
  name: 'fullFilter',
})
export class FullFilterPipe implements PipeTransform {
  constructor(private utilsService: UtilsService) {}

  transform(
    value: object[],
    query: { $?: string; [otherFields: string]: any }
  ): any[] {
    let filteredValue = [...value];
    if (query) {
      if (query.$) {
        filteredValue = filteredValue.filter((element) =>
          this.utilsService.smartSearchHelper(element, query.$)
        );
      }
      const otherFields = { ...query };
      delete otherFields.$;
      if (Object.keys(otherFields).length > 0) {
        filteredValue = filteredValue.filter(element => {
          return this.utilsService.matchesQuery(element, otherFields);
        });
      }
    }
    return filteredValue;
  }
}
