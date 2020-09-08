import { Injectable } from '@angular/core';
import isEqual from 'lodash.isequal';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class FilterStateService {
  constructor() {}
  private filterStates: {
    [stateKey: string]: BehaviorSubject<FilterState>;
  } = {};
  private sortStates: {
    [stateKey: string]: BehaviorSubject<SortState>;
  } = {};
  public initState(stateKey: string, filterValue?: FilterState, sortValue?: SortState): void {
    const initFilterValue = filterValue || { $: '' };
    const initSortValue = sortValue || { sortField: 'name', sortDirection: 'asc'};
    this.initFilterState(stateKey, initFilterValue);
    this.initSortState(stateKey, initSortValue);
  }
  public setFilters(stateKey: string, filter: FilterState): void {
    this.filterStates[stateKey].next(filter);
  }
  public setSortState(stateKey: string, newSortState: SortState): void {
    return this.sortStates[stateKey].next(newSortState);
  }
  public getConsolidatedState(
    stateKey
  ): Observable<{ filterState: FilterState; sortState: SortState }> {
    return combineLatest([
      this.filterStates[stateKey].asObservable(),
      this.sortStates[stateKey].asObservable(),
    ]).pipe(
      map(([filterState, sortState]) => {
        return { filterState, sortState };
      }),
      distinctUntilChanged(isEqual)
    );
  }
  private initFilterState(stateKey: string, filterState: FilterState): void {
    this.filterStates[stateKey] = new BehaviorSubject(filterState);
  }
  private initSortState(stateKey: string, sortState: SortState): void {
    this.sortStates[stateKey] = new BehaviorSubject(sortState);
  }
}
export interface FilterState {
  $?: string;
  traits?: string[];
}
export interface SortState {
  sortField: string;
  sortDirection: SortDirection;
}
export type SortDirection = 'asc' | 'desc';
