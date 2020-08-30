import { Pipe, PipeTransform } from '@angular/core';
import { UtilsService } from './utils.service';
@Pipe({
  name: 'fullFilter',
})
export class FullFilterPipe implements PipeTransform {
  constructor(private utilsService: UtilsService) {}

  transform = this.utilsService.fullFilter;
}
