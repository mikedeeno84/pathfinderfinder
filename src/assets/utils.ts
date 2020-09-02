import { feats } from './feats';
import { spells, SpellEntry } from './spells';
// console.log(Object.values(feats).length);
// console.log(filteredErrors.length);
export const SpellList = spells;
export const FeatList: {
  [index: string]: FeatEntry;
} = feats;
export interface FeatEntry extends BaseFeat {
  actions?: string;
  source?: string;
  archetype?: string;
  frequency?: string;
  prerequisites?: string;
  requirements?: string;
  special?: string;
  trigger?: string;
  critical_success?: string;
  success?: string;
  critical_failure?: string;
  failure?: string;
  'prepared_caster (cleric, wizard, etc.)'?: string;
  'spontaneous_caster (bard, sorcerer, etc.)'?: string;
  list?: any[];
  cost?: string;
  effect?: string;
  ranger?: string;
  related_feats?: string;
  access?: string;
  mask_freeze?: string;
  night_hag?: string;
  annis_hag?: string;
  green_hag?: string;
  sea_hag?: string;
  claw?: string;
  hoof?: string;
  tail?: string;
  jaws?: string;
  activate?: {
    actions?: string;
    name?: string;
    requirements?: string;
    effect?: string;
  };
  // [otherProps: string]: any;
}
export const extendedFeatKeys: (keyof FeatEntry)[] = [
  'actions',
  'source',
  'archetype',
  'frequency',
  'prerequisites',
  'requirements',
  'special',
  'trigger',
  'critical_success',
  'success',
  'critical_failure',
  'failure',
  'prepared_caster (cleric, wizard, etc.)',
  'spontaneous_caster (bard, sorcerer, etc.)',
  'list',
  'cost',
  'effect',
  'ranger',
  'related_feats',
  'access',
  'mask_freeze',
  'night_hag',
  'annis_hag',
  'green_hag',
  'sea_hag',
  'claw',
  'hoof',
  'tail',
  'jaws',
  'activate',
];
interface BaseFeat {
  name: string;
  id: number;
  level: string;
  text: string[];
  traits: string[];
}
export type requiredKeys = keyof BaseFeat;
export interface Spell extends SpellEntry {
  itemType: 'spell';
}
export interface Feat extends FeatEntry {
  itemType: 'feat';
}
