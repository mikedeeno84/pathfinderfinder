import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Feat, Spell } from 'src/assets/utils';
import { retryWhen } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PadService {
  constructor() {}
  private defaultState: PadState = { name: '', feats: [], spells: [] };
  private padStateSubject: BehaviorSubject<PadState> = new BehaviorSubject(
    this.defaultState
  );
  public resetPadState(): void {
    this.padStateSubject.next(this.defaultState);
  }
  public addFeat(feat: Feat): void {
    const newState = { ...this.getPadState() };
    newState.feats.push(feat);
    this.padStateSubject.next(newState);
  }
  public addSpell(spell: Spell): void {
    const newState = { ...this.getPadState() };
    newState.spells.push(spell);
    this.padStateSubject.next(newState);
  }
  public removeItem(item: Spell | Feat): void {
    if (item.itemType === 'spell') {
      this.removeSpell(item);
    } else if (item.itemType === 'feat') {
      this.removeFeat(item);
    }
  }
  private removeFeat(feat: Feat): void {
    const newState = { ...this.getPadState() };
    // const feats = [...newState.feats];
    let featIndex;
    for (let i = 0; i < newState.feats.length; i++) {
      if (newState.feats[i].name === feat.name) {
        featIndex = i;
        newState.feats.splice(featIndex, 1);
        newState.feats = newState.feats;
        this.padStateSubject.next(newState);
        break;
      }
    }
  }
  private removeSpell(spell: Spell): void {
    const newState = { ...this.getPadState() };
    let spellIndex;
    for (let i = 0; i < newState.spells.length; i++) {
      if (newState.spells[i].name === spell.name) {
        spellIndex = i;
        newState.spells.splice(spellIndex, 1);
        newState.spells = newState.spells;
        this.padStateSubject.next(newState);
        break;
      }
    }
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
