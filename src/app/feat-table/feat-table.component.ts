import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Feat, extendedFeatKeys } from 'src/assets/utils';
import {
  FilterStateService,
  FilterState,
} from '@app/filter-group/filter-state.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UtilsService } from '@app/utils.service';
@Component({
  selector: 'app-feat-table',
  templateUrl: './feat-table.component.html',
  styleUrls: ['./feat-table.component.scss'],
})
export class FeatTableComponent implements OnInit {
  constructor(
    private filterStateService: FilterStateService,
    private utilsService: UtilsService
  ) {}
  @Input()
  filterKey: string;
  @Input()
  feats: Feat[];
  public filter: FilterState;
  public extendedKeys = extendedFeatKeys;
  public dataSource: MatTableDataSource<Feat>;
  public displayedColumns: string[] = ['name', 'traits', 'level', 'text'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public getExtendedKeyListPerFeat(
    feat: Feat
  ): { propName: string; value: any }[] {
    return this.extendedKeys
      .filter((key) => feat[key] && key !== 'actions')
      .map((propName) => {
        return { propName, value: feat[propName] };
      });
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.feats);
    this.filterStateService.getFilters(this.filterKey).subscribe((filter) => {
      this.filter = filter;
      const updateFeatList = this.utilsService.fullFilter(this.feats, this.filter);
      this.dataSource.data = [...updateFeatList];
    });
    this.dataSource.paginator = this.paginator;
    console.log(this.filterKey);
  }
  getDisplay(row: Feat) {
    if (row.actions) {
      return 'table-row'
    } else {
      return 'none';
    }
  }
}
