import { Component, OnInit, Input } from '@angular/core';
import { Spell } from 'src/assets/utils';
import { SpellEntry, spells } from 'src/assets/spells';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss'],
})
export class SpellComponent implements OnInit {
  @Input()
  spell: Spell;
  constructor() {}

  ngOnInit(): void {
    if (Array.isArray(this.spell.action)) {
      this.spell.action = this.spell.action.join(',');
    }
  }

  getExtendedKeyListPerspell(
    spell: SpellEntry
  ): { propName: string; value: any }[] {
    const excludedKeys = ['name', 'traits', 'action', 'level', 'text'];
    return Object.keys(spell)
      .filter((spellKey) => !excludedKeys.includes(spellKey))
      .map((propName) => {
        return { propName, value: spell[propName] };
      });
  }
}
