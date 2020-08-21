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
    if (!this.filterStates[filterKey]) {
      this.filterStates[filterKey] = new BehaviorSubject({ $: '', });
    } 
    return this.filterStates[filterKey].asObservable();
  }
  public setFilters(filterKey: string , filter: FilterState): void {
    this.filterStates[filterKey].next(filter);
  }
}
export interface FilterState {
  $?: string;
  traits?: string[];
}
