import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FilterStateService {
  constructor() {}
  private filterStates: { [filterKey: string]: BehaviorSubject<FilterState> } = {

  };
  public getFilters(filterKey: string): Observable<FilterState> {
    return this.filterStates[filterKey].asObservable();
  }
  public initFilter(filterKey, filterValue?: FilterState): void {
    const initValue = filterValue || { $: '', };
    if (!this.filterStates[filterKey]) {
      this.filterStates[filterKey] = new BehaviorSubject(initValue);
    }
  }
  public setFilters(filterKey: string , filter: FilterState): void {
    this.filterStates[filterKey].next(filter);
  }
}
export interface FilterState {
  $?: string;
  traits?: string[];
}
