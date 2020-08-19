import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FilterStateService {
  constructor() {}
  private filterState: BehaviorSubject<FilterState> = new BehaviorSubject({
    $: '',
  });
  public getFilters(): Observable<FilterState> {
    return this.filterState.asObservable();
  }
  public setFilters(filter: FilterState): void {
    this.filterState.next(filter);
  }
}
export interface FilterState {
  $?: string;
  traits?: string[];
}
