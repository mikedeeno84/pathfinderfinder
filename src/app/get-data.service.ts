import { Injectable } from '@angular/core';
import { FeatList, Feat, Spell, SpellList } from '../assets/utils';
import { spells } from 'src/assets/spells';
@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor() {
    this.feats = Object.values(FeatList).map((feat) => {
      const mappedFeat: Feat = { ...feat, itemType: 'feat' };
      return mappedFeat;
    });
    this.spells = Object.values(SpellList).map((spell) => {
      // const actions: string = Array.isArray(spell.action) ? spell.action.join(',') : spell.action;
      const mappedSpell: Spell = { ...spell, itemType: 'spell' };
      return mappedSpell;
    });
  }
  private readonly feats: Feat[];
  private readonly spells: Spell[];
  public getFeats(): Feat[] {
    return this.feats;
  }
  public getTraitList(): string[] {
    return [
      ...new Set([...this.getFeatTraitList(), ...this.getSpellTraitList()]),
    ];
  }
  getFeatTraitList(): string[] {
    const traits = {};
    Object.values(this.feats).forEach((feat) => {
      if (feat.traits) {
        feat.traits.forEach((trait) => {
          const traitUpper = trait.toUpperCase();
          if (!traits[traitUpper]) {
            traits[traitUpper] = true;
          }
        });
      }
    });
    return Object.keys(traits).sort();
  }
  getSpellTraitList(): string[] {
    const traits = {};
    Object.values(this.spells).forEach((spell) => {
      if (spell.traits) {
        spell.traits.forEach((trait) => {
          const traitUpper = trait.toUpperCase();
          if (!traits[traitUpper]) {
            traits[traitUpper] = true;
          }
        });
      }
    });
    return Object.keys(traits).sort();
  }
  public getActionList(): string[] {
    return [
      ...new Set([...this.getFeatActionList(), ...this.getSpellActionList()]),
    ];
  }
  getFeatActionList(): string[] {
    const actions = {};
    Object.values(this.feats).forEach((feat) => {
      if (feat.actions) {
        if (!actions[feat.actions]) {
          actions[feat.actions] = true;
        }
      }
    });
    return Object.keys(actions).sort();
  }
  getSpellActionList(): string[] {
    const actions = {};
    Object.values(this.spells).forEach((spell) => {
      let action: string[];
      if (typeof spell.action === 'string') {
        action = [spell.action];
      } else {
        action = spell.action;
      }
      if (Array.isArray(action)) {
        action.forEach((currentAction) => {
          if (!actions[currentAction]) {
            actions[currentAction] = true;
          }
        });
      }
    });
    return Object.keys(actions).sort();
  }
  public getSpellList(): Spell[] {
    return this.spells;
  }
}
