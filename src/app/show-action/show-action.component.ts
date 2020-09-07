import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-action',
  templateUrl: './show-action.component.html',
  styleUrls: ['./show-action.component.scss'],
})
export class ShowActionComponent implements OnInit {
  constructor() {}
  @Input()
  action: string;

  filterImageNameMap = {
    1: 'assets/OneAction.png',
    2: 'assets/TwoActions.png',
    3: 'assets/ThreeActions.png',
    reaction: 'assets/Reaction.png',
  };
  ngOnInit(): void {}
}
