import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Spell, Feat } from 'src/assets/utils';
import {
  FilterStateService,
  FilterState,
} from '@app/filter-group/filter-state.service';
import { PadService } from '@app/pad.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UtilsService } from '@app/utils.service';
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
  filterKey: string;
  @Input()
  feats: Feat[];
  @Input()
  spells: Spell[];
  public filter: FilterState;
  public dataSource: MatTableDataSource<Spell | Feat>;
  public displayedColumns: string[] = ['name', 'traits', 'level', 'text'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource([...this.feats, ...this.spells].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (b.name > a.name) {
        return 1;
      }
      return 0;
    }));
    this.filterStateService.initFilter(this.filterKey);
    this.filterStateService.getFilters(this.filterKey).subscribe((filter) => {
      this.filter = filter;
      const updatedMasterList = this.utilsService.fullFilter([...this.feats, ...this.spells], this.filter);
      this.dataSource.data = [...updatedMasterList.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (b.name > a.name) {
          return 1;
        }
        return 0;
      })];
    });
    this.dataSource.paginator = this.paginator;
    console.log(this.filterKey);
  }
  addToPad(item: Feat | Spell): void {
    if (item.itemType === 'feat') {
      this.padService.addFeat(item);
    } else if (item.itemType === 'spell') {
      this.padService.addSpell(item);
    }
  }
  getDisplay(row: Feat): string {
    if (row.actions) {
      return 'table-row';
    } else {
      return 'none';
    }
  }
}
