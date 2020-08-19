import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { GetFeatsService } from '@app/get-feats.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FilterStateService } from '@app/filter-group/filter-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.scss'],
})
export class FilterGroupComponent implements OnInit, OnDestroy {
  constructor(
    private getFeatsService: GetFeatsService,
    private filterStateService: FilterStateService
  ) {}
  traitList: string[];
  actionList: string[];
  filterForm: FormGroup;
  private subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.traitList = this.getFeatsService.getTraitList();
    this.actionList = this.getFeatsService.getActionList();
    this.filterForm = new FormGroup({
      $: new FormControl(),
      traits: new FormControl(),
      actions: new FormControl()
    });
    const filterSub = this.filterForm.valueChanges.subscribe((filterData) => {
      this.filterStateService.setFilters(filterData);
    });
    this.subscriptions.push(filterSub);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

}
