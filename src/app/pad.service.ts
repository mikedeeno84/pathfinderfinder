import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Feat, Spell } from 'src/assets/utils';
import { retryWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PadService {
  constructor() {}
  private defaultState: PadState = { name: '', feats: [], spells: []}
  private padStateSubject: BehaviorSubject<PadState> = new BehaviorSubject(this.defaultState);
  public resetPadState(): void {
    this.padStateSubject.next(this.defaultState);
  }
  public addFeat(feat: Feat): void {
    const newState = { ...this.getPadState() };
    newState.feats = [...newState.feats, feat];
    this.padStateSubject.next(newState);
  }
  public addSpell(spell: Spell): void {
    const newState = { ...this.getPadState() };
    newState.spells = [...newState.spells, spell];
    this.padStateSubject.next(newState);
  }
  public getPadStateObservable(): Observable<PadState> {
    return this.padStateSubject.asObservable();
  }
  private getPadState(): PadState {
    return this.padStateSubject.value;
  }
}
export interface PadState {
  name: string;
  feats: Feat[];
  spells: Spell[];
}
