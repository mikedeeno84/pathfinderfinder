import { Component, OnInit, Input } from '@angular/core';
import { Feat, Spell } from 'src/assets/utils';
import { PadService } from '@app/pad.service';

@Component({
  selector: 'app-pad-list-wrapper',
  templateUrl: './pad-list-wrapper.component.html',
  styleUrls: ['./pad-list-wrapper.component.scss'],
})
export class PadListWrapperComponent implements OnInit {
  constructor(
    private padService: PadService
  ) {}
  @Input()
  item: Feat | Spell;
  expanded = false;
  ngOnInit(): void {}
  removeItem(item: Feat | Spell): void {
    this.padService.removeItem(item);
  }
}
