import { Component, OnInit, Input, ViewChild } from '@angular/core';
import isEqual from 'lodash.isequal';
import { Spell, Feat } from 'src/assets/utils';
import {
  FilterStateService,
  FilterState,
  SortState,
} from '@app/filter-group/filter-state.service';
import { PadService } from '@app/pad.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UtilsService } from '@app/utils.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-master-table',
  templateUrl: './master-table.component.html',
  styleUrls: ['./master-table.component.scss'],
})
export class MasterTableComponent implements OnInit {
  constructor(
    private filterStateService: FilterStateService,
    private utilsService: UtilsService,
    private padService: PadService
  ) {}
  @Input()
  stateKey: string;
  @Input()
  feats: Feat[];
  @Input()
  spells: Spell[];
  orderBy: SortState;
  sortField: FormControl = new FormControl('name');
  public filter: FilterState;
  public dataSource: MatTableDataSource<Spell | Feat>;
  public displayedColumns: string[] = ['name', 'traits', 'level', 'text'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit(): void {
    const a = { a: 1 };
    this.dataSource = new MatTableDataSource(
      [...this.feats, ...this.spells].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (b.name > a.name) {
          return 1;
        }
        return 0;
      })
    );
    this.filterStateService
      .getConsolidatedState(this.stateKey)
      .subscribe((combinedFormState) => {
        let updatedMasterList = [...this.feats, ...this.spells];
        this.filter = combinedFormState.filterState;
        updatedMasterList = this.utilsService.fullFilter(
          updatedMasterList,
          this.filter
        );
        this.orderBy = combinedFormState.sortState;
        const sortfun = this.getSortFunction(
          this.orderBy.sortField,
          this.orderBy.sortDirection
        );
        updatedMasterList = updatedMasterList.sort(sortfun);

        this.dataSource.data = [...updatedMasterList];
      });
    this.dataSource.paginator = this.paginator;
  }
  addToPad(item: Feat | Spell): void {
    if (item.itemType === 'feat') {
      this.padService.addFeat(item);
    } else if (item.itemType === 'spell') {
      this.padService.addSpell(item);
    }
  }
  getSortFunction(
    field: string,
    direction: 'asc' | 'desc'
  ): (a: any, b: any) => number {
    const isLevel = field === 'level';
    if (direction === 'asc') {
      return (a, b) => {
        const [aValue, bValue] = convertToNumber(isLevel, a, b);
        if (aValue < bValue) {
          return -1;
        }
        if (bValue > aValue) {
          return 1;
        }
        return 0;
      };
    } else {
      return (a, b) => {
        const [aValue, bValue] = convertToNumber(isLevel, a, b);
        if (aValue > bValue) {
          return -1;
        }
        if (bValue < aValue) {
          return 1;
        }
        return 0;
      };
    }
    function convertToNumber(isLevel: boolean, a, b) {
      const aValue = isLevel ? Number(a[field]) : a[field];
      const bValue = isLevel ? Number(b[field]) : b[field];
      return [aValue, bValue];
    }
  }
}
