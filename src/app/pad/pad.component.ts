import { Component, OnInit, OnDestroy } from '@angular/core';
import { PadService, PadState } from '@app/pad.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.scss']
})
export class PadComponent implements OnInit, OnDestroy{

  constructor(private padService: PadService) { }
  padDetails: PadState;
  padSub: Subscription;
  expandedFeatList: { [index: string]: boolean } = {};
  expandedSpellList: { [index: string]: boolean } = {};
  ngOnInit(): void {
    this.padSub = this.padService.getPadStateObservable().subscribe((padDetails ) => {
      this.padDetails = padDetails;
    });
  }
  ngOnDestroy(): void {
    this.padSub.unsubscribe();
  }

}
