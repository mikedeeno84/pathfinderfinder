import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { GetFeatsService } from '@app/get-feats.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FilterStateService } from '@app/filter-group/filter-state.service';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-filter-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.scss'],
})
export class FilterGroupComponent implements OnInit, OnDestroy, OnChanges {
  constructor(
    private getFeatsService: GetFeatsService,
    private filterStateService: FilterStateService
  ) {}
  @Input()
  filterKey: string;

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
    const filterSub = this.filterForm.valueChanges.pipe(debounceTime(500)).subscribe((filterData) => {
      this.filterStateService.setFilters(this.filterKey, filterData);
    });
    this.subscriptions.push(filterSub);
  }
  ngOnChanges(changeDetails) {
    console.log(changeDetails)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

}
