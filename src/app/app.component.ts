import { Component, OnInit } from '@angular/core';
import { GetFeatsService } from './get-feats.service';
import { Feat } from 'src/assets/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private getFeatsService: GetFeatsService
  ) {}
  public FILTER_KEY = 'HOME_FILTER';
  title = 'better-aon';
  feats: Feat[];
 
  ngOnInit(): void {
    this.feats = Object.values(this.getFeatsService.getFeats()).sort((a, b) => {
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
