import { Component, OnInit, Input } from '@angular/core';
import { Feat, extendedFeatKeys } from 'src/assets/utils';
import {
  FilterStateService,
  FilterState,
} from '@app/filter-group/filter-state.service';
@Component({
  selector: 'app-feat-table',
  templateUrl: './feat-table.component.html',
  styleUrls: ['./feat-table.component.scss']
})
export class FeatTableComponent implements OnInit {

  constructor(

    private filterStateService: FilterStateService
  ) { }
  @Input()
  filterKey: string;
  @Input()
  feats: Feat[];
  public filter: FilterState;
  public extendedKeys = extendedFeatKeys;
  public getExtendedKeyListPerFeat(feat: Feat): { propName: string, value: any }[] {
    return this.extendedKeys.filter((key) => feat[key] && key !== 'actions' ).map((propName) => {
      return { propName, value: feat[propName] }
    } );
  }
  ngOnInit(): void {
    this.filterStateService.getFilters(this.filterKey).subscribe((filter) => {
      this.filter = filter;
    });
  }

}
