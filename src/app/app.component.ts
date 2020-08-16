import { Component } from '@angular/core';
import { GetFeatsService } from './get-feats.service';
import { Feat, extendedFeatKeys } from 'src/assets/utils';
import { FormControl, FormGroup } from '@angular/forms';
import isEqual from 'lodash.isequal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'better-aon';
  constructor(
    private getFeatsService: GetFeatsService
  ) {
    console.log(isEqual);
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
    this.filterForm.valueChanges.subscribe(console.log);
  }
  feats: Feat[];
  filterForm: FormGroup = new FormGroup({
    $: new FormControl(),
    traits: new FormControl(),
  });
  traitList: string[];
  public extendedKeys = extendedFeatKeys;
  public filterKeyList(feat: Feat): string[] { return this.extendedKeys.filter(key => feat[key]); }
}
