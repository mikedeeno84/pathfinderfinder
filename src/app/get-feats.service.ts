import { Injectable } from '@angular/core';
import { feats, FeatCollection } from '../assets/utils';
@Injectable({
  providedIn: 'root'
})
export class GetFeatsService {

  constructor() {
    this.feats = feats;
   }
   private readonly feats: FeatCollection;
   public getFeats(): FeatCollection {
    return this.feats;
   }
   public getTraitList(): string[] {
    const traits = {};
    Object.values(this.feats).forEach(feat => {
      if (feat.traits) {
        feat.traits.forEach((trait) => {
          if (!traits[trait]) {
            traits[trait] = true;
          }
        });
      }
    });
    return Object.keys(traits).sort();
   }
   public getActionList(): string[] {
    const actions = {};
    Object.values(this.feats).forEach(feat => {
      if (feat.actions) {
          if (!actions[feat.actions]) {
            actions[feat.actions] = true;
          }
      }
    });
    return Object.keys(actions).sort();
   }
}
