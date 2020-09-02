import { Component, OnInit, Input } from '@angular/core';
import { extendedFeatKeys, Feat } from 'src/assets/utils';

@Component({
  selector: 'app-feat',
  templateUrl: './feat.component.html',
  styleUrls: ['./feat.component.scss'],
})
export class FeatComponent implements OnInit {
  @Input()
  feat: Feat;
  constructor() {}
  public extendedKeys = extendedFeatKeys;

  ngOnInit(): void {
  }
  public getExtendedKeyListPerFeat(
    feat: Feat
  ): { propName: string; value: any }[] {
    return this.extendedKeys
      .filter((key) => feat[key] && ['action', 'itemType'].includes(key))
      .map((propName) => {
        return { propName, value: feat[propName] };
      });
  }
}
