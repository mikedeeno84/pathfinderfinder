import { Component, OnInit } from '@angular/core';
import { GetFeatsService } from './get-feats.service';
import { Feat, extendedFeatKeys } from 'src/assets/utils';
import isEqual from 'lodash.isequal';
import { FilterStateService, FilterState } from './filter-group/filter-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'better-aon';
  constructor(
    private getFeatsService: GetFeatsService,
    private filterStateService: FilterStateService
  ) {}
  feats: Feat[];
  traitList: string[];
  public filter: FilterState;
  public extendedKeys = extendedFeatKeys;
  public filterKeyList(feat: Feat): string[] {
    return this.extendedKeys.filter((key) => feat[key]);
  }
  ngOnInit(): void {
    this.feats = Object.values(this.getFeatsService.getFeats()).sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (b.name > a.name) {
        return 1;
      }
      return 0;
    });
    this.traitList = this.getFeatsService.getTraitList();
    this.filterStateService.getFilters().subscribe(filter => {
      this.filter = filter;
    });
  }
}
