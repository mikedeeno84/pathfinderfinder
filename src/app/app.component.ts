import { Component, OnInit, ViewChild } from '@angular/core';
import { GetDataService } from './get-data.service';
import { Feat, Spell } from 'src/assets/utils';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private getDataService: GetDataService) {}
  public FILTER_KEY = 'HOME_FILTER';
  title = 'better-aon';
  feats: Feat[];
  spells: Spell[];
  showPad: boolean;
  @ViewChild(MatDrawer, { static: true }) drawer: MatDrawer;
  ngOnInit(): void {
    console.log(this.drawer);
    this.feats = this.getDataService.getFeats().sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (b.name > a.name) {
        return 1;
      }
      return 0;
    });
    this.spells = this.getDataService.getSpellList().sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (b.name > a.name) {
        return 1;
      }
      return 0;
    });
  }
}
