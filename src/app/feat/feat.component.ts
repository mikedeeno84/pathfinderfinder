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
  @Input()
  public expanded = true;
  constructor() {}
  public extendedKeys = extendedFeatKeys;
  ngOnInit(): void {
    if (this.expanded !== false) {
      this.expanded = true;
    }
  }
  public getExtendedKeyListPerFeat(
    feat: Feat
  ): { propName: string; value: any }[] {
    const featKeys = this.extendedKeys
      .filter((key) => feat[key] && !['action', 'itemType'].includes(key))
      .map((propName) => {
        return { propName, value: feat[propName] };
      });
    return featKeys;
  }
}
