﻿export const spells: SpellEntry[] = [
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=381',
    name: 'Counter Performance',
    traits: [ 'uncommon', 'bard', 'composition', 'enchantment', 'fortune', 'mental' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 386',
    cast: 'somatic or verbal',
    action: 'reaction',
    trigger: 'You or an ally within 60 feet rolls a saving throw against an auditory or visual effect.',
    area: '60-foot emanation',
    text: 'Your performance protects you and your allies. Roll a Performance check for a type you know: an auditory performance if the trigger was auditory, or a visual one for a visual trigger. You and allies in the area can use the better result between your Performance check and the saving throw.',
    components: [ 'somatic', 'verbal' ],
    componentsSeparator: ' or '
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=385',
    name: 'Inspire Competence',
    traits: [ 'bard', 'cantrip', 'composition', 'emotion', 'enchantment', 'mental' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 386',
    cast: 'verbal',
    action: '1',
    range: '60 feet',
    targets: '1 ally',
    duration: '1 round',
    text: 'Your encouragement inspires your ally to succeed at a task. This counts as having taken sufficient preparatory actions to Aid your ally on a skill check of your choice, regardless of the circumstances. When you later use the Aid reaction, you can roll Performance instead of the normal skill check, and if you roll a failure, you get a success instead. If you are legendary in Performance, you automatically critically succeed. The GM might rule that you can\'t use this ability if the act of encouraging your ally would interfere with the skill check (such as a check to Sneak quietly or maintain a disguise).',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=386',
    name: 'Inspire Courage',
    traits: [ 'bard', 'cantrip', 'composition', 'emotion', 'enchantment', 'mental' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 386',
    cast: 'verbal',
    action: '1',
    area: '60-foot emanation',
    duration: '1 round',
    text: 'You inspire your allies with words or tunes of encouragement. You and all allies in the area gain a +1 status bonus to attack rolls, damage rolls, and saves against fear effects.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=389',
    name: 'Lingering Composition',
    traits: [ 'uncommon', 'bard', 'enchantment' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 387',
    cast: 'verbal',
    action: 'free',
    text: 'You add a flourish to your composition to extend its benefits. If your next action is to cast a cantrip composition with a duration of 1 round, attempt a Performance check. The DC is usually a standard-difficulty DC of a level equal to the highest-level target of your composition, but the GM can assign a different DC based on the circumstances. The effect depends on the result of your check.  \r\n**Critical Success**  The composition lasts 4 rounds.  \r\n**Success**  The composition lasts 3 rounds.  \r\n**Failure**  The composition lasts 1 round, but you don\'t spend the Focus Point for casting this spell.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=390',
    name: 'Loremaster\'s Etude',
    traits: [ 'uncommon', 'bard', 'divination', 'fortune' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 387',
    cast: 'somatic',
    action: 'free',
    trigger: 'You or an ally within range attempts a skill check to Recall Knowledge',
    range: '30 feet',
    targets: 'you or the triggering ally',
    text: 'You call upon your muse\'s deep mysteries, granting the target a greater ability to think and recall information. Roll the triggering Recall Knowledge skill check twice and use the better result.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=387',
    name: 'Inspire Defense',
    traits: [ 'bard', 'cantrip', 'composition', 'emotion', 'enchantment', 'mental' ],
    type: 'Cantrip',
    level: 2,
    source: 'Core Rulebook pg. 386',
    cast: 'verbal',
    action: '1',
    area: '60-foot emanation',
    duration: '1 round',
    text: 'You inspire your allies to protect themselves more effectively. You and all allies in the area gain a +1 status bonus to AC and saving throws, as well as resistance equal to half the spell\'s level to physical damage.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=392',
    name: 'Triple Time',
    traits: [ 'bard', 'cantrip', 'composition', 'emotion', 'enchantment', 'mental' ],
    type: 'Cantrip',
    level: 2,
    source: 'Core Rulebook pg. 387',
    cast: 'somatic',
    action: '1',
    area: '60-foot emanation',
    duration: '1 round',
    text: 'You dance at a lively tempo, speeding your allies\' movement. You and all allies in the area gain a +10-foot status bonus to all Speeds for 1 round.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=382',
    name: 'Dirge of Doom',
    traits: [ 'uncommon', 'bard', 'cantrip', 'composition', 'emotion', 'enchantment', 'fear', 'mental' ],
    type: 'Cantrip',
    level: 3,
    source: 'Core Rulebook pg. 386',
    cast: 'verbal',
    action: '1',
    area: '30-foot emanation',
    duration: '1 round',
    text: 'Foes within the area are frightened 1. They can\'t reduce their frightened value below 1 while they remain in the area.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=388',
    name: 'Inspire Heroics',
    traits: [ 'uncommon', 'bard', 'enchantment' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 387',
    cast: 'verbal',
    action: 'free',
    text: 'You call upon your muse to greatly increase the benefits you provide to your allies with your inspire courage or inspire defense composition. If your next action is to cast inspire courage or inspire defense, attempt a Performance check. The DC is usually a very hard DC of a level equal to that of the highest-level target of your composition, but the GM can assign a different DC based on the circumstances. The effect of your inspire courage or inspire defense composition depends on the result of your check.  \r\n**Critical Success**  The status bonus from your inspire courage or inspire defense increases to +3.  \r\n**Success**  The status bonus from inspire courage or inspire defense increases to +2.  \r\n**Failure**  Your inspire courage or inspire defense provides only its normal bonus of +1, but you don\'t spend the Focus Point for casting this spell.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=384',
    name: 'House of Imaginary Walls',
    traits: [ 'bard', 'cantrip', 'composition', 'illusion', 'visual' ],
    type: 'Cantrip',
    level: 5,
    source: 'Core Rulebook pg. 386',
    cast: 'somatic',
    action: '1',
    range: 'touch',
    duration: '1 round',
    text: 'You mime creating an invisible 10-foot-by-10-foot stretch of wall adjacent to you and within your reach. The wall is solid to those creatures that don\'t disbelieve it, even incorporeal creatures. You and your allies can voluntarily believe the wall exists to continue to treat it as solid, for instance to climb onto it. A creature that disbelieves the illusion is temporarily immune to your house of imaginary walls for 1 minute. The wall doesn\'t block creatures that didn\'t see your visual performance, nor does it block objects. The wall has AC 10, Hardness equal to double the spell\'s level, and HP equal to quadruple the spell\'s level.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=380',
    name: 'Allegro',
    traits: [ 'uncommon', 'bard', 'cantrip', 'composition', 'emotion', 'enchantment', 'mental' ],
    type: 'Cantrip',
    level: 7,
    source: 'Core Rulebook pg. 386',
    cast: 'verbal',
    action: '1',
    range: '30 feet',
    targets: '1 ally',
    duration: '1 round',
    text: 'You perform rapidly, speeding up your ally. The ally becomes quickened and can use the additional action to Strike, Stride, or Step.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=391',
    name: 'Soothing Ballade',
    traits: [ 'uncommon', 'bard', 'composition', 'emotion', 'enchantment', 'healing', 'mental' ],
    type: 'Focus',
    level: 7,
    source: 'Core Rulebook pg. 387',
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: 'you and up to 9 allies',
    text: 'You draw upon your muse to soothe your allies. Choose one of the following three effects: The spell attempts to counteract fear effects on the targets. The spell attempts to counteract effects imposing paralysis on the targets. The spell restores 7d8 Hit Points to the targets.  \r\n**Heightened (+1)**  When used to heal, soothing ballad restores 1d8 more Hit Points.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=383',
    name: 'Fatal Aria',
    traits: [ 'uncommon', 'bard', 'composition', 'death', 'emotion', 'enchantment', 'mental' ],
    type: 'Focus',
    level: 10,
    source: 'Core Rulebook pg. 386',
    cast: 'verbal',
    action: '1',
    range: '30 feet',
    targets: '1 creature',
    text: 'You perform music so perfect that the target may die of joy or sorrow. Once targeted, the creature becomes temporarily immune for 1 minute. The effect of the spell depends on the target\'s level and current Hit Points.   \r\n**16th or Lower**  The target dies instantly.   \r\n**17th**  If the target has 50 Hit Points or fewer, it dies instantly; otherwise, it drops to 0 Hit Points and becomes dying 1.   \r\n**18th or Higher**  The target takes 50 damage. If this brings it to 0 Hit Points, it dies instantly.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=395',
    name: 'Lay on Hands',
    traits: [ 'uncommon', 'champion', 'healing', 'necromancy', 'positive' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 387',
    cast: 'somatic',
    action: '1',
    range: 'touch',
    targets: '1 willing living creature or 1 undead creature',
    text: 'Your hands become infused with positive energy, healing a living creature or damaging an undead creature with a touch. If you use lay on hands on a willing living target, you restore 6 Hit Points; if the target is one of your allies, they also gain a +2 status bonus to AC for 1 round. Against an undead target, you deal 1d6 damage and it must attempt a basic Fortitude save; if it fails, it also takes a -2 status penalty to AC for 1 round.  \r\n**Heightened (+1)**  The amount of healing increases by 6, and the damage to an undead target increases by 1d6.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=397',
    name: 'Litany against Wrath',
    traits: [ 'uncommon', 'champion', 'evocation', 'good', 'litany' ],
    type: 'Focus',
    level: 3,
    source: 'Core Rulebook pg. 388',
    cast: 'verbal',
    action: '1',
    range: '30 feet',
    targets: '1 evil creature',
    'saving throw': 'Will',
    duration: '1 round',
    text: 'Your litany rails against the sin of wrath, punishing the target for attacking good creatures. The target must attempt a Will save. A particularly wrathful creature, such as a wrath demon, uses the outcome one degree of success worse than the result of its saving throw. The target then becomes temporarily immune to all of your litanies for 1 minute.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The first time the target uses an action that deals damage to at least one good creature, the target takes 3d6 good damage.  \r\n**Failure**  Each time the target uses an action that deals damage to at least one good creature, the target takes 3d6 good damage.  \r\n**Critical Failure**  The target is enfeebled 2. Each time it uses an action that deals damage to at least one good creature, the target takes 3d6 good damage.  \r\n**Heightened (+1)**  The damage increases by 1d6.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=396',
    name: 'Litany against Sloth',
    traits: [ 'uncommon', 'champion', 'evocation', 'good', 'litany' ],
    type: 'Focus',
    level: 5,
    source: 'Core Rulebook pg. 388',
    cast: 'verbal',
    action: '1',
    range: '30 feet',
    targets: '1 evil creature',
    'saving throw': 'Will',
    duration: '1 round',
    text: 'Your litany rails against the sin of sloth, interfering with the target\'s ability to react. The target must attempt a Will save. A particularly slothful creature, such as a sloth demon, uses the outcome one degree of success worse than the result of its saving throw. The target becomes temporarily immune to all of your litanies for 1 minute.  \r\n **Critical Success** The target is unaffected.  \r\n **Success** The target can\'t use reactions.  \r\n **Failure** The target can\'t use reactions and is slowed 1.  \r\n **Critical Failure** The target can\'t use reactions and is slowed 2.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=393',
    name: 'Champion\'s Sacrifice',
    traits: [ 'uncommon', 'abjuration', 'champion' ],
    type: 'Focus',
    level: 6,
    source: 'Core Rulebook pg. 387',
    cast: 'somatic',
    action: 'reaction',
    trigger: 'An ally is hit by a Strike, or an ally fails a saving throw against an effect that doesn\'t affect you.',
    range: '30 feet',
    targets: '1 ally',
    text: 'You form a link with an ally, allowing you to take harm in their stead. All the effects of the hit or failed save are applied to you instead of the ally. For example, if the target critically fails a saving throw against a fireball, you would take double damage. These effects ignore any resistances, immunities, or other abilities you have that might mitigate them in any way, although those of the target apply before you take the effect.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=398',
    name: 'Litany of Righteousness',
    traits: [ 'uncommon', 'champion', 'evocation', 'good', 'litany' ],
    type: 'Focus',
    level: 7,
    source: 'Core Rulebook pg. 388',
    cast: 'verbal',
    action: '1',
    range: '30 feet',
    targets: '1 evil creature',
    duration: '1 round',
    text: 'Your litany denounces an evildoer, rendering it susceptible to the powers of good. The target gains weakness 7 to good. The target then becomes temporarily immune to all of your litanies for 1 minute.  \r\n**Heightened (+1)**  The weakness increases by 1.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=394',
    name: 'Hero\'s Defiance',
    traits: [ 'uncommon', 'champion', 'healing', 'necromancy', 'positive' ],
    type: 'Focus',
    level: 10,
    source: 'Core Rulebook pg. 387',
    cast: 'verbal',
    action: 'free',
    trigger: 'An attack would bring you to 0 Hit Points.',
    text: 'You shout in defiance, filling you with a sudden burst of healing. Just before applying the attack\'s damage, you recover 10d4+20 Hit Points. If this is enough to prevent the attack from bringing you to 0 Hit Points, you don\'t become unconscious or dying. Either way, cheating death is difficult, and you can\'t use hero\'s defiance again until you Refocus or the next time you prepare. Hero\'s defiance cannot be used against effects with the death trait or that would leave no remains, such as disintegrate.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=399',
    name: 'Agile Feet',
    traits: [ 'uncommon', 'cleric', 'transmutation' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 389',
    cast: 'somatic',
    action: '1',
    duration: 'until the end of the current turn',
    text: 'The blessings of your god make your feet faster and your movements more fluid. You gain a +5-foot status bonus to your Speed and ignore difficult terrain. As part of casting agile feet, you can Stride or Step; you can instead Burrow, Climb, Fly, or Swim if you have the appropriate Speed.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=400',
    name: 'Appearance of Wealth',
    traits: [ 'uncommon', 'cleric', 'illusion' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 389',
    cast: 'material, verbal',
    action: '2',
    range: '30 feet',
    area: '5-foot burst',
    'saving throw': 'Will',
    duration: 'sustained up to 1 minute',
    text: 'You create a brief vision of immense wealth filling the spell\'s area. Each creature within 20 feet of the area that could be enticed by material wealth must attempt a Will saving throw. A creature that enters the area automatically disbelieves the illusion, and disbelieving the illusion ends any fascinated condition imposed by the spell. As long as you Sustain the Spell, other creatures react to the treasure like they would any other illusion, but they are not at risk of becoming fascinated.  \r\n**Critical Success**  The creature disbelieves the illusion and is unaffected by it.  \r\n**Success**  The creature is fascinated by the wealth until it has completed its first action on its next turn.  \r\n**Failure**  The creature is fascinated by the illusion.',
    components: [ 'material', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=402',
    name: 'Athletic Rush',
    traits: [ 'uncommon', 'cleric', 'transmutation' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 389',
    cast: 'somatic',
    action: '1',
    duration: '1 round',
    text: 'Your body fills with physical power and skill. You gain a +10- foot status bonus to Speed and a +2 status bonus to Athletics checks. As a part of Casting this Spell, you can use a Stride, Leap, Climb, or Swim action. The spell\'s bonuses apply during that action.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=403',
    name: 'Bit of Luck',
    traits: [ 'uncommon', 'cleric', 'divination', 'fortune' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 389',
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 willing creature',
    duration: '1 minute',
    text: 'You tilt the scales of luck slightly to protect a creature from disaster. When the target would attempt a saving throw, it can roll twice and use the better result. Once it does this, the spell ends. If you cast bit of luck again, any previous bit of luck you cast that\'s still in effect ends. After a creature has been targeted with bit of luck, it becomes temporarily immune for 24 hours.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=404',
    name: 'Blind Ambition',
    traits: [ 'uncommon', 'cleric', 'emotion', 'enchantment', 'mental' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 389',
    cast: 'somatic, verbal',
    action: '2',
    range: '60 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: '10 minutes',
    text: 'You strengthen a target\'s ambition, increase its resentment of allies, and make its allegiances more susceptible to change. The target must attempt a Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes a -1 status penalty to its saving throws and other defenses against attempts to Coerce it, Request something of it, or use mental effects to convince it to do something (such as a suggestion spell). This penalty applies only if the target is being encouraged to advance its own ambitions.  \r\n**Failure**  As success, but the penalty is -2.  \r\n**Critical Failure**  The target is overcome with ambition, taking whatever actions would advance its own agenda over those of anyone else, even without attempts to convince it.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=406',
    name: 'Charming Touch',
    traits: [ 'uncommon', 'cleric', 'emotion', 'enchantment', 'incapacitation', 'mental' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 390',
    cast: 'somatic',
    action: '1',
    range: 'touch',
    targets: '1 humanoid creature that could find you attractive',
    'saving throw': 'Will',
    duration: '10 minutes',
    text: 'You infuse your target with attraction, causing it to act friendlier toward you. The target attempts a Will save. It gains a +4 circumstance bonus to this save if you or your allies recently threatened or were hostile to it. You can Dismiss the spell. If you use hostile actions against the target, the spell ends. After the spell ends, the target doesn\'t necessarily realize it was charmed unless its friendship with you or the actions you convinced it to take clash with its expectations, which could potentially allow you to convince the target to continue being your friend via mundane means.  \r\n**Critical Success**  The target is unaffected and aware you tried to charm it.  \r\n**Success**  The target is unaffected but thinks your spell was something harmless instead of charming touch, unless it identifies the spell (usually with Identify Magic).  \r\n**Failure**  The target\'s attitude becomes friendly toward you. If it was friendly, it becomes helpful. It can\'t use hostile actions against you.  \r\n**Critical Failure**  The target is helpful and can\'t use hostile actions against you.  \r\n**Heightened (4th)**  You can target any type of creature, not just humanoids, as long as it could find you attractive.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=407',
    name: 'Cloak of Shadow',
    traits: [ 'uncommon', 'cleric', 'darkness', 'evocation', 'shadow' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 390',
    cast: 'somatic',
    action: '1',
    range: 'touch',
    targets: '1 willing creature',
    duration: '1 minute',
    text: 'You drape the target in a mantle of swirling shadows that make it harder to see. The cloak reduces bright light within a 20-foot emanation to dim light. This is a form of magical darkness and can therefore overcome non-magical light or attempt to counteract magical light as described on page 458. The target can use concealed condition gained from the shadows to Hide, though observant creatures can still follow the moving aura of shadow, making it difficult for the target to become completely undetected. The target can use an Interact action to remove the cloak and leave it behind as a decoy, where it remains, reducing light for the rest of the spell\'s duration. If anyone picks up the cloak after it\'s been removed by the original target, the cloak evaporates and the spell ends.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=410',
    name: 'Cry of Destruction',
    traits: [ 'uncommon', 'cleric', 'evocation', 'sonic' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 390',
    cast: 'somatic, verbal',
    action: '2',
    area: '15-foot cone',
    'saving throw': 'basic Fortitude',
    text: 'Your voice booms, smashing what\'s in front of you. Each creature and unattended object in the area takes 1d8 sonic damage. If you already dealt damage to an enemy this turn with a Strike or spell, increase the damage dice from this spell to d12s.  \r\n**Heightened (+1)**  The damage increases by 1d8.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=412',
    name: 'Dazzling Flash',
    traits: [ 'uncommon', 'cleric', 'evocation', 'light', 'visual' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 391',
    cast: 'material, verbal',
    action: '2',
    area: '15-foot cone',
    'saving throw': 'Fortitude',
    text: 'You raise your religious symbol and create a blinding flash of light. Each creature in the area must attempt a Fortitude save.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature is dazzled for 1 round.  \r\n**Failure**  The creature is blinded for 1 round and dazzled for 1 minute. The creature can spend an Interact action rubbing its eyes to end the blinded condition.  \r\n**Critical Failure**  The creature is blinded for 1 round and dazzled for 1 hour.  \r\n**Heightened (3rd)**  The area increases to a 30-foot cone.',
    components: [ 'material', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=413',
    name: 'Death\'s Call',
    traits: [ 'uncommon', 'cleric', 'necromancy' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 391',
    cast: 'verbal',
    action: 'reaction',
    trigger: 'A living creature within 20 feet of you dies, or an undead creature within 20 feet of you is destroyed.',
    duration: '1 minute',
    text: 'Seeing another pass from this world to the next invigorates you. You gain temporary Hit Points equal to the triggering creature\'s level plus your Wisdom modifier. If the triggering creature was undead, double the number of temporary Hit Points you gain . These last for the duration of the spell, and the spell ends if all the temporary Hit Points are depleted earlier.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=421',
    name: 'Face in the Crowd',
    traits: [ 'uncommon', 'cleric', 'illusion', 'visual' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 392',
    cast: 'somatic',
    action: '1',
    duration: '1 minute',
    text: 'While in a crowd of roughly similar creatures, your appearance becomes bland and nondescript. You gain a +2 status bonus to Deception and Stealth checks to go unnoticed among the crowd, and you ignore difficult terrain caused by the crowd.  \r\n**Heightened (3rd)**  The spell gains a range of 10 feet and can target up to 10 creatures.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=422',
    name: 'Fire Ray',
    traits: [ 'uncommon', 'attack', 'cleric', 'evocation', 'fire' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 392',
    cast: 'somatic, verbal',
    action: '2',
    range: '60 feet',
    targets: '1 creature or object',
    text: 'A blazing band of fire arcs through the air. Make a spell attack roll. The ray deals 2d6 fire damage.  \r\n**Critical Success**  The ray deals double damage and 1d4 persistent fire damage.  \r\n**Success**  The ray deals full damage.  \r\n**Heightened (+1)**  The ray\'s initial damage increases by 2d6, and the persistent fire damage on a critical success increases by 1d4.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=424',
    name: 'Forced Quiet',
    traits: [ 'uncommon', 'abjuration', 'cleric' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 393',
    cast: 'material, somatic',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Fortitude',
    duration: 'varies',
    text: 'You quiet the target\'s voice, preventing it from giving away valuable secrets. This doesn\'t prevent the target from talking or providing verbal spell components, but no creature more than 10 feet away can hear its whispers without succeeding at a Perception check against your spell DC, which might interfere with auditory or linguistic effects as well as communication. The spell\'s duration depends on the target\'s Fortitude save. After attempting its save, the target becomes temporarily immune for 24 hours.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The duration is 1 round.  \r\n**Failure**  The duration is 1 minute.  \r\n**Critical Failure**  The duration is 10 minutes.',
    components: [ 'material', 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=426',
    name: 'Healer\'s Blessing',
    traits: [ 'uncommon', 'cleric', 'necromancy' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 393',
    cast: 'verbal',
    action: '1',
    range: '30 feet',
    targets: '1 willing living creature',
    duration: '1 minute',
    text: 'Your words bless a creature with an enhanced connection to positive energy. When the target regains Hit Points from a healing spell, it regains 1 additional Hit Point. The target regains additional Hit Points from healer\'s blessing only the first time it regains HP from a given healing spell, so a spell that heals the creature repeatedly over a duration would restore additional Hit Points only once.  \r\n**Heightened (+1)**  The additional healing increases by 2 HP.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=427',
    name: 'Hurtling Stone',
    traits: [ 'attack', 'cleric', 'earth', 'evocation' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 393',
    cast: 'somatic',
    action: '1',
    range: '60 feet',
    targets: '1 creature',
    text: 'You evoke a magical stone and throw it, with your god\'s presence guiding your aim. Make a spell attack roll against the target. The stone deals bludgeoning damage equal to 1d6 plus your Strength modifier.  \r\n**Critical Success**  The stone deals double damage.  \r\n**Success**  The stone deals full damage.  \r\n**Heightened (+1)**  The stone\'s damage increases by 1d6.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=431',
    name: 'Magic\'s Vessel',
    traits: [ 'uncommon', 'cleric', 'enchantment' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 393',
    cast: 'somatic',
    action: '1',
    range: 'touch',
    targets: '1 creature',
    duration: 'sustained up to 1 minute',
    text: 'A creature becomes a receptacle for pure magical energy sent by your deity. The target gains a +1 status bonus to saving throws. Each time you Cast a Spell from your spell slots, you automatically Sustain this Spell and grant its target resistance to damage from spells until the start of your next turn. This resistance is equal to the level of the spell you cast.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=433',
    name: 'Moonbeam',
    traits: [ 'uncommon', 'attack', 'cleric', 'evocation', 'fire', 'light' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 394',
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    targets: '1 creature or object',
    text: 'You shine a ray of moonlight. Make a spell attack roll. The beam of light deals 1d6 fire damage. Moonbeam deals silver damage for the purposes of weaknesses, resistances, and the like.  \r\n**Critical Success**  The beam deals double damage, and the target is dazzled for 1 minute.  \r\n**Success**  The beam deals full damage, and the target is dazzled for 1 round.  \r\n**Heightened (+1)**  The ray\'s damage increases by 1d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=436',
    name: 'Overstuff',
    traits: [ 'uncommon', 'cleric', 'transmutation' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 394',
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 living creature',
    'saving throw': 'Fortitude',
    text: 'Huge amounts of food and drink fill the target. It receives a full meal\'s worth of nourishment and must attempt a Fortitude save. A target sickened by this spell takes a -10-foot status penalty to its Speed until it\'s no longer sickened.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is sickened 1, but if it spends an action to end the condition, it succeeds automatically.  \r\n**Failure**  The target is sickened 1.  \r\n**Critical Failure**  The target is sickened 2.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=438',
    name: 'Perfected Mind',
    traits: [ 'uncommon', 'abjuration', 'cleric' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 394',
    cast: 'verbal',
    action: '1',
    text: 'You meditate upon perfection to remove all distractions from your mind. Attempt a new Will save against one mental effect currently affecting you that required a Will save. Use the result of this new save to determine the outcome of the mental effect, unless the new save would have a worse result than the original save, in which case nothing happens. You can use perfected mind against a given effect only once.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=441',
    name: 'Protector\'s Sacrifice',
    traits: [ 'uncommon', 'abjuration', 'cleric' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 395',
    cast: 'somatic',
    action: 'reaction',
    trigger: 'An ally within 30 feet takes damage.',
    range: '30 feet',
    text: 'You protect your ally by suffering in their stead. Reduce the damage the triggering ally would take by 3. You redirect this damage to yourself, but your immunities, weaknesses, resistances and so on do not apply. You aren\'t subject to any conditions or other effects of whatever damaged your ally (such as poison from a venomous bite). Your ally is still subject to those effects even if you redirect all of the triggering damage to yourself.  \r\n**Heightened (+1)**  The damage you redirect increases by 3.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=444',
    name: 'Pushing Gust',
    traits: [ 'uncommon', 'air', 'cleric', 'conjuration' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 395',
    cast: 'somatic, verbal',
    action: '2',
    range: '500 feet',
    targets: '1 creature',
    'saving throw': 'Fortitude',
    text: 'Giving the air a push, you buffet the target with a powerful gust of wind; it must attempt a Fortitude save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is pushed 5 feet away from you.  \r\n**Failure**  The target is pushed 10 feet away from you.  \r\n**Critical Failure**  The target is pushed 10 feet away from you and knocked prone.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=445',
    name: 'Read Fate',
    traits: [ 'uncommon', 'cleric', 'divination', 'prediction' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 395',
    cast: '1 minute (material, somatic, verbal)',
    range: '10 feet',
    targets: '1 creature other than you',
    text: 'You attempt to learn more about the target\'s fate in the short term, usually within the next day for most prosaic creatures, or the next hour or less for someone likely to have multiple rapid experiences, such as someone actively adventuring. You learn a single enigmatic word connected to the creature\'s fate in that time frame. Fate is notoriously inscrutable, and the word isn\'t necessarily meant to be taken at face value, so the meaning is often clear only in hindsight. The GM rolls a secret DC 6 flat check. If the creature\'s fate is too uncertain, or on a failed flat check, the spell yields the word "inconclusive." Either way, the creature is then temporarily immune for 24 hours.',
    components: [ '1minute(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=449',
    name: 'Savor the Sting',
    traits: [ 'uncommon', 'attack', 'cleric', 'enchantment', 'mental', 'nonlethal' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 396',
    cast: 'somatic',
    action: '1',
    range: 'touch',
    targets: '1 creature',
    'saving throw': 'Will',
    text: 'You inflict pain upon the target and revel in their anguish. This deals 1d4 mental damage and 1d4 persistent mental damage; the target must attempt a Will save. As long as the target is taking persistent damage from this spell, you gain a +1 status bonus to attack rolls and skill checks against the target.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes half damage and no persistent damage.  \r\n**Failure**  The target takes full initial and persistent damage.  \r\n**Critical Failure**  The target takes double initial and persistent damage.  \r\n**Heightened (+1)**  The initial damage increases by 1d4 and the persistent damage increases by 1d4.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=450',
    name: 'Scholarly Recollection',
    traits: [ 'uncommon', 'cleric', 'divination', 'fortune' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 396',
    cast: 'verbal',
    action: 'reaction',
    trigger: 'You attempt a Perception check to Seek, or you attempt a skill check to Recall Knowledge with a skill you\'re trained in.',
    text: 'Speaking a short prayer as you gather your thoughts, you\'re blessed to find that your deity gave you just the right bit of information for your situation. Roll the triggering check twice and use the better result.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=452',
    name: 'Soothing Words',
    traits: [ 'uncommon', 'cleric', 'emotion', 'enchantment', 'mental' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 396',
    cast: 'verbal',
    action: '1',
    range: '30 feet',
    targets: '1 ally',
    duration: '1 round',
    text: 'You attempt to calm the target by uttering soothing words in a calm and even tone. The target gains a +1 status bonus to Will saving throws. This bonus increases to +2 against emotion effects. In addition, when you Cast this Spell, you can attempt to counteract one emotion effect on the target.  \r\n**Heightened (5th)**  The bonus to saves increases to +2, or +3 against emotion effects.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=453',
    name: 'Splash of Art',
    traits: [ 'uncommon', 'cleric', 'illusion', 'visual' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 397',
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    area: '5-foot burst',
    'saving throw': 'Will',
    duration: 'varies',
    text: 'A deluge of colorful illusory paint, tools, or other symbols of art and artisanship drift down in the area. Roll 1d4 to determine the color of the illusion. Each creature in the area must attempt a Will save. A creature is unaffected on a success. On a failure or critical failure, the creature takes the results listed on the table relevant to the color.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=454',
    name: 'Sudden Shift',
    traits: [ 'uncommon', 'abjuration', 'cleric', 'illusion' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 397',
    cast: 'somatic',
    action: 'reaction',
    trigger: 'An enemy misses you with a melee attack.',
    duration: 'until the end of your next turn',
    text: 'You swiftly move from a dangerous spot and veil yourself. You Step and become concealed.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=455',
    name: 'Sweet Dream',
    traits: [ 'uncommon', 'auditory', 'cleric', 'enchantment', 'linguistic', 'mental', 'sleep' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 397',
    cast: 'material, somatic, verbal',
    action: '3',
    range: '30 feet',
    targets: '1 willing creature',
    duration: '10 minutes',
    text: 'With soothing song or tales, you lull the target into an enchanting dream. When you cast the spell, the target falls unconscious if it wasn\'t already. While unconscious, it experiences a dream of your choice. If it sleeps for at least 1 minute, it gains the benefit of the dream for the remainder of the spell\'s duration. Dream of Insight +1 status bonus to Intelligence-based skill checks Dream of Glamour +1 status bonus to Charisma-based skill checks Dream of Voyaging +5-foot status bonus to Speed If you Cast this Spell again, the effects of any previous sweet dream you cast end.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=458',
    name: 'Tidal Surge',
    traits: [ 'uncommon', 'cleric', 'evocation', 'water' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 397',
    cast: 'somatic',
    action: '1',
    range: '60 feet',
    targets: '1 creature',
    'saving throw': 'Fortitude',
    text: 'You call forth a tremendous wave to move the target either in a body of water or on the ground. The target must attempt a Fortitude save.  \r\n**Failure**  You move the target 5 feet in any direction along the ground or 10 feet in any direction through a body of water.  \r\n**Critical Failure**  You move the target up to 10 feet in any direction along the ground or 20 feet in any direction through a body of water.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=459',
    name: 'Touch of Obedience',
    traits: [ 'uncommon', 'cleric', 'enchantment', 'mental' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 398',
    cast: 'somatic',
    action: '1',
    range: 'touch',
    targets: '1 living creature',
    'saving throw': 'Will',
    duration: 'varies',
    text: 'Your imperious touch erodes the target\'s willpower, making it easier to control. The target attempts a Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is stupefied 1 until the end of your current turn.  \r\n**Failure**  The target is stupefied 1 until the end of your next turn.  \r\n**Critical Failure**  The target is stupefied 1 for 1 minute.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=461',
    name: 'Touch of Undeath (Cleric)',
    traits: [ 'uncommon', 'attack', 'cleric', 'necromancy', 'negative' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 398',
    cast: 'somatic',
    action: '1',
    range: 'touch',
    targets: '1 living creature',
    'saving throw': 'Fortitude',
    text: 'You attack the target\'s life force with undeath, dealing 1d6 negative damage. The target must attempt a Fortitude save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes half damage.  \r\n**Failure**  The target takes full damage, and positive effects heal it only half as much as normal for 1 round.  \r\n**Critical Failure**  The target takes double damage, and positive effects heal it only half as much as normal for 1 minute.  \r\n**Heightened (+1)**  The damage increases by 1d6.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=464',
    name: 'Unimpeded Stride',
    traits: [ 'uncommon', 'cleric', 'transmutation' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 398',
    cast: 'somatic',
    action: '1',
    text: 'Nothing can hold you in place. You immediately escape from every magical effect that has you immobilized or grabbed unless the effect is of a higher level than your unimpeded stride spell. You then Stride. During this movement, you ignore difficult terrain and any circumstance or status penalties to your Speed.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=466',
    name: 'Veil of Confidence',
    traits: [ 'uncommon', 'cleric', 'enchantment', 'mental' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 398',
    cast: 'verbal',
    action: '1',
    duration: '1 minute',
    text: 'You surround yourself in a veil of confidence. You reduce your current frightened condition by 1, and whenever you would become frightened during the duration, reduce the amount by 1. If you critically fail a save against fear, veil of confidence ends immediately, and you increase any frightened condition you gain from the critical failure by 1 instead of decreasing it.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=467',
    name: 'Vibrant Thorns',
    traits: [ 'uncommon', 'cleric', 'morph', 'plant', 'transmutation' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 399',
    cast: 'somatic',
    action: '1',
    duration: '1 minute',
    text: 'Your body sprouts a coat of brambly thorns that harm those that strike you and thrive on life magic. Adjacent creatures that hit you with a melee attack, as well as creatures that hit you with unarmed attacks, take 1 piercing damage each time they do. Anytime you cast a positive spell, the damage from your thorns increases to 1d6 until the start of your next turn.  \r\n**Heightened (+1)**  The damage increases by 1, or 1d6 after you cast a positive spell.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=468',
    name: 'Walking Nightmare',
    traits: [ 'uncommon', 'cleric', 'emotion', 'enchantment', 'fear', 'mental' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 399',
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: 'varies',
    text: 'You fill the creature\'s mind with a terrifying vision out of its nightmares. The target must attempt a Will save. If the target is unconscious when you Cast this Spell on it, it immediately wakes up before attempting its save, and if it fails its save, it gains the fleeing condition for 1 round in addition to the effects noted above.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is frightened 1.  \r\n**Failure**  The target is frightened 2.  \r\n**Critical Failure**  The target is frightened 3.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=469',
    name: 'Weapon Surge',
    traits: [ 'uncommon', 'cleric', 'evocation' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 399',
    cast: 'somatic',
    action: '1',
    range: 'touch',
    targets: '1 weapon you\'re wielding',
    text: 'Holding your weapon aloft, you fill it with divine energy. On your next Strike with that weapon before the start of your next turn, you gain a +1 status bonus to the attack roll and the weapon deals an additional die of damage. If the weapon has a striking rune, this instead increases the number of dice from the striking rune by 1 (to a maximum of 3 extra weapon dice).If the target weapon leaves your possession, weapon surge immediately ends.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=471',
    name: 'Word of Truth',
    traits: [ 'uncommon', 'cleric', 'divination' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 399',
    cast: 'verbal',
    action: '1',
    duration: 'sustained up to 1 minute',
    text: 'You speak a statement you believe to be true and that is free of any attempt to deceive through twisting words, omission, and so on. The statement must be 25 words or fewer. A symbol of your deity glows above your head, and anyone who sees you and hears your statement knows that you believe it to be true. Each time you Sustain this Spell, you can repeat this effect.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=401',
    name: 'Artistic Flourish',
    traits: [ 'uncommon', 'cleric', 'transmutation' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 389',
    cast: 'material, verbal',
    action: '2',
    range: '15 feet',
    targets: '1 item or work of art that fits entirely within the range',
    duration: '10 minutes',
    text: 'You transform the target to make it match your artisanal and artistic vision. If you have expert proficiency in Crafting, the item grants a +1 item bonus to attack rolls if it\'s a weapon or skill checks if it\'s a skill tool. The target is a beautiful and impressive piece for its new quality, but the effect is obviously temporary, so its monetary value doesn\'t change. When you cast this spell, any previous artistic flourish you had cast ends.  \r\n**Heightened (7th)**  If you have master proficiency in Crafting, the item grants a +2 item bonus instead.  \r\n**Heightened (10th)**  If you have legendary proficiency in Crafting, the item grants a +3 item bonus instead.',
    components: [ 'material', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=405',
    name: 'Captivating Adoration',
    traits: [ 'uncommon', 'cleric', 'emotion', 'enchantment', 'mental', 'visual' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 389',
    cast: 'somatic, verbal',
    action: '2',
    area: '15-foot emanation',
    'saving throw': 'Will',
    duration: '1 minute',
    text: 'You become intensely entrancing, and creatures are distracted by you as long as they remain within the area. You can exclude any creatures you choose from the effects. When a creature enters the area for the first time, it must attempt a Will saving throw. If a creature leaves and reenters, it uses the results of its original save.  \r\n**Critical Success**  The creature is unaffected and temporarily immune for 1 hour.  \r\n**Success**  The creature is fascinated with you for its next action, then is temporarily immune for 1 hour.  \r\n**Failure**  The creature is fascinated with you.  \r\n**Critical Failure**  The creature is fascinated with you, and its attitude toward you improves by one step.  \r\n**Heightened (+1)**  Increase the size of the emanation by 15 feet.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=408',
    name: 'Commanding Lash',
    traits: [ 'uncommon', 'cleric', 'enchantment', 'incapacitation', 'mental' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 390',
    cast: 'verbal',
    action: '1',
    requirements: 'Your most recent action dealt damage to a target',
    range: '100 feet',
    targets: 'A creature you dealt damage to on your most recent action.',
    'saving throw': 'Will',
    duration: 'until the end of your target\'s next turn',
    text: 'With the threat of more pain, you compel a creature you\'ve recently harmed. You issue a command to the target, with the effects of the spell command.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=409',
    name: 'Competitive Edge',
    traits: [ 'uncommon', 'cleric', 'emotion', 'enchantment', 'mental' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 390',
    cast: 'verbal',
    action: '1',
    duration: 'sustained up to 1 minute',
    text: 'Your competitiveness drives you to prove yourself against the opposition. You gain a +1 status bonus to attack rolls and skill checks. If an enemy within 20 feet critically succeeds at an attack roll or skill check, your status bonus increases to +3 attack rolls or that specific skill check (whichever the foe critically succeeded at) for 1 round.  \r\n**Heightened (7th)**  Increase the base bonus to +2 and the increased bonus after an enemy critically succeeds to +4.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=411',
    name: 'Darkened Eyes',
    traits: [ 'uncommon', 'cleric', 'darkness', 'transmutation' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 390',
    cast: 'somatic, verbal',
    action: '2',
    range: '60 feet',
    targets: '1 creature',
    'saving throw': 'Fortitude',
    duration: 'varies',
    text: 'You infuse a creature\'s vision with darkness. After attempting its save, the target becomes temporarily immune for 24 hours.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target\'s darkvision or low-light vision is suppressed for 1 round.  \r\n**Failure**  As success, but the duration is 1 minute.  \r\n**Critical Failure**  As success, but the duration is 1 minute, and the target is also blinded for the duration. It can attempt a new save at the end of each of its turns. If it succeeds, it\'s no longer blinded, but its darkvision or low-light vision remains suppressed.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=414',
    name: 'Delusional Pride',
    traits: [ 'uncommon', 'cleric', 'emotion', 'enchantment', 'mental' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 391',
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: 'varies',
    text: 'You make the target overconfident, leading it to ascribe failure to external factors. If the target fails at an attack roll or skill check, it takes a -1 status penalty to attack rolls and skill checks until the end of its turn (or the end of its next turn, if it attempted the roll outside its turn). If the creature fails a second time while taking this penalty, the penalty increases to -2. The duration depends on the target\'s Will save. After attempting its save, the creature becomes temporarily immune for 24 hours.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The duration is 1 round.  \r\n**Failure**  The duration is 10 minutes.  \r\n**Critical Failure**  The duration is 24 hours.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=415',
    name: 'Destructive Aura',
    traits: [ 'uncommon', 'cleric', 'evocation' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 391',
    cast: 'somatic, verbal',
    action: '2',
    area: '15-foot emanation',
    duration: '1 minute',
    text: 'Swirling sands of divine devastation surround you, weakening the defenses of all they touch. Reduce the resistances of creatures in the area (including yourself) by 2.  \r\n**Heightened (+2)**  Swirling sands of divine devastation surround you, weakening the defenses of all they touch. Reduce the resistances of creatures in the area (including yourself) by 2.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=416',
    name: 'Disperse into Air',
    traits: [ 'uncommon', 'air', 'cleric', 'polymorph', 'transmutation' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 391',
    cast: 'somatic',
    action: 'reaction',
    trigger: 'You take damage from an enemy or a hazard.',
    text: 'After taking the triggering damage, you transform into air. Until the end of the current turn, you can\'t be attacked or targeted, you don\'t take up space, you can\'t act, and any auras or emanations you have are suppressed. At the end of the turn, you re-form in any space you can occupy within 15 feet of where you were when you dispersed. Any auras or emanations you had are restored as long as their duration didn\'t run out while you were dispersed.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=417',
    name: 'Downpour',
    traits: [ 'uncommon', 'cleric', 'evocation', 'water' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 391',
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    area: '30-foot burst',
    duration: '1 minute',
    text: 'You call forth a torrential downpour, which extinguishes nonmagical flames. Creatures in the area are concealed and gain fire resistance 10. Creatures outside the area are concealed to those inside the area. Creatures with weakness to water that end their turns in the area take damage equal to their weakness.  \r\n**Heightened (+1)**  The fire resistance increases by 2.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=418',
    name: 'Dreamer\'s Call',
    traits: [ 'uncommon', 'cleric', 'enchantment', 'incapacitation', 'mental' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 391',
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: 'until the end of the target\'s next turn',
    text: 'The target becomes distracted and suggestible, inundated by vivid daydreams.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target\'s attention wavers. It becomes flat-footed and fascinated by its daydreams.  \r\n**Failure**  As success, except that you appear in the dream and give a suggestion. This can be to approach you, run away (as if it had the fleeing condition), Release what it\'s holding, Drop Prone, or stand in place. The creature follows this course of action as its first action after you Cast the Spell.  \r\n**Critical Failure**  As failure, but the target follows the course of action for as many actions as possible for the spell\'s duration, and it does nothing else.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=419',
    name: 'Enduring Might',
    traits: [ 'uncommon', 'abjuration', 'cleric' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 392',
    cast: 'somatic',
    action: 'reaction',
    trigger: 'An attack or effect would deal damage to you.',
    text: 'Your own might mingles with divine power to protect you. You gain resistance equal to 8 plus your Strength modifier against all damage from the triggering attack or effect.  \r\n**Heightened (+1)**  The resistance increases by 2.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=420',
    name: 'Eradicate Undeath',
    traits: [ 'uncommon', 'cleric', 'necromancy', 'positive' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 392',
    cast: 'somatic, verbal',
    action: '2',
    area: '30-foot cone',
    'saving throw': 'basic Fortitude',
    text: 'A massive deluge of life energy causes the undead to fall apart. Each undead creature in the area takes 4d12 positive damage.  \r\n**Heightened (+1)**  The damage increases by 1d12.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=423',
    name: 'Flame Barrier',
    traits: [ 'uncommon', 'abjuration', 'cleric' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 392',
    cast: 'verbal',
    action: 'reaction',
    trigger: 'An effect would deal fire damage to either you or an ally within range.',
    range: '30 feet',
    targets: 'the creature that would take fire damage',
    text: 'You swiftly deflect incoming flames. The target gains fire resistance 15 against the triggering effect.  \r\n**Heightened (+2)**  The resistance increases by 5.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=425',
    name: 'Glimpse the Truth',
    traits: [ 'uncommon', 'cleric', 'divination', 'revelation' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 393',
    cast: 'somatic',
    action: '1',
    area: '30-foot emanation',
    duration: '1 round',
    text: 'Divine insight lets you see things as they truly are. The GM attempts a secret counteract check against each illusion that is at least partially within the area. Instead of counteracting the illusion, you see through it (for instance, if the check succeeds against an illusory disguise spell, you see the creature\'s true form but illusory disguise doesn\'t end). The area moves with you for the duration of the spell, and the GM attempts a secret counteract check each time a new illusion is within the area.  \r\n**Heightened (7th)**  You can allow everyone to see through illusions you succeed against, not just yourself.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=428',
    name: 'Know the Enemy',
    traits: [ 'uncommon', 'cleric', 'divination', 'fortune' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 393',
    cast: 'somatic',
    action: 'reaction',
    trigger: 'You roll initiative and can see a creature, you succeed at an attack roll against a creature, or a creature fails a saving throw against one of your spells.',
    text: 'Use a Recall Knowledge action, rolling the appropriate skill check to identify the triggering creature\'s abilities. You can roll your check twice and use the better result.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=429',
    name: 'Localized Quake',
    traits: [ 'uncommon', 'cleric', 'earth', 'transmutation' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 393',
    cast: 'somatic, verbal',
    action: '2',
    area: '15-foot emanation or 15-foot cone',
    'saving throw': 'Reflex',
    text: 'You shake the earth, toppling nearby creatures. Choose whether the spell\'s area is a 15-foot emanation or a 15-foot cone when you cast it. Each creature in the area standing on solid ground may take 4d6 bludgeoning damage and must attempt a Reflex saving throw.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes half damage.  \r\n**Failure**  The creature takes full damage and falls prone.  \r\n**Critical Failure**  The creature takes full damage and falls prone.  \r\n**Heightened (+1)**  Increase the damage by 2d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=430',
    name: 'Lucky Break',
    traits: [ 'uncommon', 'cleric', 'divination', 'fortune' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 393',
    cast: 'verbal',
    action: 'reaction',
    trigger: 'You fail (but don\'t critically fail) a saving throw.',
    text: 'Reroll the saving throw and use the better result. You then become temporarily immune for 10 minutes.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=432',
    name: 'Malignant Sustenance',
    traits: [ 'uncommon', 'cleric', 'necromancy', 'negative' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 394',
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 willing undead creature',
    duration: '1 minute',
    text: 'You embed a seed of negative energy in an undead creature, restoring its unnatural vigor. The target gains fast healing 7. This healing comes from negative energy, so it heals the undead rather than damaging it.  \r\n**Heightened (+1)**  The fast healing increases by 2.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=434',
    name: 'Mystic Beacon',
    traits: [ 'uncommon', 'cleric', 'evocation' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 394',
    cast: 'somatic',
    action: '1',
    range: '30 feet',
    targets: '1 willing creature',
    duration: 'until the start of your next turn',
    text: 'The next damaging or healing spell the target casts before the start of your next turn deals damage or restores Hit Points as if the spell were heightened 1 level higher than its actual level. The spell otherwise functions at its actual level. Once the target casts the spell, mystic beacon ends.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=435',
    name: 'Nature\'s Bounty',
    traits: [ 'uncommon', 'cleric', 'conjuration', 'plant', 'positive' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 394',
    cast: 'somatic',
    action: '1',
    requirements: 'You have a free hand.',
    text: 'A palm-sized raw fruit or vegetable appears in your open hand. You choose the specific type of food. A creature can consume the food with an Interact action to regain 3d10+12 Hit Points and be nourished as if it had eaten a meal. If uneaten, the food rots and crumbles to dust after 1 minute.  \r\n**Heightened (+1)**  The Hit Points restored increase by 6.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=437',
    name: 'Perfected Form',
    traits: [ 'uncommon', 'abjuration', 'cleric', 'fortune' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 394',
    cast: 'somatic',
    action: 'reaction',
    trigger: 'You fail a saving throw against a morph, petrification, or polymorph effect.',
    text: 'Reroll the saving throw and use the better result.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=439',
    name: 'Positive Luminance',
    traits: [ 'uncommon', 'cleric', 'light', 'necromancy', 'positive' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 394',
    cast: 'somatic',
    action: '1',
    duration: '1 minute',
    text: 'Drawing life force into yourself, you become a beacon of positive energy. You glow with bright light in a 10-foot emanation, and you gain an internal pool of light called a luminance reservoir, which begins with a value of 4. At the start of each of your turns, you can use a free action to increase the luminance reservoir by 4. If you do, the radius of your light increases by 10 feet. If an undead creature damages you with an attack or spell while it\'s within the area of your light, that creature takes positive damage equal to half your luminance reservoir value. It takes this damage only the first time it damages you in a round. You can Dismiss this Spell. When you do, you can target a creature within your light and direct the positive energy into it. The target must be a willing living creature or an undead creature. This heals a living target or damages an undead target by an amount equal to your luminance reservoir\'s value. When you cast positive luminance, any other positive luminance spell you already had in effect ends.  \r\n**Heightened (+1)**  Both the initial value of your luminance reservoir and the amount you gain each turn increase by 1.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=440',
    name: 'Precious Metals',
    traits: [ 'uncommon', 'cleric', 'transmutation' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 395',
    cast: 'material',
    action: '1',
    range: 'touch',
    targets: '1 metal weapon, up to 10 pieces of metal or metal-tipped ammunition, 1 suit of metal armor, or up to 1 bulk of metal material (such as coins)',
    duration: '1 minute',
    text: 'Your deity blesses base metals to transform them into precious materials. The target item transforms from its normal metal into cold iron, copper, gold, iron, silver, or steel (the details for these metals are found on pages 577-579). An item transmuted in this way deals damage according to its new material. For example, a steel sword transmuted to cold iron would deal additional damage to a creature with a weakness to cold iron. This change is clearly magical and temporary, so the item\'s monetary value doesn\'t change; you couldn\'t transmute copper coins to gold and use those coins to purchase something or as a cost for a spell.  \r\n**Heightened (8th)**  Add adamantine (page 578) and mithral (page 579) to the list of metals you can transform the item into.',
    components: [ 'material' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=442',
    name: 'Protector\'s Sphere',
    traits: [ 'uncommon', 'abjuration', 'cleric' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 395',
    cast: 'somatic, verbal',
    action: '2',
    area: '15-foot emanation',
    duration: 'sustained up to 1 minute',
    text: 'A protective aura emanates out from you, safeguarding you and your allies. You gain resistance 3 to all damage. Your allies also gain this resistance while they are within the area.  \r\n**Heightened (+1)**  The resistance increases by 1.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=443',
    name: 'Pulse of the City',
    traits: [ 'uncommon', 'cleric', 'divination', 'scrying' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 395',
    cast: 'material, somatic, verbal',
    action: '3',
    range: '25 miles',
    text: 'You tap into the zeitgeist of the nearest settlement in range (if any). You learn the name of the settlement, and you can utter a special word to learn a brief summary of one significant event happening in the settlement. Choose one of the following words, which indicates the type of people involved and type of event you learn about. Wardens city guards, barristers, and judges (criminal reports, busts, changes in routines, legal trials) Titles nobles and politicians (high society weddings, elite soirees, political rallies) Masses common folk and merchants (gathering mobs, major sales) When uttering your word, you can exclude events you already know about, whether you know about them from this spell or from other experiences. If you cast pulse of the city again within 24 hours, you can say "echo" instead of another word to get an update on the event you learned about the last time you Cast the Spell. Pulse of the city reveals only publicly available or observable information. You never learn clandestine movements or other details people are specifically trying to hide. The spell is also notoriously bad at overcoming magic meant to avoid detection; it automatically fails to reveal information about events involving creatures, places, or objects affected by spells that could prevent or counteract pulse of the city (such as nondetection).  \r\n**Heightened (5th)**  The range increases to 100 miles.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=446',
    name: 'Rebuke Death',
    traits: [ 'uncommon', 'cleric', 'healing', 'necromancy', 'positive' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 396',
    cast: 'to  somatic',
    action: [ '1', '3' ],
    area: '20-foot emanation',
    targets: '1 living creature per action spent to cast this spell',
    text: 'You snatch creatures from the jaws of death. You can spend 1 to 3 actions Casting this Spell, and you can target a number of creatures equal to the actions spent. Each target regains 3d6 Hit Points. If the target had the dying condition, coming back from dying due to this healing doesn\'t increase its wounded condition.  \r\n**Heightened (+1)**  Increase the healing by 1d6.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=447',
    name: 'Retributive Pain',
    traits: [ 'uncommon', 'abjuration', 'cleric', 'mental', 'nonlethal' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 396',
    cast: 'somatic',
    action: 'reaction',
    trigger: 'A creature in range damages you.',
    range: '30 feet',
    targets: 'the triggering creature',
    'saving throw': 'basic Fortitude',
    text: 'You vengefully reflect your pain upon your tormentor. The target takes mental damage equal to half the amount it dealt to you when it triggered the spell.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=448',
    name: 'Safeguard Secret',
    traits: [ 'uncommon', 'abjuration', 'cleric', 'mental' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 396',
    cast: '1 minute (somatic, verbal)',
    range: '10 feet',
    targets: 'you and any number of willing allies',
    duration: '1 hour',
    text: 'You ensure a secret remains safe from prying spies. Choose one piece of information that at least some of the targets know; you can target a creature only if it remains within range for the full minute during which you Cast the Spell. The spell grants those who know the piece of knowledge you have chosen a +4 status bonus to skill checks (typically Deception checks) to conceal this knowledge and to saving throws against spells that specifically attempt to obtain this knowledge from them and effects that would force them to reveal it. If you Cast this Spell again, any previous safeguard secret you had cast ends.',
    components: [ '1minute(somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=451',
    name: 'Shared Nightmare',
    traits: [ 'uncommon', 'cleric', 'emotion', 'humanoid', 'incapacitation', 'mental' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 396',
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: 'varies',
    text: 'Merging minds with the target, you swap disorienting visions from one another\'s nightmares. One of you will become confused, but which it\'ll be depends on the target\'s Will save.  \r\n**Critical Success**  You are confused for 1 round.  \r\n**Success**  At the start of your next turn, you spend your first action with the confused condition, then act normally.  \r\n**Failure**  As success, but the target is affected instead of you, spending its first action each turn confused. The duration is 1 minute.  \r\n**Critical Failure**  The target is confused for 1 minute.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=456',
    name: 'Take its Course',
    traits: [ 'uncommon', 'cleric', 'necromancy' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 397',
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    text: 'When someone has overindulged, you can hasten them past the worst of their affliction or intensify their misery. This spell attempts to progress a disease affliction, a poison affliction, or persistent poison damage affecting the target. If the target is affected by more than one of these, you can choose from among those you are aware of; otherwise the GM chooses randomly. An unwilling target can attempt a Will save to negate take its course. The effect of this spell depends on whether you\'re attempting to end an affliction or persistent poison damage, and whether you are attempting to help or hinder the target\'s recovery. Affliction The target immediately attempts its next saving throw against the affliction. You can grant the creature your choice of a +2 status bonus or a -2 status penalty to its saving throw against the affliction. Persistent Poison You can cause the target take the persistent poison damage immediately when you Cast this Spell (in addition to taking it at the end of its next turn). Whether or not you do so, the target attempts an additional flat check against the persistent poison damage. You can set the DC of that flat check to 5 or 20 instead of the normal DC.  \r\n**Heightened (7th)**  You can attempt to progress any number of the target\'s eligible afflictions and persistent poison damage.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=457',
    name: 'Tempt Fate',
    traits: [ 'uncommon', 'cleric', 'divination', 'fortune' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 397',
    cast: 'somatic',
    action: 'reaction',
    trigger: 'You or an ally within range attempts a saving throw',
    range: '120 feet',
    targets: 'the triggering creature',
    text: 'You twist the forces of fate to make a moment dire or uneventful, with no in-between. The target gains a +1 status bonus to the triggering saving throw. If the saving throw\'s result is a success, it becomes a critical success. If it\'s a failure, it becomes a critical failure, and the critical failure can\'t be reduced by abilities that usually reduce critical failure, such as improved evasion. If the triggering ability did not have both a critical success and critical failure condition, tempt fate fails, but you don\'t expend the Focus Point for Casting this Spell.  \r\n**Heightened (8th)**  The bonus on the saving throw is +2.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=460',
    name: 'Touch of the Moon',
    traits: [ 'uncommon', 'cleric', 'enchantment', 'light' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 398',
    cast: 'somatic',
    action: '1',
    range: 'touch',
    targets: '1 creature',
    duration: '1 minute',
    text: 'When you touch the target, a symbol of the moon appears on its forehead, glowing with soft moonlight. The target glows with dim light in a 20-foot radius. It also gets a benefit based on a phase of the moon, starting with the new moon and changing to the next phase at the end of each of its turns. New Moon The target receives no benefit. Waxing Moon The target gains a +1 status bonus to attack rolls and a +4 status bonus to damage rolls. Full Moon The target gains a +1 status bonus to attack rolls, AC, and saving throws and a +4 status bonus to damage rolls. Waning Moon The target gains a +1 status bonus to AC and saving throws. After this phase, return to the new moon.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=462',
    name: 'Traveler\'s Transit',
    traits: [ 'uncommon', 'cleric', 'evocation' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 398',
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute',
    text: 'You add power to your muscles, allowing you to swim or climb walls with ease. When you cast this spell, you gain either a climb Speed or a swim Speed. The Speed is equal to your land Speed.  \r\n**Heightened (5th)**  You can choose to gain a fly Speed.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=463',
    name: 'Trickster\'s Twin',
    traits: [ 'uncommon', 'cleric', 'illusion', 'visual' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 398',
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: '1 minute',
    text: 'You rarely settle for being in just one place. Choose a location within 100 feet of the target that the target can see. You create an illusion of yourself there that only it can see and that mimics all your actions. The target must attempt a Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target believes you\'re in the designated location and can\'t see you in your actual location. The target automatically disbelieves the illusion when you use an action that doesn\'t make sense in the illusion\'s position, or if the target attacks, touches, Seeks, or otherwise engages with the illusion. If you use a hostile action against the target, the spell ends.  \r\n**Failure**  As success, but the target must succeed at a Will save to disbelieve the illusion when one of the listed events occurs.  \r\n**Critical Failure**  As success, but the target must critically succeed at a Will save to disbelieve when one of the listed events occurs.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=465',
    name: 'Unity',
    traits: [ 'uncommon', 'abjuration', 'cleric', 'fortune' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 398',
    cast: 'verbal',
    action: 'reaction',
    trigger: 'You and 1 or more allies within range are targeted by a spell or ability that allows a saving throw.',
    range: '30 feet',
    targets: 'each ally targeted by the triggering spell',
    text: 'You put up a united defense. Each ally can use your saving throw modifier instead of its own against the triggering spell. Each ally decides individually which modifier to use.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=470',
    name: 'Word of Freedom',
    traits: [ 'uncommon', 'cleric', 'mental' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 399',
    cast: 'verbal',
    action: '1',
    range: '30 feet',
    targets: '1 creature',
    duration: '1 round',
    text: 'You utter a liberating word of power that frees a creature. You suppress one of the following conditions of your choice: confused, frightened, grabbed, or paralyzed. The target isn\'t affected by the chosen condition, and if you suppress the grabbed condition, the target automatically breaks free from any grab affecting it when you Cast the Spell. If you don\'t remove the effect that provided the condition, the condition returns after the spell ends. For example, if a spell was making the target confused for 1 minute, word of freedom would let the target act normally for a round, but the confused condition would return afterward.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=472',
    name: 'Zeal for Battle',
    traits: [ 'uncommon', 'cleric', 'emotion', 'enchantment', 'fortune', 'mental' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 399',
    cast: 'verbal',
    action: 'reaction',
    trigger: 'You and at least 1 ally are about to roll initiative.',
    range: '10 feet',
    targets: 'you and the triggering ally',
    text: 'You stoke the righteous anger within yourself and an ally. You and the target ally each roll a d20 and use the higher result for both your initiative rolls. You each still use your own Perception modifier or other statistic to determine your results.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=473',
    name: 'Goodberry',
    traits: [ 'uncommon', 'druid', 'healing', 'necromancy' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 399',
    cast: '1 hour (somatic, verbal)',
    range: 'touch',
    targets: '1 freshly picked berry',
    duration: '1 day',
    text: 'You imbue the target berry with the bounty of nature, allowing it to heal and sustain far beyond its normal capacity. A living creature that eats the berry with an Interact action gains as much nourishment as from a square meal for a typical human and regains 1d8+5 Hit Points. If it\'s not consumed during the duration, or if you cast goodberry again, the berry withers away.  \r\n**Heightened (+1)**  You can target an additional berry.',
    components: [ '1hour(somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=474',
    manual: true,
    name: 'Heal Animal',
    traits: [ 'uncommon', 'druid', 'healing', 'necromancy', 'positive' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 399',
    cast: 'or  somatic',
    action: [ '1', '2' ],
    range: 'touch or 30 feet (see text)',
    targets: '1 willing living animal creature',
    text: 'You heal an animal\'s wounds, restoring 1d8 Hit Points to the target. The number of actions spent Casting this Spell determines its effect.  \r\n * |1| **somatic** The spell has a range of touch.\r\n * |2| **somatic, verbal** The spell has a range of 30 feet and restores an additional 8 Hit Points to the target.\r\n  \r\n**Heightened (+1)**  The amount of healing increases by 1d8, and the additional healing for the 2-action version increases by 8.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=479',
    name: 'Tempest Surge',
    traits: [ 'uncommon', 'air', 'druid', 'electricity', 'evocation' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 400',
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Reflex',
    text: 'You surround a foe in a swirling storm of violent winds, roiling clouds, and crackling lightning. The storm deals 1d12 electricity damage. The target must attempt a basic Reflex save. On a failure, the target also is clumsy 2 for 1 round and takes 1 persistent electricity damage.  \r\n**Heightened (+1)**  The initial damage increases by 1d12, and the persistent electricity damage on a failure increases by 1.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=480',
    manual: true,
    name: 'Wild Morph',
    traits: [ 'uncommon', 'druid', 'morph', 'transmutation' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 400',
    cast: 'or  somatic, verbal',
    action: [ '1', '2' ],
    duration: '1 minute',
    text: 'You morph your body based on your training, choosing one of the following effects based on your wild order feats.  \r\n * If you have Wild Shape, you can morph your hands into wild claws. Your hands transform into incredibly sharp claws. These claws are an unarmed attack you\'re trained in and deal 1d6 slashing damage each (agile, finesse). You can still hold and use items with your hands while they\'re transformed by this spell, but you cannot hold an item while attacking. If you have Insect Shape, you can instead transform your mouth into wild jaws, an unarmed attack you\'re trained in that deals 1d8 piercing damage.\r\n * If you have Elemental Shape, you can morph your body to be partially composed of elemental matter, granting you resistance 5 to critical hits and precision damage.\r\n * If you have Plant Shape, you can morph your arms into long vines, increasing your reach to 10 feet (or 15 feet with a reach weapon).\r\n * If you have Soaring Shape, you can cast the spell as a two-action activity (|2| somatic, verbal) to grow wings from your back. These wings allow you to fly with a fly Speed of 30 feet.\r\n  \r\n**Heightened (6th)**  You can choose up to two of the effects from the list. Wild claws leave terrible, ragged wounds that also deal 2d6 persistent bleed damage on a hit, and wild jaws are envenomed, also dealing 2d6 persistent poison damage on a hit.  \r\n**Heightened (10th)**  You can choose up to three of the effects from the list. Wild claws deal 4d6 persistent bleed damage on a hit, and wild jaws deal 4d6 persistent poison damage on a hit.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=481',
    name: 'Wild Shape',
    traits: [ 'uncommon', 'druid', 'polymorph', 'transmutation' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 401',
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute (or longer)',
    text: 'You infuse yourself with primal essence and transform yourself into another form. You can polymorph into any form listed in pest form, which lasts 10 minutes. All other wild shape forms last 1 minute. You can add more forms to your wild shape list with druid feats; your feat might grant you some or all of the forms from a given polymorph spell. When you transform into a form granted by a spell, you gain all the effects of the form you chose from a version of the spell heightened to wild shape\'s level. Wild shape allows you to use your own shapeshifting training more easily than most polymorph spells. When you choose to use your own attack modifier while polymorphed instead of the form\'s default attack modifier, you gain a +2 status bonus to your attack rolls.  \r\n**Heightened (2nd)**  You can also wild shape into the forms listed in animal form.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=478',
    name: 'Stormwind Flight',
    traits: [ 'uncommon', 'air', 'druid', 'transmutation' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 400',
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute',
    text: 'Powerful winds carry you smoothly through the air, giving you a fly Speed equal to your Speed. When this spell\'s duration would end, if you\'re still flying, you float to the ground, as feather fall.  \r\n**Heightened (6th)**  When you fly using stormwind flight, you don\'t count flying against the wind as difficult terrain.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=476',
    name: 'Primal Summons',
    traits: [ 'uncommon', 'conjuration', 'druid' ],
    type: 'Focus',
    level: 6,
    source: 'Core Rulebook pg. 400',
    cast: 'verbal',
    action: 'free',
    text: 'You enhance a summoned creature with the power of the elements. If your next action is to cast either summon animal or summon plant or fungus, choose air, earth, fire, or water, and the creature you summon gains the corresponding abilities. Air The creature gains a fly Speed of 60 feet. Earth The creature gains a burrow Speed of 20 feet, reduces its land Speed by 10 feet (minimum 5 feet), and gains resistance 5 to physical damage. Fire The creature\'s attacks deal 1d6 extra fire damage, and it gains resistance 10 to fire and weakness 5 to cold and water. Water The creature gains a swim Speed of 60 feet, can spend 1 action after a melee attack to attempt a Shove (ignoring multiple attack penalty), and gains resistance 5 to fire.\n\n\t\t\t\t\t',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=475',
    name: 'Impaling Briars',
    traits: [ 'uncommon', 'conjuration', 'druid', 'plant' ],
    type: 'Focus',
    level: 8,
    source: 'Core Rulebook pg. 400',
    cast: 'somatic, verbal',
    action: '2',
    area: 'ground within a 100-foot emanation',
    duration: 'sustained up to 1 minute',
    text: 'The ground within the area transforms into a mass of dangerous briars that assault and impede your foes. Each round when you Sustain the Spell, you can select one of the following effects to occur in the area. Ensnare The briars clump around your foes, attempting to hold them in place. A foe within the area (or flying at most 20 feet above the area) must attempt a Reflex save. On a failure, it takes a -10-foot circumstance penalty to all Speeds for 1 round, and on a critical failure, it is immobilized for 1 round unless it Escapes. Impede The briars twist and writhe, making the entire area difficult terrain. Wall A wall of thorns appears in the area, lasting for 1 round. The wall is greater difficult terrain instead of difficult terrain. In addition, once per round you can direct the briars to impale any target in the area (or flying up to 20 feet above the area) that you can see by using a single action, which has the concentrate and manipulate traits. Make a spell attack roll. On a success, the target takes 10d6 piercing damage and takes a -10-foot circumstance penalty to all Speeds for 1 round; on a critical success, the target is immobilized for 1 round unless it Escapes.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=477',
    name: 'Storm Lord',
    traits: [ 'uncommon', 'air', 'druid', 'electricity', 'evocation' ],
    type: 'Focus',
    level: 9,
    source: 'Core Rulebook pg. 400',
    cast: 'somatic, verbal',
    action: '2',
    requirements: 'You are outdoors and aboveground.',
    area: '100-foot emanation',
    duration: 'sustained up to 1 minute',
    text: 'The sky above you darkens in a matter of moments, swirling with ominous clouds punctuated by flashes of lighting. Each round when you Sustain the Spell, you can select one of the following effects to occur in the area.  No additional effect. effects of obscuring mist. Fog Heavy fog rolls in, concealing the area with the Rain Torrential rain falls from the sky, dousing ordinary flames. Creatures in the area take a -2 circumstance penalty to Acrobatics and Perception checks. Wind Powerful winds buffet the area in all directions. Ranged attacks take a -4 circumstance penalty, and all flying is against the wind and counts as moving through difficult terrain. In addition, once per round you can use a single action, which has the concentrate and manipulate traits, to call down a bolt of lightning, striking any target in range that you can see. You deal 10d6 electricity damage to the target; it must attempt a basic Reflex save. On a failure, it is also deafened for 1 round.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=485',
    name: 'Ki Rush',
    traits: [ 'uncommon', 'monk', 'transmutation' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 401',
    cast: 'verbal',
    action: '1',
    text: 'Accelerated by your ki, you move with such speed you become a blur. Move two times: two Strides, two Steps, or one Stride and one Step (in either order). You gain the concealed condition during this movement and until the start of your next turn.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=486',
    name: 'Ki Strike',
    traits: [ 'uncommon', 'monk', 'transmutation' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 401',
    cast: 'verbal',
    action: '1',
    text: 'You focus your ki into magical attacks. Make an unarmed Strike or Flurry of Blows (this doesn\'t change the limit on using only one flourish per turn). You gain a +1 status bonus to your attack rolls with the Strikes, and the Strikes deal 1d6 extra damage. This damage can be any of the following types of your choice, chosen each time you Strike: force, lawful (only if you\'re lawful), negative, or positive.  \r\n**Heightened (+4)**  The extra damage increases by 1d6.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=488',
    name: 'Wholeness of Body',
    traits: [ 'uncommon', 'healing', 'monk', 'necromancy', 'positive' ],
    type: 'Focus',
    level: 2,
    source: 'Core Rulebook pg. 402',
    cast: 'verbal',
    action: '1',
    text: 'You heal yourself in one of the following ways, chosen by you when you cast the spell. You regain 8 Hit Points. You attempt to cure one poison or disease afflicting you; attempt to counteract the affliction.  \r\n**Heightened (+1)**  If you choose to regain Hit Points, the Hit Points regained increase by 8.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=484',
    name: 'Ki Blast',
    traits: [ 'uncommon', 'evocation', 'force', 'monk' ],
    type: 'Focus',
    level: 3,
    source: 'Core Rulebook pg. 401',
    cast: 'to  somatic, verbal',
    action: [ '1', '3' ],
    area: '15-foot cone or more',
    'saving throw': 'Fortitude',
    text: 'You unleash your ki as a powerful blast of force that deals 2d6 force damage. If you use 2 actions to cast ki blast, increase the size of the cone to 30 feet and the damage to 3d6. If you use 3 actions to cast ki blast, increase the size of the cone to 60 feet and the damage to 4d6. Each creature in the area must attempt a Fortitude saving throw.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes half damage.  \r\n**Failure**  The creature takes full damage and is pushed 5 feet.  \r\n**Critical Failure**  The creature takes double damage and is pushed 10 feet.  \r\n**Heightened (+1)**  The damage increases by 1d6, or by 2d6 if you use 2 or 3 actions.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=482',
    name: 'Abundant Step',
    traits: [ 'uncommon', 'conjuration', 'monk', 'teleportation' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 401',
    cast: 'somatic',
    action: '1',
    range: '15 feet or more',
    text: 'You move so fast you blur across planar boundaries. You teleport up to a distance equal to your Speed within your line of sight.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=489',
    name: 'Wild Winds Stance',
    traits: [ 'uncommon', 'air', 'evocation', 'monk', 'stance' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 402',
    cast: 'somatic',
    action: '1',
    duration: 'until you leave the stance',
    text: 'You take on the stance of the flowing winds, sending out waves of energy at a distance. You can make wind crash unarmed Strikes as ranged Strikes against targets within 30 feet. These deal 1d6 bludgeoning damage, use the brawling group, and have the agile, nonlethal, propulsive, and unarmed traits. Wind crash Strikes ignore concealment and all cover. While in wild winds stance, you gain a +2 circumstance bonus to AC against ranged attacks.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=490',
    name: 'Wind Jump',
    traits: [ 'uncommon', 'air', 'monk', 'transmutation' ],
    type: 'Focus',
    level: 5,
    source: 'Core Rulebook pg. 402',
    cast: 'verbal',
    action: '1',
    duration: '1 minute',
    text: 'You gain a fly Speed equal to your Speed. You must end your turn on solid ground, or you fall.  \r\n**Heightened (6th)**  At the end of your turn, you can attempt a DC 30 Acrobatics check to find purchase in midair. If you succeed, you don\'t fall.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=487',
    name: 'Quivering Palm',
    traits: [ 'uncommon', 'monk', 'necromancy' ],
    type: 'Focus',
    level: 8,
    source: 'Core Rulebook pg. 401',
    cast: 'somatic, verbal',
    action: '2',
    'saving throw': 'Fortitude',
    duration: '1 month',
    text: 'Make a melee unarmed Strike. If you hit and the target is alive, anytime during the duration, you can spend a single action, which has the auditory and concentrate traits, to speak a word of death that could instantly slay it. The target must attempt a Fortitude save.If you cast quivering palm again, the effects of any quivering palm you had previously cast end.  \r\n**Critical Success**  The target survives, the spell ends, and the target is then temporarily immune for 24 hours.  \r\n**Success**  The target is stunned 1 and takes 40 damage, the spell ends, and the target is then temporarily immune for 24 hours.  \r\n**Failure**  The target is stunned 3 and takes 80 damage. The spell\'s duration continues, but the target is then temporarily immune for 24 hours against being killed by quivering palm.  \r\n**Critical Failure**  The target dies.  \r\n**Heightened (+1)**  The damage increases by 10 on a failure, or 5 on a success.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=483',
    name: 'Empty Body',
    traits: [ 'uncommon', 'conjuration', 'monk', 'teleportation' ],
    type: 'Focus',
    level: 9,
    source: 'Core Rulebook pg. 401',
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute',
    text: 'You turn ethereal, with the effects of ethereal jaunt, but you don\'t need to concentrate.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=493',
    name: 'Ancestral Memories',
    traits: [ 'uncommon', 'divination', 'sorcerer' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 402',
    cast: 'verbal',
    action: '1',
    duration: '1 minute',
    text: 'The memories of long-dead spellcasters grant you knowledge in a specific skill. Choose any non-Lore skill, or a Lore skill related to the ancient empire from which your bloodline sprang. You temporarily become trained in that skill and might gain other memories associated with an ancestor who was trained in that skill. If you attempt a task or activity that lasts beyond this spell\'s duration, use the lower proficiency modifier.  \r\n**Heightened (6th)**  You temporarily become an expert in the skill you choose.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=494',
    name: 'Angelic Halo',
    traits: [ 'uncommon', 'abjuration', 'good', 'sorcerer' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 402',
    cast: 'verbal',
    action: '1',
    area: '15-foot emanation',
    duration: '1 minute',
    text: 'You gain an angelic halo with an aura that increases allies\' healing from the heal spell. Heal spells gain a +2 status bonus to Hit Points healed to your allies in the area.  \r\n**Heightened (+1)**  The status bonus increases by 2.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=498',
    name: 'Diabolic Edict',
    traits: [ 'uncommon', 'enchantment', 'sorcerer' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 403',
    cast: 'verbal',
    action: '1',
    range: '30 feet',
    targets: '1 willing living creature',
    duration: '1 round',
    text: 'You issue a diabolic edict, demanding the target perform a particular task and offering rewards for its fulfillment. It gains a +1 status bonus to attack rolls and skill checks related to performing the task. If it refuses to perform the task you proclaimed, it instead takes a -1 status penalty to all its attack rolls and skill checks.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=500',
    manual: true,
    name: 'Dragon Claws',
    traits: [ 'uncommon', 'morph', 'sorcerer', 'transmutation' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 403',
    cast: 'verbal',
    action: '1',
    duration: '1 minute',
    text: 'Vicious claws grow from your fingers. They are finesse unarmed attacks that deal 1d4 slashing damage and 1d6 extra damage of a type determined by the dragon in your bloodline.  \r\n\r\n| Dragon Type | Area and Damage Type | Saving Throw |\r\n| :---: | :---: | :---: |\r\n| Black and copper | 60-foot line of acid | Reflex |\r\n| Blue and bronze | 60-foot line of electricity | Reflex |\r\n| Brass | 60-foot line of fire | Reflex |\r\n| Green | 30-foot cone of poison | Fortitude |\r\n| Gold or red | 30-foot cone of fire | Reflex |\r\n| Silver or white | 30-foot cone of cold | Reflex |\r\n\r\nYour scales from blood magic glow with faint energy, giving you resistance 5 to the same damage type.  \r\n**Heightened (5th)**  The extra damage increases to 2d6, and the resistance increases to 10.  \r\n**Heightened (9th)**  The extra damage increases to 3d6, and the resistance increases to 15.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=505',
    name: 'Elemental Toss',
    traits: [ 'uncommon', 'attack', 'evocation', 'sorcerer' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 404',
    cast: 'somatic',
    action: '1',
    range: '30 feet',
    targets: '1 creature',
    text: 'With a flick of your wrist, you fling a chunk of your elemental matter at your foe. Make a spell attack roll, dealing 1d8 bludgeoning damage (or fire damage if your element is fire) on a success, and double damage on a critical success. This spell has your element\'s trait.  \r\n**Heightened (+1)**  The damage increases by 1d8.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=508',
    name: 'Faerie Dust',
    traits: [ 'uncommon', 'enchantment', 'mental', 'sorcerer' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 404',
    cast: 'or more somatic, verbal',
    action: [ '1', '3' ],
    range: '30 feet',
    area: '5-foot burst or more',
    'saving throw': 'Will',
    duration: '1 round',
    text: 'You sprinkle magical dust in the spell\'s area, making those within easier to trick. Each creature in the area must attempt a Will save. For each additional action you use Casting the Spell, the burst\'s radius increases by 5 feet.  \r\n**Success**  The creature is unaffected.  \r\n**Failure**  The creature can\'t use reactions and takes a -2 status penalty to Perception checks and Will saves.  \r\n**Critical Failure**  As failure, and the creature also takes a -1 status penalty to Perception checks and Will saves for 1 minute.  \r\n**Heightened (+3)**  The initial radius increases by 5 feet.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=511',
    name: 'Glutton\'s Jaw',
    traits: [ 'uncommon', 'morph', 'necromancy', 'sorcerer' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 404',
    cast: 'somatic, verbal',
    action: '1',
    duration: '1 minute',
    text: 'Your mouth transforms into a shadowy maw bristling with pointed teeth. These jaws are an unarmed attack with the forceful trait dealing 1d8 piercing damage. If you hit with your jaws and deal damage, you gain 1d6 temporary Hit Points.  \r\n**Heightened (+2)**  The temporary Hit Points increase by 1d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=515',
    name: 'Jealous Hex',
    traits: [ 'uncommon', 'curse', 'necromancy', 'sorcerer' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 405',
    cast: 'verbal',
    action: '1',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: 'up to 1 minute',
    text: 'You draw forth a hag\'s innate jealousy to deny a target its greatest attribute. The target gains an adverse condition depending on its highest ability modifier: Strength (enfeebled); Dexterity (clumsy); Constitution (drained); or Intelligence, Wisdom, or Charisma (stupefied). On a tie, the creature decides which of the conditions associated with the tied ability modifiers to take. The target must attempt a Will save.At the start of each of your turns, the target can attempt another Will save, ending the effect on a success.  \r\n**Success**  The target is unaffected.  \r\n**Failure**  The condition\'s value is 1.  \r\n**Critical Failure**  The condition\'s value is 2.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=517',
    name: 'Tentacular Limbs',
    traits: [ 'uncommon', 'morph', 'sorcerer', 'transmutation' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 405',
    cast: 'somatic',
    action: '1',
    duration: '1 minute',
    text: 'Your arms turn into long, pliable tentacles, increasing your reach when you\'re delivering touch range spells and making unarmed Strikes with your arms (such as fist and claw Strikes) to 10 feet. This doesn\'t change the reach of your melee weapon attacks. During the duration, whenever you Cast a Spell, you can add an additional action to that spell\'s casting to temporarily extend your reach to 20 feet to deliver that spell.  \r\n**Heightened (+2)**  When you add an additional action to a spell to temporarily extend your reach, your reach increases by an additional 10 feet to deliver that spell.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=518',
    name: 'Touch of Undeath (Sorcerer)',
    traits: [ 'uncommon', 'necromancy', 'negative', 'sorcerer' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 405',
    cast: 'somatic',
    action: '1',
    range: 'touch',
    targets: '1 living creature touched',
    'saving throw': 'Will',
    duration: '1 minute',
    text: 'You instill within a creature the touch of the grave. For the duration, harm spells treat the creature as undead and heal spells treat the creature as living. In addition, harm spells gain a +2 status bonus to the Hit Points restored to the target. If the target wishes to avoid the spell, it can attempt a Will save to reduce the effects.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target heals half as much from heal and takes half as much damage from harm for 1 round.  \r\n**Failure**  Effects as described in the text.  \r\n**Heightened (+1)**  The status bonus to the Hit Points restored increases by 2.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=491',
    name: 'Aberrant Whispers',
    traits: [ 'uncommon', 'auditory', 'enchantment', 'mental', 'sorcerer' ],
    type: 'Focus',
    level: 3,
    source: 'Core Rulebook pg. 402',
    cast: 'to  verbal',
    action: [ '1', '3' ],
    area: '5-foot emanation or more',
    targets: 'each foe in the area',
    'saving throw': 'Will',
    duration: '1 round',
    text: 'You utter phrases in an unknown tongue, assaulting the minds of those nearby. Each target must attempt a Will save. Regardless of the result of its save, each target is then temporarily immune for 1 minute. You can increase the number of actions it takes to Cast the Spell (to a maximum of 3 actions total). For each additional action, increase the emanation\'s radius by 5 feet, to a maximum of 10 extra feet for 3 actions.  \r\n**Success**  The target is unaffected.  \r\n**Failure**  The target is stupefied 2.  \r\n**Critical Failure**  The target is confused.  \r\n**Heightened (+3)**  The initial radius increases by 5 feet.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=495',
    name: 'Angelic Wings',
    traits: [ 'uncommon', 'evocation', 'light', 'sorcerer' ],
    type: 'Focus',
    level: 3,
    source: 'Core Rulebook pg. 403',
    cast: 'somatic, verbal',
    action: '2',
    duration: '3 rounds',
    text: 'Wings of pure light spread out from your back, granting you a fly Speed equal to your Speed. Your wings cast bright light in a 30-foot radius. When this spell\'s duration would end, if you\'re still flying, you float to the ground, as feather fall.  \r\n**Heightened (5th)**  The duration increases to 1 minute.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=499',
    name: 'Dragon Breath',
    traits: [ 'uncommon', 'evocation', 'sorcerer' ],
    type: 'Focus',
    level: 3,
    source: 'Core Rulebook pg. 403',
    cast: 'somatic, verbal',
    action: '2',
    area: '30-foot cone or 60-foot line originating from you',
    'saving throw': 'basic Reflex or Fortitude',
    text: 'You spew energy from your mouth, dealing 5d6 damage. The area, damage type, and save depend on the dragon type in your bloodline.Dragon Breath Dragon TypeArea and Damage TypeSaving Throw Black and copper60-foot line of acidReflex Blue and bronze60-foot line of electricityReflex Brass60-foot line of fireReflex Green30-foot cone of poisonFortitude Gold or red30-foot cone of fireReflex Silver or white30-foot cone of coldReflex  \r\n**Heightened (+1)**  The damage increases by 2d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=502',
    name: 'Drain Life',
    traits: [ 'uncommon', 'necromancy', 'negative', 'sorcerer' ],
    type: 'Focus',
    level: 3,
    source: 'Core Rulebook pg. 403',
    cast: 'somatic',
    action: '1',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'basic Fortitude',
    text: 'You close your hand and pull life energy from another creature into yourself. This deals 3d4 negative damage; the target must attempt a basic Fortitude save. You gain temporary Hit Points equal to the damage the target takes, after resolving its save and applying your blood magic if applicable. If the target\'s Hit Points were lower than the damage you dealt, you gain temporary Hit Points equal to their remaining Hit Points instead. The temporary Hit Points last for 1 minute.  \r\n**Heightened (+1)**  The damage increases by 1d4.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=504',
    name: 'Elemental Motion',
    traits: [ 'uncommon', 'evocation', 'sorcerer' ],
    type: 'Focus',
    level: 3,
    source: 'Core Rulebook pg. 404',
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute',
    text: 'You call upon your element to propel you, improving your Speed depending on your element. This spell has your element\'s trait. Air You gain a fly Speed equal to your Speed. Earth You gain a burrow Speed of 10 feet. Fire You gain a fly Speed equal to your Speed. Water You gain a swim Speed equal to your Speed and can breathe underwater.  \r\n**Heightened (6th)**  You also gain a +10-foot status bonus to your Speeds.  \r\n**Heightened (9th)**  The status bonus increases to +20 feet.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=506',
    name: 'Embrace the Pit',
    traits: [ 'uncommon', 'evil', 'morph', 'sorcerer', 'transmutation' ],
    type: 'Focus',
    level: 3,
    source: 'Core Rulebook pg. 404',
    cast: 'verbal',
    action: '1',
    duration: '1 minute',
    text: 'Devil horns grow from your skull, and your skin takes on features of the devil responsible for your diabolic bloodline. You gain resistance 5 to evil, fire, and poison, and resistance 1 to physical damage (except silver). You can take good damage, even if you aren\'t evil, and you gain weakness 5 to good damage.  \r\n**Heightened (+1)**  The resistance to evil, fire, and poison increases by 5, the resistance to physical damage (except silver) by 2, and the weakness to good damage by 5.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=507',
    name: 'Extend Spell',
    traits: [ 'uncommon', 'divination', 'metamagic', 'sorcerer' ],
    type: 'Focus',
    level: 3,
    source: 'Core Rulebook pg. 404',
    cast: 'verbal',
    action: '1',
    text: 'You call upon your blood\'s knowledge of the ancients to extend your magic. If your next action is to Cast a Spell with a duration of 1 minute on a single target, and the spell isn\'t of the highest spell level you can cast, the spell instead lasts 10 minutes. You can have only one active spell at a time extended in this way.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=509',
    name: 'Fey Disappearance',
    traits: [ 'uncommon', 'enchantment', 'sorcerer' ],
    type: 'Focus',
    level: 3,
    source: 'Core Rulebook pg. 404',
    cast: 'somatic',
    action: '1',
    duration: 'until the end of your next turn',
    text: 'You become invisible and ignore natural difficult terrain (such as underbrush). Any hostile action you use ends this invisibility, but you still ignore natural difficult terrain.  \r\n**Heightened (5th)**  If you use a hostile action, the invisibility doesn\'t end.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=514',
    name: 'Horrific Visage',
    traits: [ 'uncommon', 'emotion', 'fear', 'illusion', 'mental', 'sorcerer', 'visual' ],
    type: 'Focus',
    level: 3,
    source: 'Core Rulebook pg. 405',
    cast: 'somatic, verbal',
    action: '2',
    area: '30-foot-radius emanation centered on you',
    'saving throw': 'Will',
    text: 'You briefly transform your features into the horrific visage of a hag, striking fear into your enemies. Foes in the area must attempt a Will save.  \r\n**Success**  The foe is unaffected.  \r\n**Failure**  The foe is frightened 1.  \r\n**Critical Failure**  The foe is frightened 2.  \r\n**Heightened (5th)**  Foes in the area are frightened 1 on a success, frightened 2 on a failure, and frightened 3 and fleeing for 1 round on a critical failure. They are still unaffected on a critical success.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=516',
    name: 'Swamp of Sloth',
    traits: [ 'uncommon', 'conjuration', 'sorcerer' ],
    type: 'Focus',
    level: 3,
    source: 'Core Rulebook pg. 405',
    cast: 'to  somatic, verbal',
    action: [ '1', '3' ],
    range: '120 feet',
    area: '5-foot burst or more',
    'saving throw': 'basic Fortitude',
    duration: '1 minute',
    text: 'Ground in the area turns swampy and fetid. The area is difficult terrain. The sludge at the bottom of the morass animates into diminutive sludge beasts that have a demonic appearance. These don\'t function as normal creatures, but they swarm over creatures in the swamp and exude a noxious stench. The swamp deals 1d6 poison damage; creatures that end their turn in the area must attempt a basic Fortitude save. You can increase the number of actions it takes to Cast the Spell. For each additional action, increase the burst\'s radius by 5 feet.  \r\n**Heightened (+2)**  The damage increases by 1d6, and the initial radius increases by 5 feet.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=492',
    name: 'Abyssal Wrath',
    traits: [ 'uncommon', 'evocation', 'sorcerer' ],
    type: 'Focus',
    level: 5,
    source: 'Core Rulebook pg. 402',
    cast: 'somatic, verbal',
    action: '2',
    area: '60-foot cone',
    'saving throw': 'basic Reflex',
    text: 'You evoke the energy of an Abyssal realm. The damage types of the spell (one energy and one physical) are based on the result of rolling on the table below.  \r\n\r\n| 1d4 | Realm | Manifestation | Damage Type |\r\n| :---: | :---: | :---: | :---: |\r\n | 1 | Skies | Bolts and lightning and flying debris | Bludgeoning and electricity |\r\n| 2 | Depths | Acid and demonic shells | Acid and slashing |\r\n| 3 | Frozen | Frigid air and ice | Bludgeoning and cold |\r\n| 4 | Volcanic | Jagged volcanic rocks and magma | Fire and piercing |\r\n\r\nYou deal 4d6 damage of each of the corresponding damage types to each creature in the cone (8d6 total damage).  \r\n**Heightened (+1)**  The damage for each type increases by 1d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=496',
    name: 'Arcane Countermeasure',
    traits: [ 'uncommon', 'abjuration', 'sorcerer' ],
    type: 'Focus',
    level: 5,
    source: 'Core Rulebook pg. 403',
    cast: 'somatic',
    action: 'reaction',
    trigger: 'A creature within range that you can see Casts a Spell.',
    range: '120 feet',
    targets: 'the spell cast by the triggering creature',
    text: 'You undermine the target spell, making it easier to defend against. You reduce the spell\'s level by 1, and targets of the spell gain a +2 status bonus to any saving throws, skill checks, AC, or DC against it. You can\'t reduce the spell\'s level below its minimum. For example, a 5th-level cone of cold would remain 5th-level, but a 5th-level fireball would become 4th-level. Targets still gain all the other benefits, even if you don\'t reduce the spell\'s level.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=497',
    manual: true,
    name: 'Celestial Brand',
    traits: [ 'uncommon', 'curse', 'necromancy', 'sorcerer' ],
    type: 'Focus',
    level: 5,
    source: 'Core Rulebook pg. 403',
    cast: 'somatic',
    action: '1',
    range: '30 feet',
    targets: '1 evil creature',
    duration: '1 round',
    text: 'A blazing symbol appears on the target, marking it for divine justice. You and your allies receive a +1 status bonus to your attack rolls and skill checks against it. Anytime a good creature damages it, the good creature deals an additional 1d4 good damage. The target is then temporarily immune for 1 minute.  \r\n**Heightened (+2)**  The good damage increases by 1.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=501',
    name: 'Dragon Wings',
    traits: [ 'uncommon', 'morph', 'sorcerer', 'transmutation' ],
    type: 'Focus',
    level: 5,
    source: 'Core Rulebook pg. 403',
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute',
    text: 'Leathery wings sprout from your back, giving you a fly Speed of 60 feet or your Speed, whichever is faster. When this spell\'s duration would end, if you\'re still flying, you float to the ground, as feather fall. You can increase the Focus Point cost by 1 to gain the effects of dragon claws as long as the wings last.  \r\n**Heightened (8th)**  The duration increases to 10 minutes.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=503',
    name: 'Elemental Blast',
    traits: [ 'uncommon', 'evocation', 'sorcerer' ],
    type: 'Focus',
    level: 5,
    source: 'Core Rulebook pg. 404',
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet (burst only)',
    area: '10-foot-radius burst, 30-foot cone, or 60-foot line',
    'saving throw': 'basic Reflex',
    text: 'You gather elemental energy and blast your foes in one of the various listed shapes of your choosing, dealing 8d6 bludgeoning damage (or fire damage if your element is fire). This spell has your element\'s trait.  \r\n**Heightened (+1)**  The damage increases by 2d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=510',
    name: 'Fey Glamour',
    traits: [ 'uncommon', 'illusion', 'sorcerer' ],
    type: 'Focus',
    level: 5,
    source: 'Core Rulebook pg. 404',
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    area: '30-foot burst or',
    targets: 'up to 10 creatures',
    duration: '10 minutes',
    text: 'You call upon fey glamours to cloak an area or the targets in illusion. This has the effect of either illusory scene on the area or veil on the creatures, as if heightened to a level 1 level lower than fey glamour, using fey glamour\'s range and duration.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=512',
    name: 'Grasping Grave',
    traits: [ 'uncommon', 'necromancy', 'sorcerer' ],
    type: 'Focus',
    level: 5,
    source: 'Core Rulebook pg. 404',
    cast: 'somatic, verbal',
    action: '2',
    range: '60 feet',
    area: '20-foot radius on the ground',
    'saving throw': 'Reflex',
    text: 'Hundreds of skeletal arms erupt from the ground in the area, clawing at creatures within and attempting to hold them in place. The skeletal arms deal 6d6 slashing damage. Each creature in the area must attempt a Reflex save.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes half damage.  \r\n**Failure**  The creature takes full damage and a -10-foot circumstance penalty to its Speeds for 1 round.  \r\n**Critical Failure**  The creature takes double damage and is immobilized for 1 round or until it Escapes.  \r\n**Heightened (+1)**  The damage increases by 2d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=513',
    name: 'Hellfire Plume',
    traits: [ 'uncommon', 'evil', 'evocation', 'fire', 'sorcerer' ],
    type: 'Focus',
    level: 5,
    source: 'Core Rulebook pg. 405',
    cast: 'somatic, verbal',
    action: '2',
    range: '60 feet',
    area: '10-foot radius, 60-foot-tall cylinder',
    'saving throw': 'basic Reflex',
    text: 'You call forth a plume of hellfire that erupts from below, dealing 4d6 fire damage and 4d6 evil damage.  \r\n**Heightened (+1)**  The fire damage increases by 1d6, and the evil damage increases by 1d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=519',
    name: 'Unusual Anatomy',
    traits: [ 'uncommon', 'polymorph', 'sorcerer', 'transmutation' ],
    type: 'Focus',
    level: 5,
    source: 'Core Rulebook pg. 405',
    cast: 'somatic',
    action: '1',
    duration: '1 minute',
    text: 'You transform your flesh and organs into a bizarre amalgam of glistening skin, rough scales, tufts of hair, and tumorous protuberances. This has three effects: You gain resistance 10 to precision damage and resistance 10 to extra damage from critical hits. If the resistance is greater than the extra damage, it reduces the extra damage to 0 but doesn\'t reduce the attack\'s normal damage. You gain darkvision. Acid oozes from your skin. Any creature that hits you with an unarmed attack or with a non-reach melee weapon takes 2d6 acid damage.  \r\n**Heightened (+2)**  The resistances increase by 5, and the acid damage increases by 1d6.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=520',
    name: 'You\'re Mine',
    traits: [ 'uncommon', 'emotion', 'enchantment', 'incapacitation', 'mental', 'sorcerer' ],
    type: 'Focus',
    level: 5,
    source: 'Core Rulebook pg. 406',
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: '1 round',
    text: 'You manipulate the target\'s emotions, potentially allowing you to control it for a brief instant. The target must attempt a Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is stunned 1.  \r\n**Failure**  On the target\'s next turn, it\'s stunned 1 and you partially control it, causing it to take a single action of your choice. If it has actions left, it can act normally.  \r\n**Critical Failure**  The target is controlled for 1 round.  \r\n**Heightened (7th)**  On a failure, the target is controlled for 1 round. On a critical failure, the target is controlled for up to 1 minute; it receives a new Will save at the end of each of its turns, and on a success, the spell ends.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=521',
    name: 'Augment Summoning',
    traits: [ 'uncommon', 'conjuration', 'wizard' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 406',
    cast: 'verbal',
    action: '1',
    range: '30 feet',
    targets: '1 creature you summoned',
    text: 'You augment the abilities of a summoned creature. The target gains a +1 status bonus to all checks (this also applies to the creature\'s DCs, including its AC) for the duration of its summoning, up to 1 minute.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=522',
    name: 'Call of the Grave',
    traits: [ 'uncommon', 'arcane', 'attack', 'necromancy', 'wizard' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 406',
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 living creature',
    text: 'You fire a ray of sickening energy. Make a spell attack roll.  \r\n**Critical Success**  The target becomes sickened 2 and slowed 1 as long as it\'s sickened.  \r\n**Success**  The target becomes sickened 1.  \r\n**Failure**  The target is unaffected.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=523',
    name: 'Charming Words',
    traits: [ 'uncommon', 'auditory', 'emotion', 'enchantment', 'incapacitation', 'linguistic', 'wizard' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 406',
    cast: 'verbal',
    action: '1',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: 'until the start of your next turn',
    text: 'You whisper enchanting words to deflect your foe\'s ire. The target must attempt a Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes a -1 circumstance penalty to attack rolls and damage rolls against you.  \r\n**Failure**  The target can\'t use hostile actions against you.  \r\n**Critical Failure**  The target is stunned 1 and can\'t use hostile actions against you.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=525',
    manual: true,
    name: 'Diviner\'s Sight',
    traits: [ 'uncommon', 'concentrate', 'divination', 'fortune', 'wizard' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 406',
    cast: 'verbal',
    action: '1',
    range: '30 feet',
    targets: '1 willing living creature',
    duration: 'until the end of your next turn',
    text: 'You glimpse into the target\'s future. Roll a d20; when the target attempts a non-secret saving throw or skill check, it can use the number you rolled instead of rolling, and the spell ends. Alternatively, you can instead reveal the result of the die roll for one of the target\'s secret checks during the duration, and the spell ends. Casting it again ends any active diviner\'s sight you have cast, as well as any active diviner\'s sight on the target.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=529',
    name: 'Force Bolt',
    traits: [ 'uncommon', 'attack', 'evocation', 'force', 'wizard' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 407',
    cast: 'somatic',
    action: '1',
    range: '30 feet',
    targets: '1 creature or object',
    text: 'You fire an unerring dart of force from your fingertips. It automatically hits and deals 1d4+1 force damage to the target.  \r\n**Heightened (+2)**  The damage increases by 1d4+1.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=530',
    name: 'Hand of the Apprentice',
    traits: [ 'uncommon', 'attack', 'evocation', 'wizard' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 407',
    cast: 'somatic',
    action: '1',
    range: '500 feet',
    targets: '1 creature',
    text: 'You hurl a held melee weapon with which you are trained at the target, making a spell attack roll. On a success, you deal the weapon\'s damage as if you had hit with a melee Strike, but adding your spellcasting ability modifier to damage, rather than your Strength modifier. On a critical success, you deal double damage, and you add the weapon\'s critical specialization effect. Regardless of the outcome, the weapon flies back to you and returns to your hand.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=533',
    name: 'Physical Boost',
    traits: [ 'uncommon', 'transmutation', 'wizard' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 407',
    cast: 'verbal',
    action: '1',
    range: 'touch',
    targets: '1 living creature',
    duration: 'until the end of the target\'s next turn',
    text: 'You temporarily improve the target\'s physique. The target gains a +2 status bonus to the next Acrobatics check, Athletics check, Fortitude save, or Reflex save it attempts.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=534',
    name: 'Protective Ward',
    traits: [ 'uncommon', 'abjuration', 'wizard' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 407',
    cast: 'somatic',
    action: '1',
    area: '5-foot-radius emanation centered on you',
    duration: 'sustained up to 1 minute',
    text: 'You emanate a shimmering aura of protective magic. You and any allies in the area gain a +1 status bonus to AC. Each time you Sustain the Spell, the emanation\'s radius increases by 5 feet, to a maximum of 30 feet.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=537',
    name: 'Warped Terrain',
    traits: [ 'uncommon', 'illusion', 'visual', 'wizard' ],
    type: 'Focus',
    level: 1,
    source: 'Core Rulebook pg. 407',
    cast: 'to  somatic, verbal',
    action: [ '1', '3' ],
    range: '60 feet',
    area: '5-foot burst or more',
    duration: '1 minute',
    text: 'You create illusory hazards that cover all surfaces in the area (typically the ground). Any creature moving through the illusion treats the squares as difficult terrain. A creature can attempt to disbelieve the effect as normal after using a Seek action or otherwise spending actions interacting with the illusion. If it successfully disbelieves, it ignores the effect for the remaining duration. For each additional action you use casting the spell, the burst\'s radius increases by 5 feet, to a maximum of 10 extra feet for 3 actions.  \r\n**Heightened (4th)**  You can make the illusion appear in the air rather than on a surface, causing it to function as difficult terrain for flying creatures.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=524',
    name: 'Dimensional Steps',
    traits: [ 'uncommon', 'conjuration', 'teleportation', 'wizard' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 406',
    cast: 'somatic',
    action: '1',
    range: '20 feet',
    text: 'You teleport to a location up to 20 feet away within your line of sight.  \r\n**Heightened (+1)**  You teleport to a location up to 20 feet away within your line of sight.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=526',
    name: 'Dread Aura',
    traits: [ 'uncommon', 'emotion', 'enchantment', 'fear', 'mental', 'wizard' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 406',
    cast: 'somatic, verbal',
    action: '2',
    area: '30-foot-radius emanation centered on you',
    duration: 'sustained up to 1 minute',
    text: 'You emit an aura of terror. Foes in the area are frightened 1 and unable to reduce the condition.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=527',
    name: 'Elemental Tempest',
    traits: [ 'uncommon', 'evocation', 'metamagic', 'wizard' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 406',
    cast: 'verbal',
    action: '1',
    text: 'Your spellcasting surrounds you in a storm of elemental energy. If the next action you take is to Cast a Spell from your wizard spell slots that\'s an evocation spell dealing acid, cold, electricity, or fire damage, a 10-foot emanation of energy surrounds you as you cast the spell. Foes in the area take 1d6 damage per spell level of the spell you just cast of the same damage type the spell deals (choose one if it deals multiple types). Combine the damage from both elemental tempest and the other spell against foes who take damage from both before applying bonuses, penalties, resistance, weakness, and the like.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=528',
    name: 'Energy Absorption',
    traits: [ 'uncommon', 'abjuration', 'wizard' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 407',
    cast: 'verbal',
    action: 'reaction',
    trigger: 'An effect would deal acid, cold, electricity, or fire damage to you.',
    text: 'You gain resistance 15 to acid, cold, electricity, or fire damage from the triggering effect (one type of your choice). The resistance applies only to the triggering effect\'s initial damage.  \r\n**Heightened (+1)**  The resistance increases by 5.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=531',
    name: 'Invisibility Cloak',
    traits: [ 'uncommon', 'illusion', 'wizard' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 407',
    cast: 'somatic',
    action: '2',
    duration: '1 minute',
    text: 'You become invisible, with the same restrictions as the 2nd-level invisibility spell.  \r\n**Heightened (6th)**  The duration increases to 10 minutes.  \r\n**Heightened (8th)**  The duration increases to 1 hour.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=532',
    name: 'Life Siphon',
    traits: [ 'uncommon', 'healing', 'necromancy', 'wizard' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 407',
    cast: 'verbal',
    action: 'reaction',
    trigger: 'You expend one of your wizard spell slots to cast a wizard spell of the necromancy school.',
    text: 'You use some of the spell\'s magic to heal yourself, regaining 1d8 Hit Points per level of the spell.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=535',
    name: 'Shifting Form',
    traits: [ 'uncommon', 'morph', 'transmutation', 'wizard' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 407',
    cast: 'somatic',
    action: '1',
    duration: '1 minute',
    text: 'You gain one of the following abilities of your choice. You can Dismiss this spell. You gain a 20-foot status bonus to your Speed. You gain a climb or swim Speed equal to half your Speed. You gain darkvision. You gain a pair of claws. These are agile finesse unarmed attacks that deal 1d8 slashing damage. You gain scent 60 feet (imprecise).',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=536',
    name: 'Vigilant Eye',
    traits: [ 'uncommon', 'divination', 'wizard' ],
    type: 'Focus',
    level: 4,
    source: 'Core Rulebook pg. 407',
    cast: 'somatic',
    action: '1',
    range: '500 feet',
    duration: '1 hour',
    text: 'You create an invisible eye sensor, as clairvoyance. When created, this eye must be in your line of sight. When the spell\'s duration ends, you can spend 1 Focus Point as a free action to extend the duration for another hour, though as normal, it ends immediately during your next daily preparations.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=3',
    name: 'Acid Splash',
    traits: [ 'acid', 'attack', 'cantrip', 'evocation' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 316',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature or object',
    text: 'You splash a glob of acid that splatters creatures and objects alike. Make a spell attack. If you hit, you deal 1d6 acid damage plus 1 splash acid damage. On a critical success, the target also takes 1 persistent acid damage.  \r\n**Heightened (3rd)**  The initial damage increases to 1d6 + your spellcasting ability modifier, and the persistent damage increases to 2.  \r\n**Heightened (5th)**  The initial damage increases to 2d6 + your spellcasting ability modifier, the persistent damage increases to 3, and the splash damage increases to 2.  \r\n**Heightened (7th)**  The initial damage increases to 3d6 + your spellcasting ability modifier, the persistent damage increases to 4, and the splash damage increases to 3.  \r\n**Heightened (9th)**  The initial damage increases to 4d6 + your spellcasting ability modifier, the persistent damage increases to 5, and the splash damage increases to 4.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=35',
    name: 'Chill Touch',
    traits: [ 'attack', 'cantrip', 'necromancy', 'negative' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 323',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 living or undead creature',
    'saving throw': 'Fortitude',
    text: 'Siphoning negative energy into yourself, your hand radiates a pale darkness. Your touch weakens the living and disorients undead, possibly even causing them to flee. The effect depends on whether the target is living or undead. Living Creature The spell deals negative damage equal to 1d4 plus your spellcasting modifier. The target attempts a basic Fortitude save, but is also enfeebled 1 for 1 round on a critical failure. Undead Creature The target is flat-footed for 1 round on a failed Fortitude save. On a critical failure, the target is also fleeing for 1 round unless it succeeds at a Will save.  \r\n**Heightened (+1)**  The negative damage to living creatures increases by 1d4.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=58',
    name: 'Dancing Lights',
    traits: [ 'cantrip', 'evocation', 'light' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 327',
    traditions: [ 'arcane', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    duration: 'sustained',
    text: 'You create up to four floating lights, no two of which are more than 10 feet apart. Each sheds light like a torch. When you Sustain the Spell, you can move any number of lights up to 60 feet. Each light must remain within 120 feet of you and within 10 feet of all others, or it winks out.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=61',
    name: 'Daze',
    traits: [ 'cantrip', 'enchantment', 'mental', 'nonlethal' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 327',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '60 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: '1 round',
    text: 'You cloud the target\'s mind and daze it with a mental jolt. The jolt deals mental damage equal to your spellcasting ability modifier; the target must attempt a basic Will save. If the target critically fails the save, it is also stunned 1.  \r\n**Heightened (+2)**  The damage increases by 1d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=66',
    name: 'Detect Magic',
    traits: [ 'cantrip', 'detection', 'divination' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 328',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '30-foot emanation',
    text: 'You send out a pulse that registers the presence of magic. You receive no information beyond the presence or absence of magic. You can choose to ignore magic you\'re fully aware of, such as the magic items and ongoing spells of you and your allies. You detect illusion magic only if that magic\'s effect has a lower level than the level of your detect magic spell. However, items that have an illusion aura but aren\'t deceptive in appearance (such as an invisibility potion) typically are detected normally.  \r\n**Heightened (3rd)**  You learn the school of magic for the highest-level effect within range that the spell detects. If multiple effects are equally strong, the GM determines which you learn.  \r\n**Heightened (4th)**  As 3rd level, but you also pinpoint the source of the highest-level magic. Like for an imprecise sense, you don\'t learn the exact location, but can narrow down the source to within a 5-foot cube (or the nearest if larger than that).',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=97',
    name: 'Electric Arc',
    traits: [ 'cantrip', 'electricity', 'evocation' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 335',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 or 2 creatures',
    'saving throw': 'Reflex',
    text: 'An arc of lightning leaps from one target to another. You deal electricity damage equal to 1d4 plus your spellcasting ability modifier.  \r\n**Heightened (+1)**  The damage increases by 1d4.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=132',
    name: 'Ghost Sound',
    traits: [ 'auditory', 'cantrip', 'illusion' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 340',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    duration: 'sustained',
    text: 'You create an auditory illusion of simple sounds that has a maximum volume equal to four normal humans shouting. The sounds emanate from a square you designate within range. You can\'t create intelligible words or other intricate sounds (such as music).  \r\n**Heightened (3rd)**  The range increases to 60 feet.  \r\n**Heightened (5th)**  The range increases to 120 feet.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=171',
    name: 'Light',
    traits: [ 'cantrip', 'evocation', 'light' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 348',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 unattended, non-magical object of 1 Bulk or less',
    duration: 'until the next time you make your daily preparations',
    text: 'The object glows, casting bright light in a 20-foot radius (and dim light for the next 20 feet) like a torch. If you cast this spell again on a second object, the light spell on the first object ends.  \r\n**Heightened (4th)**  The object sheds bright light in a 60-foot radius (and dim light for the next 60 feet).',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=177',
    name: 'Mage Hand',
    traits: [ 'cantrip', 'evocation' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 349',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 unattended object of light Bulk or less',
    duration: 'sustained',
    text: 'You create a single magical hand, either invisible or ghostlike, that grasps the target object and moves it slowly up to 20 feet. Because you\'re levitating the object, you can move it in any direction. When you Sustain the Spell, you can move the object an additional 20 feet. If the object is in the air when the spell ends, the object falls.  \r\n**Heightened (3rd)**  You can target an unattended object with a Bulk of 1 or less.  \r\n**Heightened (5th)**  The range increases to 60 feet, and you can target an unattended object with a Bulk of 1 or less.  \r\n**Heightened (7th)**  The range increases to 60 feet, and you can target an unattended object with a Bulk of 2 or less.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=190',
    name: 'Message',
    traits: [ 'auditory', 'cantrip', 'illusion', 'linguistic', 'mental' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 351',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    targets: '1 creature',
    duration: 'see below',
    text: 'You mouth words quietly, but instead of coming out of your mouth, they\'re transferred directly to the ears of the target. While others can\'t hear your words any better than if you normally mouthed them, the target can hear your words as if they were standing next to you. The target can give a brief response as a reaction, or as a free action on their next turn if they wish, but they must be able to see you and be within range to do so. If they respond, their response is delivered directly to your ear, just like the original message.  \r\n**Heightened (3rd)**  The spell\'s range increases to 500 feet.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=229',
    name: 'Prestidigitation',
    traits: [ 'cantrip', 'evocation' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 359',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '10 feet',
    targets: '1 object (cook, lift, or tidy only)',
    duration: 'sustained',
    text: 'The simplest magic does your bidding. You can perform simple magical effects for as long as you Sustain the Spell. Each time you Sustain the Spell, you can choose one of four options. Cook Cool, warm, or flavor 1 pound of nonliving material. Lift Slowly lift an unattended object of light Bulk or less 1 foot off the ground. Make Create a temporary object of negligible Bulk, made of congealed magical substance. The object looks crude and artificial and is extremely fragile-it can\'t be used as a tool, weapon, or spell component. Tidy Color, clean, or soil an object of light Bulk or less. You can affect an object of 1 Bulk with 10 rounds of concentration, and a larger object a 1 minute per Bulk. Prestidigitation can\'t deal damage or cause adverse conditions. Any actual change to an object (beyond what is noted above) persists only as long as you Sustain the Spell.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=236',
    name: 'Produce Flame',
    traits: [ 'attack', 'cantrip', 'evocation', 'fire' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 360',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    text: 'A small ball of flame appears in the palm of your hand, and you lash out with it either in melee or at range. Make a spell attack roll against your target\'s AC. This is normally a ranged attack, but you can also make a melee attack against a creature in your unarmed reach. On a success, you deal 1d4 fire damage plus your spellcasting ability modifier. On a critical success, the target takes double damage and 1d4 persistent fire damage.  \r\n**Heightened (+1)**  Increase the damage by 1d4 and the persistent damage on a critical hit by 1d4.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=245',
    name: 'Ray of Frost',
    traits: [ 'attack', 'cantrip', 'cold', 'evocation' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 362',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    targets: '1 creature',
    text: 'You blast an icy ray. Make a spell attack roll. The ray deals cold damage equal to 1d4 + your spellcasting ability modifier.  \r\n**Critical Success**  The target takes double damage and takes a -10-foot status penalty to its Speeds for 1 round.  \r\n**Success**  The target takes normal damage.  \r\n**Heightened (+1)**  The damage increases by 1d4.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=246',
    name: 'Read Aura',
    traits: [ 'cantrip', 'detection', 'divination' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 362',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: '1 minute (somatic, verbal)',
    range: '30 feet',
    targets: '1 object',
    text: 'You focus on the target object, opening your mind to perceive magical auras. When the casting is complete, you know whether that item is magical, and if it is, you learn the school of magic (pages 297-298). If the object is illusory, you detect this only if the effect\'s level is lower than the level of your read aura spell.  \r\n**Heightened (3rd)**  You can target up to 10 objects.  \r\n**Heightened (6th)**  You can target any number of objects.',
    components: [ '1minute(somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=280',
    name: 'Shield',
    traits: [ 'abjuration', 'cantrip', 'force' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 369',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'verbal',
    action: '1',
    duration: 'until the start of your next turn',
    text: 'You raise a magical shield of force. This counts as using the Raise a Shield action, giving you a +1 circumstance bonus to AC until the start of your next turn, but it doesn\'t require a hand to use. While the spell is in effect, you can use the Shield Block reaction with your magic shield. The shield has Hardness 5. After you use Shield Block, the spell ends and you can\'t cast it again for 10 minutes. Unlike a normal Shield Block, you can use the spell\'s reaction against the magic missile spell. Heightening the spell increases the shield\'s Hardness.  \r\n**Heightened (3rd)**  The shield has Hardness 10.  \r\n**Heightened (5th)**  The shield has Hardness 15.  \r\n**Heightened (7th)**  The shield has Hardness 20.  \r\n**Heightened (9th)**  The shield has Hardness 25.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=286',
    name: 'Sigil',
    traits: [ 'cantrip', 'transmutation' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 369',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature or object',
    duration: 'unlimited (see below)',
    text: 'You harmlessly place your unique magical sigil, which is about 1 square inch in size, on the targeted creature or object. The mark can be visible or invisible, and you can change it from one state to another by using an Interact action to touch the target. The mark can be scrubbed or scraped off with 5 minutes of work. If it\'s on a creature, it fades naturally over the course of a week. The time before the mark fades increases depending on your heightened level.  \r\n**Heightened (3rd)**  The sigil instead fades after 1 month.  \r\n**Heightened (5th)**  The sigil instead fades after 1 year.  \r\n**Heightened (7th)**  The sigil never fades.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=330',
    name: 'Tanglefoot',
    traits: [ 'cantrip', 'conjuration', 'plant' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 377',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    text: 'A vine covered in sticky sap appears from thin air, flicking from your hand and lashing itself to the target. Attempt a spell attack against the target.  \r\n**Critical Success**  The target gains the immobilized condition and takes a -10-foot circumstance penalty to its Speeds for 1 round. It can attempt to Escape against your spell DC to remove the penalty and the immobilized condition.  \r\n**Success**  The target takes a -10-foot circumstance penalty to its Speeds for 1 round. It can attempt to Escape against your spell DC to remove the penalty.  \r\n**Failure**  The target is unaffected.  \r\n**Heightened (2nd)**  The effects last for 2 rounds.  \r\n**Heightened (4th)**  The effects last for 1 minute.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=334',
    name: 'Telekinetic Projectile',
    traits: [ 'attack', 'cantrip', 'evocation' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 377',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    text: 'You hurl a loose, unattended object that is within range and that has 1 Bulk or less at the target. Make a ranged attack against the target. If you hit, you deal bludgeoning, piercing, or slashing damage-as appropriate for the object you hurled-equal to 1d6 plus your spellcasting ability modifier. No specific traits or magic properties of the hurled item affect the attack or the damage.  \r\n**Critical Success**  You deal double damage.  \r\n**Success**  You deal full damage.  \r\n**Heightened (+1)**  The damage increases by 1d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=5',
    name: 'Air Bubble',
    traits: [ 'air', 'conjuration' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 316',
    traditions: [ 'arcane', 'divine', 'primal' ],
    cast: 'verbal',
    action: 'reaction',
    trigger: 'A creature within range enters an environment where it can\'t breathe.',
    range: '60 feet',
    targets: 'the triggering creature',
    text: 'A bubble of pure air appears around the target\'s head, allowing it to breathe normally. The effect ends as soon as the target returns to an environment where it can breathe normally.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=7',
    name: 'Alarm',
    traits: [ 'abjuration' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 317',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: '10 minutes (material, somatic, verbal)',
    requirements: '3 gp silver bell focus',
    range: 'touch',
    area: '20-foot burst',
    duration: '8 hours',
    text: 'You ward an area to alert you when creatures enter without your permission. When you cast alarm, select a password. Whenever a Small or larger corporeal creature enters the spell\'s area without speaking the password, alarm sends your choice of a mental alert (in which case the spell gains the mental trait) or an audible alarm with the sound and volume of a hand bell (in which case the spell gains the auditory trait). Either option automatically awakens you, and the bell allows each creature in the area to attempt a DC 15 Perception check to wake up. A creature aware of the alarm must succeed at a Stealth check against the spell\'s DC or trigger the spell when moving into the area.  \r\n**Heightened (3rd)**  You can specify criteria for which creatures sound the alarm spell-for instance, orcs or masked people.',
    components: [ '10minutes(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=13',
    name: 'Ant Haul',
    traits: [ 'transmutation' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 318',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    duration: '8 hours',
    text: 'You reinforce the target\'s musculoskeletal system to bear more weight. The target can carry 3 more Bulk than normal before becoming encumbered and up to a maximum of 6 more Bulk.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=30',
    name: 'Burning Hands',
    traits: [ 'conjuration', 'fire' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 322',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '15-foot cone',
    'saving throw': 'basic Reflex',
    text: 'Gouts of flame rush from your hands. You deal 2d6 fire damage to creatures in the area.  \r\n**Heightened (+1)**  The damage increases by 2d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=34',
    name: 'Charm',
    traits: [ 'emotion', 'enchantment', 'incapacitation', 'mental' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 322',
    traditions: [ 'arcane', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: '1 hour',
    text: 'To the target, your words are honey and your visage seems bathed in a dreamy haze. It must attempt a Will save, with a +4 circumstance bonus if you or your allies recently threatened it or used hostile actions against it. You can Dismiss the spell. If you use hostile actions against the target, the spell ends. When the spell ends, the target doesn\'t necessarily realize it was charmed unless its friendship with you or the actions you convinced it to take clash with its expectations, meaning you could potentially convince the target to continue being your friend via mundane means.  \r\n**Critical Success**  The target is unaffected and aware you tried to charm it.  \r\n**Success**  The target is unaffected but thinks your spell was something harmless instead of charm, unless it identifies the spell (usually with Identify Magic).  \r\n**Failure**  The target\'s attitude becomes friendly toward you. If it was friendly, it becomes helpful. It can\'t use hostile actions against you.  \r\n**Critical Failure**  The target\'s attitude becomes helpful toward you, and it can\'t use hostile actions against you.  \r\n**Heightened (+4)**  The duration lasts until the next time you make your daily preparations.  \r\n**Heightened (+8)**  The duration lasts until the next time you make your daily preparations, and you can target up to 10 creatures.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=44',
    name: 'Color Spray',
    traits: [ 'illusion', 'incapacitation', 'visual' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 324',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '15-foot cone',
    'saving throw': 'Will',
    duration: '1 or more rounds (see below)',
    text: 'Swirling colors affect viewers based on their Will saves.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature is dazzled for 1 round.  \r\n**Failure**  The creature is stunned 1, blinded for 1 round, and dazzled for 1 minute.  \r\n**Critical Failure**  The creature is stunned for 1 round and blinded for 1 minute.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=45',
    name: 'Command',
    traits: [ 'auditory', 'enchantment', 'linguistic', 'mental' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 325',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: 'until the end of the target\'s next turn',
    text: 'You shout a command that\'s hard to ignore. You can command the target to approach you, run away (as if it had the fleeing condition), release what it\'s holding, drop prone, or stand in place. It can\'t Delay or take any reactions until it has obeyed your command. The effects depend on the target\'s Will save.  \r\n**Success**  The creature is unaffected.  \r\n**Failure**  For the first action on its next turn, the creature must use a single action to do as you command.  \r\n**Critical Failure**  The target must use all its actions on its next turn to obey your command.  \r\n**Heightened (5th)**  You can target up to 10 creatures.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=53',
    name: 'Create Water',
    traits: [ 'conjuration', 'water' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 326',
    traditions: [ 'arcane', 'divine', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '0 feet',
    text: 'As you cup your hands, water begins to flow forth from them. You create 2 gallons of water. If no one drinks it, it evaporates after 1 day.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=110',
    name: 'Fear',
    traits: [ 'emotion', 'enchantment', 'fear', 'mental' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 337',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: 'varies',
    text: 'You plant fear in the target; it must attempt a Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is frightened 1.  \r\n**Failure**  The target is frightened 2.  \r\n**Critical Failure**  The target is frightened 3 and fleeing for 1 round.  \r\n**Heightened (3rd)**  You can target up to five creatures.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=111',
    name: 'Feather Fall',
    traits: [ 'abjuration' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 337',
    traditions: [ 'arcane', 'primal' ],
    cast: 'verbal',
    action: 'reaction',
    trigger: 'a creature within range is falling',
    range: '60 feet',
    targets: '1 falling creature',
    duration: '1 minute',
    text: 'You cause the air itself to arrest a fall. The target\'s fall slows to 60 feet per round, and the portion of the fall during the spell\'s duration doesn\'t count when calculating falling damage. If the target reaches the ground while the spell is in effect, it takes no damage from the fall. The spell ends as soon as the target lands.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=122',
    name: 'Fleet Step',
    traits: [ 'transmutation' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 338',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute',
    text: 'You gain a +30-foot status bonus to your Speed.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=124',
    name: 'Floating Disk',
    traits: [ 'conjuration', 'force' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 338',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '8 hours',
    text: 'A disk of magical force materializes adjacent to you. This disk is 2 feet in diameter and follows 5 feet behind you, floating just above the ground. It holds up to 5 Bulk of objects (though they must be able to fit and balance on its surface). Any objects atop the disk fall to the ground when the spell ends. The spell ends if a creature tries to ride atop the disk, if the disk is overloaded, if anyone tries to lift or force the disk higher above the ground, or if you move more than 30 feet away from the disk.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=139',
    manual: true,
    name: 'Goblin Pox',
    traits: [ 'attack', 'disease', 'necromancy' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 341',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    'saving throw': 'Fortitude',
    text: 'Your touch afflicts the target with goblin pox, an irritating allergenic rash. The target must attempt a Fortitude save.  \r\n**Goblin Pox**  (disease) **Level** 1. Goblins and goblin dogs are immune.  \r\n * **Stage 1** sickened 1 (1 round)  \r\n * **Stage 2** sickened 1 and slowed 1 (1 round)  \r\n * **Stage 3** sickened 1 and the creature can\'t reduce it\'s sickened value below 1 (1 day).\r\n  \r\n**Critical Success** The target is unaffected.  \r\n**Success** The target is sickened 1.  \r\n**Failure** The target is afflicted with goblin pox at stage 1.  \r\n**Critical Failure** The target is afflicted with goblin pox and stage 2.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=140',
    name: 'Grease',
    traits: [ 'conjuration' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 342',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    area: '4 contiguous 5-foot squares or',
    targets: '1 object of Bulk 1 or less',
    duration: '1 minute',
    text: 'You conjure grease, with effects based on choosing area or target. Area All solid ground in the area is covered with grease. Each creature standing on the greasy surface must succeed at a Reflex save or an Acrobatics check against your spell DC or fall prone. Creatures using an action to move onto the greasy surface during the spell\'s duration must attempt either a Reflex save or an Acrobatics check to Balance. A creature that Steps or Crawls doesn\'t have to attempt a check or save. Target If you cast the spell on an unattended object, anyone trying to pick up the object must succeed at an Acrobatics check or Reflex save against your spell DC to do so. If you target an attended object, the creature that has the object must attempt an Acrobatics check or Reflex save. On a failure, the holder or wielder takes a -2 circumstance penalty to all checks that involve using the object; on a critical failure, the holder or wielder releases the item. The object lands in an adjacent square of the GM\'s choice. If you cast this spell on a worn object, the wearer gains a +2 circumstance bonus to Fortitude saves against attempts to grapple them.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=141',
    name: 'Grim Tendrils',
    traits: [ 'necromancy', 'negative' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 342',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '30-foot line',
    'saving throw': 'Fortitude',
    text: 'Tendrils of darkness curl out from your fingertips and race through the air. You deal 2d4 negative damage and 1 persistent bleed damage to living creatures in the line. Each living creature in the line must attempt a Fortitude save.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes half the negative damage and no persistent bleed damage.  \r\n**Failure**  The creature takes full damage.  \r\n**Critical Failure**  The creature takes double negative damage and double persistent bleed damage.  \r\n**Heightened (+1)**  The negative damage increases by 2d4, and the persistent bleed damage increases by 1.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=143',
    name: 'Gust of Wind',
    traits: [ 'air', 'evocation' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 342',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '60-foot line',
    duration: 'until the start of your next turn',
    text: 'A violent wind issues forth from your palm, blowing from the point where you are when you cast the spell to the line\'s opposite end. The wind extinguishes small non-magical fires, disperses fog and mist, blows objects of light Bulk or less around, and pushes larger objects. Large or smaller creatures in the area must attempt a Fortitude save. Large or smaller creatures that later move into the gust must attempt the save on entering.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature can\'t move against the wind.  \r\n**Failure**  The creature is knocked prone. If it was flying, it suffers the effects of critical failure instead.  \r\n**Critical Failure**  The creature is pushed 30 feet in the wind\'s direction, knocked prone, and takes 2d6 bludgeoning damage.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=154',
    name: 'Hydraulic Push',
    traits: [ 'attack', 'evocation', 'water' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 344',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '60 feet',
    targets: '1 creature or object',
    text: 'You call forth a powerful blast of pressurized water that bludgeons the target and knocks it back. Make a ranged spell attack roll.  \r\n**Critical Success**  The target takes 6d6 bludgeoning damage and is knocked back 10 feet.  \r\n**Success**  The target takes 3d6 bludgeoning damage and is knocked back 5 feet.  \r\n**Heightened (+1)**  The damage increases by 2d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=159',
    name: 'Illusory Disguise',
    traits: [ 'illusion', 'visual' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 345',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 hour',
    text: 'You create an illusion that causes you to appear as another creature of the same body shape, and with roughly similar height (within 6 inches) and weight (within 50 pounds), as yourself. The disguise is typically good enough to hide your identity, but not to impersonate a specific individual. The spell doesn\'t change your voice, scent, or mannerisms. You can change the appearance of your clothing and worn items, such as making your armor look like a dress. Held items are unaffected, and any worn item you remove returns to its true appearance. Casting illusory disguise counts as setting up a disguise for the Impersonate use of Deception; it ignores any circumstance penalties you might take for disguising yourself as a dissimilar creature, it gives you a +4 status bonus to Deception checks to prevent others from seeing through your disguise, and you add your level even if you\'re untrained. You can Dismiss this spell.  \r\n**Heightened (2nd)**  The spell also disguises your voice and scent, and it gains the auditory trait.  \r\n**Heightened (3rd)**  You can appear as any creature of the same size, even a specific individual. You must have seen an individual to take on their appearance. The spell also disguises your voice and scent, and it gains the auditory trait.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=160',
    name: 'Illusory Object',
    traits: [ 'illusion', 'visual' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 345',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '500 feet',
    area: '20-foot burst',
    duration: '10 minutes',
    text: 'You create an illusory visual image of a stationary object. The entire image must fit within the spell\'s area. The object appears to animate naturally, but it doesn\'t make sounds or generate smells. For example, water would appear to pour down an illusory waterfall, but it would be silent. Any creature that touches the image or uses the Seek action to examine it can attempt to disbelieve your illusion.  \r\n**Heightened (2nd)**  Your image makes appropriate sounds, generates normal smells, and feels right to the touch. The spell gains the auditory trait. The duration increases to 1 hour.  \r\n**Heightened (5th)**  As the 2nd-level version, but the duration is unlimited.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=166',
    name: 'Item Facade',
    traits: [ 'illusion', 'visual' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 347',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 object no more than 10 feet by 10 feet by 10 feet',
    duration: '1 hour',
    text: 'You make the target object look and feel as though it were in much better or worse physical condition. When you cast this spell, decide whether you want to make the object look decrepit or perfect. An item made to look decrepit appears broken and shoddy. An intact item made to look better appears as though it\'s brand new and highly polished or well maintained. A broken item appears to be intact and functional. Destroyed items can\'t be affected by this spell. A creature that Interacts with the item can attempt to disbelieve the illusion.  \r\n**Heightened (2nd)**  The duration is 24 hours.  \r\n**Heightened (3rd)**  The duration is unlimited.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=167',
    name: 'Jump',
    traits: [ 'move', 'transmutation' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 347',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic',
    action: '1',
    text: 'Your legs surge with strength, ready to leap high and far. You jump 30 feet in any direction without touching the ground. You must land on a space of solid ground within 30 feet of you, or else you fall after using your next action.  \r\n**Heightened (3rd)**  The range becomes touch, the target changes to one touched creature, and the duration becomes 1 minute, allowing the target to jump as described whenever it takes the Leap action.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=174',
    name: 'Lock',
    traits: [ 'abjuration' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 348',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 lock, or a door or container with a latch',
    duration: '1 day',
    text: 'The target\'s latch mechanism clinks shut, held fast by unseen magical restraints. When you magically lock a target, you set an Athletics and Thievery DC to open it equal to your spell DC or the base lock DC with a +4 status bonus, whichever is higher. Any key or combination that once opened a lock affected by this spell does not do so for the duration of the spell, though the key or combination does grant a +4 circumstance bonus to checks to open the door. If the target is opened, the spell ends. Assuming the target is not barred or locked in some additional way, you can unlock and open it with an Interact action during which you touch the target. This does not end the spell. You can Dismiss this spell at any time and from any distance.  \r\n**Heightened (2nd)**  The duration increases to unlimited, but you must expend 6 gp worth of gold dust as an additional cost.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=175',
    name: 'Longstrider',
    traits: [ 'transmutation' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 348',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 hour',
    text: 'You lengthen your stride beyond what should be possible. You gain a +10-foot status bonus to your Speed.  \r\n**Heightened (2nd)**  The duration increases to 8 hours.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=176',
    name: 'Mage Armor',
    traits: [ 'abjuration' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 348',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: 'until the next time you make your daily preparations',
    text: 'You ward yourself with shimmering magical energy, gaining a +1 item bonus to AC and a maximum Dexterity modifier of +5. While wearing mage armor, you use your unarmored proficiency to calculate your AC.  \r\n**Heightened (4th)**  You gain a +1 item bonus to saving throws.  \r\n**Heightened (6th)**  The item bonus to AC increases to +2, and you gain a +1 item bonus to saving throws.  \r\n**Heightened (8th)**  The item bonus to AC increases to +2, and you gain a +2 item bonus to saving throws.  \r\n**Heightened (10th)**  The item bonus to AC increases to +3, and you gain a +3 item bonus to saving throws.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=178',
    name: 'Magic Aura',
    traits: [ 'uncommon', 'illusion' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 349',
    traditions: [ 'arcane', 'occult' ],
    cast: '1 minute (material, somatic, verbal)',
    range: 'touch',
    targets: '1 object of 3 bulk or less',
    duration: 'until the next time you make your daily preparations',
    text: 'You alter the appearance of an item\'s magic aura. You can choose to have the target\'s aura appear as that of common magic item of twice magic aura\'s level or lower, or to have it register as being under the effects of a spell of your choice of magic aura\'s level or lower. If the target is magical, you can instead choose to have it appear as entirely non-magical. A caster using detect magic or study aura of an equal or higher spell level can attempt to disbelieve the illusion from magic aura. Magic aura doesn\'t mask the aura of spells that are 9th level or higher or of items that are 19th level or higher.  \r\n**Heightened (3rd)**  You can target a creature instead of an object. When you do, you can either conceal the auras of all magic items it has or have that creature\'s aura appear as if it were under the effect of a spell you know.',
    components: [ '1minute(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=180',
    name: 'Magic Missile',
    traits: [ 'evocation', 'force' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 349',
    traditions: [ 'arcane', 'occult' ],
    cast: 'to  somatic, verbal',
    action: [ '1', '3' ],
    range: '120 feet',
    targets: '1 creature',
    text: 'You send a dart of force streaking toward a creature that you can see. It automatically hits and deals 1d4+1 force damage. For each additional action you use when Casting the Spell, increase the number of missiles you shoot by one, to a maximum of three missiles for 3 actions. You choose the target for each missile individually. If you shoot more than one missile at the same target, combine the damage before applying bonuses or penalties to damage, resistances, weaknesses, and so forth.  \r\n**Heightened (+2)**  You shoot one additional missile with each action you spend.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=182',
    name: 'Magic Weapon',
    traits: [ 'transmutation' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 349',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 non-magical weapon that is unattended or wielded by you or a willing ally',
    duration: '1 minute',
    text: 'The weapon glimmers with magic and energy. The target becomes a +1 striking weapon, gaining a +1 item bonus to attack rolls and increasing the number of weapon damage dice to two.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=189',
    name: 'Mending',
    traits: [ 'transmutation' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 351',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: '10 minutes (somatic, verbal)',
    range: 'touch',
    targets: 'non-magical object of light Bulk or less',
    text: 'You repair the target item. You restore 5 Hit Points per spell level to the target, potentially removing the broken condition if this repairs it past the item\'s Broken Threshold. You can\'t replace lost pieces or repair an object that\'s been completely destroyed.  \r\n**Heightened (2nd)**  You repair the target item. You restore 5 Hit Points per spell level to the target, potentially removing the broken condition if this repairs it past the item\'s Broken Threshold. You can\'t replace lost pieces or repair an object that\'s been completely destroyed.  \r\n**Heightened (2nd)**  You can target a non-magical object of 2 Bulk or less, or a magical object of 1 Bulk or less.',
    components: [ '10minutes(somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=206',
    name: 'Negate Aroma',
    traits: [ 'abjuration' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 354',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 willing creature',
    duration: '1 hour',
    text: 'The target loses its odor, preventing creatures from passively noticing its presence via smell alone, even if the creatures have precise or imprecise scent. A creature attempting a Perception check to Seek with scent and other senses might notice the lack of natural scent. If the target has any abilities that result from its smell, such as an overpowering scent, those abilities are also negated.  \r\n**Heightened (5th)**  The range increases to 30 feet, and you can target up to 10 creatures.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=217',
    manual: true,
    name: 'Pest Form',
    traits: [ 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 356',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '10 minutes',
    text: 'You transform into a the battle form of a Tiny animal, such as a cat, insect, lizard, or rat. You can decide the specific type of animal (such as a rat or praying mantis), but this has no effect on the form\'s Size or statistics. While in this form, you gain the animal trait. You can Dismiss the spell.  \r\n\r\nYou gain the following statistics and abilities:  \r\n * AC = 15 + your level. Ignore your armor\'s check penalty and Speed reduction.\r\n * Speed 10 feet.\r\n * Weakness 5 to physical damage. (If you take physical damage in this form, you take 5 additional damage.)\r\n * Low-light vision and imprecise scent 30 feet.\r\n * Acrobatics and Stealth modifiers of +10, unless your own modifier is higher; Athletics modifier -4.\r\n  \r\n**Heightened (4th)**  You can turn into a flying creature, such as a bird, which grants you a fly Speed of 20 feet.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=244',
    name: 'Ray of Enfeeblement',
    traits: [ 'attack', 'necromancy' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 362',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Fortitude',
    duration: '1 minute',
    text: 'A ray with the power to sap a foe\'s strength flashes from your hand. Attempt a ranged spell attack against the target. If you succeed, that creature attempts a Fortitude save in order to determine the spell\'s effect. If you critically succeed on your attack roll, use the outcome for one degree of success worse than the result of its save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target becomes enfeebled 1.  \r\n**Failure**  The target becomes enfeebled 2.  \r\n**Critical Failure**  The target becomes enfeebled 3.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=283',
    name: 'Shocking Grasp',
    traits: [ 'attack', 'electricity', 'evocation' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 369',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    text: 'You shroud your hands in a crackling field of lightning. Make a melee spell attack roll. On a hit, the target takes 2d12 electricity damage. If the target is wearing metal armor or is made of metal, you gain a +1 circumstance bonus to your attack roll with shocking grasp, and the target also takes 1d4 persistent electricity damage on a hit. On a critical hit, double the initial damage, but not the persistent damage.  \r\n**Heightened (+1)**  The damage increases by 1d12, and the persistent electricity damage increases by 1.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=288',
    name: 'Sleep',
    traits: [ 'enchantment', 'incapacitation', 'mental', 'sleep' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 370',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    area: '5-foot burst',
    'saving throw': 'Will',
    text: 'Each creature in the area becomes drowsy and might fall asleep. A creature that falls unconscious from this spell doesn\'t fall prone or release what it\'s holding. This spell doesn\'t prevent creatures from waking up due to a successful Perception check, limiting its utility in combat.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes a -1 status penalty to Perception checks for 1 round.  \r\n**Failure**  The creature falls unconscious. If it\'s still unconscious after 1 minute, it wakes up automatically.  \r\n**Critical Failure**  The creature falls unconscious. If it\'s still unconscious after 1 hour, it wakes up automatically.  \r\n**Heightened (4th)**  The creatures fall unconscious for 1 round on a failure or 1 minute on a critical failure. They fall prone and release what they\'re holding, and they can\'t attempt Perception checks to wake up. When the duration ends, the creature is sleeping normally instead of automatically waking up.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=300',
    name: 'Spider Sting',
    traits: [ 'attack', 'necromancy', 'poison' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 371',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    'saving throw': 'Fortitude',
    text: 'You magically duplicate a spider\'s venomous sting. You deal 1d4 piercing damage to the touched creature and afflict it with spider venom. The target must attempt a Fortitude save.   \r\n**Spider Venom**  (poison);   \r\n**Level 1** ; Maximum Duration 4 rounds.   \r\n**Stage 1**  1d4 poison damage and enfeebled 1 (1 round);   \r\n**Stage 2**  1d4 poison damage and enfeebled 2 (1 round).  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes 1d4 poison damage.  \r\n**Failure**  The target is afflicted with spider venom at stage 1.  \r\n**Critical Failure**  The target is afflicted with spider venom at stage 2.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=316',
    name: 'Summon Animal',
    traits: [ 'conjuration' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 375',
    traditions: [ 'arcane', 'primal' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: '30 feet',
    duration: 'sustained up to 1 minute',
    text: 'You conjure an animal to fight for you. You summon a common creature that has the animal trait and whose level is -1. Heightening the spell increases the maximum level of creature you can summon.  \r\n**Heightened (2nd)**  Level 1  \r\n**Heightened (3rd)**  Level 2  \r\n**Heightened (4th)**  Level 3  \r\n**Heightened (5th)**  Level 5  \r\n**Heightened (6th)**  Level 7  \r\n**Heightened (7th)**  Level 9  \r\n**Heightened (8th)**  Level 11  \r\n**Heightened (9th)**  Level 13  \r\n**Heightened (10th)**  Level 15',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=318',
    name: 'Summon Construct',
    traits: [ 'conjuration' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 375',
    traditions: [ 'arcane' ],
    cast: 'material, somatic, verbal',
    action: '3',
    duration: 'sustained up to 1 minute',
    text: 'You conjure a construct to fight for you. This works like summon animal, except you summon a common creature that has the construct trait and whose level is -1.  \r\n**Heightened (2nd)**  Level 1  \r\n**Heightened (3rd)**  Level 2  \r\n**Heightened (4th)**  Level 3  \r\n**Heightened (5th)**  Level 5  \r\n**Heightened (6th)**  Level 7  \r\n**Heightened (7th)**  Level 9  \r\n**Heightened (8th)**  Level 11  \r\n**Heightened (9th)**  Level 13  \r\n**Heightened (10th)**  Level 15',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=345',
    name: 'True Strike',
    traits: [ 'divination', 'fortune' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 379',
    traditions: [ 'arcane', 'occult' ],
    cast: 'verbal',
    action: '1',
    duration: 'until the end of your turn',
    text: 'A glimpse into the future ensures your next blow strikes true. The next time you make an attack roll before the end of your turn, roll the attack twice and use the better result. The attack ignores circumstance penalties to the attack roll and any flat check required due to the target being concealed or hidden.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=352',
    manual: true,
    name: 'Unseen Servant',
    traits: [ 'conjuration', 'mindless' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 380',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '60 feet',
    duration: 'sustained',
    text: 'You summon an unseen servant, which you can command as part of Sustaining the Spell. It serves you until its Hit Points are reduced to 0, at which point the spell ends, or until you stop Sustaining the Spell. The unseen servant gains the summoned trait.  \r\n\r\n---\r\n**Unseen Servant**  \r\nCreature -1  \r\nMedium, Mindless  \r\n**Perception +0; darkvision\r\n**Languages - (understands creator)  \r\n**Skills**: Stealth +8  \r\n**Str** -4 **Dex** +2 **Con** +0 **Int** -5 **Wis** +0 **Cha** +0  \r\n**Invisible** An unseen servant is invisible, though it normally doesn\'t Sneak, so it is usually only hidden.  \r\n\r\n---\r\n**AC** 13 **Fort** +0 **Ref** +4 **Will** +0  \r\n**HP** 4 **Immunities** disease, mental, non-magical attacks, paralysis, poison, precision, unconscious **Resistances** all damage 5 (except force or ghost touch)  \r\n\r\n---\r\n**Speed** fly 30 feet  \r\n**Force Body**  An unseen servant\'s physical body is made of force. It can\'t use attack actions. It can move and use Interact actions to do things such as fetch objects, open unstuck or unlocked doors, hold chairs, and clean. It can\'t pass through solid objects.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=356',
    name: 'Ventriloquism',
    traits: [ 'auditory', 'illusion' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 381',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '10 minutes',
    text: 'Whenever you speak or make any other sound vocally, you can make your vocalization seem to originate from somewhere else within 60 feet, and you can change that apparent location freely as you vocalize. Any creature that hears the sound can attempt to disbelieve your illusion.  \r\n**Heightened (+2)**  The spell\'s duration increases to 1 hour, and you can also change the tone, quality, and other aspects of your  voice. Before a creature can attempt to disbelieve your illusion, it must actively attempt a Perception check or otherwise use actions to interact with the sound.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=2',
    name: 'Acid Arrow',
    traits: [ 'acid', 'attack', 'evocation' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 316',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    targets: '1 creature or object',
    text: 'You conjure an arrow of acid that continues corroding the target after it hits. Make a spell attack against the target. On a hit, you deal 3d8 acid damage plus 1d6 persistent acid damage. On a critical hit, double the initial damage, but not the persistent damage.  \r\n**Heightened (+2)**  The initial damage increases by 2d8, and the persistent acid damage increases by 1d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=28',
    name: 'Blur',
    traits: [ 'illusion', 'visual' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 321',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    duration: '1 minute',
    text: 'The target\'s form appears blurry. It becomes concealed. As the nature of this effect still leaves the target\'s location obvious, the target can\'t use this concealment to Hide or Sneak.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=46',
    name: 'Comprehend Language',
    traits: [ 'divination' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 325',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    duration: '1 hour',
    text: 'The target can understand the meaning of a single language it is hearing or reading when you cast the spell. This doesn\'t let it understand codes, language couched in metaphor, and the like (subject to GM discretion). If the target can hear multiple languages and knows that, it can choose which language to understand; otherwise, choose one of the languages randomly.  \r\n**Heightened (3rd)**  The target can also speak the language.  \r\n**Heightened (4th)**  You can target up to 10 creatures, and targets can also speak the language.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=50',
    name: 'Continual Flame',
    traits: [ 'evocation', 'light' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 326',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: 'material, somatic, verbal',
    action: '3',
    cost: '6 gp of ruby dust',
    range: 'touch',
    targets: '1 object',
    duration: 'unlimited',
    text: 'A magical flame springs up from the object, as bright as a torch. It doesn\'t need oxygen, react to water, or generate heat.  \r\n**Heightened (+1)**  The cost increases as follows: 16 gp for 3rd level; 30 gp for 4th, 60 gp for 5th, 120 gp for 6th,; 270 gp for 7th, 540 gp for 8th, 1,350 gp for 9th, and 3,350 gp for 10th.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=52',
    name: 'Create Food',
    traits: [ 'conjuration' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 326',
    traditions: [ 'arcane', 'divine', 'primal' ],
    cast: '1 hour (somatic, verbal)',
    range: '30 feet',
    text: 'You create enough food to feed six Medium creatures for a day. This food is bland and unappealing, but it is nourishing. After 1 day, if no one has eaten the food, it decays and becomes inedible. Most Small creatures eat one-quarter as much as a Medium creature (one-sixteenth as much for most Tiny creatures), and most Large creatures eat 10 times as much (100 times as much for Huge creatures and so on).  \r\n**Heightened (4th)**  You can feed 12 Medium creatures.  \r\n**Heightened (6th)**  You can feed 50 Medium creatures.  \r\n**Heightened (8th)**  You can feed 200 Medium creatures.',
    components: [ '1hour(somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=59',
    name: 'Darkness',
    traits: [ 'darkness', 'evocation' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 327',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: '120 feet',
    area: '20-foot burst',
    duration: '1 minute',
    text: 'You create a shroud of darkness that prevents light from penetrating or emanating within the area. Light does not enter the area and any non-magical light sources, such as a torch or lantern, do not emanate any light while inside the area, even if their light radius would extend beyond the darkness. This also suppresses magical light of your darkness spell\'s level or lower. Light can\'t pass through, so creatures in the area can\'t see outside. From outside, it appears as a globe of pure darkness.  \r\n**Heightened (4th)**  Even creatures with darkvision (but not greater darkvision) can barely see through the darkness. They treat targets seen through the darkness as concealed.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=60',
    name: 'Darkvision',
    traits: [ 'divination' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 327',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 hour',
    text: 'You grant yourself supernatural sight in areas of darkness. You gain darkvision.  \r\n**Heightened (3rd)**  The spell\'s range is touch and it targets 1 willing creature.  \r\n**Heightened (5th)**  The spell\'s range is touch and it targets 1 willing creature. The duration is until the next time you make your daily preparations.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=62',
    name: 'Deafness',
    traits: [ 'necromancy' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 327',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Fortitude',
    text: 'The target loses hearing; it must attempt a Fortitude save. The target is then temporarily immune for 1 minute.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is deafened for 1 round.  \r\n**Failure**  The target is deafened for 10 minutes.  \r\n**Critical Failure**  The target is deafened permanently.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=78',
    name: 'Dispel Magic',
    traits: [ 'abjuration' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 330',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    targets: '1 spell effect or unattended magic item',
    text: 'You unravel the magic behind a spell or effect. Attempt a counteract check against the target (page 458). If you succeed against a spell effect, you counteract it. If you succeed against a magic item, the item becomes a mundane item of its type for 10 minutes. This doesn\'t change the item\'s non-magical properties. If the target is an artifact or similar item, you automatically fail.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=99',
    name: 'Endure Elements',
    traits: [ 'abjuration' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 335',
    traditions: [ 'arcane', 'divine', 'primal' ],
    cast: '10 minutes (somatic, verbal)',
    range: 'touch',
    targets: '1 willing creature',
    duration: 'until the next time you make your daily preparations',
    text: 'You shield the target against dangerous temperatures. Choose severe cold or heat. The target is protected from the temperature you chose (but not extreme cold or heat).  \r\n**Heightened (3rd)**  The target is protected from severe cold and heat.  \r\n**Heightened (5th)**  The target is protected from severe cold, severe heat, extreme cold, and extreme heat.',
    components: [ '10minutes(somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=102',
    name: 'Enlarge',
    traits: [ 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 336',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 willing creature',
    duration: '5 minutes',
    text: 'Bolstered by magical power, the target grows to size Large. Its equipment grows with it but returns to natural size if removed. The creature is clumsy 1. Its reach increases by 5 feet (or by 10 feet if it started out Tiny), and it gains a +2 status bonus to melee damage. This spell has no effect on a Large or larger creature.  \r\n**Heightened (4th)**  The creature instead grows to size Huge. The status bonus to melee damage is +4 and the creature\'s reach increases by 10 feet (or 15 feet if the creature started out Tiny). The spell has no effect on a Huge or larger creature.  \r\n**Heightened (6th)**  As level 4, but you can target up to 10 creatures.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=108',
    name: 'False Life',
    traits: [ 'necromancy' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 337',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '8 hours',
    text: 'You create a reservoir of vitality from necromantic energy, gaining a number of temporary Hit Points equal to 6 plus your spellcasting ability modifier.  \r\n**Heightened (+1)**  The temporary Hit Points increase by 3.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=121',
    name: 'Flaming Sphere',
    traits: [ 'evocation', 'fire' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 338',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    area: '1 5-foot square',
    'saving throw': 'Reflex',
    duration: 'sustained up to 1 minute',
    text: 'You create a sphere of flame in a square within range. The sphere must be supported by a solid surface, such as a stone floor. The sphere deals 3d6 fire damage to each creature in the square where it first appears; each creature must attempt a basic Reflex save. On subsequent rounds, you can Sustain this Spell, leaving the sphere in its square or rolling it to another square within range and dealing 3d6 fire damage; each creature in its square must attempt a basic Reflex save.Creatures that succeed at their save take no damage (instead of half).  \r\n**Heightened (+1)**  The damage increases by 1d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=131',
    name: 'Gentle Repose',
    traits: [ 'necromancy' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 340',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 corpse',
    duration: 'until the next time you make your daily preparations',
    text: 'The targeted corpse doesn\'t decay, nor can it be transformed into an undead. If the corpse is subject to a spell that requires the corpse to have died within a certain amount of time (for example, raise dead), do not count the duration of gentle repose against that time. This spell also prevents ordinary bugs and pests (such as maggots) from consuming the body.  \r\n**Heightened (5th)**  The spell\'s duration is unlimited, but the spell takes one more action to cast and requires a material component and a cost (embalming fluid worth 6 gp).',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=136',
    name: 'Glitterdust',
    traits: [ 'evocation' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 341',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    area: '10-foot burst',
    'saving throw': 'Reflex',
    text: 'Creatures in the area are outlined by glittering dust. Each creature must attempt a Reflex save. If a creature has its invisibility negated by this spell, it is concealed instead of invisible. This applies both if the creature was already invisible and if it benefits from new invisibility effects before the end of the invisibility negation effect from this spell.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target\'s invisibility is negated for 2 rounds.  \r\n**Failure**  The target is dazzled for 1 minute and its invisibility is negated for 1 minute.  \r\n**Critical Failure**  The target is blinded for 1 round and dazzled for 10 minutes. Its invisibility is negated for 10 minutes.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=150',
    name: 'Hideous Laughter',
    traits: [ 'emotion', 'enchantment', 'mental' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 342',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 living creature',
    'saving throw': 'Will',
    duration: 'sustained',
    text: 'The target is overtaken with uncontrollable laughter. It must attempt a Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is plagued with uncontrollable laugher. It can\'t use reactions.  \r\n**Failure**  The target is slowed 1 and can\'t use reactions.  \r\n**Critical Failure**  The target falls prone and can\'t use actions or reactions for 1 round. It then suffers the failure effects.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=153',
    name: 'Humanoid Form',
    traits: [ 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 344',
    traditions: [ 'arcane', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '10 minutes',
    text: 'You transform your appearance to that of a Small or Medium humanoid, such as a dwarf, elf, goblin, halfling, human, orc, or lizardfolk. You gain the humanoid trait in addition to your other traits while in this form, as well as any trait related to the creature\'s kind (such as goblin or human). If this transformation reduces your size, it reduces your reach accordingly (as the shrink spell). This transformation doesn\'t change your statistics in any way, and you don\'t gain any special abilities of the humanoid form you assume. You can still wear and use your gear, which changes size (if necessary) to match your new form. If items leave your person, they return to their usual size. Humanoid form grants you a +4 status bonus to Deception checks to pass as a generic member of the chosen ancestry, and you add your level even if you\'re untrained, but you can\'t make yourself look like a specific person. If you want to Impersonate an individual, you still need to create a disguise, though the GM won\'t factor in the difference in ancestry when determining the DC of your Deception check. You can Dismiss this spell.  \r\n**Heightened (3rd)**  You gain darkvision or low-light vision if the form you assume has that ability.  \r\n**Heightened (5th)**  You can take on the appearance of a Large humanoid. If this increases your size, you gain the effects of the enlarge spell.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=158',
    name: 'Illusory Creature',
    traits: [ 'auditory', 'illusion', 'visual' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 345',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '500 feet',
    duration: 'sustained',
    text: 'You create an illusory image of a Large or smaller creature. It generates the appropriate sounds, smells, and feels believable to the touch. If you and the image are ever farther than 500 feet apart, the spell ends. The image can\'t speak, but you can use your actions to speak through the creature, with the spell disguising your voice as appropriate. You might need to attempt a Deception or Performance check to mimic the creature, as determined by the GM. This is especially likely if you\'re trying to imitate a specific person and engage with someone that person knows. In combat, the illusion can use 2 actions per turn, which it uses when you Sustain the Spell. It uses your spell attack roll for attack rolls and your spell DC for its AC. Its saving throw modifiers are equal to your spell DC - 10. It is substantial enough that it can flank other creatures. If the image is hit by an attack or fails a save, the spell ends. The illusion can cause damage by making the target believe the illusion\'s attacks are real, but it cannot otherwise directly affect the physical world. If the illusory creature hits with a Strike, the target takes mental damage equal to 1d4 plus your spellcasting ability modifier. This is a mental effect. The illusion\'s Strikes are nonlethal. If the damage doesn\'t correspond to the image of the monster-for example, if an illusory Large dragon deals only 5 damage-the GM might allow the target to attempt a Perception check to disbelieve the spell as a free action. Any relevant resistances and weaknesses apply if the target thinks they do, as judged by the GM. For example, if the illusion wields a warhammer and attacks a creature resistant to bludgeoning damage, the creature would take less mental damage. However, illusory damage does not deactivate regeneration or trigger other effects that require a certain damage type. The GM should track illusory damage dealt by the illusion. Any creature that touches the image or uses the Seek action to examine it can attempt to disbelieve your illusion. When a creature disbelieves the illusion, it recovers from half the damage it had taken from it (if any) and doesn\'t take any further damage from it.  \r\n**Heightened (+1)**  The damage of the image\'s Strikes increases by 1d4, and the maximum size of creature you can create increases by one (to a maximum of Gargantuan).',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=164',
    name: 'Invisibility',
    traits: [ 'illusion' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 347',
    traditions: [ 'arcane', 'occult' ],
    cast: 'material, somatic',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    duration: '10 minutes',
    text: 'Cloaked in illusion, the target becomes invisible. This makes it undetected to all creatures, though the creatures can attempt to find the target, making it hidden to them instead (page 466). If the target uses a hostile action, the spell ends after that hostile action is completed.  \r\n**Heightened (4th)**  The spell lasts 1 minute, but it doesn\'t end if the target uses a hostile action.',
    components: [ 'material', 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=168',
    name: 'Knock',
    traits: [ 'transmutation' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 347',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 door, lock, or container',
    duration: '1 minute',
    text: 'You make the target easier to open. Knock grants a +4 status bonus to any creature that tries to open the target door, lock, or container with an Athletics or a Thievery check. You can attempt a Thievery check to open the target as part of casting knock, and you add your level even if you\'re untrained. Knock counteracts lock.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=181',
    name: 'Magic Mouth',
    traits: [ 'auditory', 'illusion', 'visual' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 349',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature or object',
    duration: 'unlimited',
    text: 'You specify a trigger (described on page 305) and a message up to 25 words long. When the specified trigger occurs within 30 feet of the target, an illusory mouth appears on the target and speaks the message, and the magic mouth spell ends.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=197',
    name: 'Mirror Image',
    traits: [ 'illusion', 'visual' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 352',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute',
    text: 'Three illusory images of you swirl about your space, potentially causing those who attack you to hit one of the images instead of you. Any attack that would hit you has a random chance of hitting one of your images instead of you. If all three images remain, there is a 1 in 4 chance of hitting you (1 on 1d4). With two images remaining, there is a 1 in 3 chance of hitting you (1-2 on 1d6). With only one image, the chances are 1 in 2 (1-3 on 1d6). Once an image is hit, it is destroyed. If an attack roll fails to hit your AC but doesn\'t critically fail, it destroys an image but has no additional effect (even if the attack would normally have an effect on a failure). If an attack roll is a critical success and would hit one of the images, one of the images is destroyed and the attack roll becomes a success against you. Once all the images are destroyed, the spell ends.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=198',
    name: 'Misdirection',
    traits: [ 'illusion' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 352',
    traditions: [ 'arcane', 'occult' ],
    cast: '1 minute (somatic, verbal)',
    range: '30 feet',
    targets: '2 creatures or objects',
    duration: 'until the next time you make your daily preparations',
    text: 'You reshape the magic aura of one creature or object to resemble that of another. You designate one target as the primary target and the other as the secondary target. Effects that would detect auras on the primary target instead detect the same types of auras from the secondary target. A creature reading the aura can attempt to disbelieve the illusion. You can Dismiss the spell from up to a mile away.',
    components: [ '1minute(somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=210',
    name: 'Obscuring Mist',
    traits: [ 'conjuration', 'water' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 355',
    traditions: [ 'arcane', 'primal' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: '120 feet',
    area: '20-foot burst',
    duration: '1 minute',
    text: 'You call forth a cloud of mist. All creatures within the mist become concealed, and all creatures outside the mist become concealed to creatures within it. You can Dismiss the cloud.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=221',
    name: 'Phantom Steed',
    traits: [ 'conjuration' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 357',
    traditions: [ 'arcane', 'occult', 'primal' ],
    cast: '10 minutes (somatic, verbal)',
    range: '30 feet',
    duration: '8 hours',
    text: 'You conjure a Large, magical, equine creature that only you (or another Medium or Small creature you choose) can ride. The horse is clearly phantasmal in nature, has 20 AC and 10 Hit Points, and automatically fails all saves. If it\'s reduced to 0 Hit Points, it disappears and the spell ends. The steed has a Speed of 40 feet and can hold its rider\'s body weight, plus 20 Bulk.  \r\n**Heightened (4th)**  The steed has a Speed of 60 feet, can walk on water, and ignores areas of natural difficult terrain.  \r\n**Heightened (5th)**  The steed has a Speed of 60 feet, can walk on water, and ignores areas of natural difficult terrain. It can also air walk but must end its turn on solid ground or fall.  \r\n**Heightened (6th)**  The steed can walk or fly at a Speed of 80 feet, can walk on water, and ignores natural difficult terrain.',
    components: [ '10minutes(somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=256',
    name: 'Resist Energy',
    traits: [ 'abjuration' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 364',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    duration: '10 minutes',
    text: 'A shield of elemental energy protects a creature against one type of energy damage. Choose acid, cold, electricity, fire, or sonic damage. The target and its gear gain resistance 5 against the damage type you chose.  \r\n**Heightened (4th)**  The resistance increases to 10, and you can target up to two creatures.  \r\n**Heightened (7th)**  The resistance increases to 15, and you can target up to five creatures.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=271',
    name: 'See Invisibility',
    traits: [ 'divination', 'revelation' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 367',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '10 minutes',
    text: 'You can see invisible creatures and objects. They appear to you as translucent shapes, and they are concealed to you.  \r\n**Heightened (5th)**  The spell has a duration of 8 hours.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=284',
    name: 'Shrink',
    traits: [ 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 369',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 willing creature',
    duration: '5 minutes',
    text: 'You warp space to make a creature smaller. The target shrinks to become Tiny in size. Its equipment shrinks with it but returns to its original size if removed. The creature\'s reach changes to 0 feet. This spell has no effect on a Tiny creature.  \r\n**Heightened (6th)**  The spell can target up to 10 creatures.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=295',
    name: 'Spectral Hand',
    traits: [ 'necromancy' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 370',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    duration: '1 minute',
    text: 'You create a semicorporeal hand out of your essence that delivers touch spells for you. Whenever you Cast a Spell with a range of touch, you can have the hand crawl to a target within range along the ground, touch it, and then crawl back to you. When making a melee spell attack with the hand, you use your normal bonuses. The hand can move as far as it needs to within range. The hand has your AC and saves, but any damage to the hand destroys it and causes you to take 1d6 damage.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=299',
    name: 'Spider Climb',
    traits: [ 'transmutation' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 371',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    duration: '10 minutes',
    text: 'Tiny clinging hairs sprout across the creature\'s hands and feet, offering purchase on nearly any surface. The target gains a climb Speed equal to its Speed.  \r\n**Heightened (5th)**  The duration increases to 1 hour.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=320',
    name: 'Summon Elemental',
    traits: [ 'conjuration' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 375',
    traditions: [ 'arcane', 'primal' ],
    cast: 'material, somatic, verbal',
    action: '3',
    duration: 'sustained up to 1 minute',
    text: 'You conjure an elemental to fight for you. This works like summon animal, except you summon a common creature that has the elemental trait and whose level is 1 or lower.  \r\n**Heightened (3rd)**  Level 2  \r\n**Heightened (4th)**  Level 3  \r\n**Heightened (5th)**  Level 5  \r\n**Heightened (6th)**  Level 7  \r\n**Heightened (7th)**  Level 9  \r\n**Heightened (8th)**  Level 11  \r\n**Heightened (9th)**  Level 13  \r\n**Heightened (10th)**  Level 15',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=333',
    name: 'Telekinetic Manuever',
    traits: [ 'attack', 'evocation', 'force' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 377',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '60 feet',
    targets: '1 creature',
    text: 'With a rush of telekinetic power, you move a foe or something they carry. You can attempt to Disarm, Shove, or Trip the target using a spell attack roll instead of an Athletics check.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=341',
    name: 'Touch of Idiocy',
    traits: [ 'enchantment', 'mental' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 378',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 living creature',
    'saving throw': 'Will',
    duration: '1 minute',
    text: 'You dull the target\'s mind; the target must attempt a Will save.  \r\n**Success**  The target is unaffected.  \r\n**Failure**  The target is stupefied 2.  \r\n**Critical Failure**  The target is stupefied 4.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=370',
    name: 'Water Breathing',
    traits: [ 'transmutation' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 384',
    traditions: [ 'arcane', 'divine', 'primal' ],
    cast: '1 minute (somatic, verbal)',
    range: '30 feet',
    targets: 'up to 5 creatures',
    duration: '1 hour',
    text: 'The targets can breathe underwater.  \r\n**Heightened (3rd)**  The duration increases to 8 hours.  \r\n**Heightened (4th)**  The duration increases to until your next daily preparations.',
    components: [ '1minute(somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=371',
    name: 'Water Walk',
    traits: [ 'transmutation' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 384',
    traditions: [ 'arcane', 'divine', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    duration: '10 minutes',
    text: 'The target can walk on the surface of water and other liquids without falling through. It can go underwater if it wishes, but in that case it must Swim normally. This spell doesn\'t grant the ability to breathe underwater.  \r\n**Heightened (4th)**  The spell\'s range increases to 30 feet, the duration increases to 1 hour, and you can target up to 10 creatures.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=374',
    name: 'Web',
    traits: [ 'conjuration' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 384',
    traditions: [ 'arcane', 'primal' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: '30 feet',
    area: '10-foot burst',
    duration: '1 minute',
    text: 'You create a sticky web in the area that impedes creatures\' movement each time they try to move through it. Squares filled with the web are difficult terrain. Each square can be cleared of the web by a single attack or effect that deals at least 5 slashing damage or 1 fire damage. A square has AC 5, and it automatically fails its saving throws. Each time a creature in the web begins to use a move action or enters the web during a move action, it must attempt an Athletics check or Reflex save against your spell DC to avoid taking a circumstance penalty to its Speeds or becoming immobilized. A creature that gets out of the web ceases to take a circumstance penalty to its Speed from the web.  \r\n**Critical Success**  The creature is unaffected, and it doesn\'t need to attempt further Athletics checks or saving throws against the web this turn. If it used an Athletics check, it clears the web from every square it leaves after leaving the square.  \r\n**Success**  The creature is unaffected during its action. If it used an Athletics check, it clears the web from every square it leaves after leaving the square.  \r\n**Failure**  The creature takes a -10-foot circumstance penalty to its Speeds until the start of its next turn.  \r\n**Critical Failure**  The creature is immobilized until the start of its next turn, after which it takes a -10-foot circumstance penalty to its Speeds for 1 round. It can attempt to Escape to remove its immobilized condition.  \r\n**Heightened (4th)**  The spell\'s area increases to a 20-foot burst, and its range increases to 60 feet.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=22',
    name: 'Bind Undead',
    traits: [ 'necromancy' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 321',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 mindless undead creature with a level no greater than bind undead\'s spell level',
    duration: '1 day',
    text: 'With a word of necromantic power, you seize control of the target. It gains the minion trait. If you or an ally uses any hostile actions against the target, the spell ends.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=26',
    name: 'Blindness',
    traits: [ 'incapacitation', 'necromancy' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 321',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Fortitude',
    text: 'You blind the target. The effect is determined by the target\'s Fortitude save. The target then becomes temporarily immune for 1 minute.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is blinded until its next turn begins.  \r\n**Failure**  The target is blinded for 1 minute.  \r\n**Critical Failure**  The target is blinded permanently.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=39',
    name: 'Clairaudience',
    traits: [ 'divination', 'scrying' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 324',
    traditions: [ 'arcane', 'occult' ],
    cast: '1 minute (material, somatic, verbal)',
    range: '500 feet',
    duration: '10 minutes',
    text: 'You create an invisible floating ear at a location within range (even if it\'s outside your line of sight or line of effect). It can\'t move, but you can hear through the ear as if using your normal auditory senses.',
    components: [ '1minute(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=90',
    name: 'Dream Message',
    traits: [ 'enchantment', 'mental' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 333',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: '10 minutes (somatic, verbal)',
    range: 'planetary',
    targets: '1 creature you know by name and have met in person',
    duration: '1 day',
    text: 'You send a message to your target\'s dream. The message is one-way, up to 1 minute of speech (roughly 150 words). If the target is asleep, they receive the message instantly. If not, they receive it the next time they sleep. As soon as they receive it, the spell ends, and you know the message was sent.  \r\n**Heightened (4th)**  You can target up to 10 creatures you know by name and have met in person. You must send the same message to all of them; the spell ends for each creature individually.',
    components: [ '10minutes(somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=94',
    name: 'Earthbind',
    traits: [ 'transmutation' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 334',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    'saving throw': 'Fortitude',
    duration: 'varies',
    text: 'Using the weight of earth, you hamper a target\'s flight, with effects based on its Fortitude save. If the creature reaches the ground safely, it doesn\'t take falling damage.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target falls safely up to 120 feet.  \r\n**Failure**  The target falls safely up to 120 feet. If it hits the ground, it can\'t Fly, levitate, or otherwise leave the ground for 1 round.  \r\n**Critical Failure**  The target falls safely up to 120 feet. If it hits the ground, it can\'t Fly, levitate, or otherwise leave the ground for 1 minute.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=104',
    name: 'Enthrall',
    traits: [ 'auditory', 'emotion', 'enchantment' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 336',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    targets: 'all creatures in range',
    'saving throw': 'Will',
    duration: 'sustained',
    text: 'Your words fascinate your targets. You speak or sing without interruption throughout the casting and duration. Targets who notice your speech or song might give their undivided attention; each target must attempt a Will save. The GM might grant a circumstance bonus (to a maximum of +4) if the target is of an opposing religion, ancestry, or political leaning, or is otherwise unlikely to agree with what you\'re saying. Each creature that comes within range has to attempt a save when you Sustain the Spell. If you\'re speaking, enthrall gains the linguistic trait.  \r\n**Critical Success**  The target is unaffected and notices that you tried to use magic.  \r\n**Success**  The target needn\'t pay attention but doesn\'t notice you tried to use magic (it might notice others are enthralled).  \r\n**Failure**  The target is fascinated with you. It can attempt another Will save if it witnesses actions or speech with which it disagrees. If it succeeds, it\'s no longer fascinated and is temporarily immune for 1 hour. If the target is subject to a hostile act, or if another creature succeeds at a Diplomacy or Intimidation check against it, the fascination ends immediately.  \r\n**Critical Failure**  As failure, but the target can\'t attempt a save to end the fascination if it disagrees with you.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=113',
    name: 'Feet to Fins',
    traits: [ 'morph', 'transmutation' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 337',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 willing creature',
    duration: '10 minutes',
    text: 'The target\'s feet transform into fins, improving mobility in the water but reducing it on land. The target gains a swim Speed equal to its normal land Speed, but its land Speed becomes 5 feet.  \r\n**Heightened (6th)**  The spell lasts until the next time you make your daily preparations.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=119',
    name: 'Fireball',
    traits: [ 'evocation', 'fire' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 338',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '500 feet',
    area: '20-foot burst',
    'saving throw': 'basic Reflex',
    text: 'A roaring blast of fire appears at a spot you designate, dealing 6d6 fire damage.  \r\n**Heightened (+1)**  The damage increases by 2d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=133',
    name: 'Ghostly Weapon',
    traits: [ 'transmutation' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 340',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 non-magical weapon that is either unattended or wielded by you or a willing ally',
    duration: '5 minutes',
    text: 'The target weapon becomes translucent and ghostly, and it can affect material and incorporeal creatures and objects. It can be wielded by a corporeal or incorporeal creature and gains the effects of the ghost touch property rune.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=138',
    name: 'Glyph of Warding',
    traits: [ 'abjuration' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 341',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: '10 minutes (material, somatic, verbal)',
    range: 'touch',
    targets: '1 container or a 10-foot-by-10-foot area',
    duration: 'unlimited',
    text: 'You craft a trap by binding a hostile spell into a symbol. While Casting this Spell, you also Cast a Spell of a lower spell level to store in the glyph. The stored spell must take 3 actions or fewer to cast, have a hostile effect, and target one creature or have an area. You can set a password, a trigger, or both for the glyph. Any creature that moves, opens, or touches the target container or enters the target area that doesn\'t speak the password or that matches the trigger activates the glyph, releasing the harmful spell within. Once a spell is stored in the glyph, the glyph gains all the traits of that spell. If the stored spell targets one or more creatures, it targets the creature that set off the glyph. If it has an area, that area is centered on the creature that set off the glyph. Glyph of warding\'s duration ends when the glyph is triggered. The glyph counts as a magical trap, using your spell DC for both the Perception check to notice it and the Thievery check to disable it; both checks require the creature attempting them to be trained in order to succeed. You can Dismiss glyph of warding. The maximum number of glyphs of warding you can have active at a time is equal to your spellcasting ability modifier.',
    components: [ '10minutes(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=147',
    name: 'Haste',
    traits: [ 'transmutation' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 342',
    traditions: [ 'arcane', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    duration: '1 minute',
    text: 'Magic empowers the target to act faster. It gains the quickened condition and can use the extra action each round only for Strike and Stride actions.  \r\n**Heightened (7th)**  You can target up to 6 creatures.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=157',
    name: 'Hypnotic Pattern',
    traits: [ 'illusion', 'visual' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 344',
    traditions: [ 'arcane', 'occult' ],
    cast: 'material, somatic',
    action: '2',
    range: '120 feet',
    area: '10-foot burst',
    'saving throw': 'Will',
    duration: 'sustained up to 1 minute',
    text: 'You create a pattern of shifting colors that hovers in the air in a geometric cloud. Creatures are dazzled while inside the pattern. In addition, a creature must attempt a Will saving throw if it is inside the pattern when you cast it, when it enters the pattern, when it ends its turn within the pattern, or if it uses a Seek or Interact action on the pattern. A creature currently fascinated by the pattern doesn\'t attempt new saves.  \r\n**Success**  The target is unaffected.  \r\n**Failure**  The target is fascinated by the pattern.  \r\n**Critical Failure**  The target is fascinated by the pattern. While it remains fascinated, it can\'t use reactions.',
    components: [ 'material', 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=165',
    name: 'Invisibility Sphere',
    traits: [ 'illusion' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 347',
    traditions: [ 'arcane', 'occult' ],
    cast: 'material, somatic',
    action: '2',
    area: '10-foot emanation',
    targets: 'you and any number of creatures in range',
    duration: '10 minutes',
    text: 'You and all targets are invisible except to each other as long as you remain within the spell\'s area. If a creature made invisible by this spell leaves the spell\'s area, it becomes visible and remains so even if it returns to the spell\'s area. If any creature made invisible by this spell uses a hostile action, the spell ends after the hostile action is completed. While exploring, it\'s easy to move together slowly and remain invisible. This is untenable in a battle, however. Once an encounter begins, creatures remain invisible until at most the end of the first round, at which point the spell ends.  \r\n**Heightened (5th)**  The duration increases to 1 hour.',
    components: [ 'material', 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=170',
    manual: true,
    name: 'Levitate',
    traits: [ 'evocation' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 348',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 unattended object or willing creature',
    duration: '5 minutes',
    text: 'You defy gravity and levitate the target 5 feet off the ground. For the duration of the spell, you can move the target up or down 10 feet with a single action, which has the concentrate trait. A creature floating in the air from levitate takes a -2 circumstance penalty to attack rolls. A floating creature can spend an Interact action to stabilize itself and negate this penalty for the remainder of its turn. If the target is adjacent to a fixed object or terrain of suitable stability, it can move across the surface by climbing (if the surface is vertical, like a wall) or crawling (if the surface is horizontal, such as a ceiling). The GM determines which surfaces can be climbed or crawled across.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=172',
    name: 'Lightning Bolt',
    traits: [ 'electricity', 'evocation' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 348',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '120-foot line',
    'saving throw': 'basic Reflex',
    text: 'A bolt of lightning strikes outward from your hand, dealing 4d12 electricity damage.  \r\n**Heightened (+1)**  The damage increases by 1d12.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=173',
    name: 'Locate',
    traits: [ 'uncommon', 'detection', 'divination' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 348',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: '10 minutes (material, somatic, verbal)',
    range: '500 feet',
    targets: '1 specific object or type of object',
    duration: 'sustained',
    text: 'You learn the direction to the target (if you picked a specific object, such as "my mother\'s sword") or the nearest target (if you picked a type of object, such as "swords"). If the target is a specific object, you must have observed it directly with your own senses. If it\'s a type of object, you still need to have an accurate mental image of the type of object. If there\'s lead or running water between you and the target, this spell can\'t locate the object. This means you might find a type of object farther away if the nearest one is behind lead or running water.  \r\n**Heightened (5th)**  You can target a specific creature or ancestry instead of an object, but you must have met or seen up close the creature or ancestry you want to target.',
    components: [ '10minutes(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=188',
    name: 'Meld into Stone',
    traits: [ 'earth', 'transmutation' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 350',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '10 minutes',
    text: 'You merge with an adjacent block of stone with enough volume to fit you and your worn and held possessions. You must touch the stone when you Cast the Spell. You can hear, but not see, what\'s going on outside the stone, and you can cast spells while in the stone as long as they don\'t require line of effect beyond the stone. Significant physical damage to the stone while you are inside it expels you and deals 10d6 damage to you. Passwall expels you without dealing damage and ends meld into stone. You can Dismiss this spell.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=194',
    name: 'Mind Reading',
    traits: [ 'uncommon', 'detection', 'divination', 'mental' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 351',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: '1 round or sustained up to 1 minute',
    text: 'With a cursory mental touch, you attempt to read the target\'s mind. It must attempt a Will save. The target then becomes temporarily immune to your mind reading for 1 hour.  \r\n**Critical Success**  The target perceives vague surface thoughts from you when you Cast the Spell.  \r\n**Success**  You find out whether the target\'s Intelligence modifier is higher than, equal to, or lower than yours.  \r\n**Failure**  You perceive vague surface thoughts from the target when you Cast the Spell, and you find out whether its Intelligence modifier is higher than, equal to, or lower than yours.  \r\n**Critical Failure**  As failure, and for the duration of the spell, you can Sustain the Spell to detect the target\'s surface thoughts again. The target doesn\'t receive any additional saves.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=209',
    name: 'Nondetection',
    traits: [ 'uncommon', 'abjuration' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 355',
    traditions: [ 'arcane', 'occult', 'primal' ],
    cast: '10 minutes (material, somatic, verbal)',
    range: 'touch',
    targets: '1 creature or object',
    duration: '8 hours',
    text: 'You erect protective wards that make the target difficult to detect via magic. Nondetection attempts to counteract all detection, revelation, and scrying divinations made against the target or the target\'s gear throughout the duration, counting cantrips as 1st-level spells for this purpose. Successfully counteracting a divination that targets an area or multiple targets negates the effects only for nondetection\'s target.',
    components: [ '10minutes(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=213',
    name: 'Paralyze',
    traits: [ 'enchantment', 'incapacitation', 'mental' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 356',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: 'varies',
    text: 'You block the target\'s motor impulses before they can leave its mind, threatening to freeze the target in place. The target must attempt a Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is stunned 1.  \r\n**Failure**  The target is paralyzed for 1 round.  \r\n**Critical Failure**  The target is paralyzed for 4 rounds. At the end of each of its turns, it can attempt a new Will save to reduce the remaining duration by 1 round, or end it entirely on a critical success.  \r\n**Heightened (7th)**  You can target up to 10 creatures.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=270',
    name: 'Secret Page',
    traits: [ 'illusion', 'visual' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 367',
    traditions: [ 'arcane', 'occult' ],
    cast: '1 minute (material, somatic, verbal)',
    range: 'touch',
    targets: '1 page up to 3 square feet in size',
    duration: 'unlimited',
    text: 'You change the target\'s text to different text entirely. If the text is a spellbook or a scroll, you can change it to show a spell you know of secret page\'s level or lower. The replacement spell cannot be cast or used to prepare a spell. You can also transform the text into some other text you have written or have access to. You can specify a password that allows a creature touching the page to change the text back and forth. You must choose the replacement text and the password, if any, when you Cast the Spell.',
    components: [ '1minute(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=285',
    name: 'Shrink Item',
    traits: [ 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 369',
    traditions: [ 'arcane' ],
    cast: '10 minutes (somatic, verbal)',
    range: 'touch',
    targets: '1 non-magical object up to 20 cubic feet in volume and up to 80 Bulk',
    duration: '1 day',
    text: 'You shrink the target to roughly the size of a coin. This reduces it to negligible Bulk. You can Dismiss the spell, and the spell ends if you toss the object onto a solid surface. The object can\'t be used to attack or cause damage during the process of it returning to normal size. If there isn\'t room for the object to return to normal size when the spell ends, the spell\'s duration continues until the object is in a location large enough to accommodate its normal size.',
    components: [ '10minutes(somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=289',
    name: 'Slow',
    traits: [ 'transmutation' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 370',
    traditions: [ 'arcane', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Fortitude',
    duration: '1 minute',
    text: 'You dilate the flow of time around the target, slowing its actions.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is slowed 1 for 1 round.  \r\n**Failure**  The target is slowed 1 for 1 minute.  \r\n**Critical Failure**  The target is slowed 2 for 1 minute.  \r\n**Heightened (6th)**  You can target up to 10 creatures.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=309',
    name: 'Stinking Cloud',
    traits: [ 'conjuration', 'poison' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 373',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    area: '20-foot burst',
    'saving throw': 'Fortitude',
    duration: '1 minute',
    text: 'You create a cloud of putrid mist in the area. The cloud functions as obscuring mist except it sickens creatures that end their turns within the cloud. (The concealed condition is not a poison effect.)  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature is sickened 1.  \r\n**Failure**  The creature is sickened 1 and slowed 1 while in the cloud.  \r\n**Critical Failure**  The creature is sickened 2 and slowed 1 until it leaves the cloud.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=354',
    name: 'Vampiric Touch',
    traits: [ 'death', 'necromancy', 'negative' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 380',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 living creature',
    'saving throw': 'basic Fortitude',
    text: 'Your touch leeches the lifeblood out of a target to empower yourself. You deal 6d6 negative damage to the target. You gain temporary Hit Points equal to half the negative damage the target takes (after applying resistances and the like). You lose any remaining temporary Hit Points after 1 minute.  \r\n**Heightened (+1)**  The damage increases by 2d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=367',
    name: 'Wall of Wind',
    traits: [ 'air', 'evocation' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 383',
    traditions: [ 'arcane', 'primal' ],
    cast: 'material, somatic, verbal',
    action: '2',
    range: '120 feet',
    duration: '1 minute',
    text: 'You create a barrier of gusting winds that hinders anything moving through it. The wall of swirling winds is 5 feet thick, 60 feet long, and 30 feet high. The wall stands vertically, but you can shape its path. Though the wall of wind distorts the air, it does not hamper sight. The wall has the following effects. Ammunition from physical ranged attacks-such as arrows, bolts, sling bullets, and other objects of similar size-can\'t pass through the wall. Attacks with bigger ranged weapons, such as javelins, take a -2 circumstance penalty to their attack rolls if their paths pass through the wall. Massive ranged weapons and spell effects that don\'t create physical objects pass through the wall with no penalty. The wall is difficult terrain to creatures attempting to move overland through it. Gases, including creatures in gaseous form, can\'t pass through the wall. A creature that attempts to fly through the wall using a move action must attempt a Fortitude save.  \r\n**Critical Success**  The creature can move through the wall normally this turn.  \r\n**Success**  The flying creature can move through the wall this turn, but the wall is difficult terrain.  \r\n**Failure**  The wall stops the movement of the flying creature, and any remaining movement from its current action is wasted.  \r\n**Critical Failure**  As failure, and the creature is pushed 10 feet away from the wall.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=4',
    manual: true,
    name: 'Aerial Form',
    traits: [ 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 316',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute',
    text: 'You harness your mastery of primal forces to reshape your body into a Medium flying animal battle form. When you cast this spell, choose bat, bird, pterosaur, or wasp. You can decide the specific type of animal (such as an owl or eagle for bird), but this has no effect on the form\'s Size or statistics. While in this form, you gain the animal trait. You can Dismiss the spell. You gain the following statistics and abilities regardless of which battle form you choose:  \r\n * AC = 18 + your level. Ignore your armor\'s check penalty and Speed reduction.\r\n * 5 temporary Hit Points.\r\n * Low-light vision.\r\n * One or more unarmed melee attacks specific to the battle form you choose, which are the only attacks you can use. You\'re trained with them. Your attack modifier is +16, and your damage bonus is +5. These attacks are Dexterity based (for the purpose of the clumsy condition, for example). If your attack modifier for Dexterity-based unarmed attacks is higher, you can use it instead.\r\n * Acrobatics modifier of +16, unless your own modifier is higher.\r\n  \r\nYou also gain specific abilities based on the form you choose:  \r\n * **Bat** Speed 20 feet, fly Speed 30 feet; precise echolocation 40 feet; **Melee** |1| fangs, **Damage** 2d8 piercing; **Melee** |1| wing (agile), **Damage** 2d6 bludgeoning.\r\n * **Bird** Speed 10 feet, fly Speed 50 feet; **Melee** |1| beak, **Damage** 2d8 piercing; **Melee** |1| talon (agile), **Damage** 1d10 slashing.\r\n * **Pterosaur** Speed 10 feet, fly Speed 40 feet; imprecise scent 30 feet; **Melee** |1| beak, **Damage** 3d6 piercing.\r\n * **Wasp** Speed 20 feet, fly Speed 40 feet; **Melee** |1| stinger, **Damage** 1d8 piercing plus 1d6 persistent poison.\r\n  \r\n**Heightened (5th)**  Your battle form is Large and your fly Speed gains a +10-foot status bonus. You must have enough space to expand into or the spell is lost. You instead gain 10 temporary HP, attack modifier +18, damage bonus +8, and Acrobatics +20.  \r\n**Heightened (6th)**  Your battle form is Huge, your fly Speed gains a +15-foot status bonus, and your attacks have 10-foot reach. You must have enough space to expand into or the spell is lost. You instead gain AC = 21 + your level, 15 temporary HP, attack modifier +21, damage bonus +4 and double damage dice (including persistent damage), and Acrobatics +23.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=27',
    name: 'Blink',
    traits: [ 'conjuration', 'teleportation' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 321',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute',
    text: 'You blink quickly between the Material Plane and the Ethereal Plane. You gain resistance 5 to all damage (except force). You can Sustain the Spell to vanish and reappear 10 feet away in a random direction determined by the GM; the movement doesn\'t trigger reactions. At the end of your turn, you vanish and reappear as above.  \r\n**Heightened (+2)**  The resistance increases by 3.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=40',
    name: 'Clairvoyance',
    traits: [ 'divination', 'scrying' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 324',
    traditions: [ 'arcane', 'occult' ],
    cast: '1 minute (material, somatic, verbal)',
    action: '2',
    range: '500 feet',
    duration: '10 minutes',
    text: 'You create an invisible floating eye at a location within range (even if it\'s outside your line of sight or line of effect). The eye can\'t move, but you can see in all directions from that point as if using your normal visual senses.',
    components: [ '1minute(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=48',
    name: 'Confusion',
    traits: [ 'emotion', 'enchantment', 'mental' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 325',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: '1 minute',
    text: 'You befuddle your target with strange impulses, causing it to act randomly. The effects are determined by the target\'s Will save. You can Dismiss the spell.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target babbles incoherently and is stunned 1.  \r\n**Failure**  The target is confused for 1 minute. It can attempt a new save at the end of each of its turns to end the confusion.  \r\n**Critical Failure**  The target is confused for 1 minute, with no save to end early.  \r\n**Heightened (8th)**  You can target up to 10 creatures.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=54',
    name: 'Creation',
    traits: [ 'conjuration' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 326',
    traditions: [ 'arcane', 'primal' ],
    cast: '1 minute (material, somatic, verbal)',
    range: '0 feet',
    duration: '1 hour',
    text: 'You conjure a temporary object from eldritch energy. It must be of vegetable matter (such as wood or paper) and 5 cubic feet or smaller. It can\'t rely on intricate artistry or complex moving parts, never fulfills a cost or the like, and can\'t be made of precious materials or materials with a rarity of uncommon or higher. It is obviously temporarily conjured, and thus can\'t be sold or passed off as a genuine item.  \r\n**Heightened (5th)**  The item is metal and can include common minerals, like feldspar or quartz.',
    components: [ '1minute(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=68',
    name: 'Detect Scrying',
    traits: [ 'uncommon', 'detection', 'divination' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 328',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '30-foot emanation',
    duration: '1 hour',
    text: 'By tapping into trace divinatory auras, you detect the presence of scrying effects in the area. If detect scrying is higher level than a scrying effect, you gain a glimpse of the scrying creature and learn its approximate distance and direction.  \r\n**Heightened (6th)**  The duration is until the next time you make your daily preparations.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=69',
    name: 'Dimension Door',
    traits: [ 'conjuration', 'teleportation' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 328',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    text: 'Opening a door that bypasses normal space, you instantly transport yourself and any items you\'re wearing and holding from your current space to a clear space within range you can see. If this would bring another creature with you-even if you\'re carrying it in an extradimensional container-the spell is lost.  \r\n**Heightened (5th)**  The range increases to 1 mile. You don\'t need to be able to see your destination, as long as you have been there in the past and know its relative location and distance from you. You are temporarily immune for 1 hour.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=70',
    name: 'Dimensional Anchor',
    traits: [ 'abjuration' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 329',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: 'varies',
    text: 'You interfere with the target\'s ability to teleport and travel between dimensions. Dimensional anchor attempts to counteract any teleportation effect, or any effect that would move the target to a different plane. The duration is determined by the target\'s Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The effect\'s duration is 1 minute.  \r\n**Failure**  The effect\'s duration is 10 minutes.  \r\n**Critical Failure**  The effect\'s duration is 1 hour.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=74',
    name: 'Discern Lies',
    traits: [ 'uncommon', 'divination', 'mental', 'revelation' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 330',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '10 minutes',
    text: 'Falsehoods ring in your ears like discordant notes. You gain a +4 status bonus to Perception checks when someone Lies.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=118',
    name: 'Fire Shield',
    traits: [ 'evocation', 'fire' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 338',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute',
    text: 'You wreathe yourself in ghostly flames, gaining cold resistance 5. Additionally, adjacent creatures that hit you with a melee attack, as well as creatures that touch you or hit you with an unarmed attack, take 2d6 fire damage each time they do.  \r\n**Heightened (+2)**  The cold resistance increases by 5, and the fire damage increases by 1d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=125',
    name: 'Fly',
    traits: [ 'transmutation' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 338',
    traditions: [ 'arcane', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    duration: '5 minutes',
    text: 'The target can soar through the air, gaining a fly Speed equal to its Speed or 20 feet, whichever is greater.  \r\n**Heightened (7th)**  The duration increases to 1 hour.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=128',
    name: 'Freedom of Movement',
    traits: [ 'abjuration' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 340',
    traditions: [ 'arcane', 'divine', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature touched',
    duration: '10 minutes',
    text: 'You repel effects that would hinder a creature or slow its movement. While under this spell\'s effect, the target ignores effects that would give them a circumstance penalty to Speed. When they attempt to Escape an effect that has them immobilized, grabbed, or restrained, they automatically succeed unless the effect is magical and of a higher level than the freedom of movement spell.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=129',
    name: 'Gaseous Form',
    traits: [ 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 340',
    traditions: [ 'arcane', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 willing creature',
    duration: '5 minutes',
    text: 'The target transforms into a vaporous state. In this state, the target is amorphous and loses any item bonus to AC. It gains resistance 8 to physical damage and is immune to precision damage. It can\'t cast spells, activate items, or use actions that have the attack or manipulate trait. It gains a fly Speed of 10 feet and can slip through tiny cracks. The target can Dismiss the spell.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=137',
    name: 'Globe of Invulnerability',
    traits: [ 'abjuration' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 341',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '10-foot burst centered on one corner of your space',
    duration: '10 minutes',
    text: 'You create an immobile globe around yourself that attempts to counteract any spell from outside the globe whose area or targets enter into the globe, as if the globe were a dispel magic spell 1 level lower than its actual spell level. If the counteract attempt succeeds, it prevents only the portion of the spell that would have entered the globe (so if the spell also has targets outside the globe, or part of its area is beyond the globe, those targets or that area is affected normally). You must form the sphere in an unbroken open space, so its edges don\'t pass through any creatures or objects, or the spell is lost (though creatures can enter the globe after the spell is cast).',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=145',
    name: 'Hallucinatory Terrain',
    traits: [ 'uncommon', 'illusion' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 342',
    traditions: [ 'arcane', 'occult', 'primal' ],
    cast: '10 minutes (material, somatic, verbal)',
    range: '500 feet',
    area: '50-foot burst',
    duration: 'until the next time you make your daily preparations',
    text: 'You create an illusion that causes natural terrain to look, sound, feel, and smell like a different kind of terrain. This doesn\'t disguise any structures or creatures in the area. Any creature that touches the illusion or uses the Seek action to examine it can attempt to disbelieve your illusion.  \r\n**Heightened (5th)**  Your image can also disguise structures or create illusory structures (but still doesn\'t disguise creatures).',
    components: [ '10minutes(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=208',
    name: 'Nightmare',
    traits: [ 'illusion', 'mental' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 354',
    traditions: [ 'arcane', 'occult' ],
    cast: '10 minutes (material, somatic, verbal)',
    range: 'planetary',
    targets: '1 creature you know by name',
    'saving throw': 'Will',
    duration: '1 day',
    text: 'You send disturbing nightmares to your target. The next time the target falls asleep, it must attempt a Will save. If you know the target only by name and have never met them, the target gets a +4 circumstance bonus to the Will save.  \r\n**Critical Success**  The target suffers no adverse effects and is temporarily immune for 1 week.  \r\n**Success**  The target experiences the nightmares but suffers no adverse effects other than unpleasant memories.  \r\n**Failure**  The target experiences the nightmares and awakens fatigued.  \r\n**Critical Failure**  The target experiences the nightmares, awakens fatigued, and is drained 2 until it is no longer fatigued.',
    components: [ '10minutes(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=211',
    name: 'Outcast\'s Curse',
    traits: [ 'attack', 'curse', 'enchantment', 'mental', 'misfortune' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 355',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    'saving throw': 'Will',
    text: 'You afflict the target with a curse that makes its presence abrasive and off -putting. The target must attempt a Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  For 10 minutes, the target must roll twice and use the worse result whenever attempting a Deception, Diplomacy, Intimidation, or Performance check, and creatures they encounter have an initial attitude toward them of one step worse (for instance, unfriendly instead of indifferent).  \r\n**Failure**  As success, but the effect is permanent.  \r\n**Critical Failure**  As failure, and creatures that the target encounters have an initial attitude toward them of two steps worse.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=219',
    name: 'Phantasmal Killer',
    traits: [ 'death', 'emotion', 'fear', 'illusion', 'mental' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 357',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    targets: '1 living creature',
    'saving throw': 'Will',
    text: 'You create a phantasmal image of the most fearsome creature imaginable to the target. Only the spell\'s target can see the killer, though you can see the vague shape of the illusion as it races forth to attack. The effect of the killer is based on the outcome of the target\'s Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes 4d6 mental damage and is frightened 1.  \r\n**Failure**  The target takes 8d6 mental damage and is frightened 2.  \r\n**Critical Failure**  The target is so afraid it might die. It must attempt a Fortitude save; if the target fails, it dies. On a successful Fortitude save, the target takes 12d6 mental damage, is fleeing until the end of its next turn, and is frightened 4. This effect has the incapacitation trait.  \r\n**Heightened (+1)**  The damage increases by 2d6 on a failure and by 3d6 on a critical failure.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=235',
    name: 'Private Sanctum',
    traits: [ 'uncommon', 'abjuration' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 360',
    traditions: [ 'arcane', 'occult' ],
    cast: '10 minutes (material, somatic, verbal)',
    range: 'touch',
    area: '100-foot burst',
    duration: '24 hours',
    text: 'From outside, the area looks like a bank of impenetrable black fog. Sensory stimuli (such as sounds, smells, and light) don\'t pass from inside the area to outside the area. Scrying spells can\'t perceive any stimuli from the area, and mind-reading effects don\'t work in the area.',
    components: [ '10minutes(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=255',
    name: 'Resilient Sphere',
    traits: [ 'abjuration', 'force' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 364',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 Large or smaller creature',
    duration: '1 minute',
    text: 'You create an immobile sphere of force to either trap or protect the target, blocking anything that would pass through the sphere. The sphere has AC 5, Hardness 10, and 40 Hit Points. It\'s immune to critical hits and precision damage. Disintegrate destroys the sphere instantly. If the target is unwilling, the effects of the sphere depend on the target\'s Reflex save.  \r\n**Critical Success**  The target disrupts the sphere\'s integrity, causing it to collapse entirely.  \r\n**Success**  The sphere functions normally but has only 10 Hit Points instead of 40.  \r\n**Failure**  The sphere has its normal effect.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=264',
    name: 'Rope Trick',
    traits: [ 'uncommon', 'conjuration', 'extradimensional' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 366',
    traditions: [ 'arcane', 'occult' ],
    cast: '10 minutes (material, somatic, verbal)',
    range: 'touch',
    targets: '1 touched piece of rope from 5 to 30 feet long',
    duration: '8 hours',
    text: 'You cause the target rope to rise vertically into the air. Where it ends, an extradimensional space opens, connected to the top of the rope. This space can be reached only by climbing the rope.The entrance to the space can\'t be seen, and it can be pinpointed only by the presence of the rope. The rope can\'t be removed or hidden, though it can be detached from the extradimensional space by pulling it with 16,000 pounds of weight, critically succeeding at an Athletics check against the spell\'s DC, or destroying the rope. The space holds up to eight Medium creatures and their gear. A Large creature counts as two Medium creatures, a Huge creature counts as four Medium creatures, and a Gargantuan creature fills the space on its own.If the rope is detached or destroyed, or if a creature attempts to enter the space that would put it over its capacity, the space begins to unravel. It disappears in 1d4 rounds, depositing the creatures within safely on the ground below.',
    components: [ '10minutes(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=276',
    name: 'Shape Stone',
    traits: [ 'earth', 'transmutation' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 368',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: 'cube of stone 10 feet across or smaller',
    text: 'You shape the stone into a rough shape of your choice. The shaping process is too crude to produce intricate parts, fine details, moving pieces, or the like. Any creatures standing atop the stone when you reshape it must each attempt a Reflex save or Acrobatics check.  \r\n**Success**  The creature is unaffected.  \r\n**Failure**  The creature falls prone atop the stone.  \r\n**Critical Failure**  The creature falls off the stone (if applicable) and lands prone.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=290',
    name: 'Solid Fog',
    traits: [ 'conjuration', 'transmutation', 'water' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 370',
    traditions: [ 'arcane', 'primal' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: '120 feet',
    area: '20-foot burst',
    duration: '1 minute',
    text: 'You conjure a bank of fog so thick it impedes movement as well as sight. This functions as obscuring mist, except that the area is also difficult terrain. You can Dismiss the spell.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=296',
    name: 'Spell Immunity',
    traits: [ 'abjuration' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 371',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    duration: '24 hours',
    text: 'You ward a creature against the effects of a single spell. Choose a spell and name it aloud as part of the verbal component. Spell immunity attempts to counteract that spell whenever spell immunity\'s target is the target of the named spell or in that spell\'s area. Successfully counteracting a spell that targets an area or multiple targets with spell immunity negates the effects only for the target affected by spell immunity.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=312',
    name: 'Stoneskin',
    traits: [ 'abjuration', 'earth' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 374',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    duration: '20 minutes',
    text: 'The target\'s skin hardens like stone. It gains resistance 5 to physical damage, except adamantine. Each time the target is hit by a bludgeoning, piercing, or slashing attack, stoneskin\'s duration decreases by 1 minute.  \r\n**Heightened (6th)**  The resistance increases to 10.  \r\n**Heightened (8th)**  The resistance increases to 15.  \r\n**Heightened (10th)**  The resistance increases to 20.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=315',
    name: 'Suggestion',
    traits: [ 'enchantment', 'incapacitation', 'linguistic', 'mental' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 374',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: 'varies',
    text: 'Your honeyed words are difficult for creatures to resist. You suggest a course of action to the target, which must be phrased in such a way as to seem like a logical course of action to the target and can\'t be self-destructive or obviously against the target\'s self-interest. The target must attempt a Will save.  \r\n**Critical Success**  The target is unaffected and knows you tried to control it.  \r\n**Success**  The target is unaffected and thinks you were talking to them normally, not casting a spell on them.  \r\n**Failure**  The target immediately follows your suggestion. The spell has a duration of 1 minute, or until the target has completed a finite suggestion or the suggestion becomes self-destructive or has other obvious negative effects.  \r\n**Critical Failure**  As failure, but the base duration is 1 hour.  \r\n**Heightened (8th)**  You can target up to 10 creatures.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=337',
    name: 'Telepathy',
    traits: [ 'divination', 'linguistic', 'mental' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 377',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '10 minutes',
    text: 'You can communicate telepathically with creatures within 30 feet. Once you establish a connection by communicating with a creature, the communication is two-way. You can communicate only with creatures that share a language with you.  \r\n**Heightened (6th)**  Telepathy loses the linguistic trait. You can communicate telepathically with creatures using shared mental imagery even if you don\'t share a language.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=355',
    name: 'Veil',
    traits: [ 'illusion', 'visual' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 380',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: 'up to 10 creatures',
    duration: '1 hour',
    text: 'You disguise the targets as other creatures of the same body shape and roughly similar height (within 6 inches) and weight (within 50 pounds). The disguise can hide the targets\' identities or let them appear to be of another ancestry, but it\'s not precise enough to impersonate specific individuals. The spell doesn\'t change voice, scent, or mannerisms. You choose the disguise for each target; for example, you could make one target appear to be a dwarf and another an elf. Casting veil counts as setting up a disguise for the purpose of the Impersonate action. It allows the target to ignore any circumstance penalties they might take for being disguised as dissimilar creatures, and it gives the targets a +4 status bonus to Deception checks to prevent others from seeing through their disguises, and add their level even if untrained. You can Dismiss any or all of these disguises.  \r\n**Heightened (5th)**  The spell also disguises the targets\' voices and scents; it gains the auditory trait.  \r\n**Heightened (7th)**  The targets can appear as any creature of the same size, even specific individuals. You must have seen an individual to reproduce their appearance. The spell also disguises the targets\' voices and scents; it gains the auditory trait.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=362',
    name: 'Wall of Fire',
    traits: [ 'evocation', 'fire' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 382',
    traditions: [ 'arcane', 'primal' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: '120 feet',
    duration: '1 minute',
    text: 'You raise a blazing wall that burns creatures passing through it. You create either a 5-foot-thick wall of flame in a straight line up to 60 feet long and 10 feet high, or a 5-foot-thick, 10-foot-radius ring of flame with the same height. The wall stands vertically in either form; if you wish, the wall can be of a shorter length or height. Everything on each side of the wall is concealed from creatures on the opposite side. Any creature that crosses the wall or is occupying the wall\'s area at the start of its turn takes 4d6 fire damage.  \r\n**Heightened (+1)**  The fire damage increases by 1d6.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=373',
    name: 'Weapon Storm',
    traits: [ 'evocation' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 384',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '30-foot cone or 10-foot emanation',
    'saving throw': 'Reflex',
    text: 'You swing a weapon you\'re holding, and the weapon magically multiplies into duplicates that swipe at all creatures in either a cone or an emanation. This flurry deals four dice of damage to creatures in the area. This damage has the same type as the weapon and uses the same die size. Determine the die size as if you were attacking with the weapon; for instance, if you were wielding a two-hand weapon in both hands, you\'d use its two-hand damage die.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The target takes half damage.  \r\n**Failure**  The target takes full damage.  \r\n**Critical Failure**  The target takes double damage and is subject to the weapon\'s critical specialization effect.  \r\n**Heightened (+1)**  Add another damage die.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=19',
    name: 'Banishment',
    traits: [ 'abjuration', 'incapacitation' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 320',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature that isn\'t on its home plane',
    'saving throw': 'Will',
    text: 'You send the target back to its home plane. The target must attempt a Will save. You can spend an extra action while Casting this Spell and add a material component to give the creature a -2 circumstance penalty to its save. The component must be a specially gathered object that is anathema to the creature, and not from a spell component pouch. This spell fails if you aren\'t on your home plane when you cast it.  \r\n**Critical Success**  The target resists being banished and you are stunned 1.  \r\n**Success**  The target resists being banished.  \r\n**Failure**  The target is banished.  \r\n**Critical Failure**  The target is banished and can\'t return by any means to the plane it\'s banished from for 1 week.  \r\n**Heightened (9th)**  You can target up to 10 creatures. The extra material component affects targets to which it is anathema.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=23',
    name: 'Black Tentacles',
    traits: [ 'conjuration' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 321',
    traditions: [ 'arcane', 'occult' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: '120 feet',
    area: '20-foot burst adjacent to a flat surface',
    duration: '1 minute',
    text: 'Oily black tentacles rise up and attempt to Grapple each creature in the area. Make spell attack rolls against the Fortitude DC of each creature. Any creature you succeed against is grabbed and takes 3d6 bludgeoning damage. Whenever a creature ends its turn in the area, the tentacles attempt to grab that creature if they haven\'t already, and they deal 1d6 bludgeoning damage to any creature already grabbed. The tentacles\' Escape DC is equal to your spell DC. A creature can attack a tentacle in an attempt to release its grip. Its AC is equal to your spell DC, and it is destroyed if it takes 12 or more damage. Even if destroyed, additional tentacles continue to grow in the area until the duration ends. You can Dismiss the spell.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=37',
    name: 'Chromatic Wall',
    traits: [ 'abjuration' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 323',
    traditions: [ 'arcane', 'occult' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: '120 feet',
    duration: '10 minutes',
    text: 'You create an opaque wall of light in a single vibrant color. The wall is straight and vertical, stretching 60 feet long and 30 feet high. If the wall would pass through a creature, the spell is lost. The wall sheds bright light for 20 feet on each side, and dim light for the next 20 feet. You can ignore the wall\'s effects. Roll 1d4 to determine the color of the wall. Each color has a particular effect on items, effects, or creatures that attempt to pass through. Chromatic wall can\'t be counteracted normally; rather, each color is automatically counteracted when targeted by a specific spell, even if that spell\'s level is lower than that of chromatic wall. Red The wall destroys ranged weapon ammunition (such as arrows and crossbow bolts) that would pass through, and it deals 20 fire damage to anyone passing through, with a basic Reflex save. Cone of cold can counteract a red chromatic wall. Orange The wall destroys thrown weapons that would pass through, and it deals 25 acid damage to anyone passing through, with a basic Reflex save. Gust of wind can counteract an orange chromatic wall. Yellow The wall stops acid, cold, electricity, fire, force, negative, positive, and sonic effects from passing through, and it deals 30 electricity damage to anyone passing through, with a basic Reflex save. Disintegrate can counteract a yellow chromatic wall. Green The wall stops toxins, gases, and breath weapons from passing through. It deals 10 poison damage to anyone passing through and makes them enfeebled 1 for 1 minute. A basic Fortitude save reduces the damage and negates the enfeebled condition on a success. Passwall can counteract a green chromatic wall.  \r\n**Heightened (7th)**  The spell\'s duration increases to 1 hour. Roll 1d8 to determine the wall\'s color; the results for 5-8 are below. A red, orange, yellow, or green wall deals an extra 10 damage. Blue The wall stops auditory, petrification, and visual effects from passing through, and creatures passing through are subject to the effects of flesh to stone. Magic missile can counteract a blue chromatic wall. Indigo The wall stops divination and mental effects from passing through, and those passing through are subject to the effects of warp mind. Searing light can counteract an indigo chromatic wall. Violet The wall prevents spells from targeting the other side (area effects still cross as normal). Creatures passing through must succeed at a Will save or they are slowed 1 for 1 minute; on a critical failure, the creature is instead sent to another plane, with the effect of plane shift . Dispel magic can counteract a violet chromatic wall. Reroll, and creatures that pass through the wall take a -2 circumstance penalty to their saves.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=41',
    name: 'Cloak of Colors',
    traits: [ 'illusion', 'visual' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 324',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    duration: '1 minute',
    text: 'A cloak of swirling colors shrouds the target. Creatures are dazzled while adjacent to it, and attacking the target causes a brilliant flash of light. A creature that hits the target with a melee attack must attempt a Will save.The creature is temporarily immune until the end of its turn; this effect has the incapacitation trait.  \r\n**Success**  The attacker is unaffected.  \r\n**Failure**  The attacker is blinded for 1 round.  \r\n**Critical Failure**  The attacker is stunned for 1 round.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=42',
    name: 'Cloudkill',
    traits: [ 'death', 'necromancy', 'potion' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 324',
    traditions: [ 'arcane', 'primal' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: '120 feet',
    area: '20-foot burst',
    'saving throw': 'basic Fortitude',
    duration: '1 minute',
    text: 'You conjure a poisonous fog. This functions as obscuring mist, except the area moves 10 feet away from you each round. You deal 6d8 poison damage to each breathing creature that starts its turn in the spell\'s area. You can Dismiss the spell.  \r\n**Heightened (+1)**  The damage increases by 1d8.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=47',
    name: 'Cone of Cold',
    traits: [ 'cold', 'evocation' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 325',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '60-foot cone',
    'saving throw': 'basic Reflex',
    text: 'Icy cold rushes forth from your hands. You deal 12d6 cold damage to creatures in the area.  \r\n**Heightened (+1)**  The damage increases by 2d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=51',
    name: 'Control Water',
    traits: [ 'evocation', 'water' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 326',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '500 feet',
    area: '50 feet long by 50 feet wide',
    text: 'By imposing your will upon the water, you can raise or lower the level of water in the chosen area by 10 feet. Water creatures in the area are subjected to the effects of slow.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=57',
    manual: true,
    name: 'Crushing Despair',
    traits: [ 'emotion', 'enchantment', 'mental' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 327',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '30-foot cone',
    'saving throw': 'Will',
    duration: '1 or more rounds',
    text: 'You inflict despair on creatures in the area. The effects for each creature are determined by its Will save.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  For 1 round, the creature can\'t use reactions and must attempt another save at the start of its turn; on a failure, it is slowed 1 for that turn as it sobs uncontrollably.  \r\n**Failure**  For 1 round, the creature can\'t use reactions and must attempt another save at the start of its turn; on a failure, it is slowed 1 for that turn as it sobs uncontrollably.  \r\n**Critical Failure**  As failure, and the creature is automatically slowed 1 for 1 minute.  \r\n**Heightened (7th)**  The area increases to a 60-foot cone.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=92',
    name: 'Drop Dead',
    traits: [ 'uncommon', 'illusion', 'visual' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 333',
    traditions: [ 'arcane', 'divine' ],
    cast: 'somatic',
    action: 'reaction',
    trigger: 'a creature within range is hit by an attack from an enemy',
    range: '120 feet',
    targets: '1 creature',
    duration: 'sustained up to 1 minute',
    text: 'The target appears to fall down dead, though it actually turns invisible. Its illusory corpse remains where it fell, complete with a believable fatal wound. This illusion looks and feels like a dead body. If the target\'s death seems absurd-for instance, a barbarian at full health appears to be slain by 2 damage-the GM can grant the attacker an immediate Perception check to disbelieve the illusion. If the target uses hostile actions, the spell ends. This ends the entire spell, so the illusory corpse disappears too.  \r\n**Heightened (7th)**  The spell doesn\'t end if the target uses hostile actions.',
    components: [ 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=98',
    manual: true,
    name: 'Elemental Form',
    traits: [ 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 335',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute',
    text: 'You call upon the power of the planes to transform into a Medium elemental battle form. When you cast this spell, choose air, earth, fire, or water. While in this form, you gain the corresponding trait and the elemental trait. You have hands in this battle form and can take manipulate actions. You can Dismiss the spell.  \r\nYou gain the following statistics and abilities regardless of which battle form you choose:  \r\n * AC = 19 + your level. Ignore your armor\'s check penalty and Speed reduction.\r\n * 10 temporary Hit Points.\r\n * Darkvision.\r\n * One or more unarmed melee attacks specific to the battle form you choose, which are the only attacks you can use. You\'re trained with them. Your attack modifier is +18, and your damage bonus is +9. These are Dexterity based (air or fire) or Strength based (earth or water). If your corresponding unarmed attack modifier is higher, you can use it instead.\r\n * Acrobatics (air or fire) or Athletics (earth or water) modifier of +20; ignore this change if your own modifier is higher.\r\n  \r\nYou also gain specific abilities based on the type of elemental you choose:\r\n * **Air** fly Speed 80 feet, movement doesn\'t trigger reactions; **Melee** |1| gust, **Damage** 1d4 bludgeoning.\r\n * **Earth** Speed 20 feet, burrow Speed 20 feet; **Melee** |1| fist, **Damage** 2d10 bludgeoning.\r\n * **Fire** Speed 50 feet; fire resistance 10, weakness 5 to cold and 5 to water; **Melee** |1| tendril , **Damage** 1d8 fire plus 1d4 persistent fire.\r\n * **Water** Speed 20 feet, swim Speed 60 feet; fire resistance 5; **Melee** |1| wave, **Damage** 1d12 bludgeoning, and you can spend an action immediately after a hit to push the target 5 feet with the effects of a successful Shove.\r\n  \r\n**Heightened (6th)**  Your battle form is Large and your attacks have 10-foot reach. You must have space to expand or the spell is lost. You instead gain AC = 22 + your level, 15 temporary HP, an attack modifier of +23, a damage bonus of +13, and Acrobatics or Athletics +23.  \r\n**Heightened (7th)**  Your battle form is Huge and your attacks have 15-foot reach. You must have space to expand or the spell is lost. You instead gain AC = 22 + your level, 20 temporary HP, an attack modifier of +25, a damage bonus of +11, double the number of damage dice (including persistent damage), and Acrobatics or Athletics +25.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=109',
    name: 'False Vision',
    traits: [ 'uncommon', 'illusion' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 337',
    traditions: [ 'arcane', 'occult' ],
    cast: '10 minutes (material, somatic, verbal)',
    range: 'touch',
    area: '100-foot burst',
    duration: 'until the next time you make your daily preparations',
    text: 'You create a false image that fools any attempts to scry on an area. Any scrying spell sees, hears, smells, and otherwise detects whatever you wish within the area, rather than what is actually in the area. You can Sustain the Spell each round to change the illusion as you desire, including playing out a complex scene. If the scrying spell is of a higher level than false vision, the scryer can attempt a Perception check to disbelieve the illusion, though even if they\'re successful, they can\'t learn what\'s truly going on in the area.',
    components: [ '10minutes(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=144',
    name: 'Hallucination',
    traits: [ 'illusion', 'incapacitation', 'mental' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 342',
    traditions: [ 'arcane', 'occult' ],
    cast: 'material, somatic',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    duration: '1 hour',
    text: 'The target consistently detects one thing as another, can\'t detect something that\'s there, or detects something that\'s not there, though it doesn\'t alter their beliefs. You choose which of these effects applies, and you determine the specifics of the hallucination. For example, you could make the target see all elves as humans, be unable to detect the presence of their brother, see their beloved pocket watch on their person even when it isn\'t, or see a tower in the center of town. The target can attempt an initial Will save, with effects below. They also receive a Will save to disbelieve the hallucination every time they Seek or directly interact with the hallucination. For example, the target could attempt to disbelieve the hallucination each time they interacted with an elf, bumped into their brother accidentally, tried to check their pocket watch, or studied the tower. The target can attempt to disbelieve with a large circumstance bonus in situations determined by the GM, such as if the target attempted to climb the nonexistent tower.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature perceives what you chose until it disbelieves, but it knows what the hallucination is.  \r\n**Failure**  The creature perceives what you chose until it disbelieves.  \r\n**Critical Failure**  The creature perceives what you chose until it disbelieves, and it trusts its false senses, taking a -4 circumstance penalty to saves to disbelieve.  \r\n**Heightened (6th)**  Choose to either target up to 10 creatures or change the spell\'s duration to until the next time you make your daily preparations.  \r\n**Heightened (8th)**  Choose to either target any number of creatures or change the spell\'s duration to unlimited.',
    components: [ 'material', 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=161',
    name: 'Illusory Scene',
    traits: [ 'auditory', 'illusion', 'visual' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 345',
    traditions: [ 'arcane', 'occult' ],
    cast: '10 minutes (somatic, verbal)',
    range: '500 feet',
    area: '30-foot burst',
    duration: '1 hour',
    text: 'You form an imaginary scene that includes up to 10 discrete creatures or objects of various sizes, all of which must be within the spell\'s area. These elements generate appropriate sounds and smells, and they feel right to the touch. Elements of an illusory scene are incapable of speech. Unlike with the illusory creature spell, creatures in your scene lack combat abilities and statistics. Your scene doesn\'t include changes to the environment around it, though you can place your scene within the illusory environment of a hallucinatory terrain spell. When you create the scene, you can choose to have it be static or follow a program. Though a static scene is stationary, it includes basic natural movement. For example, wind blowing on an illusory piece of paper would rustle it. A program can be up to 1 minute long and repeats when finished. For instance, you could create a scene of two orcs fighting each other, and the fight would go the same way for each repetition. If you create a loop, the two fighters end up in the same place at the start of the scene and at the end of it, but you can smooth the program so it\'s hard to tell when the loop ends and begins. Anyone observing the scene for more than a few minutes almost always notices it looping. You\'re unable to alter the program after you create the illusion. Any creature that touches any part of the image or uses the Seek action to examine it can attempt to disbelieve your illusion. If they interact with a portion of the illusion, they disbelieve only that portion. They disbelieve the entire scene only on a critical success.  \r\n**Heightened (6th)**  Creatures or objects in your scene can speak. You must speak the specific lines for each actor when creating your program. The spell disguises your voice for each actor.  \r\n**Heightened (8th)**  As the 6th-level version, and the duration is unlimited.',
    components: [ '10minutes(somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=184',
    name: 'Mariner\'s Curse',
    traits: [ 'attack', 'curse', 'necromancy' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 350',
    traditions: [ 'arcane', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    'saving throw': 'Will',
    text: 'You afflict the target with the curse of the roiling, unforgiving sea. The target must attempt a Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target becomes sickened 1. Reducing its sickened condition to 0 ends the curse.  \r\n**Failure**  The target becomes sickened 1 and can\'t reduce its sickened condition below 1 while the curse remains. The curse can be lifted by remove curse or similar magic. Whenever the target is sickened and on the water at least a mile from shore, it is also slowed 1.  \r\n**Critical Failure**  As failure, but the target becomes sickened 2.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=193',
    name: 'Mind Probe',
    traits: [ 'uncommon', 'divination', 'linguistic', 'mental' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 351',
    traditions: [ 'arcane', 'occult' ],
    cast: '1 minute (material, somatic, verbal)',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: 'sustained up to 1 minute',
    text: 'You cast your thoughts through a creature\'s mind, sifting for information. You access the target\'s memories and knowledge unless it fends you off with a Will save.  \r\n**Success**  The target is unaffected.  \r\n**Failure**  Each round of the spell\'s duration, you can Sustain the Spell to ask a different question and attempt to uncover the answer. For each question, the target can attempt a Deception check against your spell DC; if the target succeeds, you don\'t learn the answer, and on a critical success, the target gives you a false answer that you believe is truthful Once you\'ve asked the target a given question, asking it again, even with a separate casting of mind probe, produces the same result.  \r\n**Critical Failure**  As failure, and the target takes a -4 circumstance penalty to Deception checks against your questions.',
    components: [ '1minute(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=216',
    name: 'Passwall',
    traits: [ 'uncommon', 'conjuration', 'earth' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 356',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    area: '5-foot-wide, 10-foot-tall, 10-foot deep section of wooden, plaster, or stone wall',
    duration: '1 hour',
    text: 'You create a visible tunnel through the wall in the chosen area, replacing the area with empty space. If the wall is thicker than 10 feet, the tunnel ends 10 feet in. Even a small layer of metal in the wall prevents this spell from functioning. This spell doesn\'t reduce the integrity of the structure. When the spell ends, anyone inside the tunnel is shunted to the nearest exit.  \r\n**Heightened (7th)**  The tunnel can be up to 20 feet deep. The areas of the wall that contain your tunnel\'s entrance appear completely normal (unless viewed with true seeing or a similar effect), despite the tunnel\'s existence. The tunnel\'s entrance functions as a solid wall, but you can specify a password or a trigger (page 305), allowing creatures to enter the tunnel freely.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=239',
    name: 'Prying Eye',
    traits: [ 'divination', 'scrying' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 361',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: '1 minute (material, somatic, verbal)',
    range: 'see text',
    duration: 'sustained',
    text: 'You create an invisible, floating eye, 1 inch in diameter, at a location you can see within 500 feet. It sees in all directions with your normal visual senses and continuously transmits what it sees to you. The first time you Sustain the Spell each round, you can either move the eye up to 30 feet, seeing only things in front of the eye, or move it up to 10 feet, seeing everything in all directions around it. There is no limit to how far from you the eye can move, but the spell ends immediately if you and the eye ever cease to be on the same plane of existence. You can attempt Seek actions through the eye if you want to attempt Perception checks with it. Any damage dealt to the eye destroys it and ends the spell.',
    components: [ '1minute(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=272',
    name: 'Sending',
    traits: [ 'divination', 'mental' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 367',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: 'planetary',
    targets: '1 creature with whom you are familiar',
    text: 'You send the creature a mental message of 25 words or fewer, and it can respond immediately with its own message of 25 words or fewer.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=274',
    name: 'Shadow Siphon',
    traits: [ 'illusion', 'shadow' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 368',
    traditions: [ 'arcane', 'occult' ],
    cast: 'verbal',
    action: 'reaction',
    trigger: 'A spell or magical effect deals damage',
    range: '60 feet',
    targets: 'the triggering spell',
    text: 'Exchanging material energy with that of the Shadow Plane, you transform the triggering spell into a partially illusory version of itself. Attempt to counteract the target spell. If the attempt is successful, any creatures that would be damaged by the spell instead take only half as much damage, but the spell otherwise works as normal. Treat shadow siphon\'s counteract level as 2 higher for this attempt.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=275',
    name: 'Shadow Walk',
    traits: [ 'uncommon', 'conjuration', 'shadow', 'teleportation' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 368',
    traditions: [ 'arcane', 'occult' ],
    cast: '1 minute (material, somatic, verbal)',
    range: 'touch',
    targets: 'you and up to 9 willing creatures touched',
    duration: '8 hours',
    text: 'You access the Shadow Plane, using its warped nature to spread your travels. The targets enter the edge of the Shadow Plane where it borders the Material Plane. Targets can\'t see the Material Plane while on the Shadow Plane (although elements of that plane can sometimes be a hazy reflection of the Material Plane). While on the Shadow Plane, the targets are exposed to potential encounters with that plane\'s denizens. The shadows on the border between the planes bend space, speeding up your movement with respect to the Material Plane. Every 3 minutes the targets travel along this border, they move as far as they would through the Material Plane in 1 hour. At any point, a target can Dismiss the spell\'s effects, although this affects only that target. The shadow bending is inexact, so when the spell ends, the targets appear roughly 1 mile from their intended location on the Material Plane (though those who are traveling together and Dismiss the spell at the same point on the Plane of Shadow appear together).',
    components: [ '1minute(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=314',
    name: 'Subconscious Suggestion',
    traits: [ 'enchantment', 'incapacitation', 'linguistic', 'mental' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 374',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: 'varies',
    text: 'You implant a subconscious suggestion deep within the target\'s mind for them to follow when a trigger you specify occurs (as described on page 305). You suggest a course of action to the target. Your directive must be phrased in such a way as to seem like a logical course of action to the target, and it can\'t be self-destructive or obviously against the target\'s self-interest. The target must attempt a Will save.  \r\n**Critical Success**  The target is unaffected and knows you tried to control it.  \r\n**Success**  The target is unaffected and thinks you were talking to them normally, not casting a spell on them.  \r\n**Failure**  The suggestion remains in the target\'s subconscious until the next time you prepare. If the trigger occurs before then, the target immediately follows your suggestion. The effect has a duration of 1 minute, or until the target has completed a finite suggestion or the suggestion becomes self-destructive or has other obvious negative effects.  \r\n**Critical Failure**  As failure, but the duration is 1 hour.  \r\n**Heightened (9th)**  You can target up to 10 creatures.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=319',
    name: 'Summon Dragon',
    traits: [ 'conjuration' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 375',
    traditions: [ 'arcane' ],
    cast: 'material, somatic, verbal',
    action: '3',
    duration: 'sustained up to 1 minute',
    text: 'You conjure a dragon to fight for you. This works like summon animal, except you summon a common creature that has the dragon trait and whose level is 5 or lower.  \r\n**Heightened (6th)**  Level 7  \r\n**Heightened (7th)**  Level 9  \r\n**Heightened (8th)**  Level 11  \r\n**Heightened (9th)**  Level 13  \r\n**Heightened (10th)**  Level 15',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=332',
    name: 'Telekinetic Haul',
    traits: [ 'evocation' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 377',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    targets: '1 object of up to 80 Bulk with no dimension longer than 20 feet',
    duration: 'sustained up to 1 minute',
    text: 'You move the target up to 20 feet, potentially suspending it in midair. When you Sustain the Spell, you can do so again, or you can choose a different eligible target to move.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=335',
    name: 'Telepathic Bond',
    traits: [ 'uncommon', 'divination', 'mental' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 377',
    traditions: [ 'arcane', 'occult' ],
    cast: '1 minute (material, somatic, verbal)',
    range: 'touch',
    targets: 'you and up to 4 willing creatures touched',
    duration: '8 hours',
    text: 'The targets can communicate telepathically with any or all of the other targets from any point on the same planet.',
    components: [ '1minute(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=340',
    name: 'Tongues',
    traits: [ 'uncommon', 'divination' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 378',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    duration: '1 hour',
    text: 'The target can understand all words regardless of language and also speak the languages of other creatures. When in a mixed group of creatures, each time the target speaks, it can choose a creature and speak in a language that creature understands, even if the target doesn\'t know what language that is.  \r\n**Heightened (7th)**  The duration is 8 hours.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=364',
    name: 'Wall of Ice',
    traits: [ 'cold', 'evocation', 'water' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 382',
    traditions: [ 'arcane', 'primal' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: '120 feet',
    duration: '1 minute',
    text: 'You sculpt a barrier of ice that blocks sight and, once shattered, freezes foes. You create either a 1-foot-thick wall of ice in a straight line up to 60 feet long and 10 feet high (the wall doesn\'t have to be vertical, but it must be anchored on both sides to a solid surface) or a 1-foot-thick, 10-foot radius hemisphere of ice. The ice that makes up the wall is opaque. If you wish, the wall can be of a smaller length, height, or radius. You must create the wall in an unbroken open space so its edges don\'t pass through any creatures or objects, or the spell is lost. Each 10-foot-by-10-foot section of the wall has AC 10, Hardness 10, and 40 Hit Points, and it\'s immune to critical hits, cold damage, and precision damage. A section also has weakness to fire 15; a section of the wall destroyed by fire melts, evaporating into water and steam. A section destroyed by means other than fire leaves behind a chilling mass of ice that is difficult terrain and deals 2d6 cold damage to any creature passing through it.  \r\n**Heightened (+2)**  The Hit Points of each section of the wall increase by 10, and the cold damage dealt to creatures crossing a destroyed section increases by 1d6.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=365',
    name: 'Wall of Stone',
    traits: [ 'conjuration', 'earth' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 383',
    traditions: [ 'arcane', 'primal' ],
    cast: 'material, somatic, verbal',
    action: '2',
    range: '120 feet',
    text: 'You shape a wall of solid stone. You create a 1-inch-thick wall of stone up to 120 feet long, and 20 feet high. You can shape the wall\'s path, placing each 5 feet of the wall on the border between squares. The wall doesn\'t need to stand vertically, so you can use it to form a bridge or set of stairs, for example. You must conjure the wall in an unbroken open space so its edges don\'t pass through any creatures or objects, or the spell is lost. Each 5-foot-by-5-foot section of the wall has AC 10, Hardness 14, and 50 Hit Points, and it\'s immune to critical hits and precision damage. A destroyed section of the wall can be moved through, but the rubble created from it is difficult terrain.  \r\n**Heightened (+2)**  The Hit Points of each section of the wall increase by 15.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=17',
    name: 'Baleful Polymorph',
    traits: [ 'incapacitation', 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 320',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Fortitude',
    duration: 'varies',
    text: 'You transform the target creature into a harmless animal appropriate to the area, with effects based on its Fortitude save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target\'s body gains minor features of the harmless animal. Its insides churn as they partially transform, causing it to be sickened 1. When it recovers from the sickened condition, its features revert to normal.  \r\n**Failure**  The target transforms for 1 minute but keeps its mind. If it spends all its actions on its turn concentrating on its original form, it can attempt a Will save to end the effect immediately.  \r\n**Critical Failure**  The target is transformed into the chosen harmless animal, body and mind, for an unlimited duration.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=33',
    name: 'Chain Lightning',
    traits: [ 'electricity', 'evocation' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 322',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '500 feet',
    targets: '1 creature, plus any number of additional creatures',
    'saving throw': 'Reflex',
    text: 'You discharge a powerful bolt of lightning at the target, dealing 8d12 electricity damage. The target must attempt a basic Reflex save. The electricity arcs to another creature within 30 feet of the first target, jumps to another creature within 30 feet of that target, and so on. You can end the chain at any point. You can\'t target the same creature more than once, and you must have line of effect to all targets. Roll the damage only once, and apply it to each target (halving or doubling as appropriate for its saving throw outcome). The chain ends if any one of the targets critically succeeds at its save.  \r\n**Heightened (+1)**  The damage increases by 1d12.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=43',
    name: 'Collective Transposition',
    traits: [ 'conjuration', 'teleportation' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 324',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '30-foot emanation',
    targets: 'up to 2 creatures',
    text: 'You teleport the targets to new positions within the area. The creatures must each be able to fit in their new space, and their positions must be unoccupied, entirely within the area, and in your line of sight. Unwilling creatures can attempt a Will save.  \r\n**Critical Success**  The target can teleport if it wants, but it chooses the destination within range.  \r\n**Success**  The target is unaffected.  \r\n**Failure**  You teleport the target and choose its destination.  \r\n**Heightened (+1)**  The number of targets increases by 1.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=76',
    name: 'Disintegrate',
    traits: [ 'evocation' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 330',
    traditions: [ 'arcane' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    targets: '1 creature or unattended object',
    'saving throw': 'Fortitude',
    text: 'You fire a green ray at your target. Make a spell attack. You deal 12d10 damage, and the target must attempt a basic Fortitude save. On a critical hit, treat the save result as one degree worse. A creature reduced to 0 HP is reduced to fine powder; its gear remains. An object you hit is destroyed (no save), regardless of Hardness, unless it\'s an artifact or similarly hard to destroy. A single casting can destroy no more than a 10-foot cube of matter. This automatically destroys any force construct, such as a wall of force.  \r\n**Heightened (+1)**  The damage increases by 2d10.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=87',
    name: 'Dominate',
    traits: [ 'uncommon', 'enchantment', 'incapacitation', 'mental' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 332',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: 'until the next time you make your daily preparations',
    text: 'You take command of the target, forcing it to obey your orders. If you issue an obviously self-destructive order, the target doesn\'t act until you issue a new order. The effect depends on its Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is stunned 1 as it fights off your commands.  \r\n**Failure**  The target follows your orders but can attempt a Will save at the end of each of its turns. On a success, the spell ends.  \r\n**Critical Failure**  As a failure, but the target receives a new save only if you give it a new order that is against its nature, such as killing its allies.  \r\n**Heightened (10th)**  The duration is unlimited.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=88',
    manual: true,
    name: 'Dragon Form',
    traits: [ 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 332',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute',
    text: 'Calling upon powerful transformative magic, you gain a Large dragon battle form. You must have space to expand or the spell is lost. When you cast this spell, choose one type of chromatic or metallic dragon. While in this form, you gain the dragon trait. You have hands in this battle form and can take manipulate actions. You can Dismiss the spell.  \r\nYou gain the following statistics and abilities regardless of which battle form you choose:  \r\n * AC = 18 + your level.\r\n * Ignore your armor\'s check penalty and Speed reduction.\r\n * 10 temporary Hit Points.\r\n * Speed 40 feet, fly Speed 100 feet.\r\n * Resistance 10 against the damage type of your breath weapon (see below).\r\n * Darkvision and imprecise scent 60 feet.\r\n * One or more unarmed melee attacks specific to the battle form you choose, which are the only attacks you can use. You\'re trained with them. Your attack modifier is +22, and your damage bonus is +6. These attacks are Strength based (for the purpose of the enfeebled condition, for example). If your unarmed attack modifier is higher, you can use it instead. See below for more on these attacks.\r\n * Athletics modifier of +23, unless your own modifier is higher.\r\n * **Breath Weapon** |2| (arcane, evocation) The shape, damage, and damage type of your breath weapon depend on your specific dragon form (see below). A creature in the area attempts a basic save against your spell DC. This is a Reflex save unless stated otherwise in the special ability description for your specific dragon form. Once activated, your breath weapon can\'t be used again for 1d4 rounds. Your breath weapon has the trait corresponding to the type of damage it deals.\r\n  \r\nYou also gain specific abilities based on the type of dragon you choose:\r\n * **Black** swim Speed 60 feet; **Melee** |1| jaws, **Damage** 2d12 piercing plus 2d6 acid; **Melee** |1| claw (agile), **Damage** 3d10 slashing; **Melee** |1| tail (reach 10 feet), **Damage** 3d10 bludgeoning; **Melee** |1| horns (reach 10 feet), **Damage** 3d8 piercing; **breath weapon** 60-foot line, 11d6 acid.\r\n * **Blue** burrow Speed 20 feet; **Melee** |1| jaws, **Damage** 2d10 piercing plus 1d12 electricity; **Melee** |1| claw (agile), **Damage** 3d10 slashing; **Melee** |1| tail (reach 10 feet), **Damage** 3d10 bludgeoning; **Melee** |1| horns (reach 10 feet), **Damage** 3d8 piercing; **breath weapon** 80-foot line, 6d12 electricity.\r\n * **Brass** burrow Speed 20 feet; **Melee** |1| jaws, **Damage** 3d8 piercing plus 2d4 fire; **Melee** |1| claw (agile), 3d10 slashing; **Melee** |1| tail (reach 10 feet), **Damage** 3d10 bludgeoning; **Melee** |1| spikes (reach 10 feet), **Damage** 3d8 piercing; **breath weapon** 60-foot line, 15d4 fire.\r\n * **Bronze** swim Speed 40 feet; **Melee** |1| jaws, **Damage** 2d10 piercing plus 1d12 electricity; **Melee** |1| claw (agile), **Damage** 3d10 slashing; **Melee** |1| tail (reach 10 feet), **Damage** 3d10 bludgeoning; **Melee** |1| wing (reach 10 feet), **Damage** 3d8 slashing; **breath weapon** 80-foot line, 6d12 electricity.\r\n * **Copper** climb Speed 25 feet on stone only; **Melee** |1| jaws, **Damage** 2d12 piercing plus 2d6 acid; **Melee** |1| claw (agile), **Damage** 3d10 slashing; **Melee** |1| tail (reach 10 feet), **Damage** 3d10 bludgeoning; **Melee** |1| wing (reach 10 feet), **Damage** 3d8 bludgeoning; **breath weapon** 60-foot line, 10d6 acid.\r\n * **Gold** swim Speed 40 feet; **Melee** |1| jaws, **Damage** 2d12 piercing plus 2d6 fire; **Melee** |1| claw (agile), **Damage** 4d6 slashing; **Melee** |1| tail (reach 10 feet), **Damage** 3d10 bludgeoning; **Melee** |1| horns (reach 10 feet), **Damage** 3d8 piercing; **breath weapon** 30-foot cone, 6d10 fire.\r\n * **Green** swim Speed 40 feet, ignores difficult terrain from non-magical foliage; **Melee** |1| jaws, **Damage** 2d12 piercing plus 2d6 poison; **Melee** |1| claw (agile), **Damage** 3d10 slashing; **Melee** |1| tail (reach 10 feet), **Damage** 3d10 bludgeoning; **Melee** |1| horns (reach 10 feet), **Damage** 3d8 piercing; **breath weapon** 30-foot cone, 10d6 poison (Fortitude save instead of Reflex).\r\n * **Red** ignore concealed from smoke; **Melee** |1| jaws, **Damage** 2d12 piercing plus 2d6 fire; **Melee** |1| claw (agile), **Damage** 4d6 slashing; **Melee** |1| tail (reach 10 feet), **Damage** 3d10 bludgeoning; **Melee** |1| w i ng (reach 10 feet), **Damage** 3d8 bludgeoning; **breath weapon** 30-foot cone, 10d6 fire.\r\n * **Silver** walk on clouds; **Melee** |1| jaws, **Damage** 2d12 piercing plus 2d6 cold; **Melee** |1| claw (agile), **Damage** 3d10 slashing; **Melee** |1| tail (reach 10), **Damage** 3d10 bludgeoning; **breath weapon** 30-foot cone, 8d8 cold.\r\n * **White** climb Speed 25 feet on ice only; **Melee** |1| jaws, **Damage** 3d6 piercing plus 2d6 cold; **Melee** |1| claw (agile), **Damage** 3d10 slashing; **Melee** |1| tail (reach 10 feet), **Damage** 3d10 bludgeoning; **breath weapon** 30-foot cone, 10d6 cold.\r\n  \r\n**Heightened (8th)**  Your battle form is Huge, you gain a +20-foot status bonus to your fly Speed, and your attacks have 10-foot reach (or 15-foot reach if they previously had 10-foot reach). You instead gain AC = 21 + your level, 15 temporary HP, an attack modifier of +28, a damage bonus of +12, Athletics +28, and a +14 status bonus to breath weapon damage.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=112',
    name: 'Feeblemind',
    traits: [ 'curse', 'emotion', 'enchantment', 'mental' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 337',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: 'varies',
    text: 'You drastically reduce the target\'s mental faculties. The target must attempt a Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is stupefied 2 for 1 round.  \r\n**Failure**  The target is stupefied 4 with an unlimited duration.  \r\n**Critical Failure**  The target is stupefied 4 with an unlimited duration.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=123',
    name: 'Flesh to Stone',
    traits: [ 'transmutation' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 338',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    targets: '1 creature made of flesh',
    'saving throw': 'Fortitude',
    duration: 'varies',
    text: 'You try to turn the target\'s flesh into stone. The target must attempt a Fortitude save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is slowed 1 for 1 round.  \r\n**Failure**  The target is slowed 1 and must attempt a Fortitude save at the end of each of its turns; this ongoing save has the incapacitation trait. On a failed save, the slowed condition increases by 1 (or 2 on a critical failure). A successful save reduces the slowed condition by 1. When a creature is unable to act due to the slowed condition from flesh to stone, the creature is petrified permanently. The spell ends if the creature is petrified or the slowed condition is removed.  \r\n**Critical Failure**  As failure, but the target is initially slowed 2.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=199',
    name: 'Mislead',
    traits: [ 'illusion' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 352',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: 'sustained up to 1 minute',
    text: 'You turn yourself invisible and create an illusory duplicate of yourself. When you Sustain the Spell, you can mentally dictate a course of action for your duplicate to follow that round. Your duplicate acts as though it had your full number of actions, though it can\'t actually affect anything in the environment. Both the duplicate and your invisibility persist for the spell\'s duration. Performing a hostile action doesn\'t end mislead\'s invisibility, just like a 4th-level invisibility spell. A creature that determines the duplicate is an illusion doesn\'t necessarily know you\'re invisible, and one that can see your invisible form doesn\'t necessarily know your duplicate is an illusion. If you Cast a Spell, attack, or otherwise interact with another creature, as a part of that action you can attempt a Deception check against observers\' Perception DCs to convince them your duplicate used that action. This doesn\'t fool anyone who\'s aware your duplicate is an illusion, nor does it work if the attack obviously couldn\'t have come from the duplicate. For instance, if you fired a ray, you could make it look like it came from the duplicate as long as the duplicate was positioned appropriately, but if you attacked with a sword and your duplicate was across the room from the target, your Deception check would automatically fail.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=218',
    name: 'Phantasmal Calamity',
    traits: [ 'illusion', 'mental' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 357',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '500 feet',
    area: '30-foot burst',
    'saving throw': 'Will',
    text: 'A vision of apocalyptic destruction fills the mind of each creature in the area. The vision deals 11d6 mental damage (basic Will save). On a critical failure, the creature must also succeed at a Reflex save or believe it\'s trapped (stuck in a fissure, adrift at sea, or some other fate in keeping with its vision). If it fails the second save, it\'s also stunned for 1 minute. It can attempt a new Will save at the end of each of its turns, and on a success, it disbelieves the illusion and recovers from the stunned condition.  \r\n**Heightened (+1)**  The damage increases by 2d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=242',
    manual: true,
    name: 'Purple Worm Sting',
    traits: [ 'necromancy', 'poison' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 362',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    'saving throw': 'Fortitude',
    text: 'You replicate the attack of a deadly purple worm. You deal 6d6 piercing damage to the touched creature and afflict it with purple worm venom. The target must attempt a Fortitude save.  \r\n**Purple Worm Venom**  (poison) **Level** 11 **Maximum Duration** 6 rounds\r\n * **Stage 1** 3d6 poison damage and enfeebled 2 (1 round)\r\n * **Stage 2** 4d6 poison damage and enfeebled 2 (1 round)\r\n * **Stage 3** 6d6 poison damage and enfeebled 2 (1 round).\r\n  \r\n**Critical Success** The target is unaffected.  \r\n**Success** The target takes 3d6 poison damage.  \r\n**Failure** The target is afflicted with purple worm venom at stage 1.  \r\n**Critical Failure** The target is afflicted with purple worm venom at stage 2.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=254',
    name: 'Repulsion',
    traits: [ 'abjuration', 'aura', 'mental' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 363',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'emanation up to 40 feet',
    'saving throw': 'Will',
    duration: '1 minute',
    text: 'You manifest an aura that prevents creatures from approaching you. When casting the spell, you can make the area any radius you choose, up to 40 feet. A creature must attempt a Will save if it\'s within the area when you cast the spell or as soon as it enters the area while the spell is in effect. Once a creature has attempted the save, it uses the same result for that casting of repulsion. Any restrictions on a creature\'s movement apply only if it voluntarily moves toward you. For example, if you move closer to a creature, it doesn\'t then need to move away.  \r\n**Critical Success**  The creature\'s movement is not restricted.  \r\n**Success**  The creature treats each square in the area as difficult terrain when moving closer to you.  \r\n**Failure**  The creature can\'t move closer to you within the area.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=268',
    manual: true,
    name: 'Scrying',
    traits: [ 'uncommon', 'divination', 'scrying' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 367',
    traditions: [ 'arcane', 'occult' ],
    cast: '10 minutes (material, somatic, verbal)',
    range: 'planetary',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: 'sustained up to 10 minutes',
    text: 'You magically spy on a creature of your choice. Scrying works like clairvoyance, except that the image you receive is less precise, insufficient for teleport and similar spells. Instead of creating an eye in a set location within 500 feet, you instead create an eye that manifests just above the target. You can choose a target either by name or by touching one of its possessions or a piece of its body. If you haven\'t met the target in person, scrying\'s DC is 2 lower, and if you are unaware of the target\'s identity (perhaps because you found an unknown creature\'s fang at a crime scene), the DC is instead 10 lower. The effect of scrying depends on the target\'s Will save.  \r\n**Critical Success**  The spell fails and the target is temporarily immune for 1 week. The target also gains a glimpse of you and learns its rough distance and direction from you.  \r\n**Success**  The spell fails and the target is temporarily immune for 1 day.  \r\n**Failure**  The spell succeeds.  \r\n**Critical Failure**  The spell succeeds, and the eye follows the target if it moves, traveling up to 60 feet per round.',
    components: [ '10minutes(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=298',
    name: 'Spellwrack',
    traits: [ 'abjuration', 'curse', 'force' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 371',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    text: 'You cause any spells cast on the target to spill out their energy in harmful surges. The target must attempt a Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  Whenever the target becomes affected by a spell with a duration, the target takes 2d12 persistent force damage. Each time it takes persistent force damage from spellwrack, it reduces the remaining duration of spells affecting it by 1 round. Only a successful Arcana check against your spell DC can help the target recover from the persistent damage; the curse and the persistent damage end after 1 minute.  \r\n**Failure**  As success, but the curse and persistent damage do not end on their own.  \r\n**Critical Failure**  As failure, but the persistent force damage is 4d12.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=338',
    name: 'Teleport',
    traits: [ 'uncommon', 'conjuration', 'teleportation' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 378',
    traditions: [ 'arcane', 'occult' ],
    cast: '10 minutes (material, somatic, verbal)',
    range: '100 miles',
    targets: 'you and up to 4 targets touched, either willing creatures or objects roughly the size of a creature.',
    text: 'You and the targets are instantly transported to any location within range, as long as you can identify the location precisely both by its position relative to your starting position and by its appearance (or other identifying features). Incorrect knowledge of the location\'s appearance usually causes the spell to fail, but it could instead lead to teleporting to an unwanted location or some other unusual mishap determined by the GM. Teleport is not precise over great distances. The targets appear at a distance from the intended destination equal to roughly 1 percent of the total distance traveled, in a direction determined by the GM. For short journeys, this lack of precision is irrelevant, but for long distances this could be up to 1 mile.  \r\n**Heightened (7th)**  You and the other targets can travel to any location within 1,000 miles.  \r\n**Heightened (8th)**  You and the other targets can travel to any location on the same planet. If you travel more than 1,000 miles, you arrive only 10 miles off target.  \r\n**Heightened (9th)**  You and the other targets can travel to any location on another planet within the same solar system. Assuming you have accurate knowledge of the location\'s position and appearance, you arrive on the new planet 100 miles off target.  \r\n**Heightened (10th)**  As the 9th-level version, but you and the other targets can travel to any planet within the same galaxy.',
    components: [ '10minutes(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=344',
    name: 'True Seeing',
    traits: [ 'divination', 'revelation' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 378',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '10 minutes',
    text: 'You see things within 60 feet as they actually are. The GM rolls a secret counteract check against any illusion or transmutation in the area, but only for the purpose of determining whether you see through it (for instance, if the check succeeds against a polymorph spell, you can see the creature\'s true form, but you don\'t end the polymorph spell).',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=353',
    name: 'Vampiric Exsanguination',
    traits: [ 'death', 'necromancy', 'negative' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 380',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '30-foot cone',
    'saving throw': 'basic Fortitude',
    text: 'You draw in the blood and life force of other creatures through your outstretched arms. You deal 12d6 negative damage to living creatures in the area. You gain temporary Hit Points equal to half the damage a single creature takes from this spell; calculate these temporary Hit Points using the creature that took the most damage. You lose any remaining temporary Hit Points after 1 minute.  \r\n**Heightened (+1)**  The damage increases by 2d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=357',
    name: 'Vibrant Pattern',
    traits: [ 'illusion', 'incapacitation', 'visual' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 381',
    traditions: [ 'arcane', 'occult' ],
    cast: 'material, somatic',
    action: '2',
    range: '120 feet',
    area: '10-foot burst',
    'saving throw': 'Will',
    duration: 'sustained up to 1 minute',
    text: 'You create a pattern of lights that pulses with intensity. Creatures are dazzled while inside the pattern. In addition, a creature must attempt a Will saving throw if it\'s inside the pattern when you cast it, enters the pattern, ends its turn within the pattern, or uses a Seek or Interact action on the pattern. A creature currently blinded by the pattern doesn\'t need to attempt new saving throws.  \r\n**Success**  The creature is unaffected.  \r\n**Failure**  The creature is blinded by the pattern. If it exits the pattern, it can attempt a new save to recover from the blinded condition at the end of each of its turns, to a maximum duration of 1 minute.  \r\n**Critical Failure**  The creature is blinded for 1 minute.',
    components: [ 'material', 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=363',
    name: 'Wall of Force',
    traits: [ 'evocation', 'force' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 382',
    traditions: [ 'arcane', 'occult' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: '30 feet',
    duration: '1 minute',
    text: 'You form an invisible wall of pure magical force up to 50 feet long and up to 20 feet high. The wall has no discernible thickness. You must create the wall in an unbroken open space so its edges don\'t pass through any creatures or objects, or the spell is lost. The wall has AC 10, Hardness 30, and 60 Hit Points, and it\'s immune to critical hits and precision damage. The wall blocks physical effects from passing through it, and because it\'s made of force, it blocks incorporeal and ethereal creatures as well. Teleportation effects can pass through the barrier, as can visual effects (since the wall is invisible). Wall of force is immune to counteracting effects of its level or lower, but the wall is automatically destroyed by a disintegrate spell of any level or by contact with a rod of cancellation or sphere of annihilation.  \r\n**Heightened (+2)**  The Hit Points of the wall increases by 20.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=49',
    name: 'Contingency',
    traits: [ 'abjuration' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 326',
    traditions: [ 'arcane' ],
    cast: '10 minutes (material, somatic, verbal)',
    duration: '24 hours',
    text: 'You prepare a spell that will trigger later. While casting contingency, you also cast another spell of 4th level or lower with a casting time of no more than 3 actions. This companion spell must be one that can affect you. You must make any decisions for the spell when you cast contingency, such as choosing a damage type for resist energy. During the casting, choose a trigger under which the spell will be cast, using the same restrictions as for the trigger of a Ready action. Once contingency is cast, you can cause the companion spell to come into effect as a reaction with that trigger. It affects only you, even if it would affect more creatures. If you define complicated conditions, as determined by the GM, the trigger might fail. If you cast contingency again, the newer casting supersedes the older.  \r\n**Heightened (8th)**  You can choose a spell of 5th level or lower.  \r\n**Heightened (9th)**  You can choose a spell of 6th level or lower.  \r\n**Heightened (10th)**  You can choose a spell of 7th level or lower.',
    components: [ '10minutes(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=71',
    name: 'Dimensional Lock',
    traits: [ 'uncommon', 'abjuration' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 329',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    area: '60-foot burst',
    text: 'You create a shimmering barrier that attempts to counteract teleportation effects and planar travel into or out of the area, including items that allow access to extradimensional spaces (such as a bag of holding). Dimensional lock tries to counteract any attempt to summon a creature into the area but doesn\'t stop the creature from departing when the summoning ends.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=93',
    name: 'Duplicate Foe',
    traits: [ 'conjuration' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 334',
    traditions: [ 'arcane', 'occult' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: '30 feet',
    targets: '1 enemy of level 15 or lower',
    'saving throw': 'Fortitude',
    duration: 'sustained up to 1 minute',
    text: 'You try to create a temporary duplicate of an enemy to fight on your behalf. The target can attempt a Fortitude save to disrupt the spell. The duplicate appears in an unoccupied space adjacent to the target and has the target\'s attack modifier, AC, saving throw modifiers, Perception, and skill modifiers, but it has only 70 Hit Points and lacks the target\'s special abilities, including immunities, resistances, and weaknesses. It has no magic items except weapon potency runes. The duplicate gains the minion trait, and it can only Stride and Strike. Its Strikes deal the target\'s normal damage but don\'t apply added effects, since it doesn\'t have special abilities. The spell automatically ends if the duplicate\'s Hit Points drop to 0. The duplicate attacks your enemies to the best of its abilities. You can also try to give it additional instructions; when you Sustain the Spell, you can also Command a Minion as part of your action, but the GM determines whether the duplicate follows your command. The duplicate is unstable, so each turn after it takes its actions, it loses 4d6 Hit Points. It\'s not a living creature, and it can never regain its lost Hit Points in any way.  \r\n**Critical Success**  You fail to create a duplicate.  \r\n**Success**  The duplicate deals half damage with its Strikes and the duration is reduced to a maximum of 2 rounds.  \r\n**Failure**  The duplicate works as described.  \r\n**Heightened (+1)**  The level of creature you can target increases by 2. The duplicate has 10 more HP.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=96',
    name: 'Eclipse Burst',
    traits: [ 'cold', 'darkness', 'necromancy', 'negative' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 334',
    traditions: [ 'arcane', 'divine', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '500 feet',
    area: '60-foot burst',
    'saving throw': 'Reflex',
    text: 'A globe of freezing darkness explodes in the area, dealing 8d10 cold damage to creatures and objects in the area, plus 8d4 additional negative damage to living creatures. Creatures and objects in the area must attempt a Reflex save. If the globe overlaps with an area of magical light or affects a creature affected by magical light, eclipse burst attempts to counteract the light effect.  \r\n**Critical Success**  The creature or object is unaffected.  \r\n**Success**  The creature or object takes half damage.  \r\n**Failure**  The creature or object takes full damage.  \r\n**Critical Failure**  The creature or object takes double damage. If it\'s a creature, it becomes blinded by the darkness for an unlimited duration.  \r\n**Heightened (+1)**  The cold damage increases by 1d10 and the negative damage against the living increases by 1d4.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=100',
    name: 'Energy Aegis',
    traits: [ 'abjuration' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 335',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: '1 minute (material, somatic, verbal)',
    range: 'touch',
    targets: '1 creature',
    duration: '24 hours',
    text: 'You protect the target with a powerful, long-lasting energy barrier. The target gains resistance 5 to acid, cold, electricity, fire, force, negative, positive, and sonic damage.  \r\n**Heightened (9th)**  The resistances increase to 10.',
    components: [ '1minute(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=115',
    name: 'Fiery Body',
    traits: [ 'fire', 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 337',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute',
    text: 'You become living flame, giving you fire immunity, resistance 10 to precision damage, and weakness 5 to cold and to water. Any creature that touches you or damages you with an unarmed attack or non-reach melee weapon takes 3d6 fire damage. Your unarmed attacks deal 1d4 additional fire damage, and your fire spells deal one additional die of fire damage (of the same damage die the spell uses). You can cast produce flame as an innate spell; the casting is reduced from 2 actions to 1. In fire form, you have a fly Speed of 40 feet and don\'t need to breathe.  \r\n**Heightened (9th)**  Creatures touching you take 4d6 fire damage instead of 3d6, your unarmed attacks deal 2d4 additional fire damage, and you have a fly Speed of 60 feet.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=183',
    name: 'Magnificent Mansion',
    traits: [ 'conjuration', 'extradimensional' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 349',
    traditions: [ 'arcane', 'occult' ],
    cast: '1 minute (material, somatic, verbal)',
    range: '30 feet',
    duration: '24 hours',
    text: 'You conjure an extradimensional demiplane consisting of a spacious dwelling with a single entrance. The entrance connects to the plane where you Cast the Spell, appearing anywhere within the spell\'s range as a faint, shimmering, vertical rectangle 5 feet wide and 10 feet high. You designate who can enter when you cast the spell. Once inside, you can shut the entrance, making it invisible. You and the creatures you designated can reopen the door at will, just like opening a physical door. Inside, the demiplane appears to be a mansion featuring a magnificent foyer and numerous opulent chambers. The mansion can have any floor plan you imagine as you Cast the Spell, provided it fits within a space 40 feet wide, 40 feet deep, and 30 feet tall. While the entrance to the mansion is closed, effects from outside the mansion fail to penetrate it, and vice versa, except for plane shift, which can be used to enter the mansion. You can use scrying magic and similar effects to observe the outside only if they\'re capable of crossing planes. A staff of up to 24 servants attends to anyone within the mansion. These are like the servant created by the unseen servant spell, though they\'re visible, with an appearance you determine during casting. The mansion is stocked with enough food to serve a nine-course banquet to 150 people.',
    components: [ '1minute(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=185',
    name: 'Mask of Terror',
    traits: [ 'emotion', 'fear', 'illusion', 'mental', 'visual' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 350',
    traditions: [ 'arcane', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    duration: '1 minute',
    text: 'The target appears to be a gruesome and terrifying creature. The effect is unique to each observer, so a human viewing the target might see a demon with bloody fangs, but a demon observing the target might see a glowing angelic visage. When any creature attempts a hostile action against the target, the creature must attempt a Will save. It is then temporarily immune until the end of its next turn.  \r\n**Success**  The creature is unaffected.  \r\n**Failure**  The creature becomes frightened 2 before using its action.  \r\n**Critical Failure**  The creature becomes frightened 2, and its action fails and is wasted.  \r\n**Heightened (8th)**  You can target up to 5 creatures. If a creature uses a hostile action or reaction that affects multiple targets simultaneously, it needs to attempt only one save against mask of terror.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=222',
    name: 'Plane Shift',
    traits: [ 'uncommon', 'conjuration', 'teleportation' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 357',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: '10 minutes (focus, material, somatic, verbal)',
    range: 'touch',
    targets: '1 willing creature, or up to 8 willing creatures joining hands',
    text: 'You and your allies traverse the barriers between planes of existence. The targets move to another plane, such as the Plane of Fire, the Shadow Plane, or the Abyss. You must have specific knowledge of the destination plane and use a magic tuning fork created from material from that plane as a focus for the spell. While the tuning forks for most prominent planes are uncommon, just like the spell plane shift, more obscure planes and demiplanes often have rare tuning forks. The spell is highly imprecise, and you appear 1d20x25 miles from the last place one of the targets (of your choice) was located the last time that target traveled to the plane. If it\'s the first time traveling to a particular plane for all targets, you appear at a random location on the plane. Plane shift doesn\'t provide a means of return travel, though casting plane shift again allows you to return to your previous plane unless there are extenuating circumstances.',
    components: [ '10minutes(focus', 'material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=226',
    name: 'Power Word Blind',
    traits: [ 'uncommon', 'auditory', 'enchantment', 'mental' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 358',
    traditions: [ 'arcane' ],
    cast: 'verbal',
    action: '1',
    trigger: 'NULl',
    range: '30 feet',
    targets: '1 creature',
    duration: 'varies',
    text: 'You utter an arcane word of power that can make the target blinded upon hearing it. Once targeted, the target is then temporarily immune for 10 minutes. The effect of the spell depends on the target\'s level.   \r\n**11th or Lower**  The target is blinded permanently.   \r\n**12th-13th**  The target is blinded for 1d4 minutes.   \r\n**14th or Higher**  The target is dazzled for 1 minute.  \r\n**Heightened (+1)**  The levels at which each outcome applies increase by 2.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=233',
    name: 'Prismatic Spray',
    traits: [ 'evocation', 'light' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 360',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '30-foot cone',
    text: 'A spray of rainbow light beams cascades from your open hand. Each creature in the area must roll 1d8 on the table below to see which beam affects it, then attempt a saving throw of the indicated type. The table notes any additional traits that apply to each type of ray. If a creature is struck by multiple beams, it uses the same d20 result for all its saving throws. For all rays, a successful saving throw negates the effect for that creature.Prismatic Spray 1d8ColorSaveEffects (Traits) 1RedReflex50 fire damage (fire) 2OrangeReflex60 acid damage (acid) 3YellowReflex70 electricity damage (electricity) 4GreenFortitude30 poison damage and enfeebled 1 for 1 minute (poison) 5BlueFortitudeAffected as if by flesh to stone 6IndigoWillConfused, as the warp mind spell (mental) 7VioletWillSlowed for 1 minute; if a critical failure, sent to another plane, as plane shift (teleportation) 8Potent beam-Affected by two beams - roll twice, rerolling any duplicates or results of 8 ',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=237',
    name: 'Project Image',
    traits: [ 'illusion', 'mental' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 360',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    duration: 'sustained up to 1 minute',
    text: 'You project an illusory image of yourself. You must stay within range of the image, and if at any point you can\'t see the image, the spell ends. Whenever you Cast a Spell other than one whose area is an emanation, you can cause the spell effect to originate from either yourself or the image. Because the image is an illusion, it can\'t benefit from spells, though visual manifestations of the spell appear. The image has the same AC and saves as you. If it is hit by an attack or fails a save, the spell ends.  \r\n**Heightened (+2)**  The maximum duration you can Sustain the Spell increases to 10 minutes.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=261',
    name: 'Reverse Gravity',
    traits: [ 'uncommon', 'evocation' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 365',
    traditions: [ 'arcane', 'occult' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: '120 feet',
    area: '20-foot radius, 40-foot-tall cylinder',
    duration: '1 minute',
    text: 'You reverse gravity in the area. Creatures and objects that aren\'t secured to the ground immediately fall upward to the top of the area. A creature might be able to Grab an Edge to arrest its fall if it falls past an appropriate surface. If a creature falls against a solid object (such as a ceiling), it takes the appropriate amount of falling damage and lands on the surface. Once an object or creature reaches the top of the area, it floats, caught between the normal and reversed gravity. The creature can move along the plane where the two forms of gravity meet. Creatures that can levitate or fly can use those abilities to mitigate the effects of reverse gravity.When reverse gravity ends, all creatures and objects caught in the area fall back down. Likewise, anything that moves beyond the spell\'s area is subjected to normal gravity again.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=297',
    name: 'Spell Turning',
    traits: [ 'uncommon', 'abjuration' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 371',
    traditions: [ 'arcane' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 hour',
    text: 'This abjuration reflects spells cast at you back at their caster. When a spell targets you, you can spend a reaction to attempt to reflect it. This uses the rules for counteracting the spell, but if the spell is successfully counteracted, the effect is turned back on the caster. Whether or not the counteract attempt is successful, spell turning then ends. Spell turning can\'t affect spells that aren\'t targeted (such as area spells). If spell turning reflects a spell back at a caster who is also under the effect of spell turning, their spell turning can attempt to reflect their own spell back at you again; if they do so, their counteract attempt automatically succeeds.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=346',
    name: 'True Target',
    traits: [ 'divination', 'fortune', 'prediction' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 379',
    traditions: [ 'arcane', 'occult' ],
    cast: 'verbal',
    action: '1',
    range: '60 feet',
    targets: '1 creature',
    duration: 'until the start of your next turn',
    text: 'You delve into the possible futures of the next few seconds to understand all the ways your target might avoid harm, then cast out a vision of that future to those around you. On the first attack roll made against the target during true target\'s duration, the attacker rolls twice and uses the better result. The attacker also ignores circumstance penalties to the attack roll and any flat check required due to the target being concealed or hidden.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=369',
    name: 'Warp Mind',
    traits: [ 'emotion', 'enchantment', 'incapacitation', 'mental' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 383',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    text: 'You scramble a creature\'s mental faculties and sensory input. The target must attempt a Will saving throw. Regardless of the result of that save, the target is then temporarily immune for 10 minutes. Warp mind\'s effects happen instantly, so dispel magic and other effects that counteract spells can\'t counteract them. However, alter reality, miracle, primal phenomenon, restoration, or wish can still counteract the effects.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target spends the first action on its next turn with the confused condition.  \r\n**Failure**  The target is confused for 1 minute.  \r\n**Critical Failure**  The target is confused permanently.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=14',
    name: 'Antimagic Field',
    traits: [ 'rare', 'abjuration' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 318',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'material, somatic, verbal',
    action: '3',
    area: '10-foot emanation',
    duration: 'sustained up to 1 minute',
    text: 'You repel all magic from the target area, preventing spells and other magic from functioning. Spells can\'t penetrate the area, magic items cease to function within it, and no one inside can cast spells or use magic abilities. Likewise, spells- such as dispel magic-can\'t affect the field itself unless they are of a higher level. Magic effects resume the moment they pass outside the field. For example, a ray fired from one side of the field could target a creature on the other side (as long as caster and target are both outside the field). A summoned creature winks out of existence but reappears if the field moves or ends. Invested magic items cease to function, but they remain invested and resume functioning when they exit the field; the ability boost from an apex item isn\'t suppressed within the field. Spells of a higher level than the antimagic field overcome its effects, and can even be cast by a creature within the field. The field disrupts only magic, so a +3 longsword still functions as a longsword. Magically created creatures (such as golems) function normally within an antimagic field.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=73',
    name: 'Disappearance',
    traits: [ 'illusion' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 330',
    traditions: [ 'arcane', 'occult' ],
    cast: 'material, somatic',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    duration: '10 minutes',
    text: 'You shroud a creature from others\' senses. The target becomes undetected, not just to sight but to all senses, allowing the target to count as invisible no matter what precise and imprecise senses an observer might have. It\'s still possible for a creature to find the target by Seeking, looking for disturbed dust, hearing gaps in the sound spectrum, or finding some other way to discover the presence of an otherwise-undetectable creature.',
    components: [ 'material', 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=75',
    name: 'Discern Location',
    traits: [ 'uncommon', 'detection', 'divination' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 330',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: '10 minutes (material, somatic, verbal)',
    range: 'unlimited',
    targets: '1 creature or object',
    text: 'You learn the name of the target\'s exact location (including the building, community, and country) and plane of existence. You can target a creature only if you\'ve seen it in person, have one of its significant belongings, or have a piece of its body. To target an object, you must have touched it or have a fragment of it. Discern location automatically overcomes protections against detection and divination of lower level than this spell, even if they would normally have a chance to block it.',
    components: [ '10minutes(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=89',
    name: 'Dream Council',
    traits: [ 'illusion', 'mental', 'sleep' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 333',
    traditions: [ 'arcane', 'occult' ],
    cast: '10 minutes (somatic, verbal)',
    range: 'planetary',
    targets: 'up to 12 creatures you know by name and have met in person',
    duration: '1 hour',
    text: 'When you Cast this Spell, any targets-including you-can choose to immediately fall asleep. The spell ends for any creatures that don\'t choose to fall asleep. Sleepers join a shared dream, where they can communicate with one another as though they were in the same room. Individual targets leave this shared dream upon awakening, and if all the targets awaken, the spell ends.',
    components: [ '10minutes(somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=95',
    name: 'Earthquake',
    traits: [ 'earth', 'evocation' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 334',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '500 feet',
    area: '60-foot burst',
    duration: '1 round',
    text: 'You shake the ground, topple creatures into fissures, and collapse structures. The GM might add additional effects in certain areas. Cliffs might collapse, causing creatures to fall, or a lake might drain as fissures open up below its surface, leaving a morass of quicksand. Shaking Ground The ground is difficult terrain, and creatures on it take a -2 circumstance penalty to attack rolls, AC, and skill checks. Fissures Each creature on the ground must attempt a Reflex save at the start of its turn to keep its footing and avoid falling into 40-foot-deep fissures that open beneath it. The fissures are permanent, and their sides require DC 15 Athletics to Climb. Collapse Structures and ceilings might collapse. The GM rolls a flat check for each (DC 16 for a sturdy structure, DC 14 for an average structure and most natural formations, DC 9 for a shoddy structure, all adjusted higher or lower as the GM sees fit). A collapse deals 11d6 bludgeoning damage; each creature caught in a collapse must attempt a Reflex save to avoid it.  \r\n**Critical Success**  The creature takes half the collapse damage.  \r\n**Success**  The creature takes half the collapse damage and falls prone.  \r\n**Failure**  The creature takes the full collapse damage and falls prone.  \r\n**Critical Failure**  The creature takes the full collapse damage and falls into a fissure.  \r\n**Heightened (10th)**  You create a massive earthquake that can devastate a settlement. The range increases to half a mile and the area to a quarter-mile burst.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=152',
    name: 'Horrid Wilting',
    traits: [ 'necromancy', 'negative' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 344',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '500 feet',
    targets: 'any number of living creatures',
    'saving throw': 'basic Fortitude',
    text: 'You pull the moisture from the targets\' bodies, dealing 10d10 negative damage. Creatures made of water (such as water elementals) and plant creatures use the outcome for one degree of success worse than the result of their saving throw. Creatures whose bodies contain no significant moisture (such as earth elementals) are immune to horrid wilting.  \r\n**Heightened (+1)**  The damage increases by 1d10.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=187',
    name: 'Maze',
    traits: [ 'conjuration', 'extradimensional', 'teleportation' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 350',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    duration: 'sustained',
    text: 'You transport the target into an extradimensional maze of eldritch origin and trap it there. Once each turn, the target can spend 1 action to attempt a Survival check or Perception check against your spell DC to escape the maze. The possible outcomes are as follows.Teleportation magic doesn\'t help the creature escape unless the magic can transport across planes, such as plane shift. When the spell ends, either because the target escaped or the duration ran out, the target returns to the space it occupied when it was banished, or to the nearest space if the original is now filled.  \r\n**Critical Success**  The target escapes and the spell ends.  \r\n**Success**  The target escapes and the spell ends.  \r\n**Failure**  The target makes no progress toward escape.  \r\n**Critical Failure**  The target makes no progress toward escape, and if it was on the right path, it no longer is.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=192',
    name: 'Mind Blank',
    traits: [ 'uncommon', 'abjuration' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 351',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    duration: 'until the next time you make your daily preparations',
    text: 'Powerful wards hide a creature from divination magic. The target gains a +4 status bonus to saves against mental effects. Mind blank attempts to counteract any detection, revelation, and scrying effects as if its spell level were 1 higher than its actual level. On a success, the divination effect functions normally except that it detects nothing about the target and its possessions. For instance, detect magic would still detect other magic in the area, but not any magic on the target.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=202',
    manual: true,
    name: 'Monstrosity Form',
    traits: [ 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 353',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute',
    text: 'You transform into the shape of a legendary monster, assuming a Huge battle form. You must have enough space to expand into or the spell is lost. When you cast this spell, choose phoenix, purple worm, or sea serpent. While in this form, you gain the beast trait (for phoenix) or the animal trait (for purple worm or sea serpent). You can Dismiss the spell. You gain the following statistics and abilities regardless of which battle form you choose:  \r\n * AC = 20 + your level. Ignore your armor\'s check penalty and Speed reduction.\r\n * 20 temporary Hit Points.\r\n * Darkvision.\r\n * One or more unarmed melee attacks specific to the battle form you choose, which are the only attacks you can use. You\'re trained with them. Your attack modifier is +28, and you use the listed damage. These attacks are Strength based (for the purpose of the enfeebled condition, for example). If your unarmed attack modifier is higher, you can use it instead.\r\n * Athletics modifier of +30, unless your own modifier is higher.\r\n  \r\nYou also gain specific abilities based on the type of monster you choose:\r\n * **Phoenix** Speed 30 feet, fly Speed 90 feet; **Melee** |1| beak (reach 15 feet), **Damage** 2d6+12 piercing plus 2d4 fire and 2d4 persistent fire; **Melee** |1| talon (agile, reach 15 feet), **Damage** 2d8+12 slashing; **Shroud of Flame** (aura, evocation, fire, primal) 20 feet. You gain an aura of fire that extends out from you. A creature that enters or ends its turn within the aura takes 2d6 fire damage. A creature can take this damage only once per turn. You can use a single action, which has the concentrate trait, to activate or deactivate this aura.\r\n * **Purple Worm** Speed 40 feet, burrow Speed 30 feet, swim Speed 20 feet; **Melee** |1| jaws (reach 10 feet), **Damage** 2d12+20 piercing; **Melee** |1| stinger (agile, reach 10 feet), **Damage** 2d8+15 piercing plus 2d6 persistent poison; **Melee** |1| body (reach 10 feet) **Damage** 2d8+20 bludgeoning; **Inexorable** You automatically recover from the paralyzed, slowed, and stunned conditions at the end of each of your turns. You\'re also immune to being immobilized and ignore difficult terrain and greater difficult terrain.\r\n * **Sea Serpent** Speed 20 feet, swim Speed 90 feet; **Melee** |1| jaws (reach 15 feet), **Damage** 2d12+20 piercing; **Melee** |1| tail (reach 25 feet), **Damage** 2d8+20 bludgeoning; **Spine Rake** |2| (move) You extend your spines and Swim or Stride. Each creature you\'re adjacent to at any point during your movement takes 4d8+10 slashing damage (basic Reflex against your spell DC).\r\n  \r\n**Heightened (9th)**  You instead gain AC = 22 + your level, 25 temporary HP, attack modifier +31, increase damage by one damage die, and Athletics +33.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=224',
    name: 'Polar Ray',
    traits: [ 'cold', 'evocation' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 358',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    targets: '1 creature or object',
    text: 'You fire a blue-white ray of freezing air and swirling sleet from your finger that can chill your target to the bones. You must succeed at a spell attack roll to affect the target, which then takes 10d8 cold damage and is drained 2.  \r\n**Heightened (+1)**  The damage increases by 2d8.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=228',
    name: 'Power Word Stun',
    traits: [ 'uncommon', 'auditory', 'enchantment', 'mental' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 359',
    traditions: [ 'arcane' ],
    cast: 'verbal',
    action: '1',
    range: '30 feet',
    targets: '1 creature',
    duration: 'varies',
    text: 'You stun the target with an arcane word of power. Once targeted, the target is then temporarily immune for 10 minutes. The effect of the spell depends on the target\'s level. 13th or Lower The target is stunned for 1d6 rounds. 14th-15th The target is stunned for 1 round. 16th or Higher The target is stunned 1.  \r\n**Heightened (+1)**  The levels at which each outcome applies increase by 2.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=234',
    name: 'Prismatic Wall',
    traits: [ 'abjuration', 'light' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 360',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    duration: '1 hour',
    text: 'You create an opaque wall of shimmering, multicolored light. The wall is straight and vertical, stretching 60 feet long and 30 feet high. You must form the wall in an unbroken open space so its edges don\'t pass through any creatures or objects, or the spell is lost. You can pass through the wall and ignore its effects. The wall sheds bright light out to 20 feet on each side (and dim light to the next 20 feet). Creatures other than you that come into the wall\'s light must attempt a Will save; they\'re dazzled for 1 round on a success, blinded for 1 round on a failure, and blinded for 1 minute on a critical failure. They are then temporarily immune to the blinding effect for 1 hour. A prismatic wall has seven different layers, each a different color. Red, orange, yellow, and green have the effect of a 5th-level chromatic wall (page 323) spell of that color, and the others have the effect of a 7th-level chromatic wall spell of that color. A creature that tries to pass through the wall must attempt a saving throw against each component wall. The effects take place simultaneously, so a creature turned to stone by the blue wall is still treated as a creature for the indigo and violet walls. The wall as a whole is immune to counteracting effects of the wall\'s level or lower; each color must be counteracted by its specific spell, as described in chromatic wall. This must be done in order (red, orange, yellow, green, blue, indigo, then violet). A given color can\'t be affected until the previous color is counteracted. Counteracting a color wall removes that color\'s effect from the wall, and counteracting them all ends prismatic wall. You can Dismiss the spell.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=267',
    name: 'Scintillating Pattern',
    traits: [ 'illusion', 'incapacitation', 'visual' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 367',
    traditions: [ 'arcane', 'occult' ],
    cast: 'material, somatic',
    action: '2',
    range: '120 feet',
    area: '20-foot burst',
    'saving throw': 'Will',
    duration: 'sustained up to 1 minute',
    text: 'A field of cascading, ever-changing colors manifests in the air. Creatures are dazzled while inside the pattern, as are those within 20 feet of the pattern\'s area. A creature must attempt a Will save if it is inside the pattern when you cast it, enters the pattern, ends its turn within the pattern, or uses a Seek or Interact action on the pattern. A creature currently affected by the pattern doesn\'t need to attempt new saves.  \r\n**Success**  The creature is unaffected.  \r\n**Failure**  The creature is confused for 1d4 rounds.  \r\n**Critical Failure**  The creature is stunned for 1d4 rounds. After the stunned condition ends, the creature is confused for the remaining duration of the spell.',
    components: [ 'material', 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=347',
    name: 'Uncontrollable Dance',
    traits: [ 'enchantment', 'incapacitation', 'mental' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 379',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: 'varies',
    text: 'The target is overcome with an all-consuming urge to dance. For the duration of the spell, the target is flat-footed and can\'t use reactions. While affected, the creature can\'t use actions with the move trait except to dance, using the Stride action to move up to half its Speed.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The spell\'s duration is 3 rounds, and the target must spend at least 1 action each turn dancing.  \r\n**Failure**  The spell\'s duration is 1 minute, and the target must spend at least 2 actions each turn dancing.  \r\n**Critical Failure**  The spell\'s duration is 1 minute, and the target must spend all its actions each turn dancing.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=351',
    name: 'Unrelenting Observation',
    traits: [ 'divination', 'scrying' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 379',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '100 feet',
    area: '20-foot burst',
    targets: '1 creature or object tracked and up to 5 other willing creatures',
    duration: 'varies',
    text: 'This spell grants perfect sight based on scrying, allowing several willing targets to track the exact movements or position of one creature or object. Choose one target creature or object in the area to be tracked. It becomes the sensor for the spell. Up to five willing creatures of your choice in the area can see a ghostly image of this creature or object when it\'s out of their sight. They can perceive the creature or object perfectly, allowing them to ignore the concealed or invisible condition, though physical barriers still provide cover. The tracking creatures can see the tracked creature or object through all barriers other than lead or running water, which block their vision. Distance doesn\'t matter, though the creature or object might move so far away it becomes too small to perceive. The tracking creatures don\'t see any of the environment around the target, though they do see any gear a creature is wearing or holding, and they can tell if it removes objects from its person. If the target to be tracked is willing, the duration is 1 hour. If you try to track an unwilling creature, the target must attempt a Will save.  \r\n**Critical Success**  The creature or object is unaffected.  \r\n**Success**  As described, and the duration is 1 minute.  \r\n**Failure**  As described, and the duration is 1 hour.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=77',
    name: 'Disjunction',
    traits: [ 'uncommon', 'abjuration' ],
    type: 'Spell',
    level: 9,
    source: 'Core Rulebook pg. 330',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    targets: '1 magic item',
    text: 'Crackling energy disjoins the target. You attempt to counteract it (page 458). If you succeed, it\'s deactivated for 1 week. On a critical success, it\'s destroyed. If it\'s an artifact or similar item, you automatically fail.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=127',
    name: 'Foresight',
    traits: [ 'divination', 'mental', 'prediction' ],
    type: 'Spell',
    level: 9,
    source: 'Core Rulebook pg. 340',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    duration: '1 hour',
    text: 'You gain a sixth sense that warns you of danger that might befall the target of the spell. If you choose a creature other than yourself as the target, you create a psychic link through which you can inform the target of danger. This link is a mental effect. Due to the amount of information this spell requires you to process, you can\'t have more than one foresight spell in effect at a time. Casting foresight again ends the previous foresight. While foresight is in effect, the target gains a +2 status bonus to initiative rolls and isn\'t flat-footed against undetected creatures or when flanked. In addition, you gain the following reaction.   \r\n**Foresight**',
    trigger: 'The target of foresight defends against a hostile creature or other danger.',
    effect: ' If the hostile creature or danger forces the target to roll dice (a saving throw, for example), the target rolls twice and uses the higher result, and this spell gains the fortune trait. But if the hostile creature or danger is rolling against the target (an attack roll or skill check, for example), that hostile creature or danger rolls twice and uses the lower result, and this spell gains the misfortune trait.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=162',
    name: 'Implosion',
    traits: [ 'evocation' ],
    type: 'Spell',
    level: 9,
    source: 'Core Rulebook pg. 346',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 corporeal creature',
    'saving throw': 'basic Fortitude',
    duration: 'sustained up to 1 minute',
    text: 'You crush the target by causing it to collapse in on itself, dealing 75 damage. Each time you Sustain the Spell, you must choose a new target to be subject to the same effect; the same creature can never be targeted more than once with a single casting of this spell. You also can\'t affect more than one creature per turn with implosion. You can\'t target a creature that\'s incorporeal, gaseous, or liquid, or one that otherwise lacks a solid form.  \r\n**Heightened (+1)**  The damage increases by 10.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=186',
    name: 'Massacre',
    traits: [ 'death', 'necromancy', 'negative' ],
    type: 'Spell',
    level: 9,
    source: 'Core Rulebook pg. 350',
    traditions: [ 'arcane', 'divine', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '60-foot line',
    'saving throw': 'Fortitude',
    text: 'You unleash a wave of necromantic energy to snuff out the life force of those in its path. Each creature of 17th level or lower in the line must attempt a Fortitude save. If the damage from massacre reduces a creature to 0 Hit Points, that creature dies instantly. If massacre doesn\'t kill even a single creature, the negative energy violently explodes back toward you, dealing an additional 30 negative damage to every creature in the line (even those above 17th level) and 30 negative damage to you.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes 9d6 negative damage.  \r\n**Failure**  The creature takes 100 negative damage.  \r\n**Critical Failure**  The creature dies.  \r\n**Heightened (10th)**  The spell can affect creatures up to 19th level. Increase the damage to 10d6 on a success, and to 115 on a failure.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=191',
    name: 'Meteor Swarm',
    traits: [ 'evocation', 'fire' ],
    type: 'Spell',
    level: 9,
    source: 'Core Rulebook pg. 351',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '500 feet',
    area: '4 40-foot bursts',
    'saving throw': 'basic Reflex',
    text: 'You call down four meteors that explode in a fiery blast. Each meteor deals 6d10 bludgeoning damage to any creatures in the 10-foot burst at the center of its area of effect before exploding, dealing 14d6 fire damage to any creatures in its 40-foot burst. The meteors\' central 10-foot bursts can\'t overlap, and a creature takes the same amount of fire damage no matter how many overlapping explosions it\'s caught in. The saving throw applies to both the bludgeoning and the fire damage.  \r\n**Heightened (+1)**  The bludgeoning damage increases by 1d10, and the fire damage increases by 2d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=227',
    name: 'Power Word Kill',
    traits: [ 'uncommon', 'auditory', 'death', 'enchantment', 'mental' ],
    type: 'Spell',
    level: 9,
    source: 'Core Rulebook pg. 358',
    traditions: [ 'arcane' ],
    cast: 'verbal',
    action: '1',
    range: '30 feet',
    targets: '1 creature',
    duration: 'varies',
    text: 'You utter the most powerful arcane word of power. Once targeted, the target is then temporarily immune for 10 minutes. The effect of the spell depends on the target\'s level. 14th or Lower The target dies instantly. 15th If the target has 50 Hit Points or fewer, it dies instantly; otherwise, it drops to 0 Hit Points and becomes dying 1, or increases its dying condition by 1 if it\'s already dying. 16th or Higher The target takes 50 damage; if this brings the target to 0 Hit Points, the target dies instantly.  \r\n**Heightened (10th)**  The levels at which each outcome applies increase by 2.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=232',
    name: 'Prismatic Sphere',
    traits: [ 'abjuration', 'light' ],
    type: 'Spell',
    level: 9,
    source: 'Core Rulebook pg. 359',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '10 feet',
    duration: '1 hour',
    text: 'You create a seven-layered sphere to protect an area. This multicolored sphere functions like a prismatic wall but is shaped in a 10-foot burst centered on a corner of your space. You must form the sphere in an unbroken open space so its edges don\'t pass through any creatures or objects, or the spell is lost.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=257',
    name: 'Resplendent Mansion',
    traits: [ 'conjuration' ],
    type: 'Spell',
    level: 9,
    source: 'Core Rulebook pg. 364',
    traditions: [ 'arcane', 'occult' ],
    cast: '1 minute (material, somatic, verbal)',
    range: '500 feet',
    duration: 'until the next time you make your daily preparations',
    text: 'You conjure a towering mansion up to four stories tall and up to 300 feet on a side. While Casting the Spell, you hold an image of the mansion and its desired appearance in your mind. The mansion can contain as many or as few rooms as you desire, and it is decorated as you imagine it. You can imagine a purpose for each room of the mansion, and the proper accouterments appear within. Any furniture or other mundane fixtures function normally for anyone inside the mansion, but they cease to exist if taken beyond its walls. No fixture created with this spell can create magical effects, but magical devices brought into the mansion function normally. Your mansion contains the same types and quantities of foodstuffs and servants as created by the magnificent mansion spell. Each of the mansion\'s exterior doorways and windows are protected by alarm spells. You choose whether each alarm is audible or mental as you Cast the Spell, and each has a different sound (for an audible alarm) or sensation (for a mental one), allowing you to instantly determine which portal has been used.',
    components: [ '1minute(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=278',
    name: 'Shapechange',
    traits: [ 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 9,
    source: 'Core Rulebook pg. 368',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute',
    text: 'Harnessing your mastery of transformative magic, you take on a mutable form. You transform yourself into any form you could choose with a polymorph spell in your spell repertoire or that you could prepare of 8th level or lower (including any 8th-level or lower heightened versions of spells you know). You choose the type of creature as you Cast the Spell rather than when you prepare it. You can change your form to any other form you could choose with this spell by using a single action, which has the concentrate trait. You can Dismiss this spell.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=336',
    name: 'Telepathic Demand',
    traits: [ 'enchantment', 'incapacitation', 'linguistic', 'mental' ],
    type: 'Spell',
    level: 9,
    source: 'Core Rulebook pg. 377',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: 'planetary',
    targets: '1 creature you\'ve telepathically contacted before',
    'saving throw': 'Will',
    duration: 'varies',
    text: 'You send the target a message of 25 words or fewer, and it can respond immediately with its own message of 25 words or fewer. Your message is insidious and has the effect of suggestion, with the message substituting for the spoken suggestion. On a successful save, the target is temporarily immune for 1 day, and on a critical success, the target is temporarily immune for 1 month. You can target a creature only if you have previously been in telepathic contact with it before, such as via the telepathy spell.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=375',
    name: 'Weird',
    traits: [ 'death', 'emotion', 'fear', 'illusion', 'mental' ],
    type: 'Spell',
    level: 9,
    source: 'Core Rulebook pg. 385',
    traditions: [ 'arcane', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    targets: 'any number of creatures',
    'saving throw': 'Will',
    text: 'You fill the targets\' minds with terrifying images of fearsome creatures, each drawn from the targets\' worst fears. Only the targets can see their assailants. Each target takes 16d6 mental damage and must attempt a Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes half damage and is frightened 1.  \r\n**Failure**  The target takes full damage and is frightened 2.  \r\n**Critical Failure**  The target is so afraid, it might instantly die. It must attempt a Fortitude saving throw. If the target succeeds, it takes double damage and is frightened 2, and it\'s also fleeing until the end of its next turn unless it critically succeeded. If it fails, it is reduced to 0 Hit Points and dies.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=32',
    name: 'Cataclysm',
    traits: [ 'acid', 'air', 'cold', 'earth', 'electricity', 'evocation', 'fire', 'water' ],
    type: 'Spell',
    level: 10,
    source: 'Core Rulebook pg. 322',
    traditions: [ 'arcane', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '1,000 feet',
    area: '60-foot burst',
    'saving throw': 'basic Reflex',
    text: 'You call upon the unimaginable power of world-ending cataclysms, ripping a small piece of each cataclysm and combining them together into one horrifically powerful attack. The following effects come down upon all creatures in the area. Treat the resistances of creatures in the area as if they were 10 lower for the purpose of determining the cataclysm\'s damage. Each creature attempts one basic Reflex save that applies to all six types of damage. Flesh-dissolving acid rain deals 3d10 acid damage. A roaring earthquake shakes and bludgeons creatures on the ground, dealing 3d10 bludgeoning damage. A blast of freezing wind deals 3d10 cold damage. Incredible lightning lashes the area, dealing 3d10 electricity damage. Beating winds churn across the sky, dealing 3d10 bludgeoning damage to creatures flying in the area. An instant tsunami sweeps over creatures in the area, dealing 3d10 bludgeoning damage with the water trait (doubled for creatures swimming in the area). A massive wildfire burns in a sudden inferno, dealing 3d10 fire damage.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=130',
    name: 'Gate',
    traits: [ 'uncommon', 'conjuration', 'teleportation' ],
    type: 'Spell',
    level: 10,
    source: 'Core Rulebook pg. 340',
    traditions: [ 'arcane', 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    duration: 'sustained up to 1 minute',
    text: 'You tear open a rift to another plane, creating a portal that creatures can travel through in either direction. This portal is vertical and circular, with a radius of 40 feet. The portal appears at a location of your choice on the destination plane, assuming you have a clear idea of both the destination\'s location on the plane and what the destination looks like. If you attempt to create a gate into or out of the realm of a deity or another powerful being, that being can prevent the gate from forming.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=249',
    name: 'Remake',
    traits: [ 'uncommon', 'conjuration' ],
    type: 'Spell',
    level: 10,
    source: 'Core Rulebook pg. 363',
    traditions: [ 'arcane', 'divine', 'occult', 'primal' ],
    cast: '1 hour (material, somatic, verbal)',
    range: '5 feet',
    text: 'You fully re-create an object from nothing, even if the object was destroyed. To do so, you must be able to picture the object in your mind. Additionally, the material component must be a remnant of the item, no matter how small or insignificant (even a speck of dust that remains from disintegrate is enough). The spell fails if your imagination relied on too much guesswork; if the object would be too large to fit in a 5-foot cube; if the object still exists and you were simply not aware of it; or if the object is an artifact, has a level over 20, or has similar vast magical power. The item reassembles in perfect condition. Even if your mental image was of a damaged or weathered object, the new one is in this perfected form. If the object was magical, this spell typically restores its constant magical properties, but not any temporary ones, such as charges or one-time uses. An item with charges or uses per day has all of its uses expended when remade, but it replenishes them normally thereafter.',
    components: [ '1hour(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=339',
    name: 'Time Stop',
    traits: [ 'transmutation' ],
    type: 'Spell',
    level: 10,
    source: 'Core Rulebook pg. 378',
    traditions: [ 'arcane', 'occult' ],
    cast: 'material, somatic, verbal',
    action: '3',
    text: 'You temporarily stop time for everything but yourself, allowing you to use several actions in what appears to others to be no time at all. Immediately after casting time stop, you can use up to 9 actions in 3 sets of up to 3 actions each. After each set of actions, 1 round passes, but only for you, effects specifically targeting or affecting you, and effects you create during the stoppage. All other creatures and objects are invulnerable to your attacks, and you can\'t target or affect them with anything. Once you have finished your actions, time begins to flow again for the rest of the world. If you created an effect with a duration that extends beyond the time stop\'s duration, such as wall of fire, it immediately affects others again, but it doesn\'t have any of the effects that happen only when you first cast the spell.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=377',
    name: 'Wish',
    traits: [ 'divination' ],
    type: 'Spell',
    level: 10,
    source: 'Core Rulebook pg. 385',
    traditions: [ 'arcane' ],
    cast: 'material, somatic, verbal',
    action: '3',
    text: 'You state a wish, making your greatest desire come true. A wish spell can produce any one of the following effects. Duplicate any arcane spell of 9th level or lower. Duplicate any non-arcane spell of 7th level or lower. Produce any effect whose power level is in line with the above effects. Reverse certain effects that refer to the wish spell. The GM might allow you to try using wish to produce greater effects than these, but doing so might be dangerous or the spell might have only a partial effect.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=79',
    name: 'Disrupt Undead',
    traits: [ 'cantrip', 'necromancy', 'positive' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 331',
    traditions: [ 'divine', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 undead creature',
    'saving throw': 'Fortitude',
    text: 'You lance the target with energy. You deal 1d6 positive damage plus your spellcasting ability modifier. The target must attempt a basic Fortitude save. If the creature critically fails the save, it is also enfeebled 1 for 1 round.  \r\n**Heightened (+1)**  The damage increases by 1d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=84',
    name: 'Divine Lance',
    traits: [ 'attack', 'cantrip', 'evocation' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 331',
    traditions: [ 'divine' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    text: 'You unleash a beam of divine energy. Choose an alignment your deity has (chaotic, evil, good, or lawful). You can\'t cast this spell if you don\'t have a deity or if your deity is true neutral. Make a ranged spell attack roll against the target\'s AC. On a hit, the target takes damage of the chosen alignment type equal to 1d4 + your spellcasting ability modifier (double damage on a critical hit). The spell gains the trait of the alignment you chose.  \r\n**Heightened (+1)**  The damage increases by 1d4.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=126',
    name: 'Forbidding Ward',
    traits: [ 'abjuration', 'cantrip' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 338',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 ally and 1 enemy',
    duration: 'sustained up to 1 minute',
    text: 'You ward an ally against the attacks and hostile spells from the target enemy. The target ally gains a +1 status bonus to Armor Class and saving throws against the target enemy\'s attacks, spells, and other effects.  \r\n**Heightened (6th)**  The status bonus increases to +2.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=142',
    name: 'Guidance',
    traits: [ 'cantrip', 'divination' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 342',
    traditions: [ 'divine', 'occult', 'primal' ],
    cast: 'verbal',
    action: '1',
    range: '30 feet',
    targets: '1 creature',
    duration: 'until the start of your next turn',
    text: 'You ask for divine guidance, granting the target a +1 status bonus to one attack roll, Perception check, saving throw, or skill check the target attempts before the duration ends. The target chooses which roll to use the bonus on before rolling. If the target uses the bonus, the spell ends. Either way, the target is then temporarily immune for 1 hour.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=169',
    name: 'Know Direction',
    traits: [ 'cantrip', 'detection', 'divination' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 348',
    traditions: [ 'divine', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    text: 'In your mind\'s eye, you see a path northward. You immediately know which direction is north (if it exists at your current location).  \r\n**Heightened (7th)**  You can instead know the direction to a familiar location, such as a previous home or a favorite tavern.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=307',
    name: 'Stabilize',
    traits: [ 'cantrip', 'healing', 'necromancy', 'positive' ],
    type: 'Cantrip',
    level: 1,
    source: 'Core Rulebook pg. 373',
    traditions: [ 'divine', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 dying creature',
    text: 'Positive energy shuts death\'s door. The target loses the dying condition, though it remains unconscious at 0 Hit Points.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=18',
    name: 'Bane',
    traits: [ 'enchantment', 'mental' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 320',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '5-foot emanation',
    targets: 'enemies in the area',
    'saving throw': 'Will',
    duration: '1 minute',
    text: 'You fill the minds of your enemies with doubt. Targets that fail their Will saves take a -1 status penalty to attack rolls as long as they are in the area. Once per turn, starting the turn after you cast bane, you can use a single action, which has the concentrate trait, to increase the emanation\'s radius by 5 feet and force enemies in the area that weren\'t yet affected to attempt another saving throw. Bane can counteract bless.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=25',
    name: 'Bless',
    traits: [ 'enchantment', 'mental' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 321',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '5-foot emanation',
    targets: 'you and allies in the area',
    duration: '1 minute',
    text: 'Blessings from beyond help your companions strike true. You and your allies in the area gain a +1 status bonus to attack rolls. Once per turn, starting the turn after you cast bless, you can use a single action, which has the concentrate trait, to increase the emanation\'s radius by 5 feet. Bless can counteract bane.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=65',
    name: 'Detect Alignment',
    traits: [ 'uncommon', 'detection', 'divination' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 328',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '30-foot emanation',
    text: 'Your eyes glow as you sense aligned auras. Choose chaotic, evil, good, or lawful. You detect auras of that alignment. You receive no information beyond presence or absence. You can choose not to detect creatures or effects you\'re aware have that alignment. Only creatures of 6th level or higher-unless divine spellcasters, undead, or beings from the Outer Sphere-have alignment auras.  \r\n**Heightened (2nd)**  You learn each aura\'s location and strength.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=67',
    name: 'Detect Poison',
    traits: [ 'uncommon', 'detection', 'divination' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 328',
    traditions: [ 'divine', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 object or creature',
    text: 'You detect whether a creature is venomous or poisonous, or if an object is poison or has been poisoned. You do not ascertain whether the target is poisonous in multiple ways, nor do you learn the type or types of poison. Certain substances, like lead and alcohol, are poisons and so mask other poisons.  \r\n**Heightened (2nd)**  You learn the number and types of poison.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=80',
    name: 'Disrupting Weapons',
    traits: [ 'necromancy', 'positive' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 331',
    traditions: [ 'divine' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: 'up to two weapons, each of which must be wielded by you or a willing ally, or else unattended',
    duration: '1 minute',
    text: 'You infuse weapons with positive energy. Attacks with these weapons deal an extra 1d4 positive damage to undead.  \r\n**Heightened (3rd)**  The damage increases to 2d4 damage.  \r\n**Heightened (5th)**  Target up to three weapons, and the damage increases to 3d4 damage.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=146',
    manual: true,
    name: 'Harm',
    traits: [ 'necromancy', 'negative' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 342',
    traditions: [ 'divine' ],
    cast: 'to',
    action: [ '1', '3' ],
    range: 'varies',
    targets: '1 living creature or 1 willing undead creature',
    text: 'You channel negative energy to harm the living or heal the undead. If the target is a living creature, you deal 1d8 negative damage to it, and it gets a basic Fortitude save. If the target is a willing undead creature, you restore that amount of Hit Points. The number of actions you spend when Casting this Spell determines its targets, range, area, and other parameters.  \r\n  \r\n |1| (somatic) The spell has a range of touch.  \r\n |2| (verbal, somatic) The spell has a range of 30 feet. If you\'re healing an undead creature, increase the Hit Points restored by 8.  \r\n |3| (material, verbal, somatic) You disperse negative energy in a 30-foot emanation. This targets all living and undead creatures in the area.  \r\n**Heightened (+1)**  The amount of healing or damage increases by 1d8, and the extra healing for the 2-action version increases by 8.'
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=148',
    name: 'Heal',
    traits: [ 'healing', 'necromancy', 'positive' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 342',
    traditions: [ 'divine', 'primal' ],
    cast: 'to',
    action: [ '1', '3' ],
    range: 'varies',
    targets: '1 willing living creature or 1 undead',
    text: 'You channel positive energy to heal the living or damage the undead. If the target is a willing living creature, you restore 1d8 Hit Points. If the target is undead, you deal that amount of positive damage to it, and it gets a basic Fortitude save. The number of actions you spend when Casting this Spell determines its targets, range, area, and other parameters.  \r\n  \r\n |1| (somatic) The spell has a range of touch.  \r\n |2| (verbal, somatic) The spell has a range of 30 feet. If you\'re healing a living creature, increase the Hit Points restored by 8.  \r\n |3| (material, somatic, verbal) You disperse positive energy in a 30-foot emanation. This targets all living and undead creatures in the burst.  \r\n**Heightened (+1)**  The amount of healing or damage increases by 1d8, and the extra healing for the 2-action version increases by 8.'
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=238',
    name: 'Protection',
    traits: [ 'uncommon', 'abjuration' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 361',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    duration: '1 minute',
    text: 'You ward a creature against a specified alignment. Choose chaotic, evil, good, or lawful when you cast this spell. The target gains a +1 status bonus to Armor Class and saving throws against creatures and effects of the chosen alignment. This bonus increases to +3 against effects from such creatures that would directly control the target and against attacks made by summoned creatures of the chosen alignment. This spell gains the trait that opposes the alignment you chose-if you choose chaos, this spell gains the lawful trait, and vice versa; if you choose evil, this spell gains the good trait, and vice versa.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=241',
    name: 'Purify Food and Drink',
    traits: [ 'necromancy' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 362',
    traditions: [ 'divine', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 cubic foot of contaminated food or water',
    text: 'You remove toxins and contaminations from food and drink, making them safe to consume. This spell doesn\'t prevent future contamination, natural decay, or spoilage. One cubic foot of liquid is roughly 8 gallons.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=266',
    name: 'Sanctuary',
    traits: [ 'abjuration' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 366',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    duration: '1 minute',
    text: 'You ward a creature with protective energy that deters enemy attacks. Creatures attempting to attack the target must attempt a Will save each time. If the target uses a hostile action, the spell ends.  \r\n**Critical Success**  Sanctuary ends.  \r\n**Success**  The creature can attempt its attack and any other attacks against the target this turn.  \r\n**Failure**  The creature can\'t attack the target and wastes the action. It can\'t attempt further attacks against the target this turn.  \r\n**Critical Failure**  The creature wastes the action and can\'t attempt to attack the target for the rest of sanctuary\'s duration.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=302',
    name: 'Spirit Link',
    traits: [ 'healing', 'necromancy' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 371',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 willing creature',
    duration: '10 minutes',
    text: 'You form a spiritual link with another creature, allowing you to take in its pain. When you Cast this Spell and at the start of each of your turns, if the target is below maximum Hit Points, it regains 2 Hit Points (or the difference between its current and maximum Hit Points, if that\'s lower). You lose as many Hit Points as the target regained. This is a spiritual transfer, so no effects apply that would increase the Hit Points the target regains or decrease the Hit Points you lose. This transfer also ignores any temporary Hit Points you or the target have. Since this effect doesn\'t involve positive or negative energy, spirit link works even if you or the target is undead. While the duration persists, you gain no benefit from regeneration or fast healing. You can Dismiss this spell, and if you\'re ever at 0 Hit Points, spirit link ends automatically.  \r\n**Heightened (+1)**  The number of Hit Points transferred each time increases by 2.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=15',
    name: 'Augury',
    traits: [ 'divination', 'prediction' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 318',
    traditions: [ 'divine', 'occult' ],
    cast: '10 minutes (material, somatic, verbal)',
    text: 'You gain a vague glimpse of the future. During the casting of this spell, ask about the results of a particular course of action. The spell can predict results up to 30 minutes into the future and reveals the GM\'s best guess among the following outcomes: Weal The results will be good. Woe The results will be bad. Weal and Woe The results will be a mix of good and bad. Nothing There won\'t be particularly good or bad results. The GM rolls a secret DC 6 flat check. On a failure, the result is always "nothing." This makes it impossible to tell whether a "nothing" result is accurate. If anyone asks about the same topic as the first casting of augury during an additional casting, the GM uses the secret roll result from the first casting. If circumstances change, though, it\'s possible to get a different result.',
    components: [ '10minutes(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=31',
    name: 'Calm Emotions',
    traits: [ 'emotion', 'enchantment', 'incapacitation', 'mental' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 322',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    area: '10-foot burst',
    'saving throw': 'Will',
    duration: 'sustained up to 1 minute',
    text: 'You forcibly calm creatures in the area, soothing them into a nonviolent state; each creature must attempt a Will save.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  Calming urges impose a -1 status penalty to the creature\'s attack rolls.  \r\n**Failure**  Any emotion effects that would affect the creature are suppressed and the creature can\'t use hostile actions. If the target is subject to hostility from any other creature, it ceases to be affected by calm emotions.  \r\n**Critical Failure**  As failure, but hostility doesn\'t end the effect.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=63',
    name: 'Death Knell',
    traits: [ 'attack', 'death', 'necromancy' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 328',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 living creature that has 0 HP',
    'saving throw': 'Will',
    text: 'You snuff the life out of a creature on the brink of death. The target must attempt a Will save. If this kills it, you gain 10 temporary HP and a +1 status bonus to attack and damage rolls for 10 minutes.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target\'s dying value increases by 1.  \r\n**Failure**  The target dies.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=101',
    name: 'Enhance Victuals',
    traits: [ 'transmutation' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 335',
    traditions: [ 'divine', 'primal' ],
    cast: '1 minute (material, somatic, verbal)',
    range: 'touch',
    targets: 'up to 1 gallon of non-magical water or up to 5 pounds of food',
    duration: '1 hour',
    text: 'You transform the target into delicious fare, changing water into wine or another fine beverage or enhancing the food\'s taste and ingredients to make it a gourmet treat. Prior to the transformation, the spell attempts to counteract any poisons in the food or water. The food turns back to normal if not consumed before the duration expires, though any poisons that were counteracted are still gone.  \r\n**Heightened (+1)**  The number of gallons of water you can target increases by 1, or the number of pounds of food you can target increases by 5.',
    components: [ '1minute(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=107',
    name: 'Faerie Fire',
    traits: [ 'evocation', 'light' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 337',
    traditions: [ 'divine', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    area: '10-foot burst',
    duration: '5 minutes',
    text: 'All creatures in the area when you cast the spell are limned in colorful, heatless fire of a color of your choice for the duration. Visible creatures can\'t be concealed while affected by faerie fire. If the creatures are invisible, they are concealed while affected by faerie fire, rather than being undetected.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=134',
    manual: true,
    name: 'Ghoulish Cravings',
    traits: [ 'attack', 'disease', 'evil', 'necromancy' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 341',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    'saving throw': 'Fortitude',
    text: 'You touch the target to afflict it with ghoul fever, infesting it with hunger and a steadily decreasing connection to positive energy; the target must attempt a Fortitude save.  \r\n**Ghoul Fever**  (disease) **Level** 3  \r\n * **Stage 1** carrier with no ill effects (1 day)\r\n * **Stage 2** 3d8 negative energy damage and the creature regains half as many Hit Points from all healing (1 day)\r\n * **Stage 3** As stage 2 (1 day)\r\n * **Stage 4** 3d8 negative damage and the creature gains no benefit from healing (1 day)\r\n * **Stage 5** As stage 4 (1 day)\r\n * **Stage 6** The creature dies and rises as a ghoul at the next midnight.\r\n  \r\n**Critical Success** The target is unaffected.  \r\n**Success** The target is afflicted with ghoul fever at stage 1.  \r\n**Failure** The target is afflicted with ghoul fever at stage 2.  \r\n**Critical Failure** The target is afflicted with ghoul fever at stage 3.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=252',
    name: 'Remove Fear',
    traits: [ 'enchantment' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 363',
    traditions: [ 'divine', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    text: 'With a touch, you ease a creature\'s fears. You can attempt to counteract a single fear effect that the target suffers from. This frees only the target, not any other creatures under the fear effect.  \r\n**Heightened (6th)**  The spell\'s range increases to 30 feet, and you can target up to 10 creatures.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=253',
    name: 'Remove Paralysis',
    traits: [ 'healing', 'necromancy' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 363',
    traditions: [ 'divine', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    text: 'A surge of energy frees a paralyzed creature. You can attempt to counteract a single effect imposing the paralyzed condition on the target. This does not cure someone who is paralyzed from some natural state or effect, such as paralysis caused by non-magical wounds or toxins.  \r\n**Heightened (6th)**  The spell\'s range increases to 30 feet, and you can target up to 10 creatures.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=258',
    name: 'Restoration',
    traits: [ 'healing', 'necromancy' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 364',
    traditions: [ 'divine', 'occult', 'primal' ],
    cast: '1 minute (material, somatic, verbal)',
    range: 'touch',
    targets: '1 creature',
    text: 'Restorative magic counters the effects of toxins or conditions that prevent a creature from functioning at its best. When you cast restoration, choose to either reduce a condition or lessen the effect of a toxin. A creature can benefit from only one restoration spell each day, and it can\'t benefit from restoration more than once to reduce the stage of the same exposure to a given toxin.Lessen a Toxin Reduce the stage of one toxin the target suffers from by one stage. This can\'t reduce the stage below stage 1 or cure the affliction.Reduce a Condition Reduce the value of the target\'s clumsy, enfeebled, or stupefied condition by 2. You can instead reduce two of the listed conditions by 1 each.  \r\n**Heightened (4th)**  Add drained to the list of conditions you can reduce. When you lessen a toxin, reduce the stage by two. You also gain a third option that allows you to reduce the target\'s doomed value by 1. You can\'t use this to reduce a permanent doomed condition.  \r\n**Heightened (6th)**  As the 4th-level restoration, but you can reduce a permanent doomed condition if you add a spellcasting action and a material component while Casting the Spell, during which you provide 100 gp worth of diamond dust as a cost.',
    components: [ '1minute(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=259',
    name: 'Restore Senses',
    traits: [ 'healing', 'necromancy' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 364',
    traditions: [ 'divine', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    text: 'You attempt to counteract a single effect imposing the blinded or deafened conditions on the target, restoring its vision or hearing. This can counteract both temporary magic and permanent consequences of magic, but it doesn\'t cure someone who does not have the sense due to some natural state or effect, such as from birth or from a non-magical wound or toxin.  \r\n**Heightened (6th)**  The spell\'s range increases to 30 feet, and you can target up to 10 creatures. You can choose the effect to counteract separately for each selected creature.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=281',
    name: 'Shield Other',
    traits: [ 'necromancy' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 369',
    traditions: [ 'divine' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    duration: '10 minutes',
    text: 'You forge a temporary link between the target\'s life essence and your own. The target takes half damage from all effects that deal Hit Point damage, and you take the remainder of the damage. When you take damage through this link, you don\'t apply any resistances, weaknesses, or other abilities you have to that damage; you simply take that amount of damage. The spell ends if the target is ever more than 30 feet away from you. If either you or the target is reduced to 0 Hit Points, any damage from this spell is resolved and then the spell ends.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=287',
    name: 'Silence',
    traits: [ 'illusion' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 369',
    traditions: [ 'divine', 'occult' ],
    cast: 'material, somatic',
    action: '2',
    range: 'touch',
    targets: '1 willing creature',
    duration: '1 minute',
    text: 'The target makes no sound, preventing creatures from noticing it using hearing or other senses alone. The target can\'t use sonic attacks, nor can it use actions with the auditory trait. This prevents it from casting spells that include verbal components.  \r\n**Heightened (4th)**  The spell effect emanates from the touched creature, silencing all sound in or passing through a 10- foot radius and preventing any auditory and sonic effects in the affected area. While within the radius, creatures are subject to the same effects as the target. Depending upon the position of the effect, a creature might notice the lack of sound reaching it (blocking off the noise coming from a party, for example).',
    components: [ 'material', 'somatic' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=292',
    name: 'Sound Burst',
    traits: [ 'evocation', 'sonic' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 370',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    area: '10-foot burst',
    'saving throw': 'Fortitude',
    text: 'A cacophonous noise blasts out, dealing 2d10 sonic damage. Each creature must attempt a Fortitude save.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes half damage.  \r\n**Failure**  The creature takes full damage and is deafened for 1 round.  \r\n**Critical Failure**  The creature takes double damage and is deafened and stunned 1 for 1 minute.  \r\n**Heightened (+1)**  The damage increases by 1d10.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=306',
    name: 'Spiritual Weapon',
    traits: [ 'attack', 'evocation', 'force' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 373',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    requirements: 'You have a deity.',
    range: '120 feet',
    duration: 'sustained up to 1 minute',
    text: 'A weapon made of pure magical force materializes and attacks foes you designate within range. This weapon has a ghostly appearance and manifests as your deity\'s favored weapon. When you cast the spell, the weapon appears next to a foe you choose within range and makes a Strike against it. Each time you Sustain the Spell, you can move the weapon to a new target within range (if needed) and Strike with it. The spiritual weapon uses and contributes to your multiple attack penalty. The weapon\'s Strikes are melee spell attacks. Regardless of its appearance, the weapon deals force damage equal to 1d8 plus your spellcasting ability modifier. You can deal damage of the type normally dealt by the weapon instead of force damage (or any of the available damage types for a versatile weapon). No other statistics or traits of the weapon apply, and even a ranged weapon attacks adjacent creatures only. Despite making a spell attack, the spiritual weapon is a weapon for purposes of triggers, resistances, and so forth. The weapon doesn\'t take up space, grant flanking, or have any other attributes a creature would. The weapon can\'t make any attack other than its Strike, and feats or spells that affect weapons do not apply to it.  \r\n**Heightened (+2)**  The weapon\'s damage increases by 1d8.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=308',
    name: 'Status',
    traits: [ 'detection', 'divination' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 373',
    traditions: [ 'divine', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 willing living creature',
    duration: '1 day',
    text: 'As long as you and the target are on the same plane of existence and both alive, you remain aware of its present state. You know the target\'s direction from you, distance from you, and any conditions affecting it.  \r\n**Heightened (4th)**  The spell\'s range increases to 30 feet, and you can target up to 10 creatures.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=348',
    name: 'Undetectable Alignment',
    traits: [ 'uncommon', 'abjuration' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 379',
    traditions: [ 'divine', 'occult' ],
    cast: '1 minute (material, somatic, verbal)',
    range: 'touch',
    targets: '1 creature or object',
    duration: 'until the next time you make your daily preparations',
    text: 'You shroud a creature in wards that hide its alignment. The target appears to be neutral to all effects that would detect its alignment.',
    components: [ '1minute(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=36',
    name: 'Chilling Darkness',
    traits: [ 'attack', 'cold', 'darkness', 'evil', 'evocation' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 323',
    traditions: [ 'divine' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    targets: '1 creature',
    text: 'You shoot an utterly cold ray of darkness tinged with unholy energy. Make a ranged spell attack against the target. You deal 5d6 cold damage, plus 5d6 evil damage if the target is a celestial. If the ray passes through an area of magical light or targets a creature affected by magical light, chilling darkness attempts to counteract the light. If you need to determine whether the ray passes through an area of light, draw a line between yourself and the spell\'s target.  \r\n**Critical Success**  The target takes double damage.  \r\n**Success**  The target takes full damage.  \r\n**Heightened (+1)**  The cold damage increases by 2d6, and the evil damage against celestials increases by 2d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=38',
    name: 'Circle of Protection',
    traits: [ 'uncommon', 'abjuration' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 324',
    traditions: [ 'divine', 'occult' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: 'touch',
    area: '10-foot emanation centered on the touched creature',
    duration: '1 minute',
    text: 'You ward a creature and those nearby against a specified alignment. Choose chaotic, evil, good, or lawful; this spell gains the opposing trait. Creatures in the area gain a +1 status bonus to AC against attacks by creatures of the chosen alignment and to saves against effects from such creatures. This bonus increases to +3 against effects from such creatures that directly control the target and attacks made by summoned creatures of the chosen alignment. Summoned creatures of the chosen alignment can\'t willingly enter the area without succeeding at a Will save; repeated attempts use the first save result.  \r\n**Heightened (4th)**  The duration increases to 1 hour.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=55',
    name: 'Crisis of Faith',
    traits: [ 'enchantment', 'mental' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 326',
    traditions: [ 'divine' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    text: 'You assault the target\'s faith, riddling the creature with doubt and mental turmoil that deal 6d6 mental damage, or 6d8 mental damage if it can cast divine spells. The effects are determined by its Will save. To many deities, casting this spell on a follower of your own deity without significant cause is anathema.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes half damage.  \r\n**Failure**  The target takes full damage; if the target can cast divine spells, it\'s stupefied 1 for 1 round.  \r\n**Critical Failure**  The target takes double damage, is stupefied 1 for 1 round, and can\'t cast divine spells for 1 round.  \r\n**Heightened (+1)**  The damage increases by 2d6 (or by 2d8 if the target is a divine spellcaster).',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=149',
    name: 'Heroism',
    traits: [ 'enchantment', 'mental' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 342',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 humanoid creature',
    duration: '10 minutes',
    text: 'You tap into the target\'s inner heroism, granting it a +1 status bonus to attack rolls, Perception checks, saving throws, and skill checks.  \r\n**Heightened (6th)**  The status bonus increases to +2.  \r\n**Heightened (9th)**  The status bonus increases to +3.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=207',
    name: 'Neutralize Poison',
    traits: [ 'healing', 'necromancy' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 354',
    traditions: [ 'divine', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    text: 'You pour healing magic through the target in an attempt to cure one poison afflicting it. Attempt a counteract check against the poison.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=251',
    name: 'Remove Disease',
    traits: [ 'healing', 'necromancy' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 363',
    traditions: [ 'divine', 'primal' ],
    cast: '10 minutes (material, somatic, verbal)',
    range: 'touch',
    targets: '1 creature',
    text: 'Healing magic purges disease from a creature\'s body. You attempt to counteract one disease afflicting the target.',
    components: [ '10minutes(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=265',
    manual: true,
    name: 'Sanctified Ground',
    traits: [ 'abjuration', 'consecration' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 366',
    traditions: [ 'divine' ],
    cast: '1 minute (material, somatic, verbal)',
    cost: '1 vial of holy water',
    area: '30-foot burst centered on you',
    text: 'You sanctify the area, sprinkling it with holy water and warding it against your foes. Choose aberrations, celestials, dragons, fiends, monitors, or undead. All creatures in the area gain a +1 status bonus to AC, attack rolls, damage rolls, and saving throws against the chosen creatures.',
    components: [ '1minute', 'material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=269',
    name: 'Searing Light',
    traits: [ 'attack', 'evocation', 'fire', 'good', 'light' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 367',
    traditions: [ 'divine', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    targets: '1 creature',
    text: 'You shoot a blazing ray of light tinged with holy energy. Make a ranged spell attack. The ray deals 5d6 fire damage. If the target is a fiend or undead, you deal an extra 5d6 good damage. If the light passes through an area of magical darkness or targets a creature affected by magical darkness, searing light attempts to counteract the darkness. If you need to determine whether the light passes through an area of darkness, draw a line between yourself and the spell\'s target  \r\n**Critical Success**  The target takes double fire damage, as well as double good damage if a fiend or undead.  \r\n**Success**  The target takes full damage  \r\n**Heightened (+1)**  The fire damage increases by 2d6, and the good damage against fiends and undead increases by 2d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=368',
    name: 'Wanderer\'s Guide',
    traits: [ 'divination' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 383',
    traditions: [ 'divine', 'occult' ],
    cast: '1 minute (material, somatic, verbal)',
    duration: 'until your next daily preparations',
    text: 'You call upon the beyond to guide your route. When you Cast this Spell, choose a destination; you receive an inspired route to that destination, allowing you and allies who travel overland with you to reduce the movement penalty from difficult terrain by half for the duration, as long as you don\'t deviate from the inspired route. This doesn\'t have any effect on movement during encounters. If you use this ability again before the duration is over, this effect ends and is replaced by that of the new route.',
    components: [ '1minute(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=379',
    name: 'Zone of Truth',
    traits: [ 'uncommon', 'enchantment', 'mental' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 385',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    area: '20-foot burst',
    'saving throw': 'Will',
    duration: '10 minutes',
    text: 'You designate an area in which creatures are compelled to speak only truth. Creatures within or entering the area have difficulty lying. Each potentially affected creature must attempt a Will save when the spell is cast or when the creature first enters the area. It uses the results of this initial save if it leaves and reenters the area. Affected creatures are aware of this enchantment; therefore, they can avoid answering questions to which they would normally respond with a lie, or they can be evasive as long as they remain within the boundaries of the truth.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes a -2 status penalty to Deception checks.  \r\n**Failure**  The target can\'t speak any deliberate and intentional lies, and it takes a -2 status penalty to Deception checks.  \r\n**Critical Failure**  The target can\'t speak any deliberate and intentional lies and takes a -4 status penalty to Deception checks.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=6',
    name: 'Air Walk',
    traits: [ 'air', 'transmutation' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 317',
    traditions: [ 'divine', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    duration: '5 minutes',
    text: 'The target can walk on air as if it were solid ground. It can ascend and descend in this way at a maximum of a 45-degree angle.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=9',
    name: 'Anathematic Reprisal',
    traits: [ 'enchantment', 'mental' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 317',
    traditions: [ 'divine' ],
    cast: 'somatic, verbal',
    action: 'reaction',
    trigger: 'A creature performs an act anathema to your deity.',
    range: '30 feet',
    targets: 'the triggering creature',
    text: 'You punish a creature that transgresses against your deity, drawing upon the anguish you feel upon seeing one of your deity\'s anathema committed. You can cast this spell only when a creature actively commits a unique act of anathema. For example, if creating undead were anathema to your deity, you could use anathematic reprisal on a necromancer who had just created undead in front of you, but not on an undead creature just for existing. You deal 4d6 mental damage to the target, but a basic Will save can reduce this damage. If it fails, it is also stupefied 1 for 1 round. The creature is then temporarily immune for 1 minute.  \r\n**Heightened (+1)**  The damage increases by 1d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=86',
    name: 'Divine Wrath',
    traits: [ 'evocation' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 332',
    traditions: [ 'divine' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    area: '20-foot burst',
    'saving throw': 'Fortitude',
    text: 'You can channel the fury of your deity against foes of opposed alignment. Choose an alignment your deity has (chaotic, evil, good, or lawful). You can\'t cast this spell if you don\'t have a deity or your deity is true neutral. This spell gains the trait of the alignment you chose. You deal 4d10 damage of the alignment you chose; each creature in the area must attempt a Fortitude save. Creatures that match the alignment you chose are unaffected. Those that neither match nor oppose it treat the result of their saving throw as one degree better.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes half damage.  \r\n**Failure**  The creature takes full damage and is sickened 1.  \r\n**Critical Failure**  The creature takes full damage and is sickened 2; while it is sickened, it is also slowed 1.  \r\n**Heightened (+1)**  The damage increases by 1d10.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=151',
    name: 'Holy Cascade',
    traits: [ 'evocation', 'good', 'positive', 'water' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 344',
    traditions: [ 'divine' ],
    cast: 'somatic, verbal',
    action: '2',
    cost: 'one vial of holy water',
    range: '500 feet',
    area: '20-foot burst',
    'saving throw': 'basic Reflex',
    text: 'You call upon sacred energy to amplify a vial of holy water, tossing it an incredible distance. It explodes in an enormous burst that deals 3d6 bludgeoning damage to creatures in the area from the cascade of water. The water deals an additional 6d6 positive damage to undead and 6d6 good damage to fiends.  \r\n**Heightened (+1)**  The bludgeoning damage increases by 1d6, and the additional positive and good damage each increase by 2d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=247',
    name: 'Read Omens',
    traits: [ 'uncommon', 'divination', 'prediction' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 363',
    traditions: [ 'divine', 'occult' ],
    cast: '10 minutes (material, somatic, verbal)',
    text: 'You peek into the future. Choose a particular goal, event, or activity that will occur within 1 week. You learn a cryptic clue or piece of advice that could help with the chosen event, often in the form of a rhyme or omen.',
    components: [ '10minutes(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=250',
    name: 'Remove Curse',
    traits: [ 'healing', 'necromancy' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 363',
    traditions: [ 'divine', 'occult' ],
    cast: '10 minutes (material, somatic, verbal)',
    range: 'touch',
    targets: '1 creature',
    text: 'Your touch grants a reprieve to a cursed creature. You attempt to counteract one curse afflicting the target. If the curse comes from a cursed item or other external source, a success indicates that the target creature can rid itself of the cursed item, but it doesn\'t remove the curse from the item.',
    components: [ '10minutes(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=329',
    name: 'Talking Corpse',
    traits: [ 'uncommon', 'necromancy' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 376',
    traditions: [ 'divine', 'occult' ],
    cast: '10 minutes (material, somatic, verbal)',
    range: 'touch',
    targets: '1 corpse',
    'saving throw': 'Will',
    duration: '10 minutes',
    text: 'You grant the target corpse a semblance of life, which it uses to speak the answers to three questions posed to it. This spell calls on the physical body\'s latent memories rather than summoning back the deceased\'s spirit, so the corpse must be mostly intact for the spell to function. The more damage the corpse has taken, the more inaccurate or patchwork its answers are, and it must have a throat and mouth to speak at all. If anyone has previously cast this spell on the corpse in the last week, the spell automatically fails. The corpse can attempt a Will save to resist answering the questions using the statistics of the original creature at its time of death, with the following effects.  \r\n**Critical Success**  The target can lie or refuse to answer your questions, and the target\'s spirit haunts you for 24 hours, bothering you and causing you to be unable to gain any rest for that time.  \r\n**Success**  The target can provide false information or refuse to answer your questions.  \r\n**Failure**  The target must answer truthfully, but its answers can be brief, cryptic, and repetitive. It can still mislead you or attempt to stall so that the spell\'s duration runs out before you can ask all your questions.  \r\n**Critical Failure**  As failure, but the target\'s answers are more direct and less repetitive, though still cryptic. It takes a -2 status penalty to Deception checks to deceive or mislead you.',
    components: [ '10minutes(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=359',
    name: 'Vital Beacon',
    traits: [ 'healing', 'necromancy', 'positive' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 382',
    traditions: [ 'divine', 'primal' ],
    cast: '1 minute (somatic, verbal)',
    duration: 'until your next daily preparations',
    text: 'Vitality radiates outward from you, allowing others to supplicate and receive healing. Once per round, either you or an ally can use an Interact action to supplicate and lay hands upon you to regain Hit Points. Each time the beacon heals someone, it decreases in strength. It restores 4d10 Hit Points to the first creature, 4d8 Hit Points to the second, 4d6 Hit Points to the third, and 4d4 Hit Points to the fourth, after which the spell ends. You can have only one vital beacon active at a time.  \r\n**Heightened (+1)**  The beacon restores one additional die of Hit Points each time it heals, using the same die size as the others for that step.',
    components: [ '1minute(somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=1',
    name: 'Abyssal Plague',
    traits: [ 'attack', 'chaotic', 'disease', 'evil', 'necromancy' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 316',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 creature',
    'saving throw': 'Fortitude',
    text: 'Your touch afflicts the target with Abyssal plague, which siphons fragments of their soul away to empower the Abyss. The effect is based on the target\'s Fortitude save.  \r\n**Abyssal Plague** (disease) **Level** 9. The target can\'t recover from the drained condition from Abyssal plague until the disease is cured.  \r\n * **Stage 1** drained 1 (1 day)\r\n * **Stage 2** drained increases by 2 (1 day).\r\n  \r\n**Critical Success** The target is unaffected.  \r\n**Success** The target takes 2 evil damage per spell level, and takes a -2 status penalty to saves against Abyssal plague for 1 day or until the target contracts it, whichever comes first.  \r\n**Failure** The target is afflicted with Abyssal plague at stage 1.  \r\n**Critical Failure**  The target is afflicted with Abyssal plague at stage 2.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=29',
    name: 'Breath of Life',
    traits: [ 'healing', 'necromancy', 'positive' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 322',
    traditions: [ 'divine' ],
    cast: 'verbal',
    action: 'reaction',
    trigger: 'A living creature within range would die.',
    range: '60 feet',
    targets: 'the triggering creature',
    text: 'Your blessing revives a creature at the moment of its death. You prevent the target from dying and restore Hit Points to the target equal to 4d8 plus your spellcasting ability modifier. You can\'t use breath of life if the triggering effect was disintegrate or a death effect.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=64',
    name: 'Death Ward',
    traits: [ 'abjuration' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 328',
    traditions: [ 'divine', 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 living creature touched',
    duration: '10 minutes',
    text: 'You shield a creature from the ravages of negative energy. It receives a +4 status bonus to saves against death and negative effects, gains negative resistance 10, and suppresses the effects of the doomed condition.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=120',
    name: 'Flame Strike',
    traits: [ 'evocation', 'fire' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 338',
    traditions: [ 'divine' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    area: '10-foot radius,  40-foot-tall cylinder',
    'saving throw': 'basic Reflex',
    text: 'You call a rain of divine fire that plummets down from above, dealing 8d6 fire damage. Because the flame is infused with divine energy, creatures in the area apply only half their usual fire resistance. Creatures that are immune to fire, instead of gaining the usual benefit of immunity, treat the results of their saving throws as one degree of success better.  \r\n**Heightened (+1)**  The damage increases by 2d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=273',
    name: 'Shadow Blast',
    traits: [ 'evocation', 'shadow' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 367',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'varies',
    area: 'varies',
    'saving throw': 'basic Reflex or Will (target\'s choice)',
    text: 'You shape the quasi-real substance of the Shadow Plane into a blast. Choose acid, bludgeoning, cold, electricity, fire, force, piercing, slashing, or sonic damage, and choose a 30-foot cone, a 15-foot burst within 120 feet, or a 50-foot line. The blast deals 5d8 damage of the type you chose to each creature in the area.  \r\n**Heightened (+1)**  The damage increases by 1d8.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=305',
    name: 'Spiritual Guardian',
    traits: [ 'abjuration', 'attack', 'force' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 373',
    traditions: [ 'divine' ],
    cast: 'somatic, verbal',
    action: '2',
    requirements: 'You have a deity.',
    range: '120 feet',
    duration: 'sustained up to 1 minute',
    text: 'A Medium guardian made of magical force appears and attacks foes you designate within range. The spiritual guardian is translucent and appears to be holding your deity\'s favored weapon. When you Cast the Spell, the spiritual guardian appears in an unoccupied space next to a foe of your choice within range and makes a Strike against it. Each time you Sustain the Spell, you can move the spiritual guardian to an unoccupied space next to a target within range (if necessary) and make a Strike with it. The guardian uses and contributes to your multiple attack penalty. Alternatively, when you Sustain the Spell, you can have the guardian move adjacent to an ally and protect that ally. If you do, each time the ally would take damage, the guardian takes the first 10 damage instead of your ally. It continues to do so until you move the guardian to attack an enemy or defend a different ally, or until the guardian is destroyed (it has 50 Hit Points and can\'t recover Hit Points by any means). The guardian can\'t usually take damage except when protecting an ally, though disintegrate automatically destroys it if it hits the spiritual guardian\'s AC of 25. The guardian\'s Strikes are melee spell attacks. Regardless of the appearance of the guardian\'s weapon, the guardian deals force damage equal to 2d8 plus your spellcasting ability modifier, but you can deal damage of the type normally dealt by the weapon it holds instead of force damage. No other traits or statistics of the weapon apply, and even a ranged weapon attacks adjacent creatures only. Despite making a spell attack, the spiritual guardian\'s weapon is a weapon for the purposes of triggers, resistances, and so forth. The guardian takes up space and allies can use it when flanking, but it doesn\'t have any other attributes a creature would normally have aside from Hit Points, and creatures can move through its space without hindrance. The guardian can\'t make any attack other than its Strike, and feats or spells that affect weapons or enhance allies do not apply to the guardian.  \r\n**Heightened (+2)**  The guardian\'s damage increases by 1d8, and its Hit Points increase by 20.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=317',
    name: 'Summon Celestial',
    traits: [ 'conjuration' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 375',
    traditions: [ 'divine' ],
    cast: 'material, somatic, verbal',
    action: '3',
    duration: 'sustained up to 1 minute',
    text: 'You conjure a celestial to fight on your behalf. This works like summon animal, except you summon a common creature that has the celestial trait and whose level is 5 or lower. You can\'t summon a creature unless its alignment is one of your deity\'s preferred alignments (or, if you don\'t have a deity, is within one step of your alignment). At the GM\'s discretion, some deities might restrict specific types of celestials, even if their alignments match.  \r\n**Heightened (6th)**  Level 7  \r\n**Heightened (7th)**  Level 9  \r\n**Heightened (8th)**  Level 11  \r\n**Heightened (9th)**  Level 13  \r\n**Heightened (10th)**  Level 15',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=323',
    name: 'Summon Fiend',
    traits: [ 'conjuration' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 375',
    traditions: [ 'divine' ],
    cast: 'material, somatic, verbal',
    action: '3',
    duration: 'sustained up to 1 minute',
    text: 'You conjure a fiend to fight on your behalf. This works like summon animal, except you summon a common creature that has the fiend trait and whose level is 5 or lower. You can\'t summon a creature unless its alignment is one of your deity\'s preferred alignments (or, if you don\'t have a deity, is within one step of your alignment). At the GM\'s discretion, some deities might restrict specific types of fiends, even if their alignments match.  \r\n**Heightened (6th)**  Level 7  \r\n**Heightened (7th)**  Level 9  \r\n**Heightened (8th)**  Level 11  \r\n**Heightened (9th)**  Level 13  \r\n**Heightened (10th)**  Level 15',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=24',
    name: 'Blade Barrier',
    traits: [ 'evocation', 'force' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 321',
    traditions: [ 'divine' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: '120 feet',
    duration: '1 minute',
    text: 'Blades of force form a churning wall. The wall is a straight line 20 feet high, 120 feet long, and 2 inches thick, and it provides cover. The wall deals 7d8 force damage to each creature that\'s in the wall\'s space when it is created, that attempts to pass through the wall, or that ends its turn inside the wall. A basic Reflex save reduces the damage. A  creature that succeeds at this save when the wall is created is pushed to the nearest space on the side of its choice. Creatures trying to move through the wall fail to do so if they critically fail the save, ending their movement adjacent to the wall.  \r\n**Heightened (+1)**  The damage increases by 1d8.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=114',
    name: 'Field of Life',
    traits: [ 'healing', 'necromancy', 'positive' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 337',
    traditions: [ 'divine', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    area: '20-foot burst',
    duration: 'sustained up to 1 minute',
    text: 'A field of positive energy fills the area, exuding warmth and rejuvenating those within. Each living creature that starts its turn in the area regains 1d8 Hit Points, and any undead creature that starts its turn in the area takes 1d8 positive damage.  \r\n**Heightened (8th)**  The healing and damage increase to 1d10.  \r\n**Heightened (9th)**  The healing and damage increase to 1d12.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=243',
    name: 'Raise Dead',
    traits: [ 'uncommon', 'healing', 'necromancy' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 362',
    traditions: [ 'divine' ],
    cast: '10 minutes (material, somatic, verbal)',
    cost: 'diamonds worth a total value of the target\'s level (minimum 1) x 200 gp',
    range: '10 feet',
    targets: '1 dead creature of 13th level or lower',
    text: 'You attempt to call forth the dead creature\'s soul, requiring the creature\'s body to be present and relatively intact. The creature must have died within the past 3 days. If Pharasma has decided that the creature\'s time has come (at the GM\'s discretion), or if the creature doesn\'t wish to return to life, this spell automatically fails, but the diamonds aren\'t consumed in the casting. If the spell is successful, the creature returns to life with 1 Hit Point, no spells prepared or spell slots available, no points in any pools or any other daily resources, and still with any long-term debilitations of the old body. The time spent in the Boneyard leaves the target temporarily debilitated, making it clumsy 2, drained 2, and enfeebled 2 for 1 week; these conditions can\'t be removed or reduced by any means until the week has passed. The creature is also permanently changed by its time in the afterlife, such as a slight personality shift, a streak of white in the hair, or a strange new birthmark.  \r\n**Heightened (7th)**  The maximum level of the target increases to 15. The cost increases to the target\'s level (minimum 1) × 400 gp.  \r\n**Heightened (8th)**  The maximum level the target increases to 17. The cost increases to the target\'s level (minimum 1) × 800 gp.  \r\n**Heightened (9th)**  The maximum level of the target increases to 19. The cost increases to the target\'s level (minimum 1) × 1,600 gp.  \r\n**Heightened (10th)**  The maximum level the target increases to 21. The cost increases to the target\'s level (minimum 1) × 3,200 gp.',
    components: [ '10minutes(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=263',
    manual: true,
    name: 'Righteous Might',
    traits: [ 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 366',
    traditions: [ 'divine' ],
    cast: 'somatic, verbal',
    action: '2',
    requirements: 'You have a deity.',
    duration: '1 minute',
    text: 'You focus all your divine energy and transform yourself into a Medium battle form, similar to your normal form but armed with powerful divine armaments granted by your deity. While in this form, you gain the statistics and abilities listed below. You have hands in this battle form and can use manipulate actions. You can Dismiss the spell.  \r\nYou gain the following statistics and abilities:  \r\n * AC = 20 + your level.\r\n * Ignore your armor\'s check penalty and Speed reduction.\r\n * 10 temporary Hit Points.\r\n * Speed 40 feet.\r\n * Resistance 3 against physical damage.\r\n * Darkvision.\r\n * A special attack with a righteous armament version of your favored weapon, which is the only attack you can use. Your attack modifier with the special weapon is +21, and your damage bonus is +8 (or +6 for a ranged attack). If your attack modifier with your deity\'s favored weapon is higher, you can use it instead. You deal three of your weapon\'s normal damage dice, or three damage dice of one size larger if your weapon is a simple weapon with a d4 or d6 damage die. The weapon has one of the following properties that matches your deity\'s alignment: anarchic, axiomatic, holy, unholy. If your deity is true neutral, you instead deal an extra 1d6 precision damage.\r\n * Athletics modifier of +23, unless your own modifier is higher.\r\n  \r\n**Heightened (8th)**  Your battle form is Large, and your attacks have 10-foot reach, or 15-foot reach if your deity\'s favored weapon has reach. You must have enough space to expand into or the spell is lost. You instead gain AC = 21 + your level, 15 temporary HP, resistance 4 against physical damage, attack modifier +28, damage bonus +15 (+12 for a ranged attack), and Athletics +29.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=301',
    name: 'Spirit Blast',
    traits: [ 'force', 'necromancy' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 371',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'basic Fortitude',
    text: 'You concentrate ethereal energy and attack a creature\'s spirit, dealing 16d6 force damage. Because spirit blast affects the creature\'s spirit, it can damage a target projecting its consciousness (such as via project image) or possessing another creature even if the target\'s body is elsewhere. The possessed creature isn\'t harmed by the blast. The blast doesn\'t harm creatures that have no spirit, such as constructs.  \r\n**Heightened (+1)**  The damage increases by 2d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=310',
    name: 'Stone Tell',
    traits: [ 'uncommon', 'earth', 'evocation' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 374',
    traditions: [ 'divine', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '10 minutes',
    text: 'You can ask questions of and receive answers from natural or worked stone. While stone is not intelligent, you speak with the natural spirits of the stone, which have a personality colored by the type of stone, as well as by the type of structure the stone is part of, for worked stone. A stone\'s perspective, perception, and knowledge give it a worldview different enough from a human\'s that it doesn\'t consider the same details important. Stones can mostly answer questions about creatures that touched them in the past and what is concealed beneath or behind them.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=311',
    name: 'Stone to Flesh',
    traits: [ 'earth', 'transmutation' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 374',
    traditions: [ 'divine', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: 'petrified creature or human-size stone object',
    text: 'Manipulating the fundamental particles of matter, you convert stone into flesh and blood. You restore a petrified creature to its normal state or transform a stone object into a mass of inert flesh (without stone\'s Hardness) in roughly the same shape.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=378',
    name: 'Zealous Conviction',
    traits: [ 'enchantment' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 385',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: 'up to 10 willing creatures',
    duration: '10 minutes',
    text: 'You bypass your targets\' rational minds, instilling them with unshakable conviction and zeal. The targets each gain 12 temporary Hit Points and a +2 status bonus to Will saves against mental effects, as their faith overrides the signals from their own bodies and minds. If you tell a target to do something, it must comply with your request, though if it would normally find the task repugnant, it can attempt a Will save at the end of its turn each round due to the cognitive dissonance. On a success, it ends the spell\'s effects on itself entirely.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=82',
    name: 'Divine Decree',
    traits: [ 'evocation' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 331',
    traditions: [ 'divine' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '40 feet',
    area: '40-foot emanation',
    'saving throw': 'Fortitude',
    duration: 'varies',
    text: 'You utter a potent litany from your faith, a mandate that harms those who oppose your ideals. Choose an alignment your deity has (chaotic, evil, good, or lawful). You can\'t cast this spell if you don\'t have a deity or your deity is true neutral. This spell gains the trait of the alignment you chose. You deal 7d10 damage to creatures in the area; each creature must attempt a Fortitude save. Creatures with an alignment that matches the one you chose are unaffected by the spell. Those that neither match nor oppose it treat the result of their saving throw as one degree better and don\'t suffer effects other than damage.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes half damage.  \r\n**Failure**  The creature takes full damage and is enfeebled 2 for 1 minute.  \r\n**Critical Failure**  The creature takes double damage and is enfeebled 2 for 1 minute. On your home plane, a creature that critically fails is banished with the effect of a failed banishment save. A 10th-level creature or lower must attempt a Will save. On a failure, it\'s paralyzed for 1 minute; on a critical failure, it dies.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=85',
    manual: true,
    name: 'Divine Vessel',
    traits: [ 'morph', 'necromancy' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 331',
    traditions: [ 'divine' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute',
    text: 'You accept otherworldly energies into your body; while you are still recognizably yourself, you gain the features of one of your deity\'s servitors. Choose an alignment your deity has (chaotic, evil, good, or lawful). You can\'t cast this spell if you don\'t have a deity or your deity is true neutral. This spell gains the trait of the alignment you chose.  \r\nIf you were Medium or smaller, you become Large, as the effects of enlarge. You must have space to expand into, or the spell is lost. You also gain the following benefits.  \r\n * 40 temporary Hit Points.\r\n * A fly Speed equal to your Speed.\r\n * Weakness 10 to the alignment opposite the one you chose.\r\n * A +1 status bonus to saves against spells.\r\n * Darkvision.\r\n * Your unarmed attacks and weapons deal 1 additional damage of the chosen alignment type.\r\n * One or more unarmed melee attacks. If you chose good or lawful, your fist attacks deal 2d8 damage. If you chose chaotic, you gain a bite unarmed attack that deals 2d10 piercing damage. If you chose evil, you gain a claws unarmed attack that deals 2d8 slashing damage and has the agile and finesse traits.\r\n  \r\n**Heightened (9th)**  The temporary Hit Points increase to 60, the weakness increases to 15, and the duration increases to 10 minutes.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=105',
    name: 'Ethereal Jaunt',
    traits: [ 'uncommon', 'conjuration', 'teleportation' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 336',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: 'sustained up to 1 minute',
    text: 'You travel to the Ethereal Plane, which overlaps the Material Plane. Material Plane creatures can\'t see you, and you can move through things on the Material Plane. You move at half your normal Speeds, but can move in any direction (including up and down). You can see onto the Material Plane within a radius of 60 feet; it is gray, hazy, and concealed from you. You can\'t affect the Material Plane, and you can\'t be affected by the Material Plane except by force effects and abjurations originating there. When the spell ends, you return to the Material Plane. If you\'re in the air, you fall (unless you can fly), and if you\'re inside an object, you\'re pushed into the nearest open space and take 1d6 damage per 5 feet you were pushed. If you cast this spell when not on the Material Plane, it is lost.  \r\n**Heightened (9th)**  You can target up to five additional willing creatures at a range of 30 feet. The duration is up to 10 minutes.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=116',
    name: 'Finger of Death',
    traits: [ 'death', 'necromancy' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 338',
    traditions: [ 'divine', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 living creature',
    'saving throw': 'basic Fortitude',
    text: 'You point your finger toward the target and speak a word of slaying. You deal 70 negative damage to the target. If the damage from finger of death reduces the target to 0 Hit Points, the target dies instantly.  \r\n**Heightened (+1)**  The damage increases by 10.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=248',
    name: 'Regenerate',
    traits: [ 'healing', 'necromancy', 'positive' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 363',
    traditions: [ 'divine', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 willing living creature',
    duration: '1 minute',
    text: 'An infusion of positive energy grants a creature continuous healing. The target temporarily gains regeneration 15, which restores 15 Hit Points to it at the start of each of its turns. While it has regeneration, the target can\'t die from damage and its dying value can\'t exceed 3, though if its wounded value becomes 4 or higher, it stays unconscious until its wounds are treated. If the target takes acid or fire damage, its regeneration deactivates until after the end of its next turn. Each time the creature regains Hit Points from regeneration, it also regrows one damaged or ruined organ (if any). During the spell\'s duration, the creature can also reattach severed body parts by spending an Interact action to hold the body part to the area it was severed from.  \r\n**Heightened (9th)**  The regeneration increases to 20.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=326',
    name: 'Sunburst',
    traits: [ 'evocation', 'fire', 'light', 'positive' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 376',
    traditions: [ 'divine', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '500 feet',
    area: '60-foot burst',
    'saving throw': 'Reflex',
    text: 'A powerful globe of searing sunlight explodes in the area, dealing 8d10 fire damage to creatures and objects in the area, plus 8d10 additional positive damage to undead creatures. Each creature and object in the area must attempt a Reflex save. If the globe overlaps with an area of magical darkness, sunburst attempts to counteract the darkness effect.  \r\n**Critical Success**  The creature or object is unaffected.  \r\n**Success**  The creature or object takes half damage.  \r\n**Failure**  The creature or object takes full damage.  \r\n**Critical Failure**  The creature or object takes full damage. If it\'s a creature, it becomes blinded permanently.  \r\n**Heightened (+1)**  The fire damage increases by 1d10, and the positive damage against undead increases by 1d10.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=81',
    name: 'Divine Aura',
    traits: [ 'abjuration' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 331',
    traditions: [ 'divine' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '10-foot emanation',
    targets: 'allies in the area',
    duration: 'sustained up to 1 minute',
    text: 'Divine power wards the targets, granting each a +1 status bonus to AC and saves while in the area. Choose an alignment your deity has (chaotic, evil, good, or lawful). You can\'t cast this spell if you don\'t have a deity or your deity is true neutral. This spell gains the trait of the alignment you chose. The bonuses granted by the spell increase to +2 against attacks by-and effects created by-creatures with an alignment opposite to the spell (lawful if you chose chaotic, evil if you chose good). These bonuses increase to +4 against effects created by such creatures that attempt to impose the controlled condition on a target of your divine aura, as well as against attacks made by creatures summoned by anything opposite in alignment to your divine aura. When a creature of opposite alignment hits a target with a melee attack, the creature must succeed at a Will save or be blinded for 1 minute. It\'s then temporarily immune for 1 minute. The first time you Sustain the Spell each round, the divine aura\'s radius grows 10 feet.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=83',
    name: 'Divine Inspiration',
    traits: [ 'enchantment', 'mental' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 331',
    traditions: [ 'divine' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 willing creature',
    text: 'You infuse a target with spiritual energy, refreshing its magic. If it prepares spells, it recovers one 6th-level or lower spell it previously cast today and can cast that spell again. If it spontaneously casts spells, it recovers one of its 6th-level or lower spell slots. If it has a focus pool, it regains its Focus Points, as if it had Refocused.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=201',
    name: 'Moment of Renewal',
    traits: [ 'healing', 'necromancy' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 353',
    traditions: [ 'divine', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: 'up to 6 creatures',
    text: 'The targets experience a day\'s worth of recovery in an instant. Any detrimental effects that would be gone after 24 hours end, though this doesn\'t shorten the duration of any active spells affecting the targets. The targets regain Hit Points and recover from conditions as if they had taken 24 hours of rest, but they do not make their daily preparations again or gain any benefits of rest other than healing. The targets are then temporarily immune for 1 day.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=304',
    name: 'Spiritual Epidemic',
    traits: [ 'curse', 'necromancy' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 372',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: 'varies',
    text: 'You curse the target, sapping its spirit and leaving a contagious trap in its essence. The target must attempt a Will save. Any creature that casts a divine or occult spell on the target while it\'s affected is targeted by spiritual epidemic and must also attempt a Will save. The curse continues to spread in this way.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is enfeebled 2 and stupefied 2 for 1 round.  \r\n**Failure**  The target is enfeebled 2 and stupefied 2 for 1 minute and enfeebled 1 and stupefied 1 permanently.  \r\n**Critical Failure**  The target is enfeebled 3 and stupefied 3 for 1 minute and enfeebled 2 and stupefied 2 permanently.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=21',
    name: 'Bind Soul',
    traits: [ 'uncommon', 'evil', 'necromancy' ],
    type: 'Spell',
    level: 9,
    source: 'Core Rulebook pg. 320',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    requirements: 'black sapphire with a gp value of at least the target\'s level × 100',
    range: '30 feet',
    targets: '1 creature that died within the last minute',
    duration: 'unlimited',
    text: 'You wrench the target\'s soul away before it can pass on to the afterlife and imprison it in a black sapphire. While the soul is in the gem, the target can\'t be returned to life through any means, even powerful magic such as wish. If the gem is destroyed or bind soul is counteracted on the gem, the soul is freed. The gem has AC 16 and Hardness 10. A gem can\'t hold more than one soul, and any attempt wastes the spell.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=56',
    name: 'Crusade',
    traits: [ 'uncommon', 'enchantment', 'linguistic', 'mental' ],
    type: 'Spell',
    level: 9,
    source: 'Core Rulebook pg. 327',
    traditions: [ 'divine' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '60 feet',
    targets: 'up to 4 creatures',
    duration: '10 minutes',
    text: 'You issue a divine mandate to the targets. you pronounce a cause. It can be to attain an item, claim a patch of land, slay a creature, war with a group, or be entirely peaceful. Your cause can\'t force the targets to harm one another or themselves. The targets become completely dedicated to that cause, depending on their levels. They choose their own actions, but they favor direct action over inaction or indirect action. 13th or Lower The target is so dedicated to the cause that it pursues the cause to the death (unless you say otherwise). 14th The target is dedicated to the cause, but the spell ends for the target if it\'s reduced to half its maximum Hit Points or fewer.  15th As 14th, plus the target can attempt a Will save at the end of each of its turns to end the spell for itself. The spell ends for all creatures if you or one of your allies uses a hostile action against a target, or when the cause is completed. The GM might determine this spell has alignment traits befitting the cause.  \r\n**Heightened (10th)**  The level for each category increases by 2.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=212',
    name: 'Overwhelming Presence',
    traits: [ 'auditory', 'enchantment', 'incapacitation', 'mental', 'visual' ],
    type: 'Spell',
    level: 9,
    source: 'Core Rulebook pg. 356',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '40-foot burst',
    targets: 'any number of creatures',
    'saving throw': 'Will',
    duration: 'until full tribute is paid',
    text: 'You surround yourself with supernatural splendor, appearing to be a god or similarly majestic being. You choose the aspects of your new majestic appearance. This causes the targets to pay tribute to you by bowing or using some other action in keeping with your appearance. The number of times a target must do this depends on the result of their Will save. Paying tribute is a manipulate action or move action, as chosen by the creature paying tribute. A creature under this effect must pay tribute to you at least once on each of its turns if possible. While affected by this spell, a creature is fascinated by you and can\'t use hostile actions against you. The target is then temporarily immune for 1 minute.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target must pay tribute twice.  \r\n**Failure**  The target must pay tribute six times.  \r\n**Critical Failure**  As failure, and the target must spend all its actions paying tribute if possible.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=361',
    name: 'Wail of the Banshee',
    traits: [ 'auditory', 'death', 'necromancy', 'negative' ],
    type: 'Spell',
    level: 9,
    source: 'Core Rulebook pg. 382',
    traditions: [ 'divine', 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '40-foot emanation',
    targets: 'any number of creatures',
    'saving throw': 'Fortitude',
    text: 'Your scream chills the souls of enemies that hear it. Each living enemy in the area takes 8d10 negative damage and must attempt a Fortitude save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes full damage.  \r\n**Failure**  The target takes full damage and is drained 1d4.  \r\n**Critical Failure**  The target takes double damage and is drained 4.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=372',
    name: 'Weapon of Judgement',
    traits: [ 'evocation', 'force' ],
    type: 'Spell',
    level: 9,
    source: 'Core Rulebook pg. 384',
    traditions: [ 'divine' ],
    cast: 'somatic, verbal',
    action: '2',
    requirements: 'You have a deity.',
    range: '100 feet',
    targets: '1 creature',
    duration: '1 minute',
    text: 'An immense weapon of force appears, hovering in the air above the target. The weapon has the ghostly visual appearance of your deity\'s favored weapon. Name war or peace when you cast this spell. If you name "war," mentally choose one creature. This must be a creature both you and the target can see. The target instinctively knows which creature this is. At the end of each of the target\'s turns, if the target did not use a hostile action against the creature you chose during that turn, the weapon Strikes the target. If you name "peace," mentally choose up to five allies. The target instinctively knows who those allies are. The weapon Strikes the target each time the target uses a hostile action against you or one of your allies. The weapon Strikes only once per action, even if the action targets multiple allies (such as for a fireball or a <%FEATS%Whirlwind Strike%%>Whirlwind Strike). Strikes with the weapon are melee weapon attacks, but they use your spell attack modifier. Regardless of its appearance, the weapon deals force damage equal to 3d10 plus your spellcasting ability modifier. The weapon takes a multiple attack penalty, which increases throughout the target\'s turn, but its penalty is separate from yours. When the weapon Strikes, you can deal damage of the normal damage type of the weapon instead of force damage (or any of the available damage types, for a versatile weapon). No other statistics or attributes of the weapon apply, and even a ranged weapon attacks adjacent creatures only. A weapon of judgment is a weapon for the purposes of triggers, resistances, and so forth. The weapon doesn\'t take up space, grant flanking, or have any other attributes a creature would. The weapon can\'t make any attack other than its Strike, and feats or spells that affect weapons do not apply to this weapon.  \r\n**Heightened (10th)**  The force damage increases by 1d10.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=16',
    manual: true,
    name: 'Avatar',
    traits: [ 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 10,
    source: 'Core Rulebook pg. 318',
    traditions: [ 'divine' ],
    cast: 'somatic, verbal',
    action: '1',
    duration: '1 minute',
    text: 'You transform into an avatar of your deity, assuming a Huge battle form. You must have space to expand or the spell is lost. You have hands in this battle form and can take manipulate actions. You can Dismiss this spell.  \r\nYou gain the following statistics and abilities regardless of which deity\'s battle form you assume:  \r\n * AC = 25 + your level.\r\n * Ignore your armor\'s check penalty and Speed reduction.\r\n * 30 temporary Hit Points.\r\n * Darkvision.\r\n * One or more attacks specific to your deity\'s battle form, which are the only attacks you can use. You\'re trained with them. Your attack modifier is +33, and you use the listed damage. Melee attacks are Strength based (for the purposes of the enfeebled condition, for example) unless they have the finesse trait, and all ranged attacks are Dexterity based. Attacks that deal positive or negative damage don\'t heal creatures.\r\n * Athletics modifier of +35, unless your own is higher.\r\n  \r\nYou also gain the specific abilities listed for your deity below:  \r\n * **Abadar** Speed 50 feet, burrow Speed 30 feet, immune to immobilized; **Ranged** |1| crossbow (range increment 120 feet, reload 1), **Damage** 6d10+3 piercing.\r\n * **Asmodeus** Speed 70 feet, air walk; **Melee** |1| mace (reach 15 feet), **Damage** 6d10+6 bludgeoning; **Ranged** |1| hell fire (range 120 feet), **Damage** 6d6+3 fire.\r\n * **Calistria** Speed 30 feet, fly Speed 70 feet; **Melee** |1| whip (disarm, finesse, nonlethal, reach 20 feet), **Damage** 6d4+6 slashing; **Ranged** |1| savored sting (range 60 feet), **Damage** 6d6+3 poison.\r\n * **Cayden Cailean** Speed 70 feet, air walk, ignore difficult terrain and greater difficult terrain; **Melee** |1| rapier (deadly, reach 15 feet), **Damage** 6d6+6 piercing; **Ranged** |1| ale splash (range 120 feet), **Damage** 6d6+3 poison.\r\n * **Desna** Speed 30 feet, fly Speed 70 feet; **Melee** |1| starknife (agile, deadly, finesse, reach 15 feet, silver, thrown 60 feet), **Damage** 6d4+6 piercing; **Ranged** |1| moonbeam (range 120 feet, silver), **Damage** 6d6+3 fire.\r\n * **Erastil** Speed 70 feet, air walk, ignore difficult terrain and greater difficult terrain; **Ranged** |1| longbow (deadly d8, range increment 150 feet), **Damage** 6d8+3 piercing.\r\n * **Gorum** Speed 70 feet, immune to immobilized; **Melee** |1| greatsword (versatile P, reach 15 feet), **Damage** 6d12+6 slashing.\r\n * **Gozreh** no land Speed, fly Speed 70 feet, swim Speed 70 feet; ignore difficult terrain and greater difficult terrain; **Melee** |1| waves (bull rush, reach 15 feet, thrown 20 feet), **Damage** 6d8+6 bludgeoning; **Ranged** |1| wind (versatile electricity, range 120 feet), **Damage** 6d6+3 bludgeoning.\r\n * **Iomedae** Speed 70 feet, air walk; shield (15 Hardness, can\'t be **Damage**d); **Melee** |1| longsword (versatile P, reach 15 feet), **Damage** 6d8+6 slashing.\r\n * **Irori** Speed 80 feet, air walk; **Melee** |1| unfettered strike (agile, versatile P or S, finesse, reach 15 feet), **Damage** 6d8+6 bludgeoning; **Ranged** |1| wind strike (range 60 feet), **Damage** 6d4+6 bludgeoning.\r\n * **Lamashtu** Speed 30 feet, fly Speed 70 feet; **Melee** |1| falchion (forceful, reach 15 feet), **Damage** 6d10+6 slashing; **Ranged** |1| waters of Lamashtu (range 120 feet), **Damage** 6d6+3 poison.\r\n * **Nethys** Speed 70 feet, air walk; **Ranged** |1| raw magic (range 120 feet; versatile cold, electricity, or fire), **Damage** 6d6 force.\r\n * **Norgorber** Speed 70 feet, air walk, ignore difficult terrain and greater difficult terrain; **Melee** |1| shortsword (agile, finesse, versatile S, reach 15 feet), **Damage** 6d6+6 piercing; **Ranged** |1| blackfinger toss (range 120 feet), **Damage** 6d6+3 poison.\r\n * **Pharasma** Speed 70 feet, air walk; **Melee** |1| dagger (agile, finesse, reach 15 feet, thrown 40 feet), **Damage** 6d6+6 slashing; **Ranged** |1| spiral blast (range 120 feet, **Damage**s only undead), **Damage** 6d8+3 positive.\r\n * **Rovagug** Speed 50 feet, burrow Speed 30 feet, immune to immobilized; **Melee** |1| jaws(reach 15 feet), **Damage** 6d12+6 piercing; **Melee** |1| le g (agile, versatile P, reach 15 feet), **Damage** 6d8+6 bludgeoning.\r\n * **Sarenrae** Speed 30 feet, fly Speed 70 feet; **Melee** |1| scimitar (forceful, nonlethal, reach 15 feet), **Damage** 6d6+6 slashing; **Ranged** |1| everflame (nonlethal, range 120 feet), **Damage** 6d6+3 fire.\r\n * **Shelyn** Speed 70 feet, air walk, ignore difficult terrain and greater difficult terrain; **Melee** |1| glaive (deadly d8, nonlethal, reach 20 feet), **Damage** 6d8+6 slashing; **Ranged** |1| melody of inner beauty, (nonlethal, range 120 feet), **Damage** 6d6+3 sonic.\r\n * **Torag** Speed 50 feet, burrow Speed 30 feet, immune to immobilized; shield (15 Hardness, can\'t be **Damage**d); **Melee** |1| warhammer (bull rush, reach 15 feet), **Damage** 6d8+6 bludgeoning.\r\n * **Urgathoa** Speed 70 feet, air walk; **Melee** |1| scythe (deadly d10, trip, reach 15 feet), **Damage** 6d10+6 slashing; **Ranged** |1| pallid plague (range 120 feet), **Damage** 6d6+3 negative.\r\n * **Zon-Kuthon** Speed 70 feet, air walk, ignore difficult terrain and greater difficult terrain; **Melee** |1| spiked chain (disarm, trip, reach 15 feet), **Damage** 6d8+6 slashing; **Ranged** |1| midnight pain (mental, nonlethal, range 120 feet), **Damage** 6d6+3 mental.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=196',
    name: 'Miracle',
    traits: [ 'divination' ],
    type: 'Spell',
    level: 10,
    source: 'Core Rulebook pg. 352',
    traditions: [ 'divine' ],
    cast: 'material, somatic, verbal',
    action: '3',
    text: 'You request aid directly from your divine source. Your divine source always refuses a request out of line with its nature, and it might grant a different request (potentially more powerful or better fitting its nature) than the one you asked for. A casting of miracle can do any of the following things. Duplicate any divine spell of 9th level or lower. Duplicate any non-divine spell of 7th level or lower. Produce any effect whose power level is in line with the above effects. Reverse certain effects that refer to the wish spell. The GM might allow you to try using miracle to produce greater effects than these, but doing so may be dangerous, or the spell may have only a partial effect.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=262',
    name: 'Revival',
    traits: [ 'healing', 'necromancy', 'positive' ],
    type: 'Spell',
    level: 10,
    source: 'Core Rulebook pg. 366',
    traditions: [ 'divine', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: 'dead creatures and living creatures of your choice within range',
    duration: 'sustained up to 1 minute',
    text: 'A burst of healing energy soothes living creatures and temporarily rouses those recently slain. All living targets regain 10d8+40 Hit Points. In addition, you return any number of dead targets to life temporarily, with the same effects and limitations as raise dead. The raised creatures have a number of temporary Hit Points equal to the Hit Points you gave living creatures, but no normal Hit Points. The raised creatures can\'t regain Hit Points or gain temporary Hit Points in other ways, and once revival\'s duration ends, they lose all temporary Hit Points and die. Revival can\'t resurrect creatures killed by disintegrate or a death effect. It has no effect on undead.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=195',
    name: 'Mindlink',
    traits: [ 'divination', 'mental' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 352',
    traditions: [ 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 willing creature',
    text: 'You link your mind to the target\'s mind and mentally impart to that target an amount of information in an instant that could otherwise be communicated in 10 minutes.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=220',
    name: 'Phantom Pain',
    traits: [ 'illusion', 'mental', 'nonlethal' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 357',
    traditions: [ 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: '1 minute',
    text: 'Illusory pain wracks the target, dealing 2d4 mental damage and 1d4 persistent mental damage. The target must attempt a Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes full initial damage but no persistent damage, and the spell ends immediately.  \r\n**Failure**  The target takes full initial and persistent damage, and the target is sickened 1. If the target recovers from being sickened, the persistent damage ends and the spell ends.  \r\n**Critical Failure**  As failure, but the target is sickened 2.  \r\n**Heightened (+1)**  The damage increases by 2d4 and the persistent damage by 1d4.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=291',
    name: 'Soothe',
    traits: [ 'emotion', 'enchantment', 'healing', 'mental' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 370',
    traditions: [ 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 willing living creature',
    duration: '1 minute',
    text: 'You grace the target\'s mind, boosting its mental defenses and healing its wounds. The target regains 1d10+4 Hit Points when you Cast the Spell and gains a +2 status bonus to saves against mental effects for the duration.  \r\n**Heightened (+1)**  The amount of healing increases by 1d10+4.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=322',
    name: 'Summon Fey',
    traits: [ 'conjuration' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 375',
    traditions: [ 'occult', 'primal' ],
    cast: 'material, somatic, verbal',
    action: '3',
    duration: 'sustained up to 1 minute',
    text: 'You conjure a fey to fight for you. This works like summon animal, except you summon a common creature that has the fey trait and whose level is -1.  \r\n**Heightened (2nd)**  Level 1  \r\n**Heightened (3rd)**  Level 2  \r\n**Heightened (4th)**  Level 3  \r\n**Heightened (5th)**  Level 5  \r\n**Heightened (6th)**  Level 7  \r\n**Heightened (7th)**  Level 9  \r\n**Heightened (8th)**  Level 11  \r\n**Heightened (9th)**  Level 13  \r\n**Heightened (10th)**  Level 15',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=214',
    name: 'Paranoia',
    traits: [ 'illusion', 'mental' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 356',
    traditions: [ 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: '1 minute',
    text: 'You cause the target to see all other creatures as dire threats. The target is stricken by intense paranoia toward all creatures around it and must attempt a Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target believes everyone it sees is a potential threat. It becomes unfriendly to all creatures to which it wasn\'t already hostile, even those that were previously allies. It treats no one as an ally. The spell ends after 1 round.  \r\n**Failure**  As success, but the effect lasts 1 minute.  \r\n**Critical Failure**  As failure, except the target believes that everyone it sees is a mortal enemy. It uses its reactions and free actions against everyone, regardless of whether they were previously its allies, as determined by the GM. It otherwise acts as rationally as it normally does and likely prefers to attack creatures that are actively attacking or hindering it over those leaving it alone.  \r\n**Heightened (6th)**  You can target up to 5 creatures.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=279',
    name: 'Shatter',
    traits: [ 'evocation', 'sonic' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 368',
    traditions: [ 'occult', 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 unattended object',
    text: 'A high-frequency sonic attack shatters a nearby object. You deal 2d10 sonic damage to the object, ignoring the object\'s Hardness if it is 4 or lower.  \r\n**Heightened (+1)**  The damage increases by 1d10, and the Hardness the spell ignores increases by 2.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=156',
    name: 'Hypercognition',
    traits: [ 'divination' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 344',
    traditions: [ 'occult' ],
    cast: 'verbal',
    action: '1',
    text: 'You rapidly catalog and collate information relevant to your current situation. You can instantly use up to 6 Recall Knowledge actions as part of Casting this Spell. For these actions, you can\'t use any special abilities, reactions, or free actions that trigger when you Recall Knowledge.',
    components: [ 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=135',
    name: 'Glibness',
    traits: [ 'uncommon', 'enchantment', 'mental' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 341',
    traditions: [ 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '10 minutes',
    text: 'Falsehoods pass your lips as smoothly as silk. You gain a +4 status bonus to Deception checks to Lie and against Perception checks to discern if you are telling the truth, and you add your level even if you\'re untrained. If the implausibility of your lies prompts a circumstance penalty or a DC increase, reduce that penalty or increase by half.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=200',
    name: 'Modify Memory',
    traits: [ 'uncommon', 'divination', 'mental' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 352',
    traditions: [ 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: 'unlimited',
    text: 'You alter the target\'s memories, either erasing a memory, enhancing a memory\'s clarity, altering a memory, or adding a false memory. The target can attempt a Will save to resist the spell.Any memories you\'ve altered remain changed as long as the spell is active. If the target moves out of range before the 5 minutes is up, you can\'t alter any further memories.  \r\n**Critical Success**  The target is unaffected and realizes you tried to alter its memory.  \r\n**Success**  The target is unaffected but thinks your spell was something harmless instead of modify memory, unless it identifies the spell.  \r\n**Failure**  During the first 5 minutes of the spell\'s duration, you can Sustain the Spell to modify a memory once each round. When you do, you imagine up to 6 seconds of memory to modify, to a maximum of 5 continuous minutes of memory.  \r\n**Heightened (6th)**  You can cast the spell on a willing target to suppress all memory of a particular topic, detailed in 50 words or fewer. The effect is permanent, and it patches these omissions with an indistinct haze.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=91',
    name: 'Dreaming Potential',
    traits: [ 'enchantment', 'mental' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 333',
    traditions: [ 'occult' ],
    cast: '10 minutes (material, somatic, verbal)',
    range: 'touch',
    targets: '1 willing sleeping creature',
    duration: '8 hours',
    text: 'You draw the target into a lucid dream where it can explore the endless possibilities of its own potential within the ever-changing backdrop of its dreamscape. If it sleeps the full 8 hours uninterrupted, when it wakes, it counts as having spent a day of downtime retraining, though it can\'t use dreaming potential for any retraining that would require either an instructor or specialized knowledge it can\'t access within the dream.',
    components: [ '10minutes(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=321',
    name: 'Summon Entity',
    traits: [ 'conjuration' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 375',
    traditions: [ 'occult' ],
    cast: 'material, somatic, verbal',
    action: '3',
    duration: 'sustained up to 1 minute',
    text: 'You conjure an aberration to fight for you. This works like summon animal, except you summon a common creature that has the aberration trait and whose level is 5 or lower.  \r\n**Heightened (6th)**  Level 7  \r\n**Heightened (7th)**  Level 9  \r\n**Heightened (8th)**  Level 11  \r\n**Heightened (9th)**  Level 13  \r\n**Heightened (10th)**  Level 15',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=327',
    name: 'Synaptic Pulse',
    traits: [ 'enchantment', 'incapacitation', 'mental' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 376',
    traditions: [ 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    area: '30-foot emanation',
    'saving throw': 'Will',
    duration: '1 round',
    text: 'You emit a pulsating mental blast that penetrates the minds of all enemies in the area. Each creature in the area must attempt a Will save.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature is stunned 1.  \r\n**Failure**  The creature is stunned 2.  \r\n**Critical Failure**  The creature is stunned for 1 round.  \r\n**Heightened (9th)**  You can target up to five creatures.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=328',
    name: 'Synesthesia',
    traits: [ 'divination', 'mental' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 376',
    traditions: [ 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 creature',
    'saving throw': 'Will',
    duration: '1 minute',
    text: 'The target\'s senses are suddenly rewired in unexpected ways, causing them to process noises as bursts of color, smells as sounds, and so on. This has three effects, and the target must attempt a Will save. Due to the distraction, the target must succeed at a DC 5 flat check each time it uses a concentrate action, or the action fails and is wasted. The target\'s difficulty processing visual input makes all creatures and objects concealed from it. The creature has trouble moving, making it clumsy 3 and giving it a -10-foot status penalty to its Speeds.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is affected for 1 round.  \r\n**Failure**  The target is affected for 1 minute.  \r\n**Critical Failure**  As failure, and the target is stunned 2 as it attempts to process the sensory shifts.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=225',
    name: 'Possession',
    traits: [ 'incapacitation', 'mental', 'necromancy', 'possession' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 358',
    traditions: [ 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: '1 living creature',
    'saving throw': 'Will',
    duration: '1 minute',
    text: 'You send your mind and soul into the target\'s body, attempting to take control. The target must attempt a Will save. You can choose to use the effects of a degree of success more favorable to the target if you prefer. While you\'re possessing a target, your own body is unconscious and can\'t wake up normally. You can sense everything the possessed target does. You can Dismiss this spell. If the possessed body dies, the spell ends and you must succeed at a Fortitude save against your spell DC or be paralyzed for 1 hour, or 24 hours on a critical failure. If the spell ends during an encounter, you act just before the possessed creature\'s initiative count.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  You possess the target but can\'t control it. You ride along in the body while the spell lasts.  \r\n**Failure**  You possess the target and take partial control of it. You no longer have a separate turn; instead, you might control the target. At the start of each of the target\'s turns, it attempts another Will save. If it fails, it\'s controlled by you on that turn; if it succeeds, it chooses its own actions; and if it critically succeeds, it forces you out and the spell ends.  \r\n**Critical Failure**  You possess the target fully, and it can only watch as you manipulate it like a puppet. The target is controlled by you.  \r\n**Heightened (9th)**  The duration is 10 minutes, and you can physically enter the creature\'s body, protecting your physical body while the spell lasts.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=260',
    name: 'Retrocognition',
    traits: [ 'divination' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 365',
    traditions: [ 'occult' ],
    cast: '1 minute (material, somatic, verbal)',
    duration: 'sustained',
    text: 'Opening your mind to occult echoes, you gain impressions from past events that occurred in your current location. Retrocognition reveals psychic impressions from events that occurred over the course of the last day throughout the first minute of the duration, followed by impressions from the next day back the next minute, and so on. These echoes don\'t play out like a vision but instead reveal impressions of emotions and metaphors that provide cryptic clues and details of the past. If you witness a traumatic or turbulent event through an impression, the spell ends unless you succeed at a Will save with a DC of at least 30 and possibly as much as 50, depending on the severity of the event. The GM determines whether an event is traumatic and chooses the DC.  \r\n**Heightened (8th)**  You gain impressions of events that occurred over the previous year for each minute you concentrate, instead of the previous day, though the details diminish, making it harder to distinguish impressions from all but the most major events.  \r\n**Heightened (9th)**  You gain impressions of events that occurred over the previous century for each minute you concentrate, instead of the previous day, though the details diminish, making it almost impossible to distinguish impressions from all but the most major events.',
    components: [ '1minute(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=358',
    name: 'Visions of Danger',
    traits: [ 'auditory', 'illusion', 'visual' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 381',
    traditions: [ 'occult' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: '500 feet',
    area: '30-foot burst',
    'saving throw': 'Will',
    duration: '1 minute',
    text: 'An illusion of horrific creatures fills the spell\'s area. The creatures look like Tiny swarming monsters with a specific appearance of your choice, such as Hellish flies or animated saw blades. The burst deals 8d8 mental damage to each creature that\'s inside the burst when it\'s created, enters the burst, or starts its turn inside the burst. A creature that critically succeeds at its will save can immediately attempt to disbelieve the illusion. A creature that tries to Interact with the monsters or observes one with a Seek action can attempt to disbelieve the illusion. Creatures that disbelieve the illusion take no damage from the illusion thereafter.  \r\n**Heightened (+1)**  The mental damage increases by 1d8.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=303',
    name: 'Spirit Song',
    traits: [ 'force', 'necromancy' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 372',
    traditions: [ 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '60-foot cone',
    'saving throw': 'basic Fortitude',
    text: 'Your eldritch song sends pulsing waves of ethereal energy to attack creatures\' spirits in the area, dealing 18d6 force damage. Because spirit song affects creatures\' spirits, it can damage a target projecting its consciousness (such as via project image) or possessing another creature even if the target\'s body is elsewhere. The vibrating waves of spiritual song penetrate into, but not through, solid barriers, damaging incorporeal creatures hiding in solid objects in the area but not passing onward to damage creatures in other rooms. Possessed creatures aren\'t harmed by the song. The song doesn\'t harm creatures that have no spirit, such as constructs.  \r\n**Heightened (+1)**  The damage increases by 2d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=349',
    name: 'Unfathomable Song',
    traits: [ 'auditory', 'emotion', 'enchantment', 'fear', 'incapacitation', 'mental' ],
    type: 'Spell',
    level: 9,
    source: 'Core Rulebook pg. 379',
    traditions: [ 'occult' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    targets: 'up to 5 creatures',
    'saving throw': 'Will',
    duration: 'sustained up to 1 minute',
    text: 'Fleeting notes of a strange and unnatural song fill the air, overtaking the mind. Each target must attempt a Will save when you cast the spell, and again each time you Sustain the Spell. A creature needs to attempt only one save against the song each round, and you have to keep the same targets when you Sustain the Spell.  \r\n**Critical Success**  The target is unaffected, can\'t be affected on subsequent rounds, and is temporarily immune for 1 minute.  \r\n**Success**  The target is unaffected this round, but it can be affected on subsequent rounds.  \r\n**Failure**  Roll 1d4 on the table below.  \r\n**Critical Failure**  Roll 1d4+1 on the table below.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=8',
    name: 'Alter Reality',
    traits: [ 'divination' ],
    type: 'Spell',
    level: 10,
    source: 'Core Rulebook pg. 317',
    traditions: [ 'occult' ],
    cast: 'material, somatic, verbal',
    action: '3',
    text: 'You use your occult lore and the power of your mind to manipulate the spiritual multiverse, resulting in any of the following effects: Duplicate any occult spell of 9th level or lower. Duplicate any non-occult spell of 7th level or lower. Produce any effect whose power is equivalent to any occult spell 9th level or lower, or non-occult spell 7th level or lower. Reverse certain effects that refer to the wish spell At the GM\'s discretion, you can try to produce greater effects, but this is dangerous and the spell may have only a partial effect.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=106',
    name: 'Fabricated Truth',
    traits: [ 'enchantment', 'incapacitation', 'mental' ],
    type: 'Spell',
    level: 10,
    source: 'Core Rulebook pg. 336',
    traditions: [ 'occult' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: '100 feet',
    targets: 'up to 5 creatures',
    'saving throw': 'Will',
    duration: 'varies',
    text: 'Choose a single statement you want the targets to believe. The fact could be narrow, such as "a dragon is circling overhead and wants to kill me"; wide-reaching, such as "all humanoids are disguised abominations"; or conceptual, such as "if I don\'t live a kinder life, I\'ll be punished in the afterlife." The targets\' experiences color how they react to this "truth" and how their behavior changes. If the statement changes what they perceive, they treat the change as a sudden revelation. The effect of the spell depends on the targets\' Will saves. If a target is already subject to fabricated truth, your spell tries to counteract it. If the counteract check fails, the outcome of the target\'s saving throw can\'t be worse than a success.  \r\n**Critical Success**  The target doesn\'t believe the statement, and it knows you tried to trick it.  \r\n**Success**  The target doesn\'t believe the statement or realize you tried to trick it.  \r\n**Failure**  The target believes the statement for a duration of 1 week.  \r\n**Critical Failure**  The target believes the statement with unlimited duration.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=179',
    name: 'Magic Fang',
    traits: [ 'transmutation' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 349',
    traditions: [ 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 willing ally',
    duration: '1 minute',
    text: 'Choose one of the target\'s unarmed attacks that deal one damage die. You cause that unarmed attack to shine with primal energy. The unarmed attack becomes a +1 striking unarmed attack, gaining a +1 item bonus to attack rolls and increasing the number of damage dice to two.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=215',
    name: 'Pass Without Trace',
    traits: [ 'abjuration' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 356',
    traditions: [ 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    'saving throw': 'NULl',
    duration: '1 hour',
    text: 'You obscure the tracks you leave behind and make it harder for others to find you. The DC of checks to Track you gains a +4 status bonus or is equal to your spell DC, whichever results in a higher DC. You can benefit from only one pass without trace spell at a time.  \r\n**Heightened (2nd)**  The duration increases to 8 hours.  \r\n**Heightened (4th)**  The duration increases to 8 hours. The spell has a range of 20 feet and an area of a 20-foot-emanation, affecting up to 10 creatures of your choice within that area.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=282',
    name: 'Shillelagh',
    traits: [ 'plant', 'transmutation' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 369',
    traditions: [ 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 non-magical club or staff you hold',
    duration: '1 minute',
    text: 'The target grows vines and leaves, brimming with primal energy. The target becomes a +1 striking weapon while in your hands, gaining a +1 item bonus to attack rolls and increasing the number of weapon damage dice to two. Additionally, as long as you are on your home plane, attacks you make with the target against aberrations, extraplanar creatures, and undead increase the number of weapon damage dice to three.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=325',
    name: 'Summon Plant or Fungus',
    traits: [ 'conjuration' ],
    type: 'Spell',
    level: 1,
    source: 'Core Rulebook pg. 376',
    traditions: [ 'primal' ],
    cast: 'material, somatic, verbal',
    action: '3',
    duration: 'sustained up to 1 minute',
    text: 'You conjure a plant or fungus to fight for you. This works like summon animal, except you summon a common creature that has the plant or fungus trait and whose level is -1.  \r\n**Heightened (2nd)**  Level 1  \r\n**Heightened (3rd)**  Level 2  \r\n**Heightened (4th)**  Level 3  \r\n**Heightened (5th)**  Level 5  \r\n**Heightened (6th)**  Level 7  \r\n**Heightened (7th)**  Level 9  \r\n**Heightened (8th)**  Level 11  \r\n**Heightened (9th)**  Level 13  \r\n**Heightened (10th)**  Level 15',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=10',
    manual: true,
    name: 'Animal Form',
    traits: [ 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 317',
    traditions: [ 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute',
    text: 'You call upon primal energy to transform yourself into a Medium animal battle form. When you first cast this spell, choose ape, bear, bull, canine, cat, deer, frog, shark, or snake. You can decide the specific type of animal (such as lion or snow leopard for cat), but this has no effect on the form\'s Size or statistics. While in this form, you gain the animal trait. You can Dismiss the spell.  \r\n\r\nYou gain the following statistics and abilities regardless of which battle form you choose:  \r\n * AC = 16 + your level. Ignore your armor\'s check penalty and Speed reduction.\r\n * 5 temporary Hit Points.\r\n * Low-light vision and imprecise scent 30 feet.\r\n * One or more unarmed melee attacks specific to the battle form you choose, which are the only attacks you can use. You\'re trained with them. Your attack modifier is +9, and your damage bonus is +1. These attacks are Strength based (for the purpose of the enfeebled condition, for example). If your unarmed attack bonus is higher, you can use it instead.\r\n * Athletics modifier of +9, unless your own modifier is higher.\r\n  \r\nYou also gain specific abilities based on the type of animal you choose:  \r\n * **Ape** Speed 25 feet, climb Speed 20 feet; **Melee** |1| fist, **Damage** 2d6 bludgeoning.\r\n * **Bear** Speed 30 feet; **Melee** |1| jaws, **Damage** 2d8 piercing; **Melee** |1| claw (agile), **Damage** 1d8 slashing.\r\n * **Bull** Speed 30 feet; **Melee** |1| horn , **Damage** 2d8 piercing.\r\n * **Canine** Speed 40 feet; **Melee** |1| jaws, **Damage** 2d8 piercing.\r\n * **Cat** Speed 40 feet; **Melee** |1| jaws, **Damage** 2d6 piercing; **Melee** |1| claw (agile), **Damage** 1d10 slashing.\r\n * **Deer** Speed 50 feet; **Melee** |1| antler , **Damage** 2d6 piercing.\r\n * **Frog** Speed 25 feet, swim Speed 25 feet; **Melee** |1| jaws, **Damage** 2d6 bludgeoning; **Melee** |1| tongue (reach 15 feet), **Damage** 2d4 bludgeoning.\r\n * **Shark** swim Speed 35 feet; **Melee** |1| jaws, **Damage** 2d8 piercing; breathe underwater but not in air.\r\n * **Snake** Speed 20 feet, climb Speed 20 feet, swim Speed 20 feet; **Melee** |1| fangs , **Damage** 2d4 piercing plus 1d6 poison.\r\n  \r\n**Heightened (3rd)**  You instead gain 10 temporary HP, AC = 17 + your level, attack modifier +14, Damage bonus +5, and Athletics +14.  \r\n**Heightened (4th)**  Your battle form is Large and your attacks have 10-foot reach. You must have enough space to expand into or the spell is lost. You instead gain 15 temporary HP, AC = 18 + your level, attack modifier +16, Damage bonus +9, and Athletics +16.  \r\n**Heightened (5th)**  Your battle form is Huge and your attacks have 15-foot reach. You must have enough space to expand into or the spell is lost. You instead gain 20 temporary HP, AC = 18 + your level, attack modifier +18, Damage bonus +7 and double the number of Damage dice, and Athletics +20.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=11',
    name: 'Animal Messenger',
    traits: [ 'enchantment', 'mental' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 318',
    traditions: [ 'primal' ],
    cast: '1 minute (material, somatic, verbal)',
    range: '120 feet',
    duration: 'until delivered',
    text: 'You offer a gift of food, and an ordinary Tiny wild animal within range approaches to eat it. You imprint the image, direction, and distance of an obvious place or landmark well known to you within the animal. Optionally, you can attach a small object or note up to light Bulk to it. The animal does its best to reach the destination; if it makes it there, it waits nearby until the duration expires, allowing other nonhostile creatures to approach it and remove the attached object. If there are no Tiny wild animals in range, the spell is lost.',
    components: [ '1minute(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=20',
    name: 'Barkskin',
    traits: [ 'abjuration', 'plant' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 320',
    traditions: [ 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: '1 willing creature',
    duration: '10 minutes',
    text: 'The target\'s skin becomes covered in bark. The target gains resistance 2 to bludgeoning and piercing damage and weakness 3 to fire. After the target takes fire damage, it can Dismiss the spell as a free action triggered by taking the damage; doing so doesn\'t reduce the fire damage the target was dealt.  \r\n**Heightened (+2)**  The resistances increase by 2, and the weakness increases by 3.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=103',
    name: 'Entangle',
    traits: [ 'plant', 'transmutation' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 336',
    traditions: [ 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    area: 'all squares in a 20-foot-radius burst that contain plants',
    duration: '1 minute',
    text: 'Plants in the area entangle creatures. The area counts as difficult terrain. Each round that a creature starts its turn in the area, it must attempt a Reflex save. On a failure, it takes a -10-foot circumstance penalty to its Speeds until it leaves the area, and on a critical failure, it is also immobilized for 1 round. Creatures can attempt to Escape at entangle\'s DC to remove these effects.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=277',
    name: 'Shape Wood',
    traits: [ 'plant', 'transmutation' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 368',
    traditions: [ 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: 'touch',
    targets: 'an unworked piece of wood up to 20 cubic feet in volume',
    text: 'You shape the wood into a rough shape of your choice. The shaping power is too crude to produce with intricate parts, fine details, moving pieces, or the like. You cannot use this spell to enhance the value of the wooden object you are shaping.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=293',
    name: 'Speak with Animals',
    traits: [ 'divination' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 370',
    traditions: [ 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '10 minutes',
    text: 'You can ask questions of, receive answers from, and use the Diplomacy skill with animals. The spell doesn\'t make them more friendly than normal. Cunning animals are likely to be terse and evasive, while less intelligent ones often make inane comments.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=342',
    name: 'Tree Shape',
    traits: [ 'plant', 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 2,
    source: 'Core Rulebook pg. 378',
    traditions: [ 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '8 hours',
    text: 'You transform into a Large tree. Perception checks don\'t reveal your true nature, but a successful Nature or Survival check against your spell DC reveals that you appear to be a tree that is strangely new to the area. While in tree form, you can observe everything around you, but you can\'t act other than to end the spell, and your turn, by using a single action, which has the concentrate trait. As a tree, your AC is 20, and only status bonuses, status penalties, circumstance bonuses, and circumstance penalties affect you. Any successes and critical successes you roll on Reflex saves are failures.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=12',
    name: 'Animal Vision',
    traits: [ 'divination', 'mental' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 318',
    traditions: [ 'primal' ],
    cast: '1 minute (material, somatic, verbal)',
    range: '120 feet',
    targets: '1 animal',
    duration: '1 hour',
    text: 'You tap into the target\'s senses, allowing you to see, hear, and otherwise sense whatever it senses for the spell\'s duration. If the target wishes to prevent you from doing so, it can attempt a Will save, negating the spell on a success, but most animals don\'t bother to do so. While tapping into the target\'s senses, you can\'t use your own body\'s senses, but you can change back and forth from your body\'s senses to the target\'s senses using a single action, which has the concentrate trait.',
    components: [ '1minute(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=163',
    manual: true,
    name: 'Insect Form',
    traits: [ 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 346',
    traditions: [ 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute',
    text: 'You envision a simple bug and transform into a Medium animal battle form. When you cast this spell, choose ant, beetle, centipede, mantis, scorpion, or spider. You can decide the specific type of animal (such as such as a ladybug or scarab for beetle), but this has no effect on the form\'s Size or statistics. While in this form, you gain the animal trait. You can Dismiss this spell.  \r\n You gain the following statistics and abilities regardless of which battle form you choose:  \r\n * AC = 18 + your level. Ignore your armor\'s check penalty and Speed reduction.\r\n * 10 temporary Hit Points.\r\n * Low-light vision.\r\n * One or more attacks specific to the battle form you choose, which are the only attacks you can use. You\'re trained with them. Your attack modifier is +13, and your damage bonus is +2. These attacks are Strength based (for the purpose of the enfeebled condition). If your unarmed attack modifier is higher, you can use it instead.\r\n * Athletics modifier of +13, unless your own is higher.\r\n  \r\nYou also gain specific abilities based on the form you choose:\r\n * **Ant** Speed 30 feet, climb Speed 30 feet; **Melee** |1| mandibles, **Damage** 2d6 bludgeoning.\r\n * **Beetle** Speed 25 feet; **Melee** |1| mandibles , **Damage** 2d10 bludgeoning.\r\n * **Centipede** Speed 25 feet, climb Speed 25 feet; darkvision; **Melee** |1| mandibles, **Damage** 1d8 piercing plus 1d4 persistent poison.\r\n * **Mantis** Speed 40 feet; imprecise scent 30 feet; **Melee** |1| foreleg , **Damage** 2d8 bludgeoning.\r\n * **Scorpion** Speed 40 feet; darkvision, imprecise tremorsense 60 feet; **Melee** |1| stinger, **Damage** 1d8 piercing plus 1d4 persistent poison; **Melee** |1| pincer (agile), **Damage** 1d6 bludgeoning.\r\n * **Spider** Speed 25 feet, climb Speed 25 feet, darkvision; **Melee** |1| fangs, **Damage** 1d6 piercing plus 1d4 persistent poison; **Ranged** |1| web (range increment 20 feet), **Damage** entangles the target for 1 round.\r\n  \r\n**Heightened (4th)**  Your battle form is Large, and your attacks have 10-foot reach. You must have enough space to expand into or the spell is lost. You instead gain 15 temporary HP, attack modifier +16, damage bonus +6, and Athletics +16.  \r\n**Heightened (5th)**  Your battle form is Huge, and your attacks have 15-foot reach. You must have enough space to expand into or the spell is lost. You instead gain 20 temporary HP, attack modifier +18, damage bonus +2 and double damage dice (including persistent damage), and Athletics +20.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=366',
    name: 'Wall of Thorns',
    traits: [ 'conjuration', 'plant' ],
    type: 'Spell',
    level: 3,
    source: 'Core Rulebook pg. 383',
    traditions: [ 'primal' ],
    cast: 'material, somatic, verbal',
    action: '2',
    range: '60 feet',
    duration: '1 minute',
    text: 'Over the course of a minute, you cause a thick wall of thorny brambles to grow from the ground. You create a 5-foot-thick wall of brambles and thorns in a straight line up to 60 feet long and 10 feet high. You must create the wall in an unbroken open space so its edges don\'t pass through any creatures or objects, or the spell is lost. The wall stands vertically. If you wish, the wall can be of a shorter length or height. Everything on each side of the wall has cover from creatures on the opposite side, and the wall\'s spaces are difficult terrain. For every move action a creature uses to enter at least one of the wall\'s spaces, that creature takes 3d4 piercing damage. Each 5-foot-by-5-foot section of the wall has AC 10, Hardness 10, and 20 Hit Points. It\'s immune to critical hits and precision damage. A destroyed section can be moved through freely.  \r\n**Heightened (+1)**  The Hit Points of each section of the wall increase by 5, and the piercing damage increases by 1d4.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=72',
    manual: true,
    name: 'Dinosaur Form',
    traits: [ 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 329',
    traditions: [ 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute',
    text: 'You channel the primal forces of nature to transform into a Large animal battle form, specifically that of a powerful and terrifying dinosaur. You must have space to expand or the spell is lost. When you cast this spell, choose ankylosaurus, brontosaurus, deinonychus, stegosaurus, triceratops, or tyrannosaurus. You can decide the specific type of animal, but this has no effect on the form\'s Size or statistics. While in this form, you gain the animal and dinosaur traits. You can Dismiss the spell.  \r\nYou gain the following statistics and abilities regardless of which battle form you choose:  \r\n * AC = 18 + your level. Ignore your armor\'s check penalty and Speed reduction.\r\n * 15 temporary Hit Points.\r\n * Low-light vision and imprecise scent 30 feet.\r\n * One or more unarmed melee attacks specific to the battle form you choose, which are the only attacks you can use. You\'re trained with them. Your attack modifier is +16, and your damage bonus is +9. These attacks are Strength based (for the purpose of the enfeebled condition, for example). If your unarmed attack modifier is higher, you can use it instead.\r\n * Athletics modifier of +18, unless your own modifier is higher.\r\n  \r\nYou also gain specific abilities based on the form you choose:  \r\n * **Ankylosaurus** Speed 25 feet; **Melee** |1| tail (back swing, reach 10 feet), **Damage** 2d6 bludgeoning; **Melee** |1| foot, **Damage** 2d6 bludgeoning.\r\n * **Brontosaurus** Speed 25 feet; **Melee** |1| tail (reach 15 feet), **Damage** 2d6 bludgeoning; **Melee** |1| foot, **Damage** 2d8 bludgeoning.\r\n * **Deinonychus** Speed 40 feet; **Melee** |1| talon (agile), **Damage** 2d4 piercing plus 1 persistent bleed; **Melee** |1| jaws, **Damage** 1d10 piercing.\r\n * **Stegosaurus** Speed 30 feet; **Melee** |1| tail (reach 10 feet), **Damage** 2d8 piercing.\r\n * **Triceratops** Speed 30 feet; **Melee** |1| horn, **Damage** 2d8 piercing, plus 1d6 persistent bleed on a critical hit; **Melee** |1| foot, **Damage** 2d6 bludgeoning.\r\n * **Tyrannosaurus** Speed 30 feet; **Melee** |1| jaws (deadly, reach 10 feet), **Damage** 1d12 piercing; **Melee** |1| tail (reach 10 feet), **Damage** 1d10 bludgeoning.\r\n  \r\n**Heightened (5th)**  Your battle form is Huge and your attacks have 15-foot reach, or 20-foot reach if they started with 15-foot reach. You instead gain 20 temporary HP, an attack modifier of +18, a damage bonus of +6, double the damage dice, and Athletics +21.  \r\n**Heightened (7th)**  Your battle form is Gargantuan and your attacks have 20-foot reach, or 25-foot reach if they started with 15-foot reach. You instead gain AC = 21 + your level, 25 temporary HP, an attack modifier of +25, a damage bonus of +15, double the damage dice, and Athletics +25.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=155',
    name: 'Hydraulic Torrent',
    traits: [ 'evocation', 'water' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 344',
    traditions: [ 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    area: '60-foot line',
    'saving throw': 'Fortitude',
    text: 'A swirling torrent of water manifests along a straight line, battering those that are its path and possibly pushing them away from you. The torrent deals 8d6 bludgeoning damage. Each creature in the area must attempt a basic Fortitude save. Creatures that fail the save are also knocked back 5 feet (10 feet on a critical failure).  \r\n**Heightened (+1)**  The damage increases by 2d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=294',
    name: 'Speak with Plants',
    traits: [ 'divination', 'plant' ],
    type: 'Spell',
    level: 4,
    source: 'Core Rulebook pg. 370',
    traditions: [ 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '10 minutes',
    text: 'You can ask questions of and receive answers from plants, but the spell doesn\'t make them more friendly or intelligent than normal. Most normal plants have a distinctive view of the world around them, so they don\'t recognize details about creatures or know anything about the world beyond their immediate vicinity. Cunning plant monsters are likely to be terse and evasive, while less intelligent ones often make inane comments.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=203',
    name: 'Moon Frenzy',
    traits: [ 'morph', 'transmutation' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 353',
    traditions: [ 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: 'up to 5 willing creatures',
    duration: '1 minute',
    text: 'A feral aspect overcomes the targets, making them tough and savage. Targets gain 5 temporary Hit Points, a +10-foot status bonus to their Speeds, and weakness 5 to silver. They also grow vicious fangs and claws, which are unarmed attacks. The fangs deal 2d8 piercing damage; the claws deal 2d6 slashing damage and have the agile and finesse traits. The targets use their highest weapon or unarmed attack proficiency with these attacks, and if they have weapon specialization or greater weapon specialization, they add this damage as well. On a critical hit with one of these unarmed attacks, the creature struck takes 1d4 persistent bleed damage. The targets can\'t use concentrate actions unless those actions also have the rage trait, with the exception of Seek. A creature can attempt to end the spell\'s effect on itself by using a single action, which has the rage trait, to attempt a Will save against your spell DC; on a success, it ends the spell\'s effect on itself. If a target is in the light of a full moon, it also grows by one size if it were Medium or smaller. This increases the reach of a Medium or Tiny creature by 5 feet.  \r\n**Heightened (6th)**  The temporary Hit Points increase to 10, the silver weakness to 10, and the damage dealt by the attacks to three dice.  \r\n**Heightened (10th)**  The temporary Hit Points increase to 20, the silver weakness to 20, and the damage dealt by the attacks to four dice.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=223',
    manual: true,
    name: 'Plant Form',
    traits: [ 'plant', 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 358',
    traditions: [ 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute',
    text: 'Taking inspiration from verdant creatures, you transform into a Large plant battle form. You must have space to expand into or the spell is lost. When you cast this spell, choose arboreal, flytrap, or shambler. You can substitute a similar specific plant to turn into (such as a pitcher plant instead of a flytrap), but this has no effect on the form\'s Size or statistics. While in this form, you gain the plant trait. You can Dismiss the spell. You gain the following statistics and abilities regardless of which battle form you choose:  \r\n * AC = 19 + your level. Ignore your armor\'s check penalty and Speed reduction.\r\n * 12 temporary Hit Points.\r\n * Resistance 10 to poison.\r\n * Low-light vision.\r\n * One or more unarmed melee attacks specific to the battle form you choose, which are the only attacks you can use. You\'re trained with them. Your attack modifier is +17, and your damage bonus is +11. These attacks are Strength based (for the purpose of the enfeebled condition, for example). If your unarmed attack modifier is higher, you can use it instead.\r\n * Athletics modifier of +19, unless your own modifier is higher.\r\n  \r\nYou also gain specific abilities based on the type of plant you choose:\r\n * **Arboreal** Speed 30 feet; **Melee** |1| branch (reach 15 feet), **Damage** 2d10 bludgeoning; **Melee** |1| foot, **Damage** 2d8 bludgeoning; you can speak in this form, but you still can\'t Cast a Spell or supply verbal components.\r\n * **Flytrap** Speed 15 feet; resistance 10 to acid; **Melee** |1| leaf (reach 10 feet), **Damage** 2d8 piercing, and you can spend an action after a hit to Grab the target.\r\n * **Shambler** Speed 20 feet, swim Speed 20 feet; resistance 10 to electricity; **Melee** |1| vine (reach 15 feet), **Damage** 2d8 slashing.\r\n  \r\n**Heightened (6th)**  Your battle form is Huge, and the reach of your attacks increases by 5 feet. You instead gain AC = 22 + your level, 24 temporary HP, attack modifier +21, damage bonus +16, and Athletics +22.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=324',
    name: 'Summon Giant',
    traits: [ 'conjuration' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 376',
    traditions: [ 'primal' ],
    cast: 'material, somatic, verbal',
    action: '3',
    duration: 'sustained up to 1 minute',
    text: 'You conjure a giant to fight for you. This works like summon animal, except you summon a common creature that has the giant trait and whose level is 5 or lower.  \r\n**Heightened (6th)**  Level 7  \r\n**Heightened (7th)**  Level 9  \r\n**Heightened (8th)**  Level 11  \r\n**Heightened (9th)**  Level 13  \r\n**Heightened (10th)**  Level 15',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=343',
    name: 'Tree Stride',
    traits: [ 'uncommon', 'conjuration', 'plant', 'teleportation' ],
    type: 'Spell',
    level: 5,
    source: 'Core Rulebook pg. 378',
    traditions: [ 'primal' ],
    cast: '1 minute (material, somatic, verbal)',
    text: 'You step into a living tree with a trunk big enough for you to fit inside it and instantly teleport to any tree of the same species within 5 miles that also has a sufficiently large trunk. Once you enter the first tree, you instantly know the rough locations of other sufficiently large trees of the same species within range and can exit from the original tree, if you prefer. You can\'t carry extradimensional spaces with you; if you attempt to do so, the spell fails.  \r\n**Heightened (6th)**  The tree you exit can be up to 50 miles away.  \r\n**Heightened (8th)**  The tree you exit can be up to 500 miles away.  \r\n**Heightened (9th)**  The tree you exit can be anywhere on the same planet.',
    components: [ '1minute(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=117',
    name: 'Fire Seeds',
    traits: [ 'evocation', 'fire', 'plant' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 338',
    traditions: [ 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    'saving throw': 'basic Reflex',
    duration: '1 minute',
    text: 'Four acorns grow in your hand, their shells streaked with pulsing red and orange patterns. You or anyone else who has one of the acorns can toss it up to 30 feet with an Interact action. It explodes in a 5-foot burst, dealing 4d6 fire damage. The save uses your spell DC, even if someone else throws the acorn. Flames continue to burn on the ground in the burst for 1 minute, dealing 2d6 fire damage to any creature that enters the flames or ends its turn within them. A creature can take damage from the continuing flames only once per round, even if it\'s in overlapping areas of fire created by different acorns. When the spell ends, any remaining acorns rot and turn to ordinary soil.  \r\n**Heightened (8th)**  The burst\'s damage increases to 5d6, and the continuing flames damage increases to 3d6.  \r\n**Heightened (9th)**  The burst\'s damage increases to 6d6, and the continuing flames damage increases to 3d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=331',
    name: 'Tangling Creepers',
    traits: [ 'conjuration', 'plant' ],
    type: 'Spell',
    level: 6,
    source: 'Core Rulebook pg. 377',
    traditions: [ 'primal' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: '500 feet',
    area: '40-foot burst',
    duration: '10 minutes',
    text: 'Dense, twitching creepers sprout from every surface and fill any bodies of water in the area. Any creature moving on the land, or Climbing or Swimming within the creepers, takes a -10- foot circumstance penalty to its Speeds while in the area. Once per round, you can make a vine lash out from any square within the expanse of creepers by using a single action, which has the concentrate trait. This vine has a 15-foot reach and makes a melee unarmed attack using your spell attack modifier. If the attack succeeds, the vine pulls the target into the creepers and makes it immobilized for 1 round or until the creature Escapes (against your spell DC), whichever comes first.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=350',
    name: 'Unfettered Pack',
    traits: [ 'abjuration' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 379',
    traditions: [ 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: 'up to 10 creatures',
    duration: '1 hour',
    text: 'You free those who travel alongside you from environmental hindrances. Targets don\'t take circumstance penalties to Speed from vegetation, rubble, winds, or other properties of the environment, whether or not the environment is magical, and they ignore difficult terrain from such environmental properties.  \r\n**Heightened (9th)**  The targets also ignore greater difficult terrain from environmental properties.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=360',
    name: 'Volcanic Eruption',
    traits: [ 'evocation', 'fire' ],
    type: 'Spell',
    level: 7,
    source: 'Core Rulebook pg. 382',
    traditions: [ 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    area: '5-foot radius, 80-foot tall cylinder',
    'saving throw': 'Reflex',
    text: 'The ground opens up, spraying a column of lava high into the air in a vertical cylinder, dealing 14d6 fire damage to creatures in the area. The lava rapidly cools and encases creatures in the area. A creature encased in rock is clumsy 1 and takes a -10-foot status penalty to its Speeds. All normal terrain is difficult terrain to a flying creature, and such creatures immediately descend 20 feet the moment they\'re encased, but they don\'t take damage from this fall. A creature encased in rock can attempt to Escape against your spell DC to end the effect. Otherwise, the creature remains encased until it takes a total of 50 damage, freeing it from the rock. Additionally, creatures in the area and those within 5 feet of the lava column automatically take 3d6 fire damage from the intense heat, regardless of the results of their saving throws.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes half damage.  \r\n**Failure**  The creature takes full damage and is encased.  \r\n**Critical Failure**  The creature takes double damage and is encased.  \r\n**Heightened (+1)**  The damage in the area increases by 2d6, and the damage from the intense heat increases by 1d6.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=240',
    name: 'Punishing Winds',
    traits: [ 'air', 'evocation' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 361',
    traditions: [ 'primal' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: '100 feet',
    area: '30-foot radius, 100-foot-cylinder',
    duration: 'sustained up to 1 minute',
    text: 'Violent winds and a powerful downdraft fill the area, forming a cyclone. All flying creatures in the area descend 40 feet. The entire area is greater difficult terrain for Flying creatures, and difficult terrain for creatures on the ground or Climbing. Any creature that ends its turn Flying within the area descends 20 feet. Any creature pushed into a surface by this spell\'s winds takes bludgeoning damage as though it had fallen. The squares at the outside vertical edges of the cylinder prevent creatures from leaving. These squares are greater difficult terrain, and a creature attempting to push through must succeed at an Athletics check or Acrobatics check to Maneuver in Flight against your spell DC to get through. A creature that fails ends its current action but can try again.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=376',
    name: 'Wind Walk',
    traits: [ 'air', 'transmutation' ],
    type: 'Spell',
    level: 8,
    source: 'Core Rulebook pg. 385',
    traditions: [ 'primal' ],
    cast: '10 minutes (material, somatic, verbal)',
    range: 'touch',
    targets: 'you and up to five creatures touched',
    duration: '8 hours',
    text: 'When you cast this spell, each target transforms into a vaguely cloud-like form and is picked up by a wind moving in the direction of your choice. You can change the wind\'s direction by using a single action, which has the concentrate trait. The wind carries the targets at a Speed of 20 miles per hour, but if any of the targets make an attack, Cast a Spell, come under attack, or otherwise enter encounter mode, the spell ends for all targets just after they roll initiative, and they drift gently to the ground.',
    components: [ '10minutes(material', 'somatic', 'verbal)' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=205',
    name: 'Nature\'s Enmity',
    traits: [ 'enchantment' ],
    type: 'Spell',
    level: 9,
    source: 'Core Rulebook pg. 354',
    traditions: [ 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '120 feet',
    area: '500-foot burst',
    targets: 'up to 5 creatures',
    duration: '10 minutes',
    text: 'Animals and plants in the area turn against the targets. Each target suffers from the following effects as long as it remains in the area. Vegetation springs up from every surface, giving each target a -10-foot circumstance penalty to its Speed any time it\'s adjacent to the plants. Aggressive animals attack unpredictably. At the start of its turn, each target rolls a DC 8 flat check. On a failure, it\'s attacked by swarming creatures that deal 2d10 slashing damage. The target attempts a basic Reflex save, and it is flat-footed for 1 round on any outcome other than a critical success. The target loses any connection to nature or natural creatures. The target has to succeed at a DC 5 flat check when casting any primal spell or the spell fails. Furthermore, animal or plant creatures become hostile to it, even one with a strong bond to the target, such as an animal companion. The GM might decide that you can\'t subject some creatures, such as an emissary of a nature deity, to the ire of nature.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=313',
    name: 'Storm of Vengeance',
    traits: [ 'air', 'electricity', 'evocation' ],
    type: 'Spell',
    level: 9,
    source: 'Core Rulebook pg. 374',
    traditions: [ 'primal' ],
    cast: 'material, somatic, verbal',
    action: '3',
    range: '800 feet',
    area: '360-foot burst',
    duration: 'sustained up to 1 minute',
    text: 'A massive storm cloud forms in the air in a 360-foot burst. Beneath it, rain begins to fall, and gales impose a -4 circumstance penalty to physical ranged attacks and weapon ranged attacks, and the air in the area becomes greater difficult terrain for flying creatures. When you Cast this Spell and the first time each round you Sustain the Spell, you can choose one of the following storm effects. You can\'t choose the same effect twice in a row. Acid Rain Each creature in the storm takes 4d8 acid damage with no saving throw. Hail The storm deals 4d10 bludgeoning damage to creatures beneath it (basic Fortitude save). Lightning Up to 10 bolts of lightning strike down, targeting creatures of your choice in the storm. No more than one bolt can target any one creature. Each bolt deals 7d6 electricity damage (basic Reflex save). Rain and Wind Heavy rain and whipping wind reduce visibility and mobility, making the area under the storm cloud difficult terrain and making everything seen within or through the area concealed. Thunderclap Each creature in the storm must succeed at a Fortitude save or be deafened for 10 minutes. A creature that succeeds is temporarily immune to thunderclaps from storm of vengeance for 1 hour.  \r\n**Heightened (10th)**  The range increases to 2,200 feet, and the cloud is a 1,000-foot burst.',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=204',
    manual: true,
    name: 'Nature Incarnate',
    traits: [ 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 10,
    source: 'Core Rulebook pg. 354',
    traditions: [ 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    duration: '1 minute',
    text: 'The primal power of the world flows through you. You transform into an incarnation of nature, either a green man or a kaiju. Your battle form is Medium for a green man or Gargantuan (30-foot-by-30-foot space) for a kaiju. You must have enough space to expand into or the spell is lost. While in this form, you gain the plant trait (for a green man) or the beast trait (for a kaiju). You can Dismiss the spell.  \r\nYou gain the following statistics and abilities regardless of which battle form you choose:  \r\n * AC = 25 + your level. Ignore your armor\'s check penalty and Speed reduction.\r\n * 30 temporary Hit Points.\r\n * Darkvision.\r\n * One or more attacks specific to the battle form you choose, which are the only attacks you can use. You\'re trained with them. Your attack modifier is +34, and you use the listed damage. These attacks are Strength based (for the purpose of the enfeebled condition, for example). If your unarmed attack modifier is higher, you can use it instead.\r\n * Athletics modifier of +36, unless your own modifier is higher.\r\n  \r\nYou also gain specific abilities based on the type of incarnation you choose:  \r\n * **Green Man** Speed 40 feet, climb Speed 40 feet; **Melee** |1| vines (reach 30 feet, versatile P), **Damage** 6d8+12 bludgeoning; **Ranged** |1| thorns (range 100 feet), **Damage** 6d6+6 piercing; Green Caress (aura, primal, transmutation) 60 feet. Enemies other than plants must succeed at a Fortitude save against your spell DC or become clumsy 1 for 1 round (clumsy 2 on a critical failure).\r\n * **Kaiju** Speed 50 feet; resistance 5 to physical damage; **Melee** |1| jaws (reach 30 feet), **Damage** 6d10+10 piercing; **Melee** |1| claws (agile, reach 30 feet), **Damage** 6d8+8 slashing; **Melee** |1| foot (agile, reach 15 feet), **Damage** 6d6+10 bludgeoning; **Unstoppable** You are immune to being immobilized and ignore difficult terrain and greater difficult terrain; **Trample** |3| You move up to double your Speed and move through the spaces of Huge or smaller creatures, trampling each creature whose space you enter. A trampled creature takes foot damage with a basic Reflex save against your spell DC.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=230',
    manual: true,
    name: 'Primal Herd',
    traits: [ 'polymorph', 'transmutation' ],
    type: 'Spell',
    level: 10,
    source: 'Core Rulebook pg. 359',
    traditions: [ 'primal' ],
    cast: 'somatic, verbal',
    action: '2',
    range: '30 feet',
    targets: 'you and up to 5 willing targets',
    duration: '1 minute',
    text: 'Summoning the power of the natural world, you transform the targets into a herd of mammoths, and they each assume a Huge battle form. Each target must have enough space to expand into or the spell fails for that target. Each target gains the animal trait. Each target can Dismiss the spell\'s effects on themself. Each target gains the following while transformed:  \r\n * AC = 22 + the target\'s level. Ignore any armor check penalty and Speed reduction.\r\n * 20 temporary Hit Points.\r\n * Speed 40 feet.\r\n * Low-light vision.\r\n * The following unarmed melee attacks, which are the only attacks the target can use. They\'re trained with them. When attacking with these attacks, the target uses their attack modifier with the proficiency and item bonuses of their most favorable weapon or unarmed Strike, and the damage is listed for each attack. These attacks are Strength based (for the purpose of the enfeebled condition, for example). If the target\'s unarmed attack modifier is higher, they can use it instead. **Melee** |1| tusk (reach 15 feet), **Damage** 4d8+19 piercing; **Melee** |1| trunk (agile, reach 15 feet), **Damage** 4d6+16 bludgeoning; **Melee** |1| foot (agile, reach 15 feet), **Damage** 4d6+13 bludgeoning.\r\n * Athletics modifier of +30, unless the target\'s own modifier is higher.\r\n * **Trample** |3| You move up to twice your Speed and move through the space of Large or smaller creatures, trampling each creature whose space you enter. A trampled creature takes damage from its foot Strike based on a basic Reflex save (DC = 19 + the target\'s level).',
    components: [ 'somatic', 'verbal' ]
  },
  {
    nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=231',
    name: 'Primal Phenomenon',
    traits: [ 'divination' ],
    type: 'Spell',
    level: 10,
    source: 'Core Rulebook pg. 359',
    traditions: [ 'primal' ],
    cast: 'material, somatic, verbal',
    action: '3',
    text: 'You request a direct intercession from the natural world. Nature always refuses unnatural requests and might grant a different request (potentially more powerful or better fitting its character) than the one you asked for. A primal phenomenon spell can do any of the following things. Duplicate any primal spell of 9th level or lower. Duplicate any non-primal spell of 7th level or lower. Produce any effect whose power level is in line with the above effects. Reverse certain effects that refer to the wish spell. At the GM\'s discretion, you can try to use primal phenomenon to produce greater effects than these, but doing so may be dangerous, or the spell may have only a partial effect.\n\n\t\t\t\t\t',
    components: [ 'material', 'somatic', 'verbal' ]
  },
  {
    name: 'Mantis Form',
    manual: true,
    traits: [ 'uncommon', 'polymorph', 'transmutation' ],
    type: 'Focus',
    level: 4,
    source: 'Lost Omens World Guide pg. 71',
    traditions: null,
    action: '2',
    duration: '1 minute',
    text: 'You become a mantis. You gain the effects of *insect form*, heightened to *mantis form*\'s level, and you can only transform into a mantis.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    name: 'Perfect Strike',
    manual: true,
    traits: [ 'uncommon', 'divination', 'fortune' ],
    type: 'Focus',
    level: 2,
    source: 'Lost Omens World guide pg. 83',
    traditions: null,
    action: 'reaction',
    trigger: 'You miss a Strike with an unarmed attack.',
    text: 'You call upon insight from your training to recover accuracy. Reroll the missed attack roll and keep the new result.',
    components: [ 'verbal' ]
  },
  {
    name: 'Unblinking Flame Revelation',
    manual: true,
    traits: [ 'uncommon', 'abjuration' ],
    type: 'Focus',
    level: 3,
    source: 'Lost Omens World guide pg. 83',
    traditions: null,
    requirements: 'Your previous action was a successful unarmed Strike',
    targets: 'the creature you hit',
    action: '1',
    duration: '2 rounds',
    text: 'You light your foe with revealing flame. the GM attempts a secret counteract check against each illusion affecting the creature; on a success, you suppress the illusion for the duration, rather than end the effect.',
    components: [ 'verbal' ]
  },
  {
    name: 'Unbreaking Wave Advance',
    manual: true,
    traits: [ 'uncommon', 'evocation', 'water' ],
    type: 'Focus',
    level: 3,
    source: 'Lost Omens World guide pg. 83',
    traditions: null,
    area: '15-foot cone',
    'saving throw': 'basic Fortitude',
    action: '1',
    text: 'You unleash a mighty wave from your hand that buffets back your foes. Each creature in the area must attempt a Fortitude saving throw. If a creature pushed by *unbreaking wave advance* would be pushed into a solid barrier or another creature, it stops at that point and takes 3d6 damage.\r\n  \r\n **Success** The creature is unaffected.  \r\n **Failure** The creature is pushed 10 feet.  \r\n **Critical Failure** The creature is pushed 20 feet.  \r\n**Heightened (+1)** The damage for pushing a creature into a solid barrier increases by 1d6.',
    components: [ 'verbal' ]
  },
  {
    name: 'Unfolding Wind Rush',
    manual: true,
    traits: [ 'uncommon', 'evocation' ],
    type: 'Focus',
    level: 3,
    source: 'Lost Omens World guide pg. 83',
    traditions: null,
    action: '1',
    text: 'You travel on a rushing wind. Move two times: two Strides, two Steps, or one Stride and one Step (in either order). You can Stride or Step into the air during this movement, moving upward at a 45-degree angle at most; if you end your movement in the air, you fall after taking one action or when your turn ends, whichever comes first. A *wall of wind* appears in all the spaces you left during this movement, lasting for 1 round.  \r\n**Heightened (5th)** The *wall of wind* lasts 3 rounds.',
    components: [ 'verbal' ]
  },
  {
    name: 'Untwisting Iron Buffer',
    manual: true,
    traits: [ 'uncommon', 'abjuration' ],
    type: 'Focus',
    level: 3,
    source: 'Lost Omens World guide pg. 83',
    traditions: null,
    action: '1',
    duration: null,
    text: 'You send currents of protective ki to the surface of your body that protect you from harm, at least until your enemies dissipate them. You gain 15 temporary Hit Points, which last for up to 3 rounds.  \r\n **Heightened (+1)** The temporary Hit Points increase by 5.',
    components: [ 'verbal' ]
  },
  {
    name: 'Magic Warrior Aspect',
    manual: true,
    traits: [ 'uncommon', 'morph', 'transmutation' ],
    type: 'Focus',
    level: 2,
    source: 'Lost Omens World guide pg. 96',
    traditions: null,
    action: '2',
    duration: '5 minutes',
    text: 'You call upon the aspect of the animal from your mask, gaining physical features reminiscent of that animal. You morph slightly into that creature, gaining the Speeds and senses you would gain from using *animal form* to turn into the type of animal your mask represents; these special Speeds can\'t be increased by status bonuses or item bonuses.',
    components: [ 'somatic', 'verbal' ]
  },
  {
    name: 'Magic Warrior Transformation',
    manual: true,
    traits: [ 'uncommon', 'polymorph', 'transmutation' ],
    type: 'Focus',
    level: 2,
    source: 'Lost Omens World guide pg. 96',
    traditions: null,
    action: '2',
    duration: '1 minute',
    text: 'You transform into the animal from your mask. You gain the effects of *animal form*, heightened to *magic warrior transformation*\'s level, and you can transform into only the type of animal your mask represents.',
    components: [ 'somatic', 'verbal' ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=793',
      name: 'Clinging Ice',
      traits: [
          'cantrip',
          'cold',
          'conjuration',
          'hex',
          'witch'
      ],
      type: 'Cantrip',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 237',
      'patron theme': 'winter',
      cast: 'somatic',
      action: '1',
      range: '30 feet',
      targets: '1 creature',
      'saving throw': 'Reflex',
      duration: 'sustained up to 1 minute',
      text: 'Freezing sleet and heavy snowfall collect on the target\'s feet and legs, dealing 1d4 cold damage and other effects depending on its Reflex save. Once this spell ends, the target becomes temporarily immune for 1 minute.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes half damage.  \r\n**Failure**  The target takes full damage, and takes a –5-foot circumstance penalty to its Speeds until the spell ends.  \r\n**Critical Failure**  The target takes double damage and a –10-foot circumstance penalty to its Speeds until the spell ends.  \r\n**Heightened (+1)**  The damage increases by 1d4.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=796',
      name: 'Discern Secrets',
      traits: [
          'cantrip',
          'divination',
          'hex',
          'witch'
      ],
      type: 'Cantrip',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 238',
      'patron theme': 'rune',
      cast: 'somatic',
      action: '1',
      range: '30 feet',
      targets: '1 creature',
      duration: 'sustained up to 1 minute',
      text: 'You call upon your patron\'s power to better uncover secrets. When you Cast the Spell, the target can Recall Knowledge, Seek, or Sense Motive. The target gains a +1 status bonus to the skill or Perception used for the roll, and this bonus remains as long as you Sustain the Spell. The target is temporarily immune to discern secrets for 1 minute.  \r\n**Heightened (5th)**  You can target two creatures instead of one.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=798',
      name: 'Evil Eye',
      traits: [
          'cantrip',
          'curse',
          'emotion',
          'enchantment',
          'fear',
          'hex',
          'mental',
          'witch'
      ],
      type: 'Cantrip',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 238',
      'patron theme': 'curse',
      cast: 'somatic',
      action: '1',
      range: '30 feet',
      targets: '1 creature',
      'saving throw': 'Will',
      duration: 'sustained up to 1 minute',
      text: 'Your fix your eye on the target, imposing a malevolent hex. The target becomes frightened based on the results of its Will save. This condition value can\'t be reduced below 1 while the spell is active and you can see the target. Regardless of the outcome, the target is then temporarily immune for 1 minute.  \r\n**Success**  The target is unaffected.  \r\n**Failure**  The target is frightened 1.  \r\n**Critical Failure**  The target is frightened 2.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=802',
      name: 'Nudge Fate',
      traits: [
          'cantrip',
          'divination',
          'hex',
          'witch'
      ],
      type: 'Cantrip',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 239',
      'patron theme': 'fate',
      cast: 'verbal',
      action: '1',
      range: '30 feet',
      targets: '1 creature',
      'saving throw': 'Will',
      duration: 'sustained up to 1 minute',
      text: 'You read slightly into the future and give fate a tiny push to achieve the result you desire. Once during the duration, when the target fails an attack roll, skill check, or saving throw and a +1 status bonus would turn a critical failure into a failure, or failure into a success, you grant the target a +1 status bonus to the check retroactively, changing the outcome appropriately. The spell then ends, and the target is temporarily immune for 1 minute. If you cast nudge fate while a previous casting of this hex is still in effect, the previous effect ends.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=806',
      name: 'Shroud of Night',
      traits: [
          'cantrip',
          'darkness',
          'evocation',
          'hex',
          'witch'
      ],
      type: 'Cantrip',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 239',
      'patron theme': 'night',
      cast: 'somatic',
      action: '1',
      range: '30 feet',
      targets: '1 creature',
      'saving throw': 'Will',
      duration: 'sustained up to 1 minute',
      text: 'Drawing your hand in a sweeping gesture, you shroud the target in a veil of night. The target\'s eyes are blanketed in darkness. If you cast this hex on a willing ally (for instance, one with light blindness), the ally can choose which result it gets without rolling. Regardless of the outcome, the target is then temporarily immune for 1 minute.  \r\n**Success**  The target is unaffected.  \r\n**Failure**  The target is shrouded in murky darkness. Unless the target has darkvision, other creatures are concealed to it.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=555',
      name: 'Silver\'s Refrain',
      traits: [
          'abjuration',
          'bard',
          'cantrip',
          'composition'
      ],
      type: 'Cantrip',
      level: 1,
      source: 'Pathfinder #147: Tomorrow Must Burn pg. 74',
      cast: 'verbal',
      action: '1',
      area: '60-foot emanation',
      duration: '1 round',
      text: 'The “Song of Silver” was an enchanted song used by the Silver Ravens to battle diabolic forces. You pull from select verses to temporarily replicate some of the legendary song’s benefits, albeit on a much smaller scale. Weapon and unarmed attacks by allies in the area are treated as silver. In addition, this spell automatically attempts to counteract any dimension door cast by a devil within the area or cast by a devil attempting to enter the area using dimension door. If a devil attempts to enter the area using dimension door and the spell is counteracted, the devil remains where it started.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=731',
      name: 'Song of Marching',
      traits: [
          'bard',
          'cantrip',
          'composition',
          'enchantment',
          'mental'
      ],
      type: 'Cantrip',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 228',
      cast: 'verbal',
      action: '1',
      area: '60-foot emanation',
      duration: 'sustained up to 1 minute',
      text: 'You maintain a brisk performance that keeps allies on the move. You and your allies in the area can Hustle for the spell\'s duration, even though you are also Sustaining the Spell. You and your allies then become temporarily immune for 1 day.  \r\n**Heightened (6th)**  You can Sustain the Spell for up to 2 hours.  \r\n**Heightened (9th)**  You can Sustain the Spell for up to 4 hours.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=732',
      name: 'Song of Strength',
      traits: [
          'bard',
          'cantrip',
          'composition',
          'emotion',
          'enchantment',
          'mental'
      ],
      type: 'Cantrip',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 228',
      cast: 'verbal',
      action: '1',
      area: '60-foot emanation',
      duration: '1 round',
      text: 'You bolster your allies\' physical strength with a hearty exhortation. You and your allies gain a +1 status bonus to Athletics checks and to their DCs against Athletics skill actions such as Disarm, Shove, and Trip.   \r\n**Special**  If you have the inspire heroics composition spell, you can use that composition to improve the bonus granted by song of strength in the same way as inspire courage or inspire defense.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=810',
      name: 'Spirit Object',
      traits: [
          'cantrip',
          'hex',
          'necromancy',
          'witch'
      ],
      type: 'Cantrip',
      level: 1,
      source: 'Legends pg. 32',
      'patron theme': 'baba yaga',
      cast: 'or  somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 unattended object up to 1 Bulk',
      text: 'Using a sliver of Baba Yaga\'s power, you briefly bring an object to life. The object gains a means of locomotion, such as sprouting chicken legs, and Strides up to 25 feet to a space you decide within range. If you spent 2 actions Casting the Spell, the object then attacks one creature of your choice adjacent to its new space. Make a melee spell attack roll against the creature. On a success, the creature takes bludgeoning, piercing, or slashing damage (as appropriate for the object) equal to 1d4 plus your spellcasting ability modifier, and on a critical success, it takes double damage.  \r\n**Heightened (+1)**  Increase the maximum Bulk of the target by 1 and the damage by 1d4.',
      components: [
          'orsomatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=807',
      name: 'Stoke the Heart',
      traits: [
          'cantrip',
          'emotion',
          'enchantment',
          'hex',
          'witch'
      ],
      type: 'Cantrip',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 239',
      'patron theme': 'fervor',
      cast: 'verbal',
      action: '1',
      range: '30 feet',
      targets: '1 creature',
      duration: 'sustained up to 1 minute',
      text: 'Intense fervor fills the target creature, empowering their blows. The target gains a +2 status bonus to damage rolls. Once this spell ends, the target becomes temporarily immune for 1 minute.  \r\n**Heightened (+2)**  The status bonus to damage increases by 1.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=809',
      name: 'Wilding Word',
      traits: [
          'cantrip',
          'enchantment',
          'hex',
          'witch'
      ],
      type: 'Cantrip',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 239',
      'patron theme': 'wild',
      cast: 'verbal',
      action: '1',
      range: '30 feet',
      targets: '1 animal, fungus, or plant',
      'saving throw': 'Will',
      duration: 'sustained up to 1 minute',
      text: 'With a few words, you convince a wild creature you are a kindred spirit, making it reluctant to harm you. The target must attempt a Will save. Regardless of the outcome, the target is then temporarily immune for 1 minute.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  When the target attempts an attack roll or skill check that would harm you, it takes a –2 status penalty to its roll.  \r\n**Failure**  As success, but the target also becomes sickened 1 each time it damages you.  \r\n**Critical Failure**  As success, but the target also becomes sickened 2 each time it damages you.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=594',
      manual: true,
      name: 'Adapt Self',
      traits: [
          'morph',
          'transmutation'
      ],
      type: 'Focus',
      level: 1,
      source: 'Gods & Magic pg. 112',
      domain: 'change',
      cast: 'somatic, verbal',
      action: '2',
      duration: '1 minute',
      text: 'You make subtle changes to yourself to adapt to the situation. Choose one of the following options that applies to you.  \r\n * If you are in water, you gain a swim Speed equal to half your Speed.  \r\n * If you are in water, you become able to breathe water.  \r\n * If it’s too dark for you to see, you gain darkvision.  \r\n * If you are in an environment of severe heat or severe cold, you are protected from the effects of severe heat or severe cold, and the spell lasts 10 minutes.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=744',
      name: 'Ancestral Touch',
      traits: [
          'cursebound',
          'emotion',
          'enchantment',
          'fear',
          'mental',
          'oracle'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 230',
      mystery: 'ancestors',
      cast: 'somatic',
      action: '1',
      range: 'touch',
      targets: '1 living creature',
      'saving throw': 'Will',
      text: 'You touch a creature and force them to see and feel the ancestors surrounding you. The target takes 1d4 mental damage, with results depending on a Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes half damage.  \r\n**Failure**  The target is frightened 1 and takes full damage.  \r\n**Critical Failure**  The target is frightened 2 and takes double damage.  \r\n**Heightened (+1)**  The mental damage increases by 1d4.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=791',
      name: 'Blood Ward',
      traits: [
          'abjuration',
          'hex',
          'witch'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 237',
      lesson: 'lesson of protection',
      cast: 'somatic',
      action: '1',
      range: '30 feet',
      targets: '1 creature',
      duration: 'sustained up to 1 minute',
      text: 'You consolidate warding energies with a gesture, guarding a creature against attacks from a certain type of foe. Designate one of the following creature traits: aberration, animal, beast, celestial, construct, dragon, elemental, fey, fiend, fungus, monitor, ooze, plant, or undead. The target gains a +1 status bonus to its saving throws and AC against creatures with that trait. The target is temporarily immune for 10 minutes.  \r\n**Heightened (5th)**  The status bonus increases to +2.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=747',
      name: 'Brain Drain',
      traits: [
          'cursebound',
          'enchantment',
          'mental',
          'oracle'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 230',
      mystery: 'lore',
      cast: 'material, somatic',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      'saving throw': 'Will',
      text: 'You probe the target\'s mind to glean knowledge. This deals 1d8 mental damage with a basic Will save. If the target fails the save, you sort through the stolen memories to attempt a single check to Recall Knowledge. Choose a skill that has the Recall Knowledge action, and use the target\'s skill modifier for the check.  \r\n**Heightened (+1)**  The mental damage increases by 1d8.',
      components: [
          'material',
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=792',
      name: 'Cackle',
      traits: [
          'enchantment',
          'hex',
          'witch'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 237',
      cast: 'verbal',
      action: 'free',
      text: 'With a quick burst of laughter, you prolong a magical effect you created. You Sustain a Spell.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=748',
      name: 'Call to Arms',
      traits: [
          'auditory',
          'cursebound',
          'emotion',
          'enchantment',
          'mental',
          'oracle'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 230',
      mystery: 'battle',
      cast: 'verbal',
      action: 'reaction',
      trigger: 'You are about to roll for initiative.',
      area: '20-foot emanation',
      duration: '1 minute',
      text: 'You cry out a call to arms, inspiring your allies to enter the fray. Each ally in the area gains a +2 status bonus to their initiative roll and gains temporary Hit Points equal to the spell\'s level; these temporary Hit Points last for the spell\'s duration.  \r\n**Heightened (6th)**  The bonus increases to +3.  \r\n**Heightened (9th)**  The bonus increases to +4.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=608',
      name: 'Charged Javelin',
      traits: [
          'electricity',
          'evocation'
      ],
      type: 'Focus',
      level: 1,
      source: 'Gods & Magic pg. 115',
      domain: 'lightning',
      cast: 'somatic, verbal',
      action: '2',
      range: '60 feet',
      targets: '1 or more creatures',
      text: 'You fire a javelin of electricity that leaves a charged field around its target. Make a spell attack roll. The javelin deals 1d6 electricity damage and 1 persistent electricity damage.  \r\n**Critical Success**  The javelin deals double damage, both initial and persistent.  \r\n**Success**  The javelin deals full damage. As long as the target is taking persistent damage from this spell, creatures gain a +1 status bonus to attack rolls with metal weapons or electricity effects against the target, and the target takes a –1 status penalty to saves against electricity effects.  \r\n**Heightened (+1)**  The initial damage increases by 1d6, and the persistent damage increases by 1.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=622',
      name: 'Delay Consequence',
      traits: [
          'abjuration'
      ],
      type: 'Focus',
      level: 1,
      source: 'Gods & Magic pg. 118',
      domain: 'time',
      cast: 'somatic',
      action: 'reaction',
      trigger: 'A creature or object within range is hit by an attack.',
      range: '30 feet',
      targets: 'the triggering creature',
      duration: '1 round',
      text: 'You transpose the moment that the target would be injured to later in its timestream. Roll damage normally, but do not reduce Hit Points or apply any other effects of the attack until the spell’s duration has elapsed. When the spell ends, the target is immediately affected by the attack, taking damage and being affected by any additional effects. You can Dismiss this spell.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=781',
      name: 'Dim the Light',
      traits: [
          'darkness',
          'evocation',
          'sorcerer'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 236',
      bloodline: 'shadow',
      cast: 'somatic',
      action: 'reaction',
      trigger: 'You cast a darkness or shadow spell.',
      text: 'You magnify the darkness from the triggering effect, causing the ambient light level to flicker briefly so you can slip from sight. You can immediately attempt a Stealth check to Hide, and you can become hidden to a creature even if you don\'t have cover and aren\'t otherwise concealed from that creature. You cease being hidden at the end of your turn unless you move into cover or become concealed before then.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=610',
      manual: true,
      name: 'Divine Plagues',
      traits: [
          'disease',
          'necromancy'
      ],
      type: 'Focus',
      level: 1,
      source: 'Gods & Magic pg. 115',
      domain: 'plague',
      cast: 'somatic, verbal',
      action: '2',
      range: '15 feet',
      'saving throw': 'Fortitude',
      text: 'Your deity sends wracking plagues. The target must attempt a Fortitude save. When you Cast the Spell, decide whether the disease inflicts the clumsy, enfeebled, or stupefied condition.  \r\n**Success**  The target is unaffected.  \r\n**Failure**  The target is afflicted with divine plague at stage 1.  \r\n**Critical Failure**  The target is afflicted with divine plague at stage 2.  \r\n**Divine Plague**  (disease)  **Level** 1; **Stage 1** clumsy 1, enfeebled 1, or stupefied 1 (1 round); **Stage 2** slowed 1 and clumsy 1, enfeebled 1, or stupefied 1 (1 round) **Stage 3** clumsy 1, enfeebled 1, or stupefied 1 and the target can’t recover from the condition until they are cured (1 day)  \r\n**Heightened (5th)**  The divine plague disease gains the virulent trait. The condition value for the clumsy, enfeebled, or stupefied condition is 2 instead of 1.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=628',
      manual: true,
      name: 'Draconic Barrage',
      traits: [
          'evocation'
      ],
      type: 'Focus',
      level: 1,
      source: 'Gods & Magic pg. 119',
      domain: 'wyrmkin',
      cast: 'somatic, verbal',
      action: '2',
      duration: '1 minute',
      text: 'You shape energy into one incorporeal tiny dragon (or serpentine creature) that flits around you. The specific dragon is random; roll 1d6 on the table below for each dragon evoked to determine which type of dragon you create. While the spell persists, you can command one of your dragons to spit a missile of energy at a creature within 60 feet by using a single action, which has the concentrate trait. This is a ranged Strike that uses your spell attack bonus and deals 1d6 damage plus your spellcasting ability modifier, with the damage type depending on the dragon. A dragon’s breath Strike uses and contributes to your multiple attack penalty. Once a dragon has used its breath Strike, it winks out of existence; when you have no dragons remaining, the spell ends. \r\n\r\n| D6 | Dragon | Breath Strike Type |\r\n| :---: | :---: | :---: |\r\n| 1 | Copper or black | Acid |\r\n| 2 | Silver or white | Cold |\r\n| 3 | Bronze or blue | Electricity |\r\n| 4 | Brass, gold, or red | Fire |\r\n| 5 | Green | Poison |\r\n| 6 | Your choice of dragon | As the dragon |\r\n**Heightened (+1)**  You shape 1 additional dragon, and the Strike damage increases by 1d6.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=616',
      name: 'Eject Soul',
      traits: [
          'incapacitation',
          'necromancy'
      ],
      type: 'Focus',
      level: 1,
      source: 'Gods & Magic pg. 117',
      domain: 'soul',
      cast: 'somatic, verbal',
      action: '2',
      range: 'touch',
      targets: '1 living creature that has a soul',
      text: 'Your touch disrupts the connection between body and soul, possibly forcing the soul out of the body altogether. The target must attempt a Fortitude save. You can allow allies to choose the degree of success instead of rolling a saving throw.  \r\n**Success**  The target is unaffected.  \r\n**Failure**  The target is stunned 1 as its soul briefly loses its connection to its body.  \r\n**Critical Failure**  The target’s soul exits its body for 1 round. The target’s body becomes stunned. While its body is stunned in this way, the target remains fully aware in soul form; it simply can’t consciously move its body (though the body makes basic instinctual defensive movements). The target’s soul has the incorporeal trait, is invisible, and has a fly Speed of 60 feet. It can’t attack, cast spells, or attempt any skill checks that require a physical body, and it must always maintain line of effect to its body. When the target’s body ceases being stunned, the target’s soul instantly returns to its body as the target wakes.  \r\n**Heightened (+3)**  If a willing ally chooses to critically fail, it can stay in soul form for 1 additional round.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=797',
      name: 'Elemental Betrayal',
      traits: [
          'evocation',
          'hex',
          'witch'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 238',
      lesson: 'lesson of the elements',
      cast: 'verbal',
      action: '1',
      range: '30 feet',
      targets: '1 creature',
      duration: 'sustained up to 1 minute',
      text: 'You call upon the elements to undermine your foe. When you Cast this Spell, choose air, earth, fire, or water. Each time the target takes damage from a spell or effect with the chosen trait, it takes an additional 2 damage of one damage type dealt by the spell or effect. If you chose fire or water, the target also takes this additional damage when taking fire or cold damage, respectively, from effects or spells without the chosen trait.  \r\n**Heightened (+2)**  Increase the additional damage by 1.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=626',
      name: 'Empty Inside',
      traits: [
          'abjuration',
          'mental'
      ],
      type: 'Focus',
      level: 1,
      source: 'Gods & Magic pg. 119',
      domain: 'void',
      cast: 'verbal',
      action: '1',
      text: 'You inject a sliver of the void into your mind, momentarily remaking it into a bleak and empty place. Attempt a counteract check against one emotion effect affecting you.  \r\n**Heightened (5th)**  You can attempt counteract checks against any number of emotion effects affecting you.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=783',
      name: 'Genie\'s Veil',
      traits: [
          'abjuration',
          'sorcerer'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 236',
      bloodline: 'genie',
      cast: 'somatic',
      action: 'reaction',
      trigger: 'A creature within range is attacked.',
      range: '30 feet',
      targets: '1 willing creature',
      text: 'With a flourish, you fulfill a creature\'s wish for protection, bending reality to keep them from harm. The target vanishes in a burst of brightly colored smoke and sparkles, reappearing an instant later. They become concealed against the triggering attack and until the end of the current creature\'s turn.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=770',
      name: 'Gravity Weapon',
      traits: [
          'evocation',
          'ranger'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 234',
      cast: 'somatic',
      action: '1',
      duration: '1 minute',
      text: 'You build up gravitational force and funnel it into your blows, leading to more powerful attacks with blade and bow alike. On your first weapon Strike each round, you gain a status bonus to damage equal to twice the number of weapon damage dice.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=771',
      manual: true,
      name: 'Heal Companion',
      traits: [
          'healing',
          'necromancy',
          'positive',
          'ranger'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 234',
      cast: 'or',
      action: '2',
      range: 'touch or 30 feet',
      targets: 'your animal companion',
      text: 'You harness positive energy to heal your animal companion\'s wounds. You restore 1d10 Hit Points to your animal companion. The number of actions you spend Casting this Spell determines range and other parameters.  \r\n  **|1| (somatic)** The spell has a range of touch.  \r\n  ** |2| (verbal)** The spell has a range of 30 feet and restores an additional 8 Hit Points to the target.  \r\n**Heightened (+1)**  The amount of healing increases by 1d10, and the additional healing for the 2-action version increases by 8.',
      components: [
          'or'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=728',
      name: 'Hymn of Healing',
      traits: [
          'bard',
          'composition',
          'healing',
          'necromancy',
          'positive'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 228',
      cast: 'verbal',
      action: '2',
      range: '30 feet',
      targets: 'you or 1 ally',
      duration: 'sustained up to 4 rounds',
      text: 'Your divine singing mends wounds and provides a temporary respite from harm. The target gains fast healing 2. When you Cast the Spell and each time you Sustain the Spell, the target gains 2 temporary Hit Points, which last for 1 round.  \r\n**Heightened (+1)**  The fast healing and temporary Hit Points each increase by 2.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=600',
      name: 'Hyperfocus',
      traits: [
          'divination'
      ],
      type: 'Focus',
      level: 1,
      source: 'Gods & Magic pg. 113',
      domain: 'delirium',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      'saving throw': 'Will',
      duration: 'varies',
      text: 'You sharpen a creature’s senses, though more distant objects become hazy, indistinct, or muted to it. The target gains a +1 status bonus to Perception checks attempted with any of its precise senses. Furthermore, any imprecise senses the target has are sharpened to precise senses (though they do not receive the status bonus). However, the target cannot perceive anything beyond a range of 20 feet with any of its senses. The duration is determined by the target’s Will save. You can allow allies to choose the outcome instead of rolling a saving throw.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is affected for 1 round.  \r\n**Failure**  The target is affected for 1 minute.  \r\n**Critical Failure**  As failure, but the target cannot perceive anything beyond a range of 10 feet.  \r\n**Heightened (3rd)**  You can target up to 2 creatures.  \r\n**Heightened (6th)**  You can target up to 4 creatures.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=755',
      name: 'Incendiary Aura',
      traits: [
          'cursebound',
          'evocation',
          'fire',
          'oracle'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 232',
      mystery: 'flames',
      cast: 'somatic, verbal',
      action: '2',
      area: '10-foot emanation',
      duration: '1 minute',
      text: 'You surround yourself with a combustible aura. Each time a creature within the emanation takes fire damage, it catches on fire, taking 2d4 persistent fire damage.  \r\n**Heightened (+2)**  Increase the persistent damage by 1d4 and the radius of the emanation by 5 feet.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=614',
      name: 'Lament',
      traits: [
          'auditory',
          'emotion',
          'enchantment',
          'mental'
      ],
      type: 'Focus',
      level: 1,
      source: 'Gods & Magic pg. 116',
      domain: 'sorrow',
      cast: 'somatic, verbal',
      action: '2',
      range: '30-foot cone',
      targets: '1 or more creatures',
      'saving throw': 'basic Will',
      text: 'You let out your negative emotions in a guttural wail that shakes your enemies’ hearts and deals 1d8 mental damage (basic Will save). If you have any harmful conditions imposed by emotion effects, lament deals additional mental damage equal to the counteract level of the highest-level effect.  \r\n**Heightened (+1)**  The damage increases by 1d8.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=799',
      name: 'Life Boost',
      traits: [
          'healing',
          'hex',
          'necromancy',
          'witch'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 238',
      lesson: 'lesson of life',
      cast: 'somatic',
      action: '1',
      range: '30 feet',
      targets: '1 creature',
      duration: '4 rounds',
      text: 'You temporarily bolster the target\'s vitality. The target gains fast healing equal to double the spell\'s level.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=758',
      name: 'Life Link',
      traits: [
          'cursebound',
          'healing',
          'necromancy',
          'oracle',
          'positive'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 232',
      mystery: 'life',
      cast: 'somatic',
      action: '1',
      range: '30 feet',
      targets: '1 creature other than you',
      duration: '1 minute',
      text: 'You forge a connection of life energy between you and your target, distributing harm between both of you. When you first Cast the Spell, the target recovers 1d4 Hit Points. The first time each round that the target takes damage, reduce the damage it takes by 3 (to a minimum of 0 damage). You lose 3 Hit Points each time, or the total damage dealt, if less than 3; this damage ignores any immunities or resistances you have and can\'t otherwise be mitigated in any way.The spell ends immediately if you fall unconscious. You can Dismiss the spell.  \r\n**Heightened (3rd)**  You can target 2 creatures other than you. Increase the initial healing to 3d4 and the maximum damage reduced and Hit Points lost to 5.  \r\n**Heightened (6th)**  You can target 3 creatures other than you. Increase the initial healing to 6d4 and the maximum damage reduced and Hit Points lost to 10.  \r\n**Heightened (9th)**  You can target 4 creatures other than you. Increase the initial healing to 9d4 and the maximum damage reduced and Hit Points lost to 15.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=774',
      name: 'Magic Hide',
      traits: [
          'abjuration',
          'ranger'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 235',
      cast: 'somatic',
      action: '1',
      range: '30 feet',
      targets: 'your animal companion',
      duration: '1 minute',
      text: 'Your animal companion grows a thicker hide, matted fur, or a harder shell, granting it a +1 status bonus to AC.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=801',
      name: 'Needle of Vengeance',
      traits: [
          'enchantment',
          'hex',
          'mental',
          'witch'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 238',
      lesson: 'lesson of vengeance',
      cast: 'somatic',
      action: '1',
      range: '30 feet',
      targets: '1 enemy',
      'saving throw': 'basic Will',
      duration: 'sustained up to 1 minute',
      text: 'A long, jagged needle jabs into the target foe\'s psyche whenever it tries to attack a specifically forbidden creature. Name yourself or one of your allies. The target takes 2 mental damage any time it uses a hostile action against the named creature.  \r\n**Heightened (+1)**  Increase the damage by 2.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=785',
      name: 'Nymph\'s Token',
      traits: [
          'enchantment',
          'sorcerer'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 236',
      bloodline: 'nymph',
      cast: 'somatic, verbal',
      action: '2',
      duration: '1 minute',
      text: 'You grant an ally a token of favor. You create a token, such as a lock of your hair or a flower, that persists for the spell\'s duration; as part of Casting the Spell, you can Interact to pass the token to an ally within your reach. As long as the ally has the token on their person, they gain a +1 status bonus to Performance checks and Will saves. You can Dismiss the spell as a free action.  \r\n**Heightened (4th)**  As long as the ally has the token on their person, you can cast spells that have a range of touch on them at a range of 30 feet.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=604',
      name: 'Oathkeeper\'s Insignia',
      traits: [
          'conjuration'
      ],
      type: 'Focus',
      level: 1,
      source: 'Gods & Magic pg. 114',
      domain: 'duty',
      cast: 'verbal',
      action: 'free',
      trigger: 'You make a promise or deal.',
      duration: '1 hour',
      text: 'A magical indicator assures a creature that you’ve upheld your end of a bargain. When you Cast the Spell, you create a bracelet, flower, or other such trinket. If, while the spell persists, you complete the terms of the promise or deal you made, the trinket fades away with a pleasant chime; if you violate the terms instead, the trinket breaks with a dissonant crash.  \r\n**Heightened (3rd)**  The duration becomes 1 day.  \r\n**Heightened (5th)**  The duration becomes 1 week.  \r\n**Heightened (7th)**  The duration becomes 1 month.  \r\n**Heightened (9th)**  The duration becomes 1 year.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=624',
      name: 'Object Memory',
      traits: [
          'divination'
      ],
      type: 'Focus',
      level: 1,
      source: 'Gods & Magic pg. 118',
      domain: 'vigil',
      cast: 'somatic, verbal',
      action: '2',
      targets: '1 weapon or tool',
      duration: '1 minute',
      text: 'By touching an object, you draw forth the experience of those who created and used it. If you touch a weapon, your proficiency rank with that weapon temporarily increases to trained (if it is not already higher). If you touch a tool, your proficiency rank with the next skill check you attempt with that tool (such as a Crafting check with a blacksmith’s hammer) within the spell’s duration temporarily increases to trained (if it is not already higher). This spell has no benefit for activities that take longer than a minute to complete.  \r\n**Heightened (6th)**  Your proficiency rank increases to expert instead of trained.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=602',
      name: 'Parch',
      traits: [
          'air',
          'evocation'
      ],
      type: 'Focus',
      level: 1,
      source: 'Gods & Magic pg. 114',
      domain: 'dust',
      cast: 'somatic, verbal',
      action: '2',
      range: '60 feet',
      targets: '1 creature',
      'saving throw': 'Fortitude',
      text: 'Dry winds dehydrate a creature. The target must attempt a Fortitude save; if used on a creature with the water trait or a creature made primarily of liquid (such as many oozes), the creature uses the outcome for one degree of success worse than the result. Creatures whose bodies contain no significant moisture (such as earth elementals) are immune to parch.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes a –1 status penalty to its checks and DCs for 1 round.  \r\n**Failure**  The target takes a –1 status penalty to its checks and DCs for 1 minute.  \r\n**Critical Failure**  The target takes a –2 status penalty to its checks and DCs for 1 minute and is dazzled as long as it has this penalty.  \r\n  \r\n If a creature affected by parch drinks a liquid, such as a swig of water or a potion, the spell ends. Affected creatures that have the water trait or are made primarily of liquid, as well as affected creatures that can’t drink, can end the effect as a two-action activity, which has the concentrate trait.  \r\n**Heightened (4th)**  You can target up to 4 creatures.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=804',
      name: 'Phase Familiar',
      traits: [
          'abjuration',
          'hex',
          'witch'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 239',
      cast: 'somatic',
      action: 'reaction',
      trigger: 'Your familiar would take damage.',
      range: '60 feet',
      targets: 'your familiar',
      text: 'You draw upon your patron\'s power to momentarily shift your familiar from its solid, physical form into an ephemeral version of itself shaped of mist. Your familiar gains resistance 5 to all damage and is immune to precision damage. These apply only against the triggering damage.  \r\n**Heightened (+1)**  Increase the resistance by 2.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=559',
      name: 'Practice Makes Perfect',
      traits: [
          'cleric',
          'divination'
      ],
      type: 'Focus',
      level: 1,
      source: 'Pathfinder #148: Fires of the Haunted City pg. 65',
      domain: 'toil',
      cast: 'somatic',
      action: 'reaction',
      trigger: 'You or an ally within range fails a skill check for a skill in which you or they are trained.',
      range: '30 feet',
      text: 'The target gains a +2 status bonus to the triggering check, or a +3 bonus if the target has master or better proficiency in the skill. This bonus can change the outcome of the target’s check.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=606',
      name: 'Redact',
      traits: [
          'transmutation'
      ],
      type: 'Focus',
      level: 1,
      source: 'Gods & Magic pg. 114',
      domain: 'glyph',
      cast: 'material, somatic',
      action: '2',
      range: '30 feet',
      targets: 'unattended written materials of up to 1 Bulk or less',
      duration: '1 day',
      text: 'You strike mention of a specific name from one or more documents. When you cast the spell, give one proper name, be it a creature, location, or object. Any mention of that name within the document becomes blurred, smudged, or otherwise completely illegible. Epithets and unambiguous references to the name are redacted as well; for instance, redacting the name of the goddess Sarenrae from a book would also remove references to her title “the Dawnflower.”  \r\n**Heightened (3rd)**  Instead of striking out a given name, you can replace it with a different name you choose. Epithets and references are substituted with similar ones relating to the replacement name. Anyone reading the text can attempt a Perception or Society check against your spell DC to notice the altered text, though that doesn’t tell them what the original said.  \r\n**Heightened (4th)**  At your choice, the duration is unlimited.',
      components: [
          'material',
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=786',
      name: 'Sepulchral Mask',
      traits: [
          'divination',
          'emotion',
          'mental',
          'sorcerer',
          'visual'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 236',
      bloodline: 'psychopomp',
      cast: 'somatic, verbal',
      action: '2',
      area: '5-foot emanation',
      targets: 'enemies in the area',
      'saving throw': 'Will',
      duration: '1 minute',
      text: 'You manifest a supernatural funerary mask, granting you a +1 status bonus to Will saving throws against emotion effects for 1 minute. Its somber countenance forces your foes to confront their regrets and sins. Each enemy in the area when you Cast the Spell or that starts its turn in the area takes 1d4 mental damage and must attempt a Will save.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes half damage.  \r\n**Failure**  The creature takes full damage and takes a –1 status penalty to Will saves against emotion effects for 1 round.  \r\n**Critical Failure**  The creature takes double damage and a –1 status penalty to Will saves against emotion effects for 1 minute.  \r\n**Heightened (+2)**  Increase the mental damage by 2d4 and the emanation\'s radius by 5 feet.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=612',
      name: 'Share Burden',
      traits: [
          'abjuration',
          'mental'
      ],
      type: 'Focus',
      level: 1,
      source: 'Gods & Magic pg. 116',
      domain: 'repose',
      cast: 'somatic',
      action: 'reaction',
      trigger: 'An ally within 30 feet is about to attempt a saving throw against a harmful emotion effect, and you would not otherwise have to save against the effect.',
      text: 'You shoulder some of your ally’s pain. Both you and your ally use the outcome one degree of success better than the result of your ally’s saving throw, even if the triggering effect usually affects only one target.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=776',
      name: 'Snare Hopping',
      traits: [
          'conjuration',
          'ranger',
          'teleportation'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 235',
      cast: 'somatic, verbal',
      action: '2',
      range: '10 feet',
      targets: 'one snare you built',
      text: 'You may not have placed your snare in the right place, but you can magically move it there. You teleport the target snare to another unoccupied location in range.  \r\n**Heightened (+1)**  The range of the spell increases by 10 feet.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=760',
      name: 'Soul Siphon',
      traits: [
          'cursebound',
          'necromancy',
          'negative',
          'oracle'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 233',
      mystery: 'bones',
      cast: 'somatic',
      action: '1',
      range: '30 feet',
      targets: '1 living creature',
      'saving throw': 'Fortitude',
      text: 'You siphon off a portion of the target\'s soul to bolster your own vitality. The target must attempt a Fortitude save or take 1d4 negative damage. You gain temporary Hit Points equal to the total amount of HP the target loses, including the HP lost from becoming drained.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes half damage.  \r\n**Failure**  The creature takes full damage and becomes drained 1.  \r\n**Critical Failure**  The creature takes double damage and becomes drained 2.  \r\n**Heightened (+1)**  Increase the damage by 1d4.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=761',
      name: 'Spray of Stars',
      traits: [
          'cursebound',
          'evocation',
          'fire',
          'light',
          'oracle'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 233',
      mystery: 'cosmos',
      cast: 'somatic, verbal',
      action: '2',
      area: '15-foot cone',
      'saving throw': 'Reflex',
      text: 'You fling a spray of tiny shooting stars, dealing 1d4 fire damage. Each creature in the area must attempt a Reflex save.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes half damage and is dazzled for 1 round.  \r\n**Failure**  The creature takes full damage and is dazzled for 3 rounds.  \r\n**Critical Failure**  The creature takes double damage and is dazzled for 1 minute.  \r\n**Heightened (+1)**  Increase the damage by 1d4.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=620',
      name: 'Swarmsense',
      traits: [
          'divination'
      ],
      type: 'Focus',
      level: 1,
      source: 'Gods & Magic pg. 117',
      domain: 'swarm',
      cast: '1 minute (somatic, verbal)',
      duration: 'sustained',
      text: 'You extend your senses through a multitude of crawling and flying creatures. You create a crawling swarm in your square. You can hear through the swarm as if using your normal auditory senses. The first time you Sustain the Spell each round, you can move the swarm 10 feet along the ground in any direction. The swarm has AC 15 and a +0 bonus to its saves. Any damage dealt to the swarm destroys it and ends the spell.  \r\n**Heightened (3rd)**  The swarm has the benefits of spider climb.  \r\n**Heightened (5th)**  The swarm has a fly Speed of 10 feet. You can see through the swarm using your visual senses.  \r\n**Heightened (7th)**  The swarm gains a 10-foot status bonus to its Speeds.',
      components: [
          '1minute(somatic',
          'verbal)'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=763',
      name: 'Tempest Touch',
      traits: [
          'cold',
          'cursebound',
          'evocation',
          'oracle',
          'water'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 233',
      mystery: 'tempest',
      cast: 'somatic',
      action: '1',
      range: 'touch',
      targets: '1 creature',
      'saving throw': 'Fortitude',
      text: 'Your touch calls forth a churning mass of icy water that clings to your target, dealing 1d4 bludgeoning damage and 1d4 cold damage. The target must attempt a Fortitude save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes half damage and a –5-foot circumstance penalty to its Speeds until the end of your next turn.  \r\n**Failure**  The target takes full damage and a –10-foot circumstance penalty to its Speeds until the end of your next turn.  \r\n**Critical Failure**  As failure, but the target takes double damage.  \r\n**Heightened (+1)**  The bludgeoning and cold damage each increase by 1d4.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=654',
      name: 'Touch of Corruption',
      traits: [
          'champion',
          'necromancy',
          'negative'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 229, Gamemastery Guide pg. 247',
      cast: 'somatic',
      action: '1',
      range: 'touch',
      targets: '1 willing undead creature or 1 living creature',
      text: 'You infuse the target with negative energy. If the target is living, this deals 1d6 negative damage (basic Fortitude save); on a failed save, the target also takes a –2 status penalty to AC for 1 round. If the target is a willing undead creature, the target instead regains 6 Hit Points, and if you are the undead target, you also gain a +2 status bonus to damage rolls for 1 round.  \r\n**Heightened (+1)**  Increase the damage dealt to a living creature by 1d6 or increase the Hit Points regained by undead by 6.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=808',
      name: 'Veil of Dreams',
      traits: [
          'enchantment',
          'hex',
          'mental',
          'witch'
      ],
      type: 'Focus',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 239',
      lesson: 'lesson of dreams',
      cast: 'somatic',
      action: '1',
      range: '30 feet',
      targets: '1 creature',
      'saving throw': 'Will',
      duration: 'sustained up to 1 minute',
      text: 'You draw the target into a drowsy state, causing daydreams and sluggishness. The target must attempt a Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes a –1 status penalty to Perception, attack rolls, and Will saves. This penalty increases to –2 for Will saves against sleep effects.  \r\n**Failure**  As success, and any time the target uses a concentrate action, it must succeed at a DC 5 flat check or the action is disrupted.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=596',
      name: 'Winter Bolt',
      traits: [
          'attack',
          'cold',
          'evocation'
      ],
      type: 'Focus',
      level: 1,
      source: 'Gods & Magic pg. 112',
      domain: 'cold',
      cast: 'somatic, verbal',
      action: '2',
      range: '60 feet',
      targets: '1 creature or object',
      text: 'You fling a hollow icicle filled with winter’s wrath. Make a spell attack against a target within range. The bolt deals 1d8 piercing damage and lodges in the target. At the end of the target’s next turn, the bolt shatters, releasing a whirl of snow and ice that deals 1d12 cold damage to the target and all adjacent creatures. The bolt can be removed with an Interact action, which causes it to melt harmlessly without detonating.  \r\n**Critical Success**  The initial bolt deals full damage and is especially well anchored, taking 2 Interact actions to remove. The bolt’s explosion deals double damage.  \r\n**Success**  The bolt and its explosion deal full damage.  \r\n**Heightened (+1)**  The initial damage increases by 1d8 and the secondary damage increases by 1d12.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=598',
      name: 'Withering Grasp',
      traits: [
          'necromancy',
          'negative'
      ],
      type: 'Focus',
      level: 1,
      source: 'Gods & Magic pg. 113PFS Note The Targets entry for withering grasp should be “1 creature or unattended object”, not “1 creature or object.” When used on an unattended object, the object takes persistent damage on your next turn.',
      domain: 'decay',
      cast: 'somatic, verbal',
      action: '2',
      range: 'touch',
      targets: '1 creature or object',
      text: 'Your touch rots organic material and decays objects. Make a melee spell attack roll. Your touch deals 1d12 negative damage plus 1d4 persistent negative damage. If a creature uses an item to block withering grasp, such as with the Shield Block reaction, the item is automatically affected, but the creature does not take damage (even if there is damage left over after the shield’s Hardness). Unlike normal negative damage, the negative damage from withering grasp damages objects, constructs, and the like by eroding them away.  \r\n**Critical Success**  Your touch deals double damage (both initial and persistent). If you target an object, lower its Hardness by 4 for 1 minute.  \r\n**Success**  Your touch deals full damage. If you target an object, lower its Hardness by 2 for 1 minute.  \r\n**Heightened (+1)**  The damage increases by 1d12 and the persistent damage increases by 1. If you target an object, lower its Hardness by an additional 1 point on both a success and a critical success.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=618',
      name: 'Zenith Star',
      traits: [
          'divination',
          'light'
      ],
      type: 'Focus',
      level: 1,
      source: 'Gods & Magic pg. 117',
      domain: 'star',
      cast: 'somatic, verbal',
      action: '2',
      range: '60 feet',
      targets: '1 creature',
      'saving throw': 'Fortitude',
      duration: '1 day',
      text: 'You call a tiny star to orbit a creature in a sparkling halo before shooting up into the heavens, where it marks the creature’s rough location. The target must attempt a Fortitude save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is dazzled for 1 round.  \r\n**Failure**  The target is dazzled for 1 round. While the spell persists, as long as you can see the night sky and the target is visible from the same night sky, you can sense the approximate direction and distance to the creature by using a single action, which has the concentrate trait. This is exact enough to track the creature, but not pinpoint their exact square (for instance, to make an attack). You can set a number of zenith stars equal to your Wisdom modifier; if you exceed this number, your oldest zenith star is automatically Dismissed.  \r\n**Critical Failure**  As failure, but the target is blinded for 1 round.  \r\n**Heightened (+1)**  The duration increases by 1 day.  \r\n**Heightened (4th)**  You ignore the concealed condition against targets marked by zenith star.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=767',
      manual: true,
      name: 'Animal Feature',
      traits: [
          'morph',
          'ranger',
          'transmutation'
      ],
      type: 'Focus',
      level: 2,
      source: 'Advanced Player\'s Guide pg. 234',
      cast: 'somatic, verbal',
      action: '1',
      duration: '1 minute',
      text: 'Without fully transforming your body, you gain one animalistic feature, which you select from the list below each time you Cast the Spell.  \r\n  **Cat Eyes** You gain low-light vision.  \r\n  **Claws** You gain a claw attack that deals 1d6 slashing damage and has the agile, finesse, and unarmed traits.  \r\n  **Jaws** You gain a jaws attack that deals 1d8 piercing damage and has the unarmed trait.  \r\n**Heightened (4th)**  Add the following options to the list you can choose from.  \r\n  **Fish Tail** You gain a swim Speed equal to your land Speed.  \r\n  **Owl Eyes** You gain darkvision.  \r\n  **Wings** You gain a fly Speed equal to your land Speed.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=772',
      name: 'Hunter\'s Luck',
      traits: [
          'divination',
          'fortune',
          'ranger'
      ],
      type: 'Focus',
      level: 2,
      source: 'Advanced Player\'s Guide pg. 235',
      cast: 'verbal',
      action: 'free',
      trigger: 'You attempt a check to Recall Knowledge about a creature, but you haven\'t rolled yet.',
      text: 'You have a preternatural ability to remember details about your foes. Roll the triggering check twice and use the better result.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=556',
      name: 'Invoke the Crimson Oath',
      traits: [
          'evocation'
      ],
      type: 'Focus',
      level: 2,
      source: 'Character Guide pg. 90',
      cast: 'somatic, verbal',
      action: '2',
      area: '20-foot cone',
      'saving throw': 'basic Fortitude',
      text: 'Brandishing your weapon and shouting the final line of the Crimson Oath, you unleash a blast of destructive ruby energy. You must be wielding a melee weapon, and you perform this spell’s somatic component by swinging the weapon in a downward arc. You deal normal melee damage for your weapon, including all appropriate bonuses, penalties, modifiers, and properties, to each creature in the spell’s area; they must each attempt a basic Fortitude save. A creature that critically fails this save also suffers any additional effect you would normally inflict with your weapon on a critical hit; if the creature that critically fails its save is also immune to critical hits, it merely fails the save instead. You can convert all the physical damage from this spell into positive damage against all undead creatures in the area.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=557',
      name: 'Light of Revelation',
      traits: [
          'divination',
          'light',
          'revelation'
      ],
      type: 'Focus',
      level: 2,
      source: 'Character Guide pg. 91',
      cast: 'somatic, verbal',
      action: '2',
      range: '30-foot emanation',
      duration: '5 minutes',
      text: 'You shed a luminous aura, illuminating a 30-foot radius with bright light. You and all allies in this area gain a +1 status bonus to Perception checks to detect hidden or undetected creatures, as well as hidden objects, doors, and other features.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=777',
      name: 'Soothing Mist',
      traits: [
          'healing',
          'necromancy',
          'positive',
          'ranger'
      ],
      type: 'Focus',
      level: 2,
      source: 'Advanced Player\'s Guide pg. 235',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 willing living creature or 1 undead creature',
      text: 'You call forth a magical mist of positive energy that envelops a creature. The mist restores 2d8 Hit Points to a target living creature and ends one source of persistent acid, bleed, fire, negative, or poison damage affecting it. If the creature is taking persistent damage from multiple sources, you select which one is removed. Against an undead target, you deal 2d8 positive damage (basic Fortitude save); if it fails the save, it also takes 2 persistent positive damage.  \r\n**Heightened (+1)**  The amount of healing (or damage to an undead target) increases by 1d8, and the persistent positive damage to an undead creature increases by 1.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=558',
      name: 'Sun Blade',
      traits: [
          'evocation',
          'fire',
          'light',
          'positive'
      ],
      type: 'Focus',
      level: 2,
      source: 'Character Guide pg. 91',
      cast: 'somatic, verbal',
      action: '2',
      range: '60 feet',
      targets: '1 creature',
      text: 'You fire a ray of burning sunlight from your weapon. You must be wielding a sword or spear to cast sun blade, and you perform this spell’s somatic component with the weapon. Make a spell attack roll. The ray deals 1d4 fire damage. If the target is evil, the ray deals an additional 1d4 good damage, and if the target is undead, the ray deals an additional 1d4 positive damage (both effects apply against creatures that are both evil and undead). If you are in an area of bright natural sunlight, increase the die size of each damage die by one step (from d4 to d6).  \r\n**Critical Success**  The ray deals double damage.  \r\n**Failure**  The ray deals full damage.  \r\n**Heightened (+1)**  The damage increases by 1d4 fire, 1d4 good, and 1d4 positive (or 1d6 of each type of damage in bright natural sunlight).',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=765',
      name: 'Vision of Weakness',
      traits: [
          'cursebound',
          'divination',
          'oracle'
      ],
      type: 'Focus',
      level: 2,
      source: 'Advanced Player\'s Guide pg. 234',
      cast: 'somatic',
      action: '1',
      targets: '1 creature',
      text: 'You focus your gaze on a creature and gain a flash of divine insight into its nature. If the creature has any weaknesses, you learn them, as well as which of its three saving throw modifiers is lowest. You also learn an inherent understanding of its movements and gain a +2 status bonus to your next attack roll (or skill check made as part of an attack action) against that foe before the end of your turn. The target is then temporarily immune to vision of weakness for 1 day.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=741',
      name: 'Access Lore',
      traits: [
          'cursebound',
          'divination',
          'fortune',
          'oracle'
      ],
      type: 'Focus',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 229',
      mystery: 'lore',
      cast: 'somatic',
      action: '1',
      duration: '1 minute',
      text: 'You sift through the multiverse\'s divine knowledge, seeking out tidbits related to a particular subject. Choose one Lore skill. You temporarily gain the same proficiency rank in that Lore skill as your proficiency rank for your oracle spellcasting.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=742',
      name: 'Ancestral Defense',
      traits: [
          'abjuration',
          'cursebound',
          'fortune',
          'mental',
          'oracle'
      ],
      type: 'Focus',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 230',
      mystery: 'ancestors',
      cast: 'somatic',
      action: 'reaction',
      trigger: 'You are about to attempt a Will save.',
      text: 'Your ancestor protects you against those who would bend your will. You roll the triggering save twice and use the better result. If you\'re in an encounter when you cast this spell, you immediately roll to change your predominant ancestor.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=745',
      name: 'Armor of Bones',
      traits: [
          'cursebound',
          'necromancy',
          'oracle'
      ],
      type: 'Focus',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 230',
      mystery: 'bones',
      cast: 'somatic',
      action: '1',
      duration: '1 minute',
      text: 'You ossify your physical form, mimicking the durability of bone. You gain resistance 3 to cold, electricity, fire, piercing, and slashing damage.  \r\n**Heightened (+1)**  Increase the resistance by 1.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=746',
      name: 'Battlefield Persistence',
      traits: [
          'cursebound',
          'divination',
          'divine',
          'oracle'
      ],
      type: 'Focus',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 230',
      mystery: 'battle',
      cast: 'verbal',
      action: 'reaction',
      trigger: 'You are about to attempt a saving throw, but haven\'t rolled yet.',
      text: 'You\'re difficult to remove from battle. You gain a +2 status bonus to the triggering save, and if the triggering save is against an incapacitation effect, it treats you as if you were 2 levels higher.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=661',
      name: 'Beastmaster Trance',
      traits: [
          'archetype',
          'concentrate',
          'divination',
          'mental'
      ],
      type: 'Focus',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 161',
      cast: 'somatic, verbal',
      action: '3',
      range: '1 mile',
      targets: 'one of your animal companions you can precieve',
      duration: 'sustained up to 1 minute',
      text: 'You enter a magical trance that allows you to perceive through the senses of the target companion. You attempt Perception checks using your own Perception, but you have any special senses the target has, such as low-light vision or darkvision. This spell grants no special method of communication with the chosen animal, so it follows any instructions you gave it before you entered the trance and, failing that, it does as it wishes. For the duration of the trance, your own senses are muted, though you can still communicate. This lack of awareness makes you flat-footed. You can\'t take actions with the attack or move traits.  \r\n**Heightened (6th)**  Increase the range to 100 miles and the duration to sustained up to 10 minutes. The target can hear you through the spell, allowing you to Command the Animal or use other actions that have the auditory trait.  \r\n**Heightened (8th)**  Increase the range to planetary and the duration to sustained up to 1 hour. You can communicate telepathically with the target for the duration of the trance.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=779',
      name: 'Blinding Beauty',
      traits: [
          'emotion',
          'enchantment',
          'incapacitation',
          'sorcerer',
          'visual'
      ],
      type: 'Focus',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 235',
      bloodline: 'nymph',
      cast: 'somatic',
      action: '1',
      area: '30-foot cone',
      'saving throw': 'Will',
      text: 'You channel the allure of your nymph bloodline into a terribly beautiful glance. Each enemy in the area must attempt a Will saving throw.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature is dazzled until the start of its next turn.  \r\n**Failure**  The creature is blinded until the start of its next turn.  \r\n**Critical Failure**  The creature is blinded for 1 minute.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=795',
      name: 'Deceiver\'s Cloak',
      traits: [
          'hex',
          'illusion',
          'witch'
      ],
      type: 'Focus',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 238',
      lesson: 'lesson of mischief',
      cast: 'somatic, verbal',
      action: '2',
      duration: 'sustained',
      text: 'You wrap yourself in a cloak of illusion, appearing as another creature of the same body shape with roughly similar height and weight as yourself. This has the effects of a 3rd-level illusory disguise.  \r\n**Heightened (6th)**  You can appear as any creature of the same size, even with a completely different body shape.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=751',
      name: 'Delay Affliction',
      traits: [
          'cursebound',
          'healing',
          'necromancy',
          'oracle',
          'positive'
      ],
      type: 'Focus',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 231',
      mystery: 'life',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      text: 'With a surge of healing energy, you push back against an affliction threatening the target and grant a small amount of healing. The target recovers 3d8 Hit Points. You attempt to counteract any one affliction you are aware the target has, suspending its effects for 1 hour on a success rather than removing it. The target is then temporarily immune to delay affliction for 1 day. You don\'t need to have identified the name of the specific affliction, but you do need to be aware of it; for instance, you couldn\'t delay an ingested poison during its onset period unless you were aware of the poison.  \r\n**Heightened (+1)**  The target recovers an additional 1d8 Hit Points and you can attempt to suspend an additional affliction.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=561',
      name: 'Electrified Crystal Ward',
      traits: [
          'electricity',
          'evocation'
      ],
      type: 'Focus',
      level: 3,
      source: 'Pathfinder #148: Fires of the Haunted City pg. 75',
      cast: 'somatic',
      action: '2',
      range: 'touch',
      targets: '1 hinge or latch',
      text: 'You create an electric latch rune hazard on the target, creating a special crystalline lock on the object. You can also substitute your spell DC for any of the hazard’s listed DCs. You can have only one such hazard active at a time, and if you cast this spell while a previous electric latch rune is active, the older hazard discharges harmlessly.  \r\n**Heightened (+2)**  The hazard’s damage increases by 1d12.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=769',
      name: 'Ephemeral Tracking',
      traits: [
          'divination',
          'ranger'
      ],
      type: 'Focus',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 234',
      cast: 'somatic, verbal',
      action: '2',
      duration: '1 hour',
      text: 'You can look at currents in the air and water and see tracks that you can follow just as you would on land. You can use Survival to Track through both air and water, noticing aerial or aquatic “tracks” of all creatures who passed nearby in the last hour. It\'s more difficult to Track in this way: the DC to Track through air or water is always at least 30, or higher after precipitation or wind (in the air) or heavy tides or currents (in the water). It\'s possible to Cover Tracks against this spell, but creatures might not realize they need to do so.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=784',
      name: 'Heart\'s Desire',
      traits: [
          'emotion',
          'illusion',
          'mental',
          'sorcerer'
      ],
      type: 'Focus',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 236',
      bloodline: 'genie',
      cast: 'somatic, verbal',
      action: '2',
      range: '60 feet',
      targets: '1 creature',
      'saving throw': 'Will',
      duration: 'varies',
      text: 'You surround your target with wondrous illusions of their greatest desires, which distract them from reality. The target must attempt a Will save.  \r\n**Critical Success**  The target disbelieves the illusion and is unaffected.  \r\n**Success**  For 1 round, the target is stupefied 2 and takes a –2 status penalty to any checks it makes to determine the effects of reactions.  \r\n**Failure**  For 1 minute, the target is stupefied 2 and can\'t use reactions.  \r\n**Critical Failure**  As failure, and all spaces are difficult terrain for the target.  \r\n**Heightened (+2)**  You can target one additional creature.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=756',
      name: 'Interstellar Void',
      traits: [
          'cold',
          'cursebound',
          'evocation',
          'oracle'
      ],
      type: 'Focus',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 232',
      mystery: 'cosmos',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      'saving throw': 'Fortitude',
      duration: 'sustained up to 1 minute',
      text: 'You call upon the frigid depths of outer space to bring a terrible chill to your enemy. The target is cloaked in the freezing void, which deals 3d6 cold damage immediately and when you Sustain the Spell on future turns, with a basic Fortitude save. The target is fatigued for as long as the effect persists.  \r\n**Heightened (+1)**  The cold damage increases by 1d6.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=800',
      name: 'Malicious Shadow',
      traits: [
          'evocation',
          'hex',
          'shadow',
          'witch'
      ],
      type: 'Focus',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 238PFS Note Strikes made by a malicious shadow use the spellcaster’s spell attack roll.',
      lesson: 'lesson of shadow',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      duration: 'sustained up to 1 minute',
      text: 'You reshape the target\'s shadow into a deadly form, such as strangling hands, a dangerous weapon, harrying runes, or the like, and command it to attack the target. When you Cast the Spell, and each time you Sustain the Spell, the shadow makes a Strike against the target. The shadow moves along with the foe, always remaining within reach. If you Sustain the Spell multiple times in a round, you gain this effect each time. The shadow uses and contributes to your multiple attack penalty. The shadow\'s Strikes are melee spell attacks. Regardless of its shape, the shadow\'s Strikes deal damage equal to 1d10 plus your spellcasting ability modifier. You choose the type of damage when you Cast the Spell, choosing from bludgeoning, piercing, or slashing damage. The shadow doesn\'t take up space, grant flanking, or have any other attributes a creature would. The shadow can\'t make any attacks other than its Strike. The shadow vanishes if the target moves into an area of complete darkness or enters an area with light from all directions such that the target doesn\'t cast a shadow. If another effect is controlling the target\'s shadow when you cast malicious shadow, you can attempt to counteract that effect to temporarily take control of the shadow, but the original effect resumes when malicious shadow ends.  \r\n**Heightened (+2)**  The Strike damage increases by 1d10.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=803',
      name: 'Personal Blizzard',
      traits: [
          'conjuration',
          'hex',
          'witch'
      ],
      type: 'Focus',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 239',
      lesson: 'lesson of snow',
      cast: 'somatic',
      action: '1',
      range: '30 feet',
      targets: '1 creature',
      'saving throw': 'Fortitude',
      duration: 'sustained up to 1 minute',
      text: 'You summon an isolated blizzard of obscuring, scouring ice to follow your target. The target attempts a Fortitude save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes 1d6 cold damage, and the spell ends.  \r\n**Failure**  The target takes 1d6 cold damage and 1d6 persistent cold damage. (The persistent damage automatically ends when the spell ends.) It is concealed to other creatures, and other creatures are concealed to it.  \r\n**Critical Failure**  As failure, but both the cold damage and the persistent cold damage increase to 2d6.  \r\n**Heightened (+1)**  The cold damage and persistent cold damage increase by 1 (2 on a critical failure).',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=775',
      name: 'Ranger\'s Bramble',
      traits: [
          'plant',
          'ranger',
          'transmutation'
      ],
      type: 'Focus',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 235',
      cast: 'somatic, verbal',
      action: '2',
      range: '100 feet',
      area: 'all squares that contain plants in a 5-foot burst',
      duration: '1 minute',
      text: 'You cause plants in the area to entangle your foes, with the effects of entangle. A creature that critically fails the save takes 2d4 persistent bleed damage in addition to being immobilized. Escaping your bramble doesn\'t end the bleed damage.  \r\n**Heightened (+1)**  The bleed damage on a critical failure increases by 1d4.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=788',
      name: 'Spirit Veil',
      traits: [
          'illusion',
          'sorcerer'
      ],
      type: 'Focus',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 237',
      bloodline: 'psychopomp',
      cast: 'somatic, verbal',
      action: '2',
      duration: '1 minute',
      text: 'You draw an occluding veil of spirits around yourself, blocking yourself especially well from undead eyes. You become concealed to all creatures, and you are hidden from undead creatures regardless of what precise senses they have; this grants the effects of invisibility, but against all the undead creature\'s precise senses. If you physically interact with an undead creature or use a hostile action, the spell ends.  \r\n**Heightened (+1)**  You can target one additional willing creature within 30 feet. The spell ends if any target physically interacts with an undead creature or uses a hostile action',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=789',
      name: 'Steal Shadow',
      traits: [
          'necromancy',
          'shadow',
          'sorcerer'
      ],
      type: 'Focus',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 237',
      bloodline: 'shadow',
      cast: 'somatic, verbal',
      action: '2',
      range: '60 feet',
      targets: '1 creature',
      'saving throw': 'Fortitude',
      duration: 'sustained up to 1 minute',
      text: 'You steal a creature\'s shadow, leaving it weakened and vulnerable. The target must attempt a Fortitude save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is enfeebled 1 for 1 round.  \r\n**Failure**  The target takes 3d4 negative damage and is enfeebled 1 for the spell\'s duration as you tear its shadow away, collecting it in your hand. On subsequent rounds, when you Sustain the Spell, you can throttle the shadow to deal 3d4 negative damage to the target (basic Fortitude save). Until the spell ends, the target doesn\'t cast a shadow.  \r\n**Critical Failure**  As failure, but the target is enfeebled 2.  \r\n**Heightened (+1)**  The damage when the spell is cast and when it is sustained increases by 1d4.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=818',
      name: 'Sun\'s Fury',
      traits: [
          'evocation',
          'fire',
          'good'
      ],
      type: 'Focus',
      level: 3,
      source: 'Legends pg. 101',
      cast: 'somatic, verbal',
      action: '2',
      range: 'touch',
      targets: '1 weapon without an unholy rune that is unattended or wielded by you or a willing ally',
      duration: '1 minute',
      text: 'The target weapon becomes wreathed in a glowing flame. The weapon deals an additional 1d4 fire and 1 good damage on a successful Strike. In addition, the flame causes the weapon to glow as bright as a torch. You can Dismiss the spell.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=764',
      name: 'Thunderburst',
      traits: [
          'air',
          'cursebound',
          'evocation',
          'oracle',
          'sonic'
      ],
      type: 'Focus',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 234',
      mystery: 'tempest',
      cast: 'somatic, verbal',
      action: '2',
      range: '100 feet',
      area: '20-foot burst',
      'saving throw': 'Fortitude',
      text: 'You create a powerful blast of air and a loud peal of thunder, dealing 2d6 bludgeoning damage and 2d6 sonic damage. Each creature in the area must attempt a Fortitude save.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes half damage.  \r\n**Failure**  The creature takes full damage and is deafened for 1 minute.  \r\n**Critical Failure**  The creature takes double damage and is deafened for 1 hour.  \r\n**Heightened (+2)**  Increase each type of damage by 2d6 and the area by 5 feet.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=766',
      name: 'Whirling Flames',
      traits: [
          'cursebound',
          'evocation',
          'fire',
          'oracle'
      ],
      type: 'Focus',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 234',
      mystery: 'flames',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      area: 'up to two 5-foot bursts that don\'t overlap',
      'saving throw': 'basic Reflex',
      text: 'You call forth a storm of whirling flames, engulfing all creatures in that area and dealing 5d6 fire damage with a basic Reflex save.  \r\n**Heightened (+2)**  The damage increases by 3d6, and you can add another nonoverlapping 5-foot burst to the area.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=814',
      name: 'Achaekek\'s Clutch',
      traits: [
          'curse',
          'death',
          'necromancy'
      ],
      type: 'Focus',
      level: 4,
      source: 'Legends pg. 58',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      'saving throw': 'Will',
      text: 'You mark the holy symbol of Achaekek in a visible location on the target\'s body.\n  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is marked by Achaekek\'s symbol. For 1 minute, the first time per round that the target gains persistent bleed damage, they immediately take that amount of slashing damage as the mantis claws grow off the symbol and rake them.  \r\n**Failure**  As success, but the curse has an unlimited duration.  \r\n**Critical Failure**  As failure, but the DC on the target\'s flat check to remove persistent bleed damage increases to 20 (15 with particularly effective assistance).',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=595',
      name: 'Adaptive Ablation',
      traits: [
          'abjuration'
      ],
      type: 'Focus',
      level: 4,
      source: 'Gods & Magic pg. 112',
      domain: 'change',
      cast: 'somatic',
      action: 'reaction',
      duration: '1 minute',
      text: 'You shift yourself to adapt to the mystical wavelengths of the energy damage, protecting yourself from further harm. You gain resistance 5 to the triggering energy type; you gain this resistance after you take the triggering damage, so it applies only to future damage you take during the duration.  \r\n**Heightened (+2)**  Increase the resistance by 5.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=619',
      name: 'Asterism',
      traits: [
          'evocation',
          'light'
      ],
      type: 'Focus',
      level: 4,
      source: 'Gods & Magic pg. 117',
      domain: 'star',
      cast: 'material, somatic, verbal',
      action: '3',
      range: '150 feet',
      'saving throw': 'basic Reflex',
      duration: '1 minute',
      text: 'Lines of burning starlight form a constellation around you. Draw five lines, one at a time; each line must anchor at you or a creature or object already connected to a previous line, and it must end at a creature or object within 30 feet of its anchor (possibly allowing the asterism to extend to its full 150-foot range). A creature that begins its turn in one of these lines or enters one of these lines on its turn takes 4d6 fire damage (basic Reflex save). A creature can take this damage only once per turn, even if it moves through several lines. Targets that are part of the asterism do not take damage from it. If the distance between two targets (or you and a target) ever exceeds 30 feet, the line of starlight between the two breaks, and any lines that now no longer have a direct path back to you also break. You can Dismiss the spell.  \r\n**Heightened (+1)**  The damage increases by 1d6.',
      components: [
          'material',
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=609',
      name: 'Bottle the Storm',
      traits: [
          'electricity',
          'evocation'
      ],
      type: 'Focus',
      level: 4,
      source: 'Gods & Magic pg. 115',
      domain: 'lightning',
      cast: 'somatic',
      action: 'reaction',
      trigger: 'You would take electricity damage.',
      duration: '1 minute',
      text: 'When lightning is turned at you, you store the charge safely within yourself, unleashing it when the time is right. You gain electricity resistance 10 against the triggering effect. If you successfully prevent damage in this way, at any time during the spell’s duration, you can spend a single action, which has the attack trait, to expend the charge and make a melee spell attack at an adjacent target or a ranged spell attack at a target within 60 feet. This attack deals electricity damage equal to the damage prevented by bottle the storm. If you cast bottle the storm a second time before the original duration elapses, or if you do not make this attack, the stored charge dissipates harmlessly.  \r\n**Heightened (7th)**  The resistance increases to 15, and you can immediately make the spell attack roll granted by bottle the storm as part of the reaction used to cast the spell.  \r\n**Heightened (10th)**  The resistance increases to 20, and you can immediately make the spell attack roll granted by bottle the storm as part of the reaction used to cast the spell.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=737',
      name: 'Clinging Shadows Stance',
      traits: [
          'evocation',
          'monk',
          'shadow',
          'stance'
      ],
      type: 'Focus',
      level: 4,
      source: 'Advanced Player\'s Guide pg. 229',
      cast: 'somatic',
      action: '1',
      duration: 'until you leave the stance',
      text: 'You adopt the stance of clinging shadows. You can make shadow grasp Strikes. These deal 1d4 negative damage; are in the brawling group; and have the agile, grapple, reach, and unarmed traits. While in clinging shadows stance, you gain a +2 circumstance bonus to Athletics checks to Grapple, and to the DC for creatures to Escape from you.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=750',
      name: 'Debilitating Dichotomy',
      traits: [
          'cursebound',
          'evocation',
          'mental',
          'oracle'
      ],
      type: 'Focus',
      level: 4,
      source: 'Advanced Player\'s Guide pg. 231',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature other than you',
      duration: 'Will',
      text: 'You reveal a glimpse of the impossible conflicts between the divine anathema behind your curse, forcing you to reckon with another\'s conflicts as well. You and the target each take 9d6 mental damage with a basic Will save, and the target is stunned 1 if it critically fails its save. You get a degree of success one better than you rolled for your saving throw.  \r\n**Heightened (+1)**  The damage increases by 3d6.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=597',
      name: 'Diamond Dust',
      traits: [
          'cold',
          'evocation'
      ],
      type: 'Focus',
      level: 4,
      source: 'Gods & Magic pg. 112',
      domain: 'cold',
      cast: 'somatic, verbal',
      action: '2',
      area: '15-foot emanation centered on you',
      'saving throw': 'basic Fortitude',
      duration: '1 minute',
      text: 'You supercool the nearby air, forming a cloud of dancing ice crystals in an emanation around you. A creature other than you that enters the area or ends its turn within the area takes 2d6 cold damage. A creature can take this damage only once per turn. The crystals scatter and refract light; if a light effect enters diamond dust’s area, any creatures that effect goes on to affect gain a +2 status bonus to AC and saves against it. While the spell persists, you can activate or deactivate this aura by using a single action, which has the concentrate trait. You can Dismiss this spell.  \r\n**Heightened (+2)**  The damage increases by 1d6.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=627',
      name: 'Door to Beyond',
      traits: [
          'conjuration'
      ],
      type: 'Focus',
      level: 4,
      source: 'Gods & Magic pg. 119',
      domain: 'void',
      cast: 'somatic, verbal',
      action: '2',
      range: '5 feet',
      area: '20-foot emanation',
      'saving throw': 'Fortitude',
      duration: '1 minute',
      text: 'Striking at thin air, you create hairline cracks in an unoccupied adjacent space that lead somewhere outside reality. Air rushes through the cracks, drawing Large or smaller creatures and objects of light Bulk or less toward the center. Large or smaller creatures in the area must attempt a Fortitude save at the start of their turn; creatures that move into the area must attempt the save on entering.  \r\n**Success**  The creature is unaffected.  \r\n**Failure**  The creature is pulled 10 feet toward the door.  \r\n**Critical Failure**  The creature is pulled 20 feet toward the door.The cracks of the door to beyond are too thin for anything to fully slip through, but decompressive effects deal 4d6 slashing damage to any creature or object that ends its turn in the door’s space. You are unaffected by your own door to beyond. You can Dismiss the spell.  \r\n**Heightened (+1)**  The damage increases by 1d6.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=603',
      name: 'Dust Storm',
      traits: [
          'air',
          'conjuration',
          'nonlethal'
      ],
      type: 'Focus',
      level: 4,
      source: 'Gods & Magic pg. 114',
      domain: 'dust',
      cast: 'somatic, verbal',
      action: '2',
      range: '120 feet',
      area: '20-foot-radius burst',
      duration: '1 minute',
      text: 'You call forth a swirling storm of dust. The dust storm obscures vision, with the effect of obscuring mist. The dust also makes the air unbreathable; creatures in the area must hold their breath, though wearing a scarf or similar clothing over the mouth increases the time the creature can hold its breath to 5 rounds. Creatures entering or starting their turn in the dust storm take 1d6 slashing damage. Creatures that have the water trait or that are made primarily of liquid take double damage.  \r\n**Heightened (+2)**  The damage increases by 1d6.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=605',
      name: 'Dutiful Challenge',
      traits: [
          'abjuration'
      ],
      type: 'Focus',
      level: 4,
      source: 'Gods & Magic pg. 114',
      domain: 'duty',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      duration: '1 minute',
      text: 'As you challenge an enemy, you take some of its attention away from your allies. The target takes a –1 status penalty to attack rolls, damage rolls, and skill checks against creatures other than you, and you take a –1 status penalty to attack rolls, damage rolls, and skill checks against creatures other than the target. Each time a creature other than you uses a hostile action that affects the challenged enemy, the enemy can attempt a Will save. On a success, the enemy no longer takes the penalty against that creature. You can Dismiss the spell, and it ends automatically if you or the target is defeated.  \r\n**Heightened (+3)**  The status penalties increase by 1.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=617',
      name: 'Ectoplasmic Interstice',
      traits: [
          'necromancy'
      ],
      type: 'Focus',
      level: 4,
      source: 'Gods & Magic pg. 117',
      domain: 'soul',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      area: '15-foot emanation',
      duration: 'sustained up to 1 minute',
      text: 'You force the Material and Ethereal Planes to partially overlap, creating a zone that causes incorporeal and spiritual entities to take on many of the aspects of corporeal creatures. Within the ectoplasmic interstice, incorporeal creatures cannot pass through solid objects or corporeal creatures, and they can manipulate and attempt Strength-based checks against physical creatures and objects. An incorporeal PC or other creature with a normal Strength modifier simply uses that modifier, but if the creature had a Strength modifier of –5, like most incorporeal monsters, it uses a +4 modifier instead, increasing its Athletics modifier by 9 accordingly. Attacks against creatures that are within the interstice overcome resistances as if they were by ghost touch weapons.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=768',
      name: 'Enlarge Companion',
      traits: [
          'polymorph',
          'ranger',
          'transmutation'
      ],
      type: 'Focus',
      level: 4,
      source: 'Advanced Player\'s Guide pg. 234',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: 'your animal companion',
      duration: '1 minute',
      text: 'Your animal companion grows much larger, towering over its foes in battle. Your animal companion becomes Huge, gaining the effects of a 4th-level enlarge spell.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=601',
      name: 'Ephemeral Hazards',
      traits: [
          'illusion',
          'mental',
          'visual'
      ],
      type: 'Focus',
      level: 4,
      source: 'Gods & Magic pg. 113',
      domain: 'delirium',
      cast: 'material, somatic, verbal',
      action: '3',
      range: '60 feet',
      duration: '1 minute',
      text: 'You create illusory hazards, such as spinning blades or a puddle of acid, in four 10-foot-by-10-foot spaces within range. The hazards are merely a mental projection, and a creature receives a Will save each time it touches a hazard or is occupying one’s space at the start of its turn. Depending on the result, the creature takes 4d6 mental damage and might have difficulty moving through the area. A creature can take this damage only once per turn, even if it moves through several hazards. Choose bludgeoning, slashing, piercing, acid, cold, electricity, fire, or sonic damage when you cast ephemeral hazards; resistances and weaknesses to those damage types apply if the target thinks they do, as judged by the GM. You can freely choose the appearance and damage type of each hazard as long as its appearance reflects the type of damage it deals (for instance, a hazard that deals piercing damage might take the form of sharpened spikes).  \r\n**Critical Success**  The creature is unaffected by the hazards and no longer needs to attempt Will saves against them.  \r\n**Success**  The creature realizes the hazards aren’t real but still takes half damage from them; on future Will saves against the hazards, the creature continues to use this result unless it rolls a critical success.  \r\n**Failure**  The target takes full damage and treats the square as difficult terrain.  \r\n**Critical Failure**  The target takes double damage and cannot pass through a square containing a hazard.  \r\n**Heightened (+1)**  The damage increases by 1d6.',
      components: [
          'material',
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=599',
      name: 'Fallow Field',
      traits: [
          'necromancy',
          'negative'
      ],
      type: 'Focus',
      level: 4,
      source: 'Gods & Magic pg. 113',
      domain: 'decay',
      cast: 'somatic, verbal',
      action: '2',
      range: '60 feet',
      area: '15-foot emanation',
      'saving throw': 'Will',
      duration: 'sustained up to 1 minute',
      text: 'A sickly yellow light fills the area as entropic forces prevent healing. When a creature within the area would regain Hit Points, such as from a healing effect or an ability like fast healing or regeneration, it must attempt a Will save.  \r\n**Critical Success**  The creature regains the full number of Hit Points that would be restored by the healing effect, and is temporarily immune for 1 minute.  \r\n**Success**  The creature regains the full number of Hit Points that would be restored.  \r\n**Failure**  The creature regains only half the number of Hit Points that would be restored.  \r\n**Critical Failure**  The creature does not regain Hit Points from the healing effect.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=613',
      name: 'Font of Serenity',
      traits: [
          'abjuration',
          'emotion',
          'mental'
      ],
      type: 'Focus',
      level: 4,
      source: 'Gods & Magic pg. 116',
      domain: 'repose',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      area: '15-foot emanation',
      duration: '1 minute',
      text: 'A divine beacon radiates serenity, soothing nearby allies. Allies within the area gain a +1 status bonus to saving throws against emotion effects. An ally can touch the font as an Interact action; if they do so, the spell attempts to counteract one emotion effect affecting the ally of the ally’s choice, after which that emotion effect is temporarily immune for 1 day. If the spell succeeds at the counteract check, it removes the emotion effect from your ally, though not from any other creatures the effect might be affecting.  \r\n**Heightened (+4)**  The bonus increases by 1.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=611',
      name: 'Foul Miasma',
      traits: [
          'disease',
          'necromancy'
      ],
      type: 'Focus',
      level: 4,
      source: 'Gods & Magic pg. 115',
      domain: 'plague',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature affected by a disease',
      'saving throw': 'Will',
      duration: '1 minute',
      text: 'You multiply the disease within a creature, drawing it into an infectious mist outside their body where it can spread to other creatures. The target must attempt a Will save. If the target is willing, it can choose to take the effects of critical failure.  \r\n**Critical Success**  The target receives the benefit of a successful save against the lowest-level disease affecting it.  \r\n**Success**  The target is unaffected.  \r\n**Failure**  One randomly chosen disease affecting the target fills the air in a 15-foot emanation centered on the target. For the spell’s duration, any creature that enters or ends its turn within the area is exposed to that disease.  \r\n**Critical Failure**  As failure, except the miasma contains all the diseases affecting the target.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=607',
      name: 'Ghostly Transcription',
      traits: [
          'illusion',
          'visual'
      ],
      type: 'Focus',
      level: 4,
      source: 'Gods & Magic pg. 115',
      domain: 'glyph',
      cast: 'material, somatic',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      duration: '1 minute',
      text: 'Glowing letters assemble in the air, providing a transcription of the target’s speech in all languages you speak. For the spell’s duration, any words spoken aloud by the target are spelled out in letters in front of them. When you Cast the Spell, you can choose whether these letters are visible to all creatures or only certain creatures you specify. Any words the target mouths silently are similarly spelled out, allowing the target to communicate silently or in areas where sound doesn’t carry. This even allows the target to provide verbal casting components in such areas, but only if you choose to make the letters visible to all creatures. Furthermore, any of the target’s auditory abilities can affect creatures even in areas where sound does not carry as long as you have made the glyphs visible to them and they have line of sight to the target; in this case, they gain the visual trait. You can Dismiss the spell.',
      components: [
          'material',
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=615',
      name: 'Overflowing Sorrow',
      traits: [
          'emotion',
          'enchantment',
          'incapacitation',
          'mental'
      ],
      type: 'Focus',
      level: 4,
      source: 'Gods & Magic pg. 116',
      domain: 'sorrow',
      cast: 'somatic, verbal',
      action: '2',
      area: '15-foot emanation, centered on you',
      'saving throw': 'Will',
      duration: 'sustained up to 1 minute',
      text: 'Sadness flows out of you into nearby creatures, blotting out any other thoughts they had. The first time a creature begins its turn in the area or enters the area, it must attempt a Will save. If it later leaves and reenters the area, it uses the same effect as before.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes a –1 status penalty to skill checks and Perception checks as long as it remains in the area.  \r\n**Failure**  While the creature is in the area, any emotion effects of lower counteract level than overflowing sorrow are suppressed, and whenever the creature attempts to use an emotion action or cast an emotion spell, it must succeed at a DC 11 flat check or the action or spell is disrupted.  \r\n**Critical Failure**  As failure, but the creature cannot use emotion actions or spells.  \r\n**Heightened (+2)**  When you Cast the Spell, you can choose to increase the area by 5 feet.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=625',
      name: 'Remember the Lost',
      traits: [
          'divination',
          'mental'
      ],
      type: 'Focus',
      level: 4,
      source: 'Gods & Magic pg. 119PFS Note For the purposes of Society play, remove the final sentence of remember the lost (page 119) which states “A creature that truly knows no one who died with any sort of grievance to that creature is immune to this effect.”',
      domain: 'vigil',
      cast: 'somatic, verbal',
      action: '2',
      area: '30-foot-radius emanation centered on you',
      'saving throw': 'basic Will',
      text: 'You call upon the lost and forgotten, assailing your foes’ minds with the memories of those who died with a grievance toward them. Enemies in the area take 6d6 mental damage (basic Will save) and are frightened 1 on a critical failure. If you know the names of anyone murdered or grievously wronged by an enemy in the area, you can chant those victims’ names when you cast the spell to improve the clarity of the visions, increasing the damage to the corresponding enemy from 6d6 to 6d10; you can do so for multiple enemies if you know victims of each enemy. The visions are personal to each foe in the area, and you can’t use this spell to discern a murderer by guessing a name. A creature that truly knows no one who died with any sort of grievance to that creature is immune to this effect.  \r\n**Heightened (+1)**  The damage increases by 2d6 (or 2d10 to an enemy when you name a specific victim).',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=629',
      manual: true,
      name: 'Roar of the Wyrm',
      traits: [
          'auditory',
          'emotion',
          'enchantment',
          'mental'
      ],
      type: 'Focus',
      level: 4,
      source: 'Gods & Magic pg. 119',
      domain: 'wyrmkin',
      cast: 'somatic, verbal',
      action: '2',
      targets: '30-foot emanation',
      'saving throw': 'Will',
      duration: 'varies',
      text: 'You channel the might of dragons into your voice, letting out a roar that engenders respect in dragonkind but that instills fear in most other creatures. The impressive roar grants you a +2 circumstance bonus to Diplomacy checks for 10 minutes against dragons that were in the area at the time of casting. All enemies within the area other than dragons must attempt a Will save; to these enemies, roar of the wyrm is a fear effect.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature is frightened 1.  \r\n**Failure**  The creature is frightened 2.  \r\n**Critical Failure**  The creature is frightened 3 and fleeing for 1 round.   \r\n  \r\n Roar of the wyrm affects non-dragon creatures with deep ties to dragonkind (such as a barbarian with the draconic instinct, a sorcerer with the draconic bloodline, or a member of a culture that reveres dragons) as if they had the dragon trait. The GM decides if a creature is aligned enough with dragonkind to be affected in this way.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=623',
      name: 'Stasis',
      traits: [
          'incapacitation',
          'transmutation'
      ],
      type: 'Focus',
      level: 4,
      source: 'Gods & Magic pg. 118',
      domain: 'time',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature or up to 1 Bulk of objects',
      'saving throw': 'Reflex',
      duration: 'varies',
      text: 'The flow of time congeals around an object or creature, holding it in place. The target must attempt a Will save (an unattended object automatically critically fails its save).  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is stunned 1 as time thickens around it.  \r\n**Failure**  Time ceases to pass for the target for 1 round. It is invulnerable to all damage, it cannot be targeted or affected by anything, and no rounds elapse for any timed durations, conditions, afflictions, and other effects it has. While in stasis, the target can’t be moved, and it remains fixed in place, defying gravity if need be.  \r\n**Critical Failure**  As failure, but the target is held in stasis for 3 rounds. At the end of each of its turns, it can attempt a Will save to reduce the remaining duration by 1 round or end it entirely on a critical success.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=621',
      name: 'Swarm Form',
      traits: [
          'polymorph',
          'transmutation'
      ],
      type: 'Focus',
      level: 4,
      source: 'Gods & Magic pg. 118',
      domain: 'swarm',
      cast: 'somatic, verbal',
      action: '2',
      duration: '5 minutes',
      text: 'You discorporate into a swarm of Tiny creatures. While in swarm form, you have the swarm trait and you gain resistance 5 to slashing and piercing damage and weakness 5 to area and splash damage. You can fit into spaces only a few inches wide, moving your constituent creatures through the gap. You don’t gain the swarm mind ability, so you are still affected normally by mental effects. As a swarm, you can’t speak, cast spells, use manipulate actions requiring your hands, activate your magic items, or make any of your Strikes with your normal body. You can Dismiss the Spell.  \r\n**Heightened (+2)**  Increase your resistances and weaknesses each by 5.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=560',
      name: 'Tireless Worker',
      traits: [
          'healing',
          'necromancy'
      ],
      type: 'Focus',
      level: 4,
      source: 'Pathfinder #148: Fires of the Haunted City pg. 65',
      domain: 'toil',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      duration: 'sustained for up to 1 minute',
      text: 'You suppress your choice of one of the following conditions that’s affecting the target: clumsy, encumbered, enfeebled, or fatigued. If you don’t remove the effect that caused the condition, the condition returns after the spell’s duration expires.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=780',
      name: 'Consuming Darkness',
      traits: [
          'evocation',
          'shadow',
          'sorcerer'
      ],
      type: 'Focus',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 235',
      bloodline: 'shadow',
      cast: 'somatic, verbal',
      action: '2',
      area: '10-foot emanation',
      targets: 'enemies in the area',
      'saving throw': 'Reflex',
      duration: 'sustained up to 1 minute',
      text: 'Your shadow wriggles before spreading out from you, forming a gateway of clinging, consuming shadow through which the horrors of another plane can barely be seen. The first time each turn you Sustain the Spell, the radius increases by 5 feet. Each enemy that enters the area or begins its turn in the area takes 2d6 negative damage and must attempt a Reflex save.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature sinks partially into the shadow, taking half damage and a –5-foot circumstance penalty to its Speeds for as long it remains in the area.  \r\n**Failure**  As success, but the creature takes full damage and a –10-foot circumstance penalty.  \r\n**Critical Failure**  The creature is absorbed into the shadows, where it can be seen below the surface; it takes double damage and is immobilized for 1 round or until it Escapes.  \r\n**Heightened (+1)**  The damage increases by 1d6.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=794',
      name: 'Curse of Death',
      traits: [
          'curse',
          'death',
          'hex',
          'necromancy',
          'witch'
      ],
      type: 'Focus',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 237',
      lesson: 'lesson of death',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      'saving throw': 'Fortitude',
      duration: 'sustained up to 1 minute',
      text: 'You focus your malevolent gaze on a target, causing their heart to seize in dread. The target must attempt a Fortitude saving throw. Regardless of the result, the target is temporarily immune to further castings of curse of death for 1 day.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is afflicted with the curse of death at stage 1, and the stage of the curse can\'t increase beyond stage 1.  \r\n**Failure**  The target is afflicted with the curse of death at stage 1.  \r\n**Critical Failure**  The target is afflicted with the curse of death at stage 2.  \r\n**Curse of Death**  (curse) This curse ends immediately when the spell ends;   \r\n**Stage 1**  4d6 negative damage and fatigued (1 round);   \r\n**Stage 2**  8d6 negative damage and fatigued (1 round);   \r\n**Stage 3**  12d6 negative damage and fatigued (1 round);   \r\n**Stage 4**  death  \r\n**Heightened (+1)**  Increase the negative damage taken on a success and during the first three stages of the curse by 1d6.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=662',
      name: 'Dance of Darkness',
      traits: [
          'darkness',
          'evocation'
      ],
      type: 'Focus',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 193',
      cast: 'somatic, verbal',
      action: '2',
      duration: 'varies',
      text: 'You dance, Striding up to half your Speed. At either the start or end of your Stride, you create an area of magical darkness in a 10-foot burst centered on your location. This area is filled with magical darkness that works the same way as that created by a darkness spell of the same level. When you create the darkness, attempt a Performance check to dance, with a standard DC for your level, to determine the duration of the darkness.  \r\n**Critical Success**  1 minute  \r\n**Success**  2 rounds  \r\n**Failure**  1 round',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=782',
      name: 'Establish Ward',
      traits: [
          'abjuration',
          'sorcerer'
      ],
      type: 'Focus',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 236',
      bloodline: 'nymph',
      cast: 'somatic, verbal',
      action: '2',
      area: '30-foot burst',
      duration: '1 minute',
      text: 'You bind a part of your essence to your surroundings, creating a warded area that grants you power within it, but drains you outside of it. While within the area, you can make nature\'s wrath Strikes by commanding plants, wind, rocks, and other natural features to attack enemies. These are melee Strikes that use your spell attack modifier, can target any creature within the ward, and deal bludgeoning, piercing, or slashing damage equal to 2d8 plus your spellcasting ability modifier. Upon Casting the Spell, you can immediately make a single nature\'s wrath Strike. You are quickened while inside the ward, and can use the additional action only to make nature\'s wrath Strikes. You are slowed 1 while outside the area.  \r\n**Heightened (+2)**  The area increases by 5 feet, and the Strikes deal an additional 1d8 damage.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=811',
      name: 'Glacial Heart',
      traits: [
          'evocation',
          'hex',
          'witch'
      ],
      type: 'Focus',
      level: 5,
      source: 'Legends pg. 32',
      lesson: 'lesson of the frozen queen',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      'saving throw': 'Fortitude',
      duration: '1 minute',
      text: 'Ice and bone-deep cold assail the target, freezing it from the inside out. The frosty assault deals 10d6 cold damage, subject to the target\'s Fortitude save. After the effects are resolved, the target is temporarily immune for 1 day.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes half damage and is slowed 1 for 1 round. The spell ends.\n  \r\n**Failure**  The target takes full damage, is slowed 1, and must attempt a Fortitude save at the end of each of its turns; this ongoing save has the incapacitation trait. On a failed save, the slowed condition increases by 1 (or 2 on a critical failure), to a maximum of slowed 4. On a success, the slowed condition decreases by 1. If at any point the slowed condition is reduced to 0, the spell ends. Once a creature\'s actions are reduced to 0 by this slowed condition, the creature is completely encased in ice. It continues making saves against glacial heart, possibly allowing it to reduce its slowed condition enough that it can act. This ice has Hardness 4 and 8 Hit Points, and its DC to Force Open is your spell DC. Breaking the ice frees the creature and ends the spell. If someone other than the target breaks the ice from outside, the target is stunned 1 and takes any damage dealt by the breaking effect in excess of the ice\'s Hit Points.  \r\n**Critical Failure**  As failure, but the target takes double damage and is initially slowed 2.  \r\n**Heightened (+1)**  Increase the cold damage by 2d6.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=773',
      name: 'Hunter\'s Vision',
      traits: [
          'divination',
          'ranger'
      ],
      type: 'Focus',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 235',
      cast: 'verbal',
      action: '1',
      range: '30 feet',
      targets: '1 hunted prey',
      duration: '10 minutes',
      text: 'Your target glows with a magical aura visible only to you and those who follow your lead. Your target is visible to you and others sharing your Hunt Prey benefits even if it wouldn\'t normally be due to lighting or the concealed or invisible conditions, though cover from opaque objects still blocks your sight. You ignore the flat check against the target due to the concealed condition, and the target isn\'t automatically hidden from you due to darkness or being invisible.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=735',
      name: 'Litany of Self-Interest',
      traits: [
          'champion',
          'enchantment',
          'evil',
          'litany',
          'mental'
      ],
      type: 'Focus',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 229',
      cast: 'verbal',
      action: '1',
      range: '30 feet',
      targets: '1 creature',
      'saving throw': 'Will',
      duration: '1 round',
      text: 'You give a speech that fills your target with a drive to improve themself to the exclusion of assisting others. A creature that wants to gain the benefit of this spell and doesn\'t care about its limitations can voluntarily fail the save. The target then becomes temporarily immune to all your litanies for 1 minute.  \r\n**Success**  The target is unaffected.  \r\n**Failure**  The target gains a +2 status bonus to attack rolls, Perception checks, saving throws, and skill checks. The target can\'t Aid other creatures, consider any creature an ally, or use spells or abilities that directly benefit another creature (as determined by the GM), even if they also benefit the target. Other creatures allied with the spell\'s target can still consider the target an ally and affect it accordingly.  \r\n**Heightened (8th)**  The status bonus increases to +3.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=729',
      name: 'Ode to Ouroboros',
      traits: [
          'bard',
          'composition',
          'necromancy'
      ],
      type: 'Focus',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 228',
      cast: 'verbal',
      action: 'reaction',
      trigger: 'a creature\'s dying value would reach the value at which they would die.',
      range: '60 feet',
      targets: 'the triggering creature',
      text: 'Your ode temporarily staves off death. The target\'s dying condition remains 1 below the value at which it dies. This doesn\'t help prevent death from effects that kill the target without increasing its dying condition, such as disintegrate and death effects.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=805',
      name: 'Restorative Moment',
      traits: [
          'hex',
          'necromancy',
          'witch'
      ],
      type: 'Focus',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 239',
      lesson: 'lesson of renewal',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      text: 'You manipulate the threads of time around the target, giving them some of the benefits of a day\'s passage. The target decreases the values of any doomed and drained conditions it has by 1 and can immediately attempt one saving throw against each affliction it has with a stage length of 1 day or less. The target is then temporarily immune for 1 day.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=663',
      name: 'Shadow Illusion',
      traits: [
          'auditory',
          'illusion',
          'shadow',
          'visual'
      ],
      type: 'Focus',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 193',
      cast: 'somatic, verbal',
      action: '2',
      range: '500 feet',
      duration: 'sustained',
      text: 'You create a shadowy illusion of a creature or a stationary object, but the illusion can exist only in an area of dim light or darkness. The spell ends if the illusion is ever out of an area of dim light or darkness. If the illusion is an object, it must fit within a 20-foot burst, and the creature can be of any size up to Gargantuan, filling a 20-foot-by-20-foot space. The object or creature appears to animate naturally; it even generates the appropriate sounds and smells, and feels believable to the touch, though its coloring is always muted. If the illusion is a creature, shadow illusion has the effects of an illusory creature spell of the same level, except it deals 2d8 damage plus your spellcasting ability modifier, instead of the amount listed in illusory creature.  \r\n**Heightened (+2)**  The area that an illusory object can fit in increases by 10 feet. The damage of the illusory creature\'s Strike increases by 1d8.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=664',
      name: 'Shadow Jump',
      traits: [
          'conjuration',
          'shadow',
          'teleportation'
      ],
      type: 'Focus',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 193',
      cast: 'somatic, verbal',
      action: '2',
      requirements: 'You are in dim light or darkness',
      range: '120 feet',
      text: 'You instantly transport yourself from one shadow to another. Teleport yourself and any items you\'re wearing and holding from your current space to a clear space you can see that\'s in dim light or darkness and within range. You can transport your familiar with this spell, but if shadow jump would bring any other creature with you—even if you\'re carrying the creature in an extradimensional container—the spell is disrupted.  \r\n**Heightened (8th)**  When you arrive at your destination, you can become invisible until the end of your next turn or until you are no longer in an area of dim light or darkness, whichever comes first. The invisibility is an illusion effect.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=817',
      name: 'Shall Not Falter, Shall Not Rout',
      traits: [
          'healing',
          'necromancy'
      ],
      type: 'Focus',
      level: 5,
      source: 'Legends pg. 69',
      cast: 'verbal',
      action: '1',
      duration: '1 minute',
      text: 'Calling out the fifth line of the Crimson Oath, you seal your most grievous injuries with a stroke of your blade. The first time each round that you Strike with your weapon and deal damage to a foe, you recover a number of HP equal to twice shall not falter, shall not rout\'s level. This healing can\'t raise your current HP above half of your maximum HP.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=787',
      name: 'Shepherd of Souls',
      traits: [
          'healing',
          'necromancy',
          'sorcerer'
      ],
      type: 'Focus',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 236',
      bloodline: 'psychopomp',
      cast: 'verbal',
      action: 'reaction',
      trigger: 'A living creature within 30 feet takes damage.',
      range: '30 feet',
      area: '1 creature',
      text: 'You stay the hand of fate for one not yet destined to die, sacrificing some of your own vitality to heal them. You lose up to 15 Hit Points as a sacrifice, and the target reduces the damage by twice the number of Hit Points sacrificed. If this reduction exceeds the amount of damage, the target recovers Hit Points equal to the excess amount.  \r\n**Heightened (+2)**  The maximum number of Hit Points you can sacrifice increases by 5.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=733',
      name: 'Symphony of the Unfettered Heart',
      traits: [
          'abjuration',
          'bard',
          'composition'
      ],
      type: 'Focus',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 228',
      cast: 'verbal, somatic',
      action: '2',
      range: '30 feet',
      targets: 'you or 1 ally',
      text: 'Your symphony lifts listeners from their worldly concerns. Attempt a Performance check to counteract one of the following conditions affecting the target: grabbed, immobilized, paralyzed, restrained, slowed, or stunned. If you fail, you can\'t target that effect on the target for 1 day. Use the condition\'s source to determine the counteract DC (for example, the Escape DC for grabbed).  \r\n**Heightened (9th)**  You can target up to four creatures.',
      components: [
          'verbal',
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=778',
      name: 'Terrain Transposition',
      traits: [
          'conjuration',
          'ranger',
          'teleportation'
      ],
      type: 'Focus',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 235',
      cast: 'somatic, verbal',
      action: '2',
      range: '90 feet',
      text: 'You mystically transpose your current location with another. While in a wilderness environment, you transport yourself and items you\'re holding to a clear space you can see within range. If you have Favored Terrain and both your starting and ending position are in your favored terrain, the range increases to 180 feet. If you have an animal companion and it is adjacent to you, you can transport it along with you to an adjacent open space, but if this spell would bring any other creature with you, even in an extradimensional container, the spell is lost.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=790',
      name: 'Wish-Twisted Form',
      traits: [
          'sorcerer',
          'transmutation'
      ],
      type: 'Focus',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 237',
      bloodline: 'genie',
      cast: 'somatic, verbal',
      action: '2',
      range: '60 feet',
      targets: '1 creature',
      'saving throw': 'Will',
      duration: 'varies',
      text: 'You focus your magic upon an enemy, wishing for their defenses to fail and turning their strengths into weaknesses. The target must attempt one Will saving throw for all of the following effects.  \r\n  * The target gains weakness 5 to one energy type of your choice.  \r\n  * The target\'s resistances are reduced by 5.  \r\n  * The target takes a –10-foot status penalty to all its Speeds.  \r\n  * The target takes a –1 status penalty to its saving throws.  \r\n  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes the penalties for 1 round.  \r\n**Failure**  The target takes the penalties for 1 minute.  \r\n**Critical Failure**  As failure, and the target takes a –1 status penalty to AC for the duration.  \r\n**Heightened (+1)**  Increase the weakness and the reduction to resistances by 1.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=743',
      name: 'Ancestral Form',
      traits: [
          'cursebound',
          'oracle',
          'transmutation'
      ],
      type: 'Focus',
      level: 6,
      source: 'Advanced Player\'s Guide pg. 230',
      mystery: 'ancestors',
      cast: 'somatic, verbal',
      action: '2',
      duration: 'sustained up to 1 minute',
      text: 'You take the form of your ancestral spirits, becoming invisible and quasi-corporeal. You gain resistance 10 to all damage (except force and damage from Strikes with the ghost touch property rune), and this resistance is doubled against non-magical and precision damage. You gain a fly Speed equal to your land Speed; when Flying, moving upward isn\'t difficult terrain for you. You can\'t move through solid objects, but you can float through tiny gaps. You can\'t Cast Spells (but you can Sustain a Spell), activate items, or use actions that have the attack or manipulate trait.  \r\n**Heightened (+2)**  The resistance increases by 5.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=749',
      name: 'Claim Undead',
      traits: [
          'cursebound',
          'incapacitation',
          'necromancy',
          'oracle'
      ],
      type: 'Focus',
      level: 6,
      source: 'Advanced Player\'s Guide pg. 230PFS Note For the purposes of Society play, the Targets entry for the claim undead oracle revelation spell is “1 mindless undead creature”, not “1 undead creature.” The intent of this change is to reduce the prevalence of domination magic on sapient creatures in Society play.',
      mystery: 'bones',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 undead creature',
      'saving throw': 'Will',
      duration: '10 minutes',
      text: 'You attempt to wrest control of a target undead or force it to recognize you as its master. If the target is controlled by another creature, that controller attempts a Will saving throw to retain control; otherwise, the target must attempt a Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is stunned 1 as it fights off your commands.  \r\n**Failure**  The target becomes controlled by you and follows your orders. It (or the creature previously controlling it) can attempt a new Will save at the end of each of its turns, and the spell ends on a success. If you issue an obviously self-destructive order, the target doesn\'t act until you issue a new order.  \r\n**Critical Failure**  As failure, but the target (or the creature previously controlling it) receives a new save only if you give it a new order that is against its nature.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=752',
      name: 'Dread Secret',
      traits: [
          'cursebound',
          'divination',
          'emotion',
          'fear',
          'mental',
          'oracle'
      ],
      type: 'Focus',
      level: 6,
      source: 'Advanced Player\'s Guide pg. 231',
      mystery: 'lore',
      cast: 'material, somatic',
      action: '2',
      range: '60 feet',
      targets: 'up to 6 creatures',
      'saving throw': 'Will',
      duration: 'until the start of your next turn',
      text: 'You utter a powerful secret at odds with the fundamental nature of the target creatures. Choose a specific resistance or weakness that you believe one or more of the targets have due to Recall Knowledge or previous experience with the targets, such as resistance to fire or weakness to silver. If the information is incorrect for a given target, the spell has no effect on that target. Affected targets must attempt a Will saving throw.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes 1 damage of the type of weakness you chose (thus triggering the creature\'s weakness), or loses its resistance until the end of your next turn if you chose a resistance.  \r\n**Failure**  As success, and the creature becomes frightened 1 from the revelation of its dread secret.  \r\n**Critical Failure**  As failure, except the creature is frightened 3.',
      components: [
          'material',
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=753',
      name: 'Flaming Fusillade',
      traits: [
          'cursebound',
          'evocation',
          'fire',
          'oracle'
      ],
      type: 'Focus',
      level: 6,
      source: 'Advanced Player\'s Guide pg. 232',
      mystery: 'flames',
      cast: 'somatic, verbal',
      action: '2',
      duration: '1 minute',
      text: 'You call upon an endless barrage of flames, producing miniature fireballs in your hands to hurl at foes. You cast produce flame as part of casting flaming fusillade. For the duration of flaming fusillade, produce flame\'s casting time is reduced from 2 actions to 1.  \r\n**Heightened (9th)**  For the duration, you also gain a status bonus to the damage dealt by produce flame equal to flaming fusillade\'s spell level.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=754',
      name: 'Heroic Feat',
      traits: [
          'cursebound',
          'divination',
          'mental',
          'oracle'
      ],
      type: 'Focus',
      level: 6,
      source: 'Advanced Player\'s Guide pg. 232',
      mystery: 'battle',
      cast: 'or  somatic, verbal',
      action: '3',
      text: 'You gain the ability to perform a specialized combat technique from the vast wealth of martial knowledge your mystery provides. When you Cast this Spell, you use the action granted by one common fighter feat from the Core Rulebook or the Advanced Player\'s Guide (your GM might add feats to this list). If you Cast this Spell using 2 actions, the granted action must be a single action, and if you Cast this Spell using 3 actions, you can instead choose a feat that grants a 2-action activity. The chosen feat\'s level can be no higher than heroic feat\'s spell level. The feat can\'t have a Frequency entry, and you must meet its prerequisites and requirements in order to select it.',
      components: [
          'orsomatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=757',
      name: 'Life-Giving Form',
      traits: [
          'cursebound',
          'healing',
          'light',
          'necromancy',
          'oracle',
          'positive'
      ],
      type: 'Focus',
      level: 6,
      source: 'Advanced Player\'s Guide pg. 232',
      mystery: 'life',
      cast: 'somatic, verbal',
      action: '2',
      duration: '1 minute',
      text: 'You transcend your physical form, becoming a beacon of healing energy. Your body exudes bright light like a torch. You gain resistance 5 to precision damage and weakness 5 to negative damage, and your unarmed Strikes deal an extra 1d4 positive damage. You can touch a living creature with an Interact action to restore 6d8 Hit Points to it, and when a creature touches you with an Interact action you can allow it to gain the same healing; either way, the creature becomes temporarily immune to life-giving form\'s healing for 1 minute. This is a positive healing effect. You can\'t heal yourself with life-giving form. A creature harmed by positive damage (such as an undead) that touches you or damages you with an unarmed attack or non-reach melee weapon instead takes 3d4 positive damage, and it doesn\'t become temporarily immune. You can Dismiss this spell.  \r\n**Heightened (+1)**  Increase the Hit Points restored with an Interact action by 1d8, the positive damage by 1, and the resistance and weakness by 1.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=759',
      name: 'Moonlight Bridge',
      traits: [
          'conjuration',
          'cursebound',
          'light',
          'oracle'
      ],
      type: 'Focus',
      level: 6,
      source: 'Advanced Player\'s Guide pg. 233',
      mystery: 'cosmos',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      duration: '10 minutes',
      text: 'You summon a bridge of radiant, shimmering moonlight. The 10-foot-wide span must start at the ground on a point within range, and it extends as a horizontal plane, either in a straight line or at any angle up to 45 degrees upward or downward, for up to 120 feet. This bridge has AC 10, Hardness 30, and 60 Hit Points, and it\'s immune to critical hits and precision damage. You and your allies can cross the bridge normally, but other creatures simply pass through it if they try to do so. The bridge blocks physical, ethereal, and incorporeal attacks from crossing, whether from above or below. You can Dismiss the spell.  \r\n**Heightened (+1)**  The length of the bridge increases by 20 feet, and its Hit Points increase by 20.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=762',
      manual: true,
      name: 'Tempest Form',
      traits: [
          'cursebound',
          'oracle',
          'polymorph',
          'transmutation'
      ],
      type: 'Focus',
      level: 6,
      source: 'Advanced Player\'s Guide pg. 233',
      mystery: 'tempest',
      cast: 'somatic, verbal',
      action: '2',
      duration: 'sustained up to 1 minute',
      text: 'Your body becomes fluid to better suit your surroundings. When you Cast this Spell, choose whether to become air, water, or mist. The spell gains the air trait if you choose air or mist, and the water trait if you choose water or mist. You become amorphous, as does your armor. You lose any item bonus to AC and use your proficiency bonus for unarmored defense to determine your AC. You also gain resistance 10 to physical damage and become immune to precision damage. You can slip through tiny cracks and don\'t need to breathe. You can\'t cast spells, activate items, or use actions that have the attack or manipulate trait. You also gain the following effects based on your form.  \r\n  **Air** You gain a fly Speed of 20 feet and become invisible while you are in the air. You can create the effects of a gust of wind from your space as a 2-action activity, which has the manipulate trait.  \r\n  **Mist** You gain a fly Speed of 20 feet, and it becomes hard to see through you. Any creature on one side of your space who is targeted by a creature on the opposite side is concealed to the targeting creature.  \r\n  **Water** You gain a swim Speed of 20 feet and become invisible while you are in the water. You can electrically charge yourself by taking a single action, which has the manipulate trait. If you do, you are no longer invisible in the water due to electricity indicating your location, but any creature that makes a melee attack against you takes 1d6 electricity damage; if it touches you, this is cumulative with the damage from your major curse.  \r\n**Heightened (+2)**  Increase the resistance by 5 and the electricity damage from the charged water form by 1.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=734',
      name: 'Litany of Depravity',
      traits: [
          'champion',
          'evil',
          'evocation',
          'litany'
      ],
      type: 'Focus',
      level: 7,
      source: 'Advanced Player\'s Guide pg. 228',
      cast: 'verbal',
      action: '1',
      range: '30 feet',
      targets: '1 good creature',
      duration: '1 round',
      text: 'Your litany calls into question the morals your foe claims to hold dear. The target gains weakness 7 to evil, then becomes temporarily immune to all your litanies for 1 minute.  \r\n**Heightened (+1)**  The weakness increases by 1.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=740',
      name: 'Shadow\'s Web',
      traits: [
          'evocation',
          'monk'
      ],
      type: 'Focus',
      level: 7,
      source: 'Advanced Player\'s Guide pg. 229',
      cast: 'somatic, verbal',
      action: '2',
      area: '30-foot burst',
      'saving throw': 'Fortitude',
      text: 'Grasping darkness surges from you, dealing 14d4 negative damage. Each creature in the area must attempt a Fortitude save.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes half damage and is enfeebled 1 for 1 round.  \r\n**Failure**  The creature takes full damage and is enfeebled 2 for 1 round.  \r\n**Critical Failure**  The creature takes double damage and is stunned 1, enfeebled 2 for 1 round, and immobilized for 1 round or until it Escapes, whichever comes first.  \r\n**Heightened (+1)**  The negative damage increases by 2d4.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=739',
      name: 'Medusa\'s Wrath',
      traits: [
          'monk',
          'transmutation'
      ],
      type: 'Focus',
      level: 8,
      source: 'Advanced Player\'s Guide pg. 229',
      cast: 'somatic, verbal',
      action: '2',
      text: 'You make an attack filled with a medusa\'s petrifying power. Make an unarmed Strike with the following additional effects.  \r\n**Critical Success**  The target is slowed 2 and must attempt a Fortitude save at the end of each of its turns; this ongoing save has the incapacitation trait. On a failed save, the slowed condition increases by 1 (2 on a critical failure). A successful save reduces the slowed condition by 1. When a creature is unable to act due to the slowed condition from medusa\'s wrath, it is petrified permanently. The spell ends if the creature is petrified or the slowed condition is removed.  \r\n**Success**  As critical success, but the target is initially slowed 1.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=738',
      name: 'Ki Form',
      traits: [
          'monk',
          'polymorph'
      ],
      type: 'Focus',
      level: 9,
      source: 'Advanced Player\'s Guide pg. 229',
      cast: 'verbal',
      action: '1',
      duration: '1 minute',
      text: 'Drawing from deep wells of spiritual power, you take on a special ki form. In your ki form, your hair, feathers, skin, or scales change color and begin to glow. In this form you gain a fly Speed equal to your land Speed. Choose force, lawful (only if you are lawful), negative, or positive damage. All your Strikes deal 1d6 additional damage of the chosen type. Your entire body is also surrounded by a glowing corona of the same color as your inner ki; this is a light effect. Your corona is a 5-foot emanation that deals 2d6 damage of the chosen type to creatures who start their turn within the emanation. If the emanation overlaps with a darkness effect, the corona\'s glow attempts to counteract the darkness effect. Regardless of the outcome, the corona can\'t attempt to counteract that effect again for 1 day. As a single action, which has the concentrate trait, you can flare your corona out to become a 30-foot emanation. In your ki form, your emotions surge to the forefront and it\'s difficult to moderate your attacks. Your weapons and unarmed attacks lose the nonlethal trait. You take a –2 status penalty to saves against emotion effects but gain a +2 status bonus to saves against all other mental effects.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=562',
      name: 'Apex Companion',
      traits: [
          'druid',
          'polymorph',
          'transmutation'
      ],
      type: 'Focus',
      level: 10,
      source: 'Pathfinder #150: Broken Promises pg. 77',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 animal companion in your service',
      duration: '1 minute',
      text: 'You focus on the energies of all members of your animal companion’s species, transforming your animal companion into its apex battle form. Your animal companion gains the following statistics and abilities while in its apex form. Your animal companion becomes Huge and its attacks have 15-foot reach. It must have enough space to expand into or the spell is lost. 30 temporary Hit Points. Darkvision. Your animal companion’s attack’s damage dice increase by one step, and its attack gains the deadly d12 trait. +10-foot status bonus to its Speeds. Ignores difficult terrain and greater difficult terrain.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=730',
      name: 'Pied Piping',
      traits: [
          'bard',
          'composition',
          'enchantment',
          'incapacitation',
          'mental',
          'sonic'
      ],
      type: 'Focus',
      level: 10,
      source: 'Advanced Player\'s Guide pg. 228',
      cast: 'verbal',
      action: '2',
      area: '5-foot emanation',
      'saving throw': 'Will',
      duration: '1 minute',
      text: 'Your performance enraptures those who hear it, compelling them to follow you about in admiration. Each creature within the emanation must attempt a Will save when you Cast the Spell or the first time they enter the area, after which they become temporarily immune for 1 day. Once per turn, you can spend a single action, which has the concentrate trait, to increase the emanation\'s radius by 5 feet. You can Dismiss the spell.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature is fascinated with you.  \r\n**Failure**  The creature uses all its actions to move toward you and compliment your performance. This effect ends if a hostile action is used against the affected creature.  \r\n**Critical Failure**  The target gains the minion trait and is controlled by you. This effect ends if a hostile action is used against the affected creature, or if you direct the creature to use any action that causes it harm.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=563',
      name: 'Song of the Fallen',
      traits: [
          'bard',
          'composition',
          'necromancy'
      ],
      type: 'Focus',
      level: 10,
      source: 'Pathfinder #150: Broken Promises pg. 77',
      cast: 'focus, verbal',
      action: '2',
      range: '30 feet',
      targets: 'up to 4 dead creatures or up to 4 undead creatures',
      duration: 'sustained up to 1 minute',
      text: 'You chant a dirge or an elegy that either rouses the dead to action or reminds undead that they should lay to rest. If you target dead creatures, the bodies animate and can continue acting as if they were alive. A creature animated in this way has 60 temporary Hit Points. The animated creatures are slowed 1 but can otherwise act normally. Creatures animated with this spell die again once the spell ends. If you target undead creatures, each undead must attempt a basic Will save.  \r\n**Critical Success**  The undead takes 5d6 positive damage.  \r\n**Success**  The undead takes 10d6 positive damage and is slowed 1 for 1 round.  \r\n**Failure**  The undead takes 100 positive damage and is slowed 1 for 1 minute.  \r\n**Critical Failure**  The undead is destroyed.',
      components: [
          'focus',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=565',
      name: 'Acidic Burst',
      traits: [
          'acid',
          'evocation'
      ],
      type: 'Spell',
      level: 1,
      source: 'Gods & Magic pg. 106',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      area: '5-foot emanation',
      'saving throw': 'basic Reflex',
      text: 'You create a shell of acid around yourself that immediately bursts outward, dealing 2d6 acid damage to each creature in the area.  \r\n**Heightened (+1)**  The damage increases by 2d6.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=566',
      name: 'Agitate',
      traits: [
          'enchantment',
          'mental',
          'nonlethal'
      ],
      type: 'Spell',
      level: 1,
      source: 'Gods & Magic pg. 106',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      'saving throw': 'Will',
      duration: 'varies',
      text: 'You send the target’s mind and body into overdrive, forcing it to become restless and hyperactive. During the duration, the target must Stride at least once each turn or take 2d8 mental damage that turn. The duration of this effect depends on the target’s Will save.  \r\n**Critical Success**  The spell has no effect.  \r\n**Success**  The duration is 1 round.  \r\n**Failure**  The duration is 2 rounds.  \r\n**Critical Failure**  The duration is 4 rounds.  \r\n**Heightened (+1)**  The damage increases by 2d8.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=666',
      manual: true,
      name: 'Animate Dead',
      traits: [
          'necromancy'
      ],
      type: 'Spell',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 214',
      traditions: [
          'arcane',
          'divine',
          'occult'
      ],
      cast: 'material, somatic, verbal',
      action: '3',
      range: '30 feet',
      duration: 'sustained up to 1 minute',
      text: 'Your magic dredges up a corpse or skeleton and fills it with necromantic life, and you force the dead to fight at your command. You summon a common creature that has the undead trait and whose level is –1; this creature gains the summoned trait. Heightening the spell increases the maximum level of creature you can summon.  \r\n**Heightened (2nd)**  Level 1  \r\n**Heightened (3rd)**  Level 2  \r\n**Heightened (4th)**  Level 3  \r\n**Heightened (5th)**  Level 5  \r\n**Heightened (6th)**  Level 7  \r\n**Heightened (7th)**  Level 9  \r\n**Heightened (8th)**  Level 11  \r\n**Heightened (9th)**  Level 13  \r\n**Heightened (10th)**  Level 15',
      components: [
          'material',
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=667',
      manual: true,
      name: 'Animate Rope',
      traits: [
          'transmutation'
      ],
      type: 'Spell',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 214',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '100 feet',
      targets: 'up to 50 feet of rope or a nonliving rope-like object',
      duration: 'sustained up to 1 minute',
      text: 'You cause a length or section of rope or a rope-like object to animate and follow simple commands. You can give it two commands when you Cast the Spell, and one command each time you Sustain the Spell.  \r\n   **Bind** (attack) The rope attempts to partially bind a creature. Attempt a spell attack roll against the target\'s Reflex DC. If you succeed, the target takes a –10-foot circumstance penalty to its Speed (–20-foot on a critical success). This ends if the target Escapes against your spell DC or breaks the rope. (A standard adventuring rope has Hardness 2, HP 8, and a Broken Threshold of 4.)  \r\n   **Coil** The rope forms a tidy, coiled stack.  \r\n   **Crawl** The rope inches along the ground like a snake, moving one of its ends 10 feet. The rope must move along a surface, but that surface doesn\'t need to be horizontal.  \r\n   **Knot** The rope ties a sturdy knot in itself.Loop The rope forms a simple loop at one or both ends, or straightens itself back out.  \r\n   **Tie** The rope ties itself around a willing creature or an object that\'s unattended or attended by a willing creature.  \r\n   **Undo**  The rope undoes one of its knots, ties, or bindings.  \r\n**Heightened (+2)**  The range increases by 50 feet, and you can animate 50 more feet of rope.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=568',
      name: 'Anticipate Peril',
      traits: [
          'divination'
      ],
      type: 'Spell',
      level: 1,
      source: 'Gods & Magic pg. 107',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      duration: '10 minutes',
      text: 'You grant the target brief foresight. The target gains a +1 status bonus to its next initiative roll, after which the spell ends.  \r\n**Heightened (+2)**  The status bonus increases by 1, to a maximum of +4 at 7th level.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=569',
      name: 'Befuddle',
      traits: [
          'emotion',
          'enchantment',
          'mental'
      ],
      type: 'Spell',
      level: 1,
      source: 'Gods & Magic pg. 107',
      traditions: [
          'arcane'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      duration: '1 round',
      text: 'You sow seeds of confusion in your target’s mind, causing their actions and thoughts to become clumsy.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is clumsy 1 and stupefied 1.  \r\n**Failure**  The target is clumsy 2 and stupefied 2.  \r\n**Critical Failure**  The target is clumsy 3, stupefied 3, and confused.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=678',
      name: 'Chilling Spray',
      traits: [
          'cold',
          'evocation'
      ],
      type: 'Spell',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 217, Gods & Magic pg. 107',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      area: '15-foot cone',
      'saving throw': 'Reflex',
      text: 'A cone of icy shards bursts from your spread hands and coats the targets in a layer of frost. You deal 2d4 cold damage to creatures in the area; they must each attempt a Reflex save.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes half damage.  \r\n**Failure**  The creature takes full damage and takes a –5-foot status penalty to its Speeds for 2 rounds.  \r\n**Critical Failure**  The creature takes double damage and takes a –10-foot status penalty to its Speeds for 2 rounds.  \r\n**Heightened (+1)**  The damage increases by 2d4.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=684',
      name: 'Déjà Vu',
      traits: [
          'enchantment',
          'incapacitation',
          'mental'
      ],
      type: 'Spell',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 218',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '100 feet',
      targets: '1 creature',
      'saving throw': 'Will',
      duration: '2 rounds',
      text: 'You loop a thought process in the target\'s mind, forcing it to repeat the same actions over again. The target must attempt a Will save. If the target fails, whatever actions the target uses on its next turn, it must repeat on its following turn. The actions must be repeated in the same order and as close to the same specifics as possible. For example, if the target makes an attack, it must repeat the attack against the same creature, if possible, and if the target moves, it must move the same distance and direction, if possible, on its next turn. If the target can\'t repeat an action, such as Casting a Spell that has been exhausted or needing to target a creature that has died, it can act as it chooses for that action but becomes stupefied 1 until the end of its turn.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=573',
      name: 'Endure',
      traits: [
          'enchantment',
          'mental'
      ],
      type: 'Spell',
      level: 1,
      source: 'Gods & Magic pg. 107',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: 'somatic',
      action: '1',
      range: 'touch',
      targets: '1 creature',
      duration: '1 round',
      text: 'You invigorate the touched creature’s mind and urge it to press on. You grant the touched creature 5 temporary Hit Points.  \r\n**Heightened (+1)**  Increase the temporary Hit Points by 5.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=549',
      name: 'Exchange Image',
      traits: [
          'illusion',
          'visual'
      ],
      type: 'Spell',
      level: 1,
      source: 'Pathfinder #147: Tomorrow Must Burn pg. 73',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      requirements: 'You have the humanoid trait.',
      range: 'touch',
      targets: 'you and 1 other humanoid',
      'saving throw': 'Will',
      duration: 'varies',
      text: 'To mislead pursuers, the Lacunafex developed the means to swap visages. You trade appearances with the target, with the effects depending on the result of the target’s Will saving throw. Willing and unconscious targets automatically critically fail this saving throw.  \r\n**Critical Success**  No effect.  \r\n**Success**  You take on the target’s appearance, and they take yours. This has the same effects as a 1st-level illusory disguise spell, except that the target can’t Dismiss the disguise. The duration is 1 minute or until Dismissed.  \r\n**Failure**  As success, but the duration is 1 hour or until Dismissed.  \r\n**Critical Failure**  As success, but the duration is 24 hours.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=700',
      name: 'Invisible Item',
      traits: [
          'illusion'
      ],
      type: 'Spell',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 221',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: 'material, somatic',
      action: '2',
      range: 'touch',
      targets: '1 object',
      duration: '1 hour',
      text: 'You make the object invisible. This makes it undetected to all creatures, though the creatures can attempt to find the target, making it hidden to them instead if they succeed. If the item is used as part of a hostile action, the spell ends after that hostile action is completed. Making a weapon invisible typically doesn\'t give any advantage to the attack, except that an invisible thrown weapon or piece of ammunition can be used for an attack without necessarily giving information about the attacker\'s hiding place unless the weapon returns to the attacker.  \r\n**Heightened (3rd)**  The duration is until the next time you make your daily preparations.  \r\n**Heightened (7th)**  The duration is unlimited.',
      components: [
          'material',
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=581',
      name: 'Message Rune',
      traits: [
          'divination',
          'linguistic',
          'mental'
      ],
      type: 'Spell',
      level: 1,
      source: 'Gods & Magic pg. 108',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: '5 minutes (material, somatic, verbal)',
      range: 'touch',
      targets: '1 flat unattended surface',
      duration: '1 day',
      text: 'You record a message up to 5 minutes long and inscribe a special rune on any flat unattended surface within reach. The nature of the rune’s appearance is up to you, but it is visible to everyone and it must be no smaller than 2 inches in diameter. You also specify a trigger that creatures must meet to activate the rune. For the duration of the spell, creatures who meet the criteria of the trigger can touch the rune to hear the recorded message in their head as though you were speaking to them telepathically. You know when someone is listening to the message, but you do not know who is listening to it. You can Dismiss the spell.',
      components: [
          '5minutes(material',
          'somatic',
          'verbal)'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=704',
      name: 'Noxious Vapors',
      traits: [
          'evocation',
          'poison'
      ],
      type: 'Spell',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 222',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      area: '10-foot emanation',
      'saving throw': 'basic Fortitude',
      duration: '1 round',
      text: 'You emit a cloud of toxic smoke that temporarily obscures you from sight. Each creature except you in the area when you Cast the Spell takes 1d6 poison damage (basic Fortitude save). A creature that critically fails the saving throw also becomes sickened 1. All creatures in the area become concealed, and all creatures outside the smoke become concealed to creatures within it. This smoke can be dispersed by a strong wind.  \r\n**Heightened (+1)**  The damage increases by 1d6.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=582',
      name: 'Penumbral Shroud',
      traits: [
          'darkness',
          'evocation'
      ],
      type: 'Spell',
      level: 1,
      source: 'Gods & Magic pg. 109',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      duration: '10 minutes',
      text: 'You envelop the target in a shroud of shadow. The target perceives light as one step lower than it actually is (bright light becomes dim light, for example), affecting their ability to sense creatures and objects accordingly. The shroud also provides the target a +1 status bonus to saving throws against light effects. While this effect is helpful to creatures sensitive to light, if the creature is unwilling, it can attempt a Reflex save to avoid the shroud and reduce the effect.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The effect lasts for 1 round  \r\n**Failure**  The effect lasts its normal duration.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=631',
      name: 'Personal Rain Cloud',
      traits: [
          'evocation',
          'water'
      ],
      type: 'Spell',
      level: 1,
      source: 'Pathfinder #151: The Show Must Go On pg. 78',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '60 feet',
      targets: '1 creature',
      'saving throw': 'Reflex',
      duration: '1 minute',
      text: 'You conjure a 5-foot-wide rain cloud that follows the target wherever it goes. It stays roughly an arm’s length overhead, unless it must drift lower to fit under a ceiling. The cloud rains constantly on the target, keeping it wet and dampening the ground in the wake of any movement. The rain extinguishes non-magical flames. The target gains fire resistance 2. Creatures with weakness to water take damage equal to their weakness at the end of each of their turns. Creatures can attempt a Reflex save to avoid the cloud.  \r\n**Heightened (+1)**  The amount of fire resistance increases by 2.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=706',
      name: 'Pet Cache',
      traits: [
          'conjuration',
          'extradimensional'
      ],
      type: 'Spell',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 222',
      traditions: [
          'arcane',
          'divine',
          'occult',
          'primal'
      ],
      cast: 'somatic',
      action: '1',
      range: 'touch',
      targets: '1 willing creature that is your animal companion or familiar',
      duration: '8 hours',
      text: 'You open your cloak or create a gap with your hands, drawing the target into a pocket dimension just large enough for its basic comfort. No other creature can enter this extradimensional space, and the target can bring along objects only if they were designed to be worn by a creature of its kind. The space has enough air, food, and water to sustain the target for the duration. You can Dismiss the spell. The spell also ends if you die or enter an extradimensional space. When the spell ends, the target reappears in the nearest unoccupied space (outside of any extradimensional space you may have entered).',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=708',
      name: 'Pummeling Rubble',
      traits: [
          'earth',
          'evocation'
      ],
      type: 'Spell',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 223',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      area: '15-foot cone',
      'saving throw': 'Reflex',
      text: 'A spray of heavy rocks flies through the air in front of you. The rubble deals 2d4 bludgeoning damage to each creature in the area. Each creature must attempt a Reflex save.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes half damage.  \r\n**Failure**  The creature takes full damage and is pushed 5 feet away from you.  \r\n**Critical Failure**  The creature takes double damage and is pushed 10 feet away from you.  \r\n**Heightened (+1)**  Increase the damage by 2d4.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=633',
      name: 'Scouring Sand',
      traits: [
          'earth',
          'evocation'
      ],
      type: 'Spell',
      level: 1,
      source: 'Pathfinder #151: The Show Must Go On pg. 78',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '60 feet',
      area: '10-foot burst',
      duration: 'sustained for up to 1 minute',
      text: 'You blast the area with grit that scours away soil and gets into creatures’ eyes. For the duration of the spell, any plant-based difficult terrain smaller than a tree becomes loose, allowing each 5-foot square of it to be cleared with a single Interact action. In addition, scouring sand attempts to counteract entangle and other effects that create or manipulate plant-based terrain in its area. Successfully counteracting an effect removes only the portion of its area that overlaps with scouring sand’s area. After one such attempt, the effect is temporarily immune to scouring sand’s counteract for 24 hours. Each creature in the area when you Cast this Spell or that ends its turn in the area must attempt a Reflex save.  \r\n**Success**  The creature is unaffected.  \r\n**Failure**  The creature is dazzled for 1 minute or until it uses an Interact action to get the sand out of its eyes.  \r\n**Critical Failure**  As failure, but the creature is also blinded for its next action.  \r\n**Heightened (3rd)**  Once per round when you Sustain the Spell, you can move the center of the burst to a spot within range.  \r\n**Heightened (6th)**  As the 3rd-level version, except the range is 120 feet and the area is a 20-foot burst.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=584',
      name: 'Share Lore',
      traits: [
          'divination',
          'mental'
      ],
      type: 'Spell',
      level: 1,
      source: 'Gods & Magic pg. 109',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: '1 minute',
      range: 'touch',
      targets: 'up to 3 creatures',
      duration: '10 minutes',
      text: 'You share your knowledge with the touched creatures. Choose one Lore skill in which you are trained. The targets become trained in that Lore skill for the duration of the spell.  \r\n**Heightened (3rd)**  The duration of the spell is 1 hour and you can target up to five creatures.  \r\n**Heightened (5th)**  The duration of the spell is 8 hours, you can target up to five creatures, and you can share up to two Lore skills in which you are trained.',
      components: [
          '1minute'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=585',
      name: 'Shattering Gem',
      traits: [
          'abjuration',
          'earth'
      ],
      type: 'Spell',
      level: 1,
      source: 'Gods & Magic pg. 109',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: 'touch',
      targets: '1 creature',
      duration: '1 minute',
      text: 'A large gem floats around the target in an erratic pattern. The gem has 5 Hit Points. Each time a creature Strikes the target, the target attempts a DC 11 flat check. On a success, the gem blocks the attack, so the attack first damages the gem and then applies any remaining damage to the target. If the gem is reduced to 0 Hit Points, it shatters, immediately dealing the creature that destroyed it 1d8 slashing damage (basic Reflex save), as long as that creature is within 10 feet of the target.  \r\n**Heightened (+1)**  The gem has 5 additional HP, and the damage dealt by its detonation increases by 1d8.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=587',
      name: 'Shockwave',
      traits: [
          'earth',
          'evocation'
      ],
      type: 'Spell',
      level: 1,
      source: 'Gods & Magic pg. 110',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      area: '15-foot cone',
      'saving throw': 'Reflex',
      text: 'You create a wave of energy that ripples through the earth. Terrestrial creatures in the affected area must attempt a Reflex save to avoid stumbling as the shockwave shakes the ground.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature is flat-footed until the start of its next turn.  \r\n**Failure**  The creature falls prone.  \r\n**Critical Failure**  As failure, plus the creature takes 1d6 damage.  \r\n**Heightened (+1)**  The area increases by 5 feet (to a 20-foot cone at 2nd level, and so on).',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=540',
      name: 'Snowball',
      traits: [
          'attack',
          'cold',
          'evocation',
          'water'
      ],
      type: 'Spell',
      level: 1,
      source: 'World Guide pg. 112',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      text: 'You throw a magically propelled and chilled ball of dense snow. The target takes 2d4 cold\ndamage and potentially other effects, depending on the result of your spell attack roll.  \r\n**Critical Success**  The target takes double damage and a –10-foot status penalty to its Speeds for 1 round.  \r\n**Success**   The target takes full damage and a –5-foot status penalty to its Speeds for 1 round.  \r\n**Failure**  No effect.  \r\n**Heightened (+1)**   The damage increases by 2d4.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=590',
      name: 'Temporary Tool',
      traits: [
          'conjuration'
      ],
      type: 'Spell',
      level: 1,
      source: 'Gods & Magic pg. 110PFS Note The temporary tool spell can be used to create only simple tools, and therefore cannot create kits, which are complex objects made of multiple pieces, or objects made of any specific precious material.',
      traditions: [
          'arcane'
      ],
      cast: '1 minute',
      duration: 'until used or 1 minute; see text',
      text: 'You conjure a temporary simple tool, such as a shovel or rope into your hands. It lasts until it is used for a single activity or for 1 minute, whichever comes first, after which it disappears. The tool is obviously temporarily conjured, and thus can’t be sold or passed off as a genuine item.',
      components: [
          '1minute'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=591',
      name: 'Tether',
      traits: [
          'abjuration'
      ],
      type: 'Spell',
      level: 1,
      source: 'Gods & Magic pg. 111',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      'saving throw': 'Reflex',
      duration: '1 minute or until dismissed; see text',
      text: 'You use magical chains, vines, or other tethers to bind your target to you. The creature can still try to Escape, and it or others can break the tethers by attacking them (the tethers have AC 15 and 10 Hit Points). You must stay within 30 feet of the target while it is tethered; moving more than 30 feet away from your target ends the spell. The target must attempt a Reflex save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes a –5-foot circumstance penalty to its Speed as long as it is within 30 feet of you.  \r\n**Failure**  The target takes a –10-foot circumstance penalty to its Speed and cannot move more than 30 feet away from you until it Escapes or the spell ends.  \r\n**Critical Failure**  The target is immobilized until it Escapes or the spell ends.  \r\n**Heightened (+1)**  The tethers’ AC increases by 3 and their Hit Points increase by 10.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=722',
      name: 'Thoughtful Gift',
      traits: [
          'conjuration',
          'teleportation'
      ],
      type: 'Spell',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 226',
      traditions: [
          'arcane',
          'divine',
          'occult'
      ],
      cast: 'somatic',
      action: '1',
      range: '120 feet',
      targets: '1 willing creature',
      text: 'You teleport one object of light or negligible Bulk held in your hand to the target. The object appears instantly in the target\'s hand, if they have a free hand, or at their feet if they don\'t. The target knows what object you are attempting to send them. If the target is unconscious or refuses to accept your gift, or if the spell would teleport a creature (even if the creature is inside an extradimensional container), the spell fails.  \r\n**Heightened (3rd)**  The spell\'s range increases to 500 feet.  \r\n**Heightened (5th)**  As 3rd level, and the object\'s maximum Bulk increases to 1. You can Cast the Spell with 3 actions instead of 1; doing so increases the range to 1 mile and you don\'t need line of sight to the target, but you must be extremely familiar with the target.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=668',
      name: 'Animated Assault',
      traits: [
          'evocation'
      ],
      type: 'Spell',
      level: 2,
      source: 'Advanced Player\'s Guide pg. 214',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '120 feet',
      area: '10-foot burst',
      'saving throw': 'basic Reflex',
      duration: 'sustained up to 1 minute',
      text: 'You use your mind to manipulate unattended objects in the area, temporarily animating them to attack. The objects hover in the air, then hurl themselves at nearby creatures in a chaotic flurry of debris. This assault deals 2d10 bludgeoning damage (basic Reflex save) to each creature in the area. On subsequent rounds, you can Sustain this Spell, dealing 1d10 bludgeoning damage (basic Reflex save) to each creature in the area.  \r\n**Heightened (+2)**  The initial damage increases by 2d10 and the subsequent damage increases by 1d10.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=675',
      name: 'Blood Vendetta',
      traits: [
          'curse',
          'necromancy'
      ],
      type: 'Spell',
      level: 2,
      source: 'Advanced Player\'s Guide pg. 216',
      traditions: [
          'arcane',
          'divine',
          'occult'
      ],
      cast: 'verbal',
      action: 'reaction',
      trigger: 'A creature deals piercing, slashing, or persistent bleed damage to you.',
      requirements: 'You can bleed',
      range: '30 feet',
      targets: 'the triggering creature',
      'saving throw': 'Will',
      duration: 'varies',
      text: 'You curse the target, punishing it for having the audacity to spill your blood. The target takes 2d6 persistent bleed damage and must attempt a Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes half the persistent bleed damage.  \r\n**Failure**  The target takes the full persistent bleed damage. Until the bleeding stops, the target has weakness 1 to piercing and slashing damage.  \r\n**Critical Failure**  As failure, but the target takes double the persistent bleed damage.  \r\n**Heightened (+2)**  The persistent bleed damage increases by 2d6.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=677',
      name: 'Charitable Urge',
      traits: [
          'enchantment',
          'incapacitation',
          'mental'
      ],
      type: 'Spell',
      level: 2,
      source: 'Advanced Player\'s Guide pg. 216',
      traditions: [
          'arcane',
          'divine',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      'saving throw': 'Will',
      duration: 'varies',
      text: 'You speak on the virtue of charity, compelling the target to give away its possessions. The target must attempt a Will save. If the target has no items on its person, the spell fails.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is stunned 1 as it wrestles with the urge.  \r\n**Failure**  On its next turn, before it does anything else, the target must present the nearest creature with an item in its possession; the target chooses which item to give, and if the only item it has is one that it\'s currently using to defend itself, such as a weapon during a combat encounter, it can choose to be stunned for 1 round instead of giving up the item. This might require the target to Interact to retrieve an item or move to reach the nearest creature, and handing the item to the target always requires an Interact action.  \r\n**Critical Failure**  As failure, except the duration is 4 rounds, and the target must repeat the effects of failure on each of its turns. At the end of each of its turns, the target can attempt a new Will save to reduce the remaining duration by 1 round, ending it entirely on a critical success.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=685',
      name: 'Dismantle',
      traits: [
          'transmutation'
      ],
      type: 'Spell',
      level: 2,
      source: 'Advanced Player\'s Guide pg. 218',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: 'touch',
      targets: '1 non-magical object in your possession of 1 Bulk or less',
      duration: '1 minute',
      text: 'You touch an object, and it immediately disassembles itself into its component pieces. The spell fails if the target lacks component pieces (such as a statue carved from one block of stone), and using it on a dangerous object like a snare or trap typically triggers it. The object gains the broken condition, and the component pieces become small enough to be hidden under normal clothing and armor. You can Dismiss the spell. When the spell ends, the object reassembles itself into its original form, appearing in your hand or hands if you have them free, or on the ground in front of you otherwise. Once reassembled, the object loses the broken condition and its Hit Points return to the value the object had when you Cast the Spell.  \r\n**Heightened (4th)**  The spell lasts for 10 minutes.  \r\n**Heightened (6th)**  The spell lasts until your next daily preparations.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=574',
      name: 'Expeditious Excavation',
      traits: [
          'earth',
          'transmutation'
      ],
      type: 'Spell',
      level: 2,
      source: 'Gods & Magic pg. 107',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: 'touch',
      area: 'cube of dirt 5 feet across or smaller',
      text: 'You remove loose dirt, dust, gravel, sand, and the like (though not solid stone) up to the size of a 5-foot cube. Any Medium or smaller creature standing atop the earth when the spell is cast must attempt a Reflex save or Acrobatics check.  \r\n**Success**  The creature is unaffected and can choose to either descend the pit without damage or move to the nearest available space of its choice.  \r\n**Failure**  The creature falls prone in the nearest available space of its choice, or falls into the pit if it prefers.  \r\n**Critical Failure**  The creature falls into the pit excavated by the spell and lands prone, taking falling damage as normal.  \r\n**Heightened (+2)**  The spell can excavate an additional 5-foot cube of earth. If you excavate all four 5-foot cubes beneath a Large creature, it must attempt a Reflex save or Acrobatics check, as above.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=575',
      name: 'Feast of Ashes',
      traits: [
          'curse',
          'necromancy'
      ],
      type: 'Spell',
      level: 2,
      source: 'Gods & Magic pg. 107',
      traditions: [
          'arcane',
          'occult',
          'primal'
      ],
      cast: 'material, somatic, verbal',
      action: '3',
      range: '30 feet',
      targets: '1 living creature',
      'saving throw': 'Fortitude',
      duration: '1 week',
      text: 'You curse the target with a hunger no food can sate. You can Dismiss the spell. The target must attempt a Fortitude save.  \r\n**Critical Success**  The creature is unaffected and is temporarily immune for 1 hour.  \r\n**Success**  The creature is fatigued for 1 round.  \r\n**Failure**  The creature is immediately afflicted by hunger as if it hadn’t eaten food in days. It becomes fatigued and takes 1d4 damage each day that can’t be healed until it sates its hunger. No amount of eating can sate the creature’s hunger during the spell’s duration. After the spell’s duration, the creature takes damage from starvation.  \r\n**Critical Failure**  As failure but the creature takes 2d4 damage each day, twice as much as usual for hunger.  \r\n**Heightened (+1)**  The hunger becomes more unbearable, increasing the damage each day by 1d4, or by 2d4 on a critical failure.',
      components: [
          'material',
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=689',
      name: 'Final Sacrifice',
      traits: [
          'evocation',
          'fire'
      ],
      type: 'Spell',
      level: 2,
      source: 'Advanced Player\'s Guide pg. 219',
      traditions: [
          'arcane',
          'divine',
          'occult',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '120 feet',
      targets: '1 creature with the minion trait that you summoned or permanently control',
      text: 'You channel disruptive energies through the bond between you and your minion, causing it to violently explode. The target is immediately slain, and creatures within 20 feet of it take 6d6 fire damage (basic Reflex save). If the target has the cold or water trait, the spell instead deals cold damage and gains the cold trait in place of the fire trait. If used on a creature that isn\'t mindless, this spell has the evil trait. Attempting to cast this spell targeting a creature that you temporarily seized control of, such as an undead commanded by Command Undead, automatically fails and breaks the controlling effect.  \r\n**Heightened (+1)**  The damage increases by 2d6.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=694',
      name: 'Heat Metal',
      traits: [
          'evocation',
          'fire'
      ],
      type: 'Spell',
      level: 2,
      source: 'Advanced Player\'s Guide pg. 220',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 metal item or metal creature',
      text: 'This spell heats the targeted metal to become red-hot for a moment. This is usually harmless to an unattended metal item, which doesn\'t get a saving throw, though the GM might rule that flammable materials connected to the object catch fire or melt. If you target an item worn or carried by a creature, or you target a creature made primarily of metal, the heat deals 4d6 fire damage and 2d4 persistent fire damage to the creature, which must attempt a Reflex saving throw. If you target an item held by the creature, the creature can Release the item to improve their degree of success by one step from the result of their saving throw. The persistent damage is associated with the object and damages whichever creature is holding or wearing it. It has no effect if no one is holding the item, but you continue to attempt flat checks to end the persistent damage as normal, since the item remains hot and can sear someone who picks it up.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes half damage and the object deals no persistent fire damage.  \r\n**Failure**  The creature takes full damage and the object deals full persistent damage.  \r\n**Critical Failure**  As failure, but the creature takes double damage and the object deals double persistent damage.  \r\n**Heightened (+1)**  The initial damage increases by 2d6 and the persistent damage increases by 1d4.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=579',
      name: 'Iron Gut',
      traits: [
          'transmutation'
      ],
      type: 'Spell',
      level: 2,
      source: 'Gods & Magic pg. 108',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'material, somatic',
      action: '2',
      duration: '1 hour',
      text: 'Your mouth, esophagus, and stomach become incredibly elastic and tougher than metal. For the duration of the spell, you can reach down your throat to store or retrieve a single object of light or negligible Bulk in your stomach, as though your stomach were a backpack or other container. Storing and retrieving an item in this way requires an Interact action. The object must be small enough to reasonably fit within your stomach. It is very difficult for other creatures to notice that you are hiding an object in this way; passive observers can’t possibly notice and you gain a +4 circumstance bonus to your Stealth checks to Conceal the Object unless the searcher specifically searches your mouth and stomach. If at the end of the spell’s duration you still have an object stored in your stomach, it is violently expelled, dealing 1d6 damage to you.  \r\n**Heightened (3rd)**  The duration increases to 8 hours.',
      components: [
          'material',
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=707',
      name: 'Phantasmal  Treasure',
      traits: [
          'emotion',
          'illusion',
          'mental'
      ],
      type: 'Spell',
      level: 2,
      source: 'Advanced Player\'s Guide pg. 223',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '60 feet',
      targets: '1 living creature',
      'saving throw': 'Will',
      duration: 'varies',
      text: 'A phantasmal image of the most precious thing imaginable to the target appears in a location of your choice within the spell\'s range. Only the spell\'s target can see the treasure, though you can see the vague shape of the treasure—be it a pile of items, a deific avatar, or a cherished loved one or hero. The target\'s response to the treasure is based on the outcome of the target\'s Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target becomes fascinated with the treasure, and the duration is until the end of its turn. The target can also try to disbelieve the illusion if it touches the treasure, Seeks to examine it, or speaks to it if the illusion appears to be a person or the like. If the target disbelieves the illusion, the spell ends.  \r\n**Failure**  As success, but the duration is 1 minute.  \r\n**Critical Failure**  As success, but the duration is 1 minute. The target finds the treasure so appealing that until the spell ends, it must spend each action focused on it. This can include moving toward the treasure if the target isn\'t next to it, and Interacting with the treasure if the target is next to it. (If the illusion appears to be a person or the like, the target can also Interact to converse with it.)',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=632',
      name: 'Rime Slick',
      traits: [
          'cold',
          'evocation'
      ],
      type: 'Spell',
      level: 2,
      source: 'Pathfinder #151: The Show Must Go On pg. 78',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '60 feet',
      area: '15-foot burst',
      'saving throw': 'basic Reflex',
      duration: '1 minute',
      text: 'You call down a chill wind. When you Cast this Spell, you deal 2d4 cold damage to each creature in the area (basic Reflex save). If a creature in the area critically fails its Reflex save and was standing, it also falls prone. You also create a layer of ice on all surfaces in the area, which become difficult terrain. Unattended objects in the area become slick with ice, and picking them up requires a successful Reflex save or Acrobatics check against your spell DC. The ice melts on any object that takes fire damage as well as in any square included in the area of a higher-level spell or effect with the fire trait.  \r\n**Heightened (5th)**  The damage increases to 8d4 cold damage and the area is a 30-foot burst.  \r\n**Heightened (8th)**  The damage increases to 14d4 cold damage and the area is a 60-foot burst.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=638',
      name: 'Sea Surge',
      traits: [
          'evocation',
          'water'
      ],
      type: 'Spell',
      level: 2,
      source: 'Pathfinder #151: The Show Must Go On pg. 78',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      duration: 'until the start of your next turn',
      text: 'You slap or stomp on a nearby solid or liquid surface, sending a surge of water rushing away from you. The water forms a flat, 5-foot-thick, 10-foot-high wall of water between 5 and 15 feet wide (you decide). It moves 60 feet in a direction of your choice along the struck surface, extinguishing all non-magical fires, carrying along unattended objects of 1 Bulk or less, and pushing larger objects. The wave moves another 60 feet in the same direction at the start of your next turn, then vanishes. Large or smaller creatures in the area or that enter the area the wave moves through must attempt a Fortitude save.  \r\n**Success**  The creature is unaffected.  \r\n**Failure**  The creature is knocked prone. If the creature was Swimming, it gets a critical failure instead.  \r\n**Critical Failure**  The creature is pushed 20 feet in the wave’s direction, is knocked prone, and takes 3d6 bludgeoning damage.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=589',
      name: 'Slough Skin',
      traits: [
          'necromancy'
      ],
      type: 'Spell',
      level: 2,
      source: 'Gods & Magic pg. 110',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      duration: '1 hour',
      text: 'You continually and harmlessly slough off the top layer of your skin while new skin regenerates immediately, quickly moving damaging substances away from your body. The flat check to remove persistent damage from effects that coat your skin (such as most persistent acid damage) is reduced to 5, and you gain a +2 status bonus to your initial save against contact poison (but not to further saves, since by that point, the toxin has already entered your system). If you’re suffering from an effect other than persistent damage that depends on continuous contact with your skin, if that effect allows a saving throw, you receive a new saving throw against that effect at the end of each turn when you attempt your flat checks against persistent damage, and you also receive a +2 status bonus to those saving throws. While affected by this spell, your continually shedding skin makes you much easier to Track. Anyone Tracking you gains a +2 circumstance bonus to do so, and you cannot Hide Your Tracks.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=639',
      name: 'Sudden Bolt',
      traits: [
          'electricity',
          'evocation'
      ],
      type: 'Spell',
      level: 2,
      source: 'Pathfinder #151: The Show Must Go On pg. 79',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '60 feet',
      targets: '1 creature or object',
      'saving throw': 'basic Reflex',
      text: 'You call down a small bolt of lightning on the target, dealing 4d12 electricity damage.  \r\n**Heightened (+1)**  The damage increases by 1d12.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=726',
      name: 'Vomit Swarm',
      traits: [
          'evocation'
      ],
      type: 'Spell',
      level: 2,
      source: 'Advanced Player\'s Guide pg. 227',
      traditions: [
          'arcane',
          'occult',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      area: '30-foot cone',
      'saving throw': 'basic Reflex',
      text: 'You belch forth a swarm of magical vermin. You evoke and shape the creatures from your own imagination, allowing you to change the appearance of the creatures (typically a mix of centipedes, roaches, wasps, and worms), but this doesn\'t change the effect of the spell. The vermin swarm over anyone in the area, their bites and stings dealing 2d8 piercing damage (basic Reflex save). A creature that fails its saving throw also becomes sickened 1. Once the spell ends, the swarm disappears.  \r\n**Heightened (+1)**  Increase the damage by 1d8.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=665',
      name: 'Agonizing Despair',
      traits: [
          'emotion',
          'enchantment',
          'fear',
          'mental'
      ],
      type: 'Spell',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 214',
      traditions: [
          'arcane',
          'divine',
          'occult'
      ],
      cast: 'verbal, somatic',
      action: '2',
      range: '60 feet',
      targets: '1 creature',
      'saving throw': 'Will',
      text: 'Your target\'s mind tumbles down a deep well of dread, dwelling so intently on deep-seated fears that it\'s painful. The target takes 4d6 mental damage with a Will saving throw.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes half damage and becomes frightened 1.  \r\n**Failure**  The target takes full damage and becomes frightened 2.  \r\n**Critical Failure**  The target takes double damage and becomes frightened 3.  \r\n**Heightened (+1)**  Increase the damage by 2d6.',
      components: [
          'verbal',
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=669',
      name: 'Aqueous Orb',
      traits: [
          'conjuration',
          'water'
      ],
      type: 'Spell',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 214',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '60 feet',
      duration: 'sustained up to 1 minute',
      text: 'A sphere of water 10 feet in diameter forms in an unoccupied space in range, either on the ground or on the surface of a liquid. When you Cast the Spell and each time you Sustain the Spell, you can roll the orb, moving it up to 10 feet along the ground or the surface of a liquid. Unlike most spells, you can gain this effect multiple times in the same round by Sustaining the Spell multiple times. The orb can move through the spaces of any creatures or obstacles that wouldn\'t stop the flow of water. It extinguishes non-magical fires it moves through of its size or smaller, and it attempts to counteract any magical fires it moves through. If it fails to counteract a given fire, it can\'t counteract that fire for the duration of the spell. The orb can also collect creatures it moves through. Any Large or smaller creature whose space the orb tries to move through can attempt a Reflex save against your spell DC to avoid being engulfed. If a creature succeeds at this save, it can either let the orb pass (remaining in its space or moving out of the orb\'s path into a space of the creature\'s choice) or allow itself to be pushed in front of the orb to the end of the orb\'s movement. The orb can try to Engulf the same creature only once per turn, even if you roll it onto a creature\'s space more than once. A creature that fails its save is pulled into the orb. It becomes grabbed, moves along with the orb, and must hold its breath or begin suffocating (unless it can breathe in water). An engulfed Medium or smaller creature and anyone trying to affect that creature follow the normal rules for aquatic battles. An engulfed Large creature is usually big enough that parts of it stick out from the water, and it can reach out of the water. An engulfed creature can get free either by Swimming with a successful DC 10 Athletics check or by Escaping against your spell DC. A creature that critically failed its Reflex save is further stuck and must attempt to Escape instead of Swim. A freed creature exits the orb\'s space and can immediately breathe. The orb can contain as many creatures as can fit in its space. When the spell ends, all creatures the orb has engulfed are automatically released.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=681',
      name: 'Cozy Cabin',
      traits: [
          'conjuration'
      ],
      type: 'Spell',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 217',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: '1 minute (material, somatic, verbal)',
      range: '30 feet',
      duration: '12 hours',
      text: 'You shape a cabin 20 feet on each side and 10 feet high. This cabin has the structure trait and the same restrictions as magic items that create structures. The walls of the hut are simple and wooden, with small, square glass windows, and it has one wooden door. It doesn\'t include its own lock, but it has a fastener to which a lock can be applied. The interior contains three cots, one chamber pot, and a small fireplace holding a magical fire. The interior is lit with a small magical light that you can light or extinguish at will using a single action, which has the concentrate trait. The climate inside the hut is comfortable and allows creatures inside it to withstand most hostile weather conditions, but incredible heat or cold, powerful storms, and winds of hurricane force or greater destroy the hut. Other creatures can freely enter and exit the hut without damaging it, but if you exit the hut, the spell ends. You can Dismiss the spell.',
      components: [
          '1minute(material',
          'somatic',
          'verbal)'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=682',
      name: 'Crashing Wave',
      traits: [
          'evocation',
          'water'
      ],
      type: 'Spell',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 217',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      area: '30-foot cone',
      'saving throw': 'basic Reflex',
      text: 'You summon a crashing wave that sweeps away from you. You deal 6d6 bludgeoning damage to creatures in the area. The water also extinguishes non-magical fires in the area.  \r\n**Heightened (+1)**  The damage increases by 2d6.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=572',
      name: 'Cup of Dust',
      traits: [
          'curse',
          'necromancy'
      ],
      type: 'Spell',
      level: 3,
      source: 'Gods & Magic pg. 107',
      traditions: [
          'arcane',
          'occult',
          'primal'
      ],
      cast: 'material, somatic, verbal',
      action: '3',
      range: '30 feet',
      targets: '1 living creature',
      'saving throw': 'Fortitude',
      duration: '1 day',
      text: 'You curse the target with a thirst no drink can quench. You can Dismiss the spell. The target must attempt a Fortitude save.  \r\n**Critical Success**  The creature is unaffected and is temporarily immune for 1 hour.  \r\n**Success**  The creature is fatigued for 1 round.  \r\n**Failure**  The creature is immediately afflicted by thirst as if it hadn’t had a drink in days. It becomes fatigued and takes 1d4 damage each hour that can’t be healed until it quenches its thirst. No amount of drinking can quench the creature’s thirst during the spell’s duration.  \r\n**Critical Failure**  As failure but the creature takes 2d4 damage each hour, twice as much as usual for thirst.  \r\n**Heightened (+3)**  The thirst becomes more unbearable, increasing the damage each hour by 1d4, or by 2d4 on a critical failure.',
      components: [
          'material',
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=683',
      name: 'Curse of Lost Time',
      traits: [
          'curse',
          'negative',
          'transmutation'
      ],
      type: 'Spell',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 217',
      traditions: [
          'arcane',
          'occult',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: 'touch',
      targets: '1 Large or smaller object, construct, or living creature',
      'saving throw': 'Fortitude',
      duration: 'varies',
      text: 'You mimic the process of aging or erosion on the target. The effect depends on whether the target is an object, a construct, or a living creature. Artifacts and objects and constructs made of precious materials, as determined by the GM, are immune.  \r\n   **Object** If the object is attended, its bearer can attempt a Fortitude save. If the bearer fails or the object is unattended, the object immediately takes 4d6 damage (applying Hardness normally) and the item is cursed with an unlimited duration. Until the curse ends, the item becomes shoddy and can\'t be Repaired, and the curse attempts to counteract any spell that would restore the object\'s Hit Points. Remove curse can target an item affected by this spell.  \r\n   **Construct** The construct takes 4d6 damage (basic Fortitude save). On a failure, for 1 hour the construct is clumsy 1, is enfeebled 1, and can\'t be Repaired, and the curse attempts to counteract any spell that would restore the construct\'s Hit Points. On a critical failure, these effects have an unlimited duration.  \r\n   **Living Creature** The living creature must attempt a Fortitude save. Ageless creatures are immune.  \r\n   **Critical Success** The living creature is unaffected.  \r\n   **Success** The living creature briefly ages, becoming clumsy 1 and enfeebled 1 for 1 round.  \r\n   **Failure** As success, with a duration of 1 hour.  \r\n   **Critical Failure** As success, with an unlimited duration.  \r\n**Heightened (+1)**  The damage increases by 1d6.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=688',
      name: 'Familiar\'s Face',
      traits: [
          'divination',
          'scrying'
      ],
      type: 'Spell',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 218',
      traditions: [
          'arcane',
          'divine',
          'occult',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '1 mile',
      targets: '1 willing creature that is your animal companion or familiar',
      duration: 'sustained',
      text: 'The target becomes a scrying sensor, allowing you to see through its eyes, smell what it smells, and similarly use its other senses. If you can cast a spell with the revelation trait that affects your senses, such as see invisibility, while this spell is active, you gain the benefit of the spell through the target\'s senses instead of your own. You can also speak through the target, with a voice much like yours, though it takes on some of the timbre and character of the target\'s growls or squawks. You can use Command an Animal on the target as part of Sustaining this Spell. You don\'t need line of sight or line of effect to your target when you Cast this Spell.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=577',
      name: 'Gravity Well',
      traits: [
          'evocation'
      ],
      type: 'Spell',
      level: 3,
      source: 'Gods & Magic pg. 108',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '120 feet',
      area: '30-foot-radius burst',
      'saving throw': 'Reflex',
      text: 'You create a sphere of altered gravity. All creatures and unsecured objects in the area move towards the center, depending on their Reflex saving throws. This follows the rules for forced movement. If there’s not enough space near the center of the sphere, creatures and objects nearer to the center move first, and others move as far as they can without being blocked, up to the amount set by their saving throw outcomes.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature moves 5 feet toward the center.  \r\n**Failure**  The creature moves 15 feet toward the center.  \r\n**Critical Failure**  The creature moves 30 feet toward the center.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=646',
      name: 'Pillar of Water',
      traits: [
          'evocation',
          'water'
      ],
      type: 'Spell',
      level: 3,
      source: 'Pathfinder #152: Legacy of the Lost God pg. 77',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'material, somatic, verbal',
      action: '3',
      range: '120 feet',
      duration: '1 minute',
      text: 'You create a large, self-contained cylinder of still fresh water. The pillar has a maximum radius of 15 feet and a maximum height of 60 feet. Creatures inside the pillar can swim through the water as normal (Swim DC 10), or, if the spell was cast on solid ground, walk along the bottom (which is difficult terrain). Any creature that exits the pillar falls or lands accordingly.\n',
      components: [
          'material',
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=645',
      name: 'Pyrotechnics',
      traits: [
          'fire',
          'transmutation'
      ],
      type: 'Spell',
      level: 3,
      source: 'Pathfinder #152: Legacy of the Lost God pg. 77',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: 'material, somatic',
      action: '2',
      range: '120 feet\n',
      targets: '1 fire',
      'saving throw': 'Fortitude\n',
      duration: 'sustained up to 1 minute',
      text: 'You turn a fire into either a burst of blinding fireworks or a thick cloud of choking smoke, chosen when you Cast the Spell. The spell targets one fire source, which is immediately extinguished if it is a non-magical fire the size of a campfire or smaller. If the fire source is a creature, the creature takes 1d6 points of cold damage and is not extinguished.\nFireworks\n  The targeted fire explodes into a colorful array of flashy, fiery, glowing aerial fireworks in a 20-foot-radius burst. The first time you Sustain the Spell each round, you can cause the area of fireworks to ascend up to 20 feet, but you cannot move the area laterally. Creatures that start their turn within the area of the fireworks must attempt a Fortitude save, and are then temporarily immune for 1 minute. Critical Success The creature is unaffectedSuccess The creature is dazzled until the end of its next turn.Failure The creature is blinded until the end of its next turn.Critical Failure The creature is blinded for 1 minute.Smoke Cloud\n  Thick smoke billows out from the fire and coalesces into a cloud that spreads to fill a 20-foot-radius burst centered on the targeted fire. Creatures within the smoke cloud take a –4 circumstance penalty to visual Perception checks, and creatures outside the smoke cloud take a –4 circumstance penalty to visual Perception checks to detect creatures or objects within it. The first time you Sustain the Spell each round, you can cause the smoke cloud to descend up to 20 feet, but you cannot move the area laterally. Creatures that start their turn within the smoke cloud must attempt a Fortitude save, and are then temporarily immune for 1 minute. Success The creature is unaffected.Failure The creature is sickened 1.Critical Failure The creature is sickened 1 and cannot recover from the sickened condition while in the area of the smoke cloud.\n',
      components: [
          'material',
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=712',
      name: 'Safe Passage',
      traits: [
          'abjuration'
      ],
      type: 'Spell',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 224',
      traditions: [
          'arcane',
          'divine',
          'primal'
      ],
      cast: 'material, somatic, verbal',
      action: '3',
      range: 'touch',
      area: '10-foot-wide, 10-foot-tall, 60-foot-long section of terrain',
      duration: 'sustained up to 1 minute',
      text: 'You repel dangers from all around you, making passage through the chosen area safe for a brief amount of time. Anyone passing through the area gains the following benefits against harmful effects of the terrain and environment, including environmental damage, hazardous terrain, and hazards in the area. The spell grants a +2 status bonus to AC and saves against such effects, and resistance 5 to all damage from such effects. Furthermore, the spell prevents anything in the area that\'s prone to collapse, such as a rickety bridge or an unstable ceiling, from collapsing, except under extreme strain that would collapse a normal structure of its type. Safe passage protects only against harm, not inconvenience, and it doesn\'t reduce difficult terrain, remove the concealed condition caused by precipitation, or the like, nor does it protect against creatures within the spell\'s area.  \r\n**Heightened (5th)**  The granted resistance increases to 10, and the area can be 120 feet long.  \r\n**Heightened (8th)**  The granted resistance increases to 15, and the area can be 500 feet long.',
      components: [
          'material',
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=586',
      name: 'Shifting Sand',
      traits: [
          'earth',
          'transmutation'
      ],
      type: 'Spell',
      level: 3,
      source: 'Gods & Magic pg. 110',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'material, somatic, verbal',
      action: '3',
      range: '30 feet',
      area: 'a horizontal earthen or sandy surface within a 20-foot burst',
      duration: 'sustained up to 1 minute',
      text: 'You cause the surface to heave. The area becomes difficult terrain and any tracks in the area are destroyed by the churning ground. Creatures standing in the area take a –1 status penalty to Acrobatics checks to Balance and Tumble Through and Athletics checks to High Jump and Long Jump. When you Sustain the Spell, you can move the churning area up to 10 feet in any direction. Creatures immobilized by the spell are carried along with the shifting sand in the same direction, if possible; this movement is forced movement. Creatures that enter or begin their turn standing in the shifting sand must attempt a Reflex save.  \r\n**Critical Success**  The creature is unaffected and ignores the area’s difficult terrain and penalty to skill checks until the end of its turn.  \r\n**Success**  The creature ignores the area’s penalty to skill checks until the end of its turn.  \r\n**Failure**  The creature is affected normally by the spell this turn.  \r\n**Critical Failure**  The creature becomes immobilized within the spell’s area until it Escapes. If the creature was already immobilized by shifting sands, it also falls prone.  \r\n**Heightened (5th)**  The status penalty increases to –2 and the spell’s range increases to 60 feet.  \r\n**Heightened (7th)**  The status penalty increases to –3, the spell’s range increases to 60 feet, and the spell’s area increases to a 30-foot burst.  \r\n**Heightened (9th)**  The status penalty increases to –4, the spell’s range increases to 60 feet, and the spell’s area increases to a 40-foot burst.',
      components: [
          'material',
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=640',
      name: 'Unseasonable Squall',
      traits: [
          'air',
          'evocation'
      ],
      type: 'Spell',
      level: 3,
      source: 'Pathfinder #151: The Show Must Go On pg. 79',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '60 feet',
      area: '20-foot burst',
      duration: 'until the start of your next turn',
      text: 'You issue a blast of sudden wind that ripples outward from the center of the burst. The wind extinguishes small non-magical fires, disperses fog and mist, scatters objects of light Bulk or less, and pushes unsecured objects of 1 Bulk or less 5 feet away from the spell’s origin point. Each Medium or smaller creature in the area when you Cast the Spell or that moves into spell’s area must attempt a Fortitude saving throw.  \r\n**Success**  The creature is unaffected.  \r\n**Failure**  The creature is knocked prone. If the creature was Flying, it gets a critical failure instead.  \r\n**Critical Failure**  The creature is pushed 30 feet away from the center of the burst, is knocked prone, and takes 2d6 bludgeoning damage.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=812',
      name: 'Aromatic Lure',
      traits: [
          'emotion',
          'enchantment',
          'incapacitation',
          'mental'
      ],
      type: 'Spell',
      level: 4,
      source: 'Legends pg. 37',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '60 feet',
      targets: '1 creature',
      'saving throw': 'Will',
      duration: 'varies',
      text: 'You override a target\'s olfactory senses, luring them to a specific location through tantalizing false scents. Select a single square within range that is not hazardous or occupied by a creature. The target is drawn to the selected location, becoming euphoric upon arrival. The target must attempt a Will save.\n  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is distracted by the tantalizing scents, becoming stupefied 1 for 1 round.  \r\n**Failure**  The target is stupefied 2 and moves toward the selected location via the most direct route possible for 1 round, bypassing any obvious hazards and enemies in the way.  \r\n**Critical Failure**  The target is stupefied 4 and moves to the selected location via the most direct route possible for 1 round, bypassing any obvious hazards and enemies in the way. If the creature reaches the destination, it must remain in that location for 1d4 rounds but can otherwise act normally.  \r\n**Heightened (+2)**  You target 1 additional creature, selecting a different square within range as their destination.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=670',
      name: 'Bestial Curse',
      traits: [
          'curse',
          'polymorph',
          'transmutation'
      ],
      type: 'Spell',
      level: 4,
      source: 'Advanced Player\'s Guide pg. 215',
      traditions: [
          'arcane',
          'occult',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: 'touch',
      targets: '1 living humanoid',
      'saving throw': 'Fortitude',
      duration: 'varies',
      text: 'You tap into the target\'s inner being and curse it to become a bestial version of itself. The effect is based on its Fortitude save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target\'s body gains minor bestial features. Its insides churn as they partially transform, causing it to be clumsy 1 for 1 round. When it recovers from the clumsy condition, its features revert to normal and the spell ends.  \r\n**Failure**  The target transforms into a bestial form for 1 hour. The target becomes clumsy 1 and gains weakness 1 to silver. It gains a claw, hoof, horn, or jaws Strike (your choice) that uses the target\'s unarmed Strike statistics except that the damage type changes to bludgeoning, piercing, or slashing, as appropriate. Whenever the target attempts to use any manipulate action, it must succeed at a DC 5 flat check or the action is lost.  \r\n**Critical Failure**  As failure, but the duration is unlimited.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=642',
      name: 'Clownish Curse',
      traits: [
          'attack',
          'curse',
          'enchantment',
          'mental',
          'misfortune'
      ],
      type: 'Spell',
      level: 4,
      source: 'Pathfinder #152: Legacy of the Lost God pg. 77',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: 'touch\n',
      targets: '1 creature',
      'saving throw': 'Will\n',
      duration: 'varies',
      text: 'You afflict the target with a curse that causes it to emit ridiculous noises as it moves. Furthermore, the target’s hands and feet become awkward and uncoordinated, as though it were wearing oversized gloves and shoes.\n  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  For 1 round, the target must roll twice and use the worse result whenever attempting an Acrobatics, Stealth, or Thievery check. If the target rolls a failure at an Acrobatics, Stealth, or Thievery check, it gets a critical failure instead.  \r\n**Failure**  As success, but the effect is 1 hour.  \r\n**Critical Failure**  As success, except the effect is permanent.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=680',
      name: 'Countless Eyes',
      traits: [
          'divination'
      ],
      type: 'Spell',
      level: 4,
      source: 'Advanced Player\'s Guide pg. 217',
      traditions: [
          'arcane',
          'occult',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: 'touch',
      targets: '1 creature',
      duration: '1 minute',
      text: 'Eyes form across the touched creature\'s body, allowing it to see in all directions at once. The subject can\'t be flanked for the spell\'s duration. In addition, when the subject Seeks, it can Seek in a 30-foot burst centered on itself or up to four 15-foot bursts within line of sight.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=686',
      name: 'Dull Ambition',
      traits: [
          'curse',
          'enchantment',
          'mental',
          'misfortune'
      ],
      type: 'Spell',
      level: 4,
      source: 'Advanced Player\'s Guide pg. 218',
      traditions: [
          'arcane',
          'divine',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '120 feet',
      targets: '1 creature',
      'saving throw': 'Will',
      duration: 'varies',
      text: 'You curse the target to fail in all avenues of its life that require drive and ambition, as it inadvertently undermines its own goals at every turn. The effect is based on the target\'s Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  For 1 hour, the target rolls twice and uses the lower result on initiative rolls.  \r\n**Failure**  For 1 day, the target rolls twice and uses the lower result on initiative rolls and any check to determine the success of a downtime activity.  \r\n**Critical Failure**  As failure, but the duration is unlimited.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=687',
      name: 'Enervation',
      traits: [
          'necromancy',
          'negative'
      ],
      type: 'Spell',
      level: 4,
      source: 'Advanced Player\'s Guide pg. 218',
      traditions: [
          'arcane',
          'divine',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      area: '30-foot line',
      'saving throw': 'Fortitude',
      text: 'Extending a finger, you fire a beam of negative energy that weakens the life force of any creature it touches. Each living creature in the line must attempt a Fortitude save.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes 2d8 persistent negative damage.  \r\n**Failure**  The creature takes 4d8 persistent negative damage and becomes drained 1.  \r\n**Critical Failure**  The creature takes 4d8 persistent negative damage and becomes drained 2 and doomed 1.  \r\n**Heightened (+2)**  The persistent negative damage increases by 1d8 on a success, or by 2d8 on a failure or critical failure.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=644',
      name: 'Favorable Review',
      traits: [
          'enchantment',
          'incapacitation',
          'mental'
      ],
      type: 'Spell',
      level: 4,
      source: 'Pathfinder #152: Legacy of the Lost God pg. 77',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: 'touch\n',
      targets: '1 creature',
      'saving throw': 'Will\n',
      duration: 'varies',
      text: 'You enchant a creature to ensure they have only good things to say about your show. Identify a single creature, location, or performance, such as “Dame Ellendia,” “Savories Meats,” or “the Theater of the Mind’s latest magic show.” The target must attempt Will save. You can Dismiss the spell.\n  \r\n**Critical Success**  The target is unaffected and knows you tried to trick it.  \r\n**Success**  The target is unaffected but thinks your spell was something harmless instead of favorable review, unless it identifies the spell (usually using Identify Magic).  \r\n**Failure**  The target cannot speak unfavorably about the subject for 1 week. This doesn’t change the target’s opinion about the subject, but the target’s attempts to speak ill of the subject—whether in speech, writing, or other communication—always twist into compliments and praise instead. The target likely becomes aware of this effect quickly and can avoid speaking about the subject entirely if they choose.  \r\n**Critical Failure**  As failure, except the duration is permanent and the target genuinely holds a favorable opinion about the subject, with their attitude toward the creature (or creatures associated with the subject, such as the owner of a location or artists in a performance) becoming two degrees better (for example, helpful instead of indifferent).  \r\n**Heightened (8th)**  The range increases to 60 feet and you can target up to 10 creatures.\n',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=550',
      name: 'Forgotten Lines',
      traits: [
          'divination'
      ],
      type: 'Spell',
      level: 4,
      source: 'Pathfinder #147: Tomorrow Must Burn pg. 73',
      traditions: [
          'arcane',
          'divine',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: 'touch',
      targets: '1 text or remnants thereof',
      text: 'Members of the Lacunafex and other allies use this spell to restore material that Thrune agents have redacted from historical or otherwise valuable texts. You learn one piece of information that was removed from the target text after its creation. You can instead learn one piece of information from a text that had been destroyed, but you must have a fragment of the text, such as a piece of the cover, a page, or even a clasp or metal fittings.  \r\n**Heightened (6th)**  The spell reconstructs all missing information regarding a specific topic of your choice.  \r\n**Heightened (9th)**  The spell also reveals information the writer self-censored and didn’t commit to paper.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=695',
      name: 'Ice Storm',
      traits: [
          'cold',
          'evocation'
      ],
      type: 'Spell',
      level: 4,
      source: 'Advanced Player\'s Guide pg. 220',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'material, somatic, verbal',
      action: '3',
      range: '120 feet',
      area: '5-foot burst',
      'saving throw': 'basic Reflex',
      duration: '1 minute',
      text: 'You create a gray storm cloud that pelts creatures with an icy deluge. When you Cast the Spell, a burst of magical hail deals 2d8 bludgeoning damage and 2d8 cold damage to each creature in the area below the cloud (basic Reflex save). Snow and sleet continue to rain down in the area for the remainder of the spell\'s duration, making the area difficult terrain, causing creatures in the storm to be concealed, and making creatures outside the storm concealed from those inside the storm. Any creature that ends its turn in the storm takes 4 cold damage. If you Cast this Spell outdoors, you can create two non-overlapping clouds instead of one.  \r\n**Heightened (+2)**  The initial bludgeoning damage and cold damage increase by 1d8 each, and the cold damage creatures take at the end of their turns increases by 2.',
      components: [
          'material',
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=650',
      name: 'Necrotic Radiation',
      traits: [
          'necromancy',
          'negative'
      ],
      type: 'Spell',
      level: 4,
      source: 'Pathfinder #154: Siege of the Dinosaurs pg. 75',
      traditions: [
          'arcane',
          'divine',
          'occult'
      ],
      cast: 'material, somatic',
      action: '2',
      range: 'touch',
      targets: 'one object or one 10-foot-square area',
      duration: '24 hours',
      text: 'You imbue the touched object or space with slow-acting necrotic radiation. If you cast the spell on an object, any creature ending its turn holding or carrying the object takes 2d6 negative damage. If you cast the spell on an area, any creature ending its turn in the area takes 2d6 negative damage. You can attempt to use this spell on an attended object by touching the object. If you do, the creature attempts a Reflex save to reduce the effect.  \r\n**Critical Success**  The object is unaffected.  \r\n**Success**  The creature pulls the object away quickly. The spell only lasts 1 minute.  \r\n**Failure**  The creature manages to slightly protect the object. The spell lasts 10 minutes.  \r\n**Critical Failure**  The spell lasts the full 24 hours.  \r\n**Heightened (+2)**  Increase the radiation\'s negative damage by 1d6',
      components: [
          'material',
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=813',
      name: 'Rebounding Barrier',
      traits: [
          'abjuration'
      ],
      type: 'Spell',
      level: 4,
      source: 'Legends pg. 37',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: 'verbal',
      action: 'reaction',
      trigger: 'You are hit by a physical Strike.',
      text: 'You swiftly raise a reflective barrier, reducing physical damage and rebounding it onto your attacker. You gain resistance 10 against one physical damage type the triggering attack deals. Your attacker takes 5 damage of the same type.  \r\n**Heightened (+1)**  The resistance increases by 2. Damage dealt to your attacker increases by 1.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=583',
      name: 'Reflective Scales',
      traits: [
          'abjuration'
      ],
      type: 'Spell',
      level: 4,
      source: 'Gods & Magic pg. 109',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      duration: '1 minute',
      text: 'You grow a set of colored glowing scales or scaled armor that stores energy before releasing it in a final burst. When you cast this spell, choose acid, cold, fire, electricity, or poison damage. You gain resistance 5 against that type of damage. The scales’ color depends on the damage type you chose and is usually the color of a type of dragon or other creature associated with that damage type, such as red or gold for fire damage. The scales store up energy as they protect you. Keep track of how much damage the scales have prevented. As a 2-action activity that has the concentrate and manipulate traits, you can explode your scales outward in a 20-foot radius around you, dealing 1d6 damage of the chosen type to all creatures in the area for every 10 damage the scales have prevented, to a maximum of 10d6 damage (after preventing 100 damage). Once you do so, the spell ends.  \r\n**Heightened (+2)**  The resistance increases by 5 and the maximum damage from the scale explosion increases by 5d6.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=715',
      name: 'Seal Fate',
      traits: [
          'curse',
          'death',
          'necromancy'
      ],
      type: 'Spell',
      level: 4,
      source: 'Advanced Player\'s Guide pg. 224',
      traditions: [
          'arcane',
          'divine',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: 'touch',
      targets: '1 living creature',
      'saving throw': 'Fortitude',
      text: 'You utter a curse that a creature will meet a certain end—a death by freezing, stabbing, or another means you devise. Choose one type of damage from the following list: acid, bludgeoning, cold, electricity, fire, negative, piercing, slashing, or sonic. The effect is based on the target\'s Fortitude save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target gains weakness 2 to the chosen damage type until the end of your next turn.  \r\n**Failure**  As success, but the duration is 1 minute. If the creature is reduced to 0 HP by the chosen damage and its level is 7 or less, it dies.  \r\n**Critical Failure**  As failure, but the duration is unlimited.  \r\n**Heightened (+2)**  The weakness increases by 1, and the maximum level of creature that can be automatically killed increases by 4.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=725',
      name: 'Vampiric Maiden',
      traits: [
          'necromancy',
          'negative'
      ],
      type: 'Spell',
      level: 4,
      source: 'Advanced Player\'s Guide pg. 227',
      traditions: [
          'arcane',
          'divine',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      'saving throw': 'Fortitude',
      text: 'A ghostly iron maiden snaps shut on the target and drains its vitality for your gain. This deals 4d4 piercing damage and 4d4 negative damage, and the target must attempt a Fortitude save. You gain temporary HP equal to the negative damage the target takes (after applying resistances, weaknesses, and the like). You lose any remaining temporary HP after 1 minute.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes half damage.  \r\n**Failure**  The target is briefly trapped within the vampiric maiden. The target takes full damage and is immobilized by the iron maiden for 1 round or until it uses an Interact action to extricate itself, whichever comes first.  \r\n**Critical Failure**  The target takes double damage and is immobilized by the vampiric maiden for 1 round or until it Escapes (the DC is your spell DC), whichever comes first.  \r\n**Heightened (+1)**  The piercing and negative damage increase by 1d4 each.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=564',
      name: 'Acid Storm',
      traits: [
          'acid',
          'evocation'
      ],
      type: 'Spell',
      level: 5,
      source: 'Gods & Magic pg. 106',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '120 feet',
      area: '20-foot-radius burst',
      duration: '1 minute',
      text: 'You evoke a storm of acid rain that pelts the area for the spell’s duration. A creature that begins its turn in the area takes 3d8 acid damage (basic Reflex save).  \r\n**Heightened (+2)**  The damage increases by 1d8.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=673',
      name: 'Blister',
      traits: [
          'necromancy'
      ],
      type: 'Spell',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 216',
      traditions: [
          'arcane',
          'occult',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '60 feet',
      targets: '1 creature',
      'saving throw': 'Fortitude',
      duration: '1 minute',
      text: 'You point at a target in range, and its skin grows searing blisters filled with caustic fluid. The target must attempt a Fortitude save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target grows one blister. You can spend a single action, which has the concentrate trait, to pop a blister. The target and each creature in a 15-foot cone originating from the target takes 7d6 acid damage (basic Fortitude save). You choose the direction of the cone, which can\'t include the target. When no blisters are left, the spell ends.  \r\n**Failure**  As success, but the target grows two blisters.  \r\n**Critical Failure**  As success, but the target grows four blisters.  \r\n**Heightened (+1)**  The damage of a popped blister increases by 1d6.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=648',
      name: 'Blood Feast',
      traits: [
          'necromancy'
      ],
      type: 'Spell',
      level: 5,
      source: 'Pathfinder #154: Siege of the Dinosaurs pg. 74',
      traditions: [
          'arcane',
          'divine',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: 'touch',
      targets: '1 creature',
      text: 'Your head splits vertically into an enormous maw, which feasts upon the target\'s blood, dealing 12d6 piercing damage, depending on your spell attack roll. After the spell, your head sews back together as if it had never split apart. You gain temporary Hit Points for 1 minute equal to half the piercing damage the target takes. If you are a gug, increase the piercing damage by 2d6 and increase the persistent bleed damage you deal on a critical hit by 1d8. This spell doesn’t alter a gug’s appearance.  \r\n**Critical Success**  The creature takes double damage and 1d8 persistent bleed damage.  \r\n**Success**  The creature takes full damage.  \r\n**Failure**  You miss and the creature takes no damage.  \r\n**Heightened (+1)**  The piercing damage increases by 2d6, and the persistent bleed damage on a critical increases by 1.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=693',
      name: 'Grisly Growths',
      traits: [
          'transmutation'
      ],
      type: 'Spell',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 220',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '60 feet',
      targets: '1 corporeal creature',
      'saving throw': 'basic Fortitude',
      text: 'This gruesome spell causes the target to grow excess limbs and organs, whether it be fingers multiplying until hands resemble bushes, eyes popping open in bizarre places, legs sprouting from the side of the body, or some other result. The target takes 10d6 piercing damage (basic Fortitude save) as the new features erupt. This spell has no effect on a target with a mutable anatomy or no limbs, such as an ooze or a protean. The growths rot rapidly and fall away after 1 round. In addition, unless the initial target critically succeeds, creatures within 30 feet of the target, including the target, must attempt Will saves, after which they are temporarily immune to this secondary effect of grisly growths for 1 hour. This additional effect is a mental and visual effect.  \r\n**Success**  The creature is unaffected.  \r\n**Failure**  The creature is sickened 1.  \r\n**Critical Failure**  The character is sickened 2.  \r\n**Heightened (+1)**  The damage increases by 2d6.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=697',
      name: 'Impaling Spike',
      traits: [
          'conjuration'
      ],
      type: 'Spell',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 221',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      'saving throw': 'Reflex',
      duration: '1 minute',
      text: 'You conjure a spike that thrusts up from the earth beneath a target creature, potentially impaling it. The spike is made of cold iron and deals 8d6 piercing damage. The target must attempt a Reflex save.  \r\n**Critical Success**  The target dodges the spike and is unaffected.  \r\n**Success**  The target is struck by the spike and takes half damage.  \r\n**Failure**  The target is impaled through a leg or another non-vital body part. The creature takes full damage and, if it\'s standing on solid ground, becomes immobilized. It can attempt to Escape (the DC is your spell DC). While it remains impaled, it takes damage from any weakness to cold iron it has at the end of each of its turns.  \r\n**Critical Failure**  As failure, but the creature is impaled through a vital organ or its center of mass, taking double damage, and it is flat-footed as long as it\'s impaled.  \r\n**Heightened (+1)**  The damage increases by 2d6.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=653',
      name: 'Pillars of Sand',
      traits: [
          'conjuration',
          'earth'
      ],
      type: 'Spell',
      level: 5,
      source: 'Pathfinder #155: Lord of the Black Sands pg. 74',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'material, somatic, verbal',
      action: '3',
      range: '120 feet',
      duration: 'sustained up to 1 minute',
      text: 'You raise one or more pillars of solid sand from the earth. The total height of the pillars is 30 feet, which must be used in 10-foot increments (for example, you could create three 10-foot-tall pillars, one 20-foot-tall pillar and one 10-foot-tall pillar, or one 30-foot-tall pillar). Each pillar is 5 feet by 5 feet in length and width. The pillars must be conjured on a relatively flat area of natural earthen terrain such as sand, dirt, stone, or clay. Regardless of the terrain, the pillars are always made of tightly compacted sand particles that together become as hard and solid as stone (DC 15 Athletics to Climb). If a creature occupies the space where you cast this spell, it is carried upward atop the pillar. The creature can attempt a Reflex save (DC equal to the caster\'s spell DC); on a success, the creature can either attempt to Grab an Edge or move into an adjacent unoccupied square. If the pillar would rise higher than the ceiling, it firmly abuts the ceiling but does not rise any higher. A creature caught between a pillar and a ceiling takes no damage (subject to GM discretion, such as is in the case of stalactites or other hazards) but becomes immobilized. The creature can attempt an Escape check to free itself, but it must thereafter Grab an Edge, Climb down, or fall from the top of the pillar. The Grab an Edge and Escape DCs are the same as the Reflex save. As part of your action to Sustain the Spell, you can choose to either destroy one of your pillars, causing it to immediately crumble into nothing, or create a new pillar, as long as doing so wouldn\'t exceed the total number of feet of pillar you can create. You can Sustain the Spell two or more times on a single turn to destroy or create a pillar.  \r\n**Heightened (+1)**  The total height of the pillars increases by 10 feet, but must still be used in 10-foot increments (this also increases the total number of pillars that can be created by one).',
      components: [
          'material',
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=716',
      name: 'Secret Chest',
      traits: [
          'conjuration'
      ],
      type: 'Spell',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 225',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: '1 minute (material, somatic, verbal)',
      range: 'touch',
      targets: '1 container and its contents, totaling 10 Bulk or less',
      duration: 'until the next time you make your daily preparations',
      text: 'You banish a container and its contents to the Ethereal Plane, where you can retrieve it from later. The container\'s physical properties—the material from which it is made, any locks, or other features—are irrelevant to the casting of this spell, but the container can\'t contain any creatures. When you Cast this Spell, the container and all its contents are transported to a random location deep in the Ethereal Plane. Time passes normally for the container and its contents, and the environmental effects of the Ethereal Plane apply to it. Though very unlikely, it\'s possible for a creature on the Ethereal Plane to stumble upon the chest. You can Dismiss the spell to return the chest to your current location. If the spell ends by any other means, the container is lost on the Ethereal Plane and you can no longer recall it with this spell, though you could search for it in other ways.',
      components: [
          '1minute(material',
          'somatic',
          'verbal)'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=724',
      name: 'Transmute Rock and Mud',
      traits: [
          'earth',
          'transmutation'
      ],
      type: 'Spell',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 226',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'material, somatic, verbal',
      action: '3',
      range: '60 feet',
      area: '2 adjacent 10-foot cubes',
      text: 'You warp the structure of earthen material, turning rock into mud or mud into rock. Choose one of these two options when you Cast the Spell.  \r\n  **Mud to Rock** Mud in the area turns into unworked stone. If creatures are in the mud when it is transformed to stone, they must attempt a Reflex saving throw.  \r\n  **Critical Success** The creature escapes the mud and is atop the stone, unaffected.  \r\n  **Success** The creature climbs out of the mud as it turns to rock and is prone atop the stone.  \r\n  **Failure** The creature is partially stuck in the mud and is grabbed for 1 round or until it Escapes, whichever comes first.  \r\n  **Critical Failure** The creature is entirely stuck. It is restrained for 1 round or until it Escapes, whichever comes first.  \r\n   \r\n  **Rock to Mud** You transform non-magical, unworked, and unattended stone in the area into an equal volume of mud. If you Cast this Spell on a stone floor, it becomes difficult terrain; if the resulting mud is at least 3 feet deep, it is greater difficult terrain, or the creature can try to Swim through it (DC 10 Athletics). If the mud is deep enough that a creature can\'t reach the bottom, the creature must Swim to move through it. If you Cast this Spell on a ceiling, the falling mud deals 8d6 bludgeoning damage (basic Reflex save) and spreads out, creating difficult terrain in an area 10 feet larger in radius than the original spell\'s area. Once the rock is transformed into mud, the mud is non-magical and remains until natural conditions cause it to dry out or otherwise disperse.  \r\n**Heightened (+2)**  Add an additional 10-foot cube to the area, adjacent to at least one of the other cubes.',
      components: [
          'material',
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=816',
      name: 'Halcyon Infusion',
      traits: [
          'divination',
          'mental'
      ],
      type: 'Spell',
      level: 6,
      source: 'Legends pg. 65',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: '10 minutes (material, somatic, verbal)',
      range: 'touch',
      targets: 'one willing creature of lower level than you',
      duration: 'until your next daily preparations',
      text: 'You infuse magical energy into your target, opening up their mind to the pathways of magic and granting them the ability to use magic to affect the world around them. Choose a 1st-level spell you prepared today or that\'s in your repertoire, of the same tradition you used to cast halcyon infusion. The spell must be one that has a listed range. If the target is at least 3rd level, you can choose a 2nd-level spell instead of a 1st-level spell; and if the target is at least 5th level, you can choose a 3rd-level spell. The target can Cast the Spell once per day as an innate spell of the tradition you used to cast halcyon infusion. If they are untrained in the appropriate magical tradition, their spell attack bonus is 2 + their level + their highest mental ability modifier, and their spell DC is 12 + their level + their highest mental ability modifier. Unlike most abilities that can only be used once per day, the target refreshes their use of the granted innate spell each day only after you make your daily preparations and choose to extend halcyon infusion\'s duration by either refraining from preparing a spell in the slot (if you\'re a prepared spellcaster) or expending another spell slot (if you\'re a spontaneous spellcaster).  \r\n**Heightened (8th)**  If the target is at least 7th level, you can choose a 4th-level spell.  \r\n**Heightened (10th)**  As 8th, and if the target is at least 9th level, you can choose a 5th-level spell.',
      components: [
          '10minutes(material',
          'somatic',
          'verbal)'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=651',
      name: 'Blightburn Blast',
      traits: [
          'disease',
          'evocation'
      ],
      type: 'Spell',
      level: 7,
      source: 'Pathfinder #155: Lord of the Black Sands pg. 73',
      traditions: [
          'arcane',
          'occult',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '15-foot cone',
      'saving throw': 'basic Fortitude',
      text: 'You channel a blast of powerful blightburn radiation from your hands. You deal 4d6 poison damage to creatures in the area. Creatures who fail their save are afflicted with stage 1 of blightburn sickness (on a critical failure, the creature moves immediately to stage 2). The level of blightburn sickness caused by this spell is equal to twice the spell\'s level, and the disease\'s save DC uses the caster\'s DC.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=652',
      name: 'Control Sand',
      traits: [
          'earth',
          'evocation'
      ],
      type: 'Spell',
      level: 7,
      source: 'Pathfinder #155: Lord of the Black Sands pg. 73',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      area: '5-foot emanation',
      duration: 'sustained up to 1 minute',
      text: 'You whip up a small sandstorm around your body. When a creature starts its turn in the area or moves into the area, it must succeed at a Fortitude save or become dazzled for as long as it remains in the area; it is then temporarily immune to this dazzling effect for 10 minutes. Choose one of the following additional effects when you cast this spell. On subsequent rounds, you can switch to a different effect once per round as a free action triggered by sustaining the spell.Sand Shield You create a magical shield made of sand. The sand shield provides no benefit to AC, but it does allow you to use the Shield Block reaction and acts as a shield for this purpose. The sand shield has Hardness 14, 21 Hit Points, and no Broken Threshold; when the shield\'s HP are reduced to 0, you can\'t use its Shield Block reaction again until the next time you Sustain the Spell and choose the sand shield effect.Sandblast You direct a jet of sand at a single target. One creature of your choice within 30 feet takes 8d6 slashing damage (basic Reflex save). On a critical failure, the creature is also dazzled for 1 minute.Sandstorm The area of the spell expands to a 30-foot emanation, and any creature that starts its turn in the area or moves into the area takes 6d4 slashing damage (basic Reflex save) and must hold its breath or begin suffocating.  \r\n**Heightened (+1)**  Increase the sand shield\'s Hardness by 2 and its Hit Points by 1, the sandblast damage by 1d6, and the sandstorm damage by 1d4.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=649',
      name: 'Entrancing Eyes',
      traits: [
          'enchantment',
          'mental',
          'visual'
      ],
      type: 'Spell',
      level: 7,
      source: 'Pathfinder #154: Siege of the Dinosaurs pg. 74',
      traditions: [
          'arcane'
      ],
      cast: 'somatic, verbal',
      action: '2',
      area: '30-foot emanation centered on you',
      duration: 'sustained up to 1 minute',
      text: 'Your eyes glow with an entrancing radiance that captivates those who meet your gaze. Any creature that ends its turn within the emanation must attempt a Will save.  \r\n**Critical Success**  The target is unaffected and becomes immune to this particular casting of the spell.  \r\n**Success**  The target is unaffected.  \r\n**Failure**  Until the end of its next turn, the target is stupefied 2 and fascinated.  \r\n**Critical Failure**  Until the end of its next turn, the target is stupefied 4, fascinated, and can\'t take reactions. In addition, all creatures and objects other than you are concealed from the target.During any round you Sustain the Spell, you can use a single action, which has the manipulate trait, to focus your entrancing eyes on a single creature you can see within 30 feet. This creature must immediately make a Will save against the spell as if it were ending its turn in the emanation. If the creature was already fascinated by your entrancing eyes before its save, a failed save causes it to be paralyzed for 1 round. You can’t use this action to focus on the same creature more than once per round.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=690',
      name: 'Force Cage',
      traits: [
          'evocation',
          'force'
      ],
      type: 'Spell',
      level: 7,
      source: 'Advanced Player\'s Guide pg. 219',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: 'material, somatic, verbal',
      action: '3',
      range: '30 feet',
      area: '1 cube 20 feet on each side',
      'saving throw': 'Reflex',
      duration: 'sustained up to 1 minute',
      text: 'You create an immobile, invisible prison of sheer force. The cage is a 20-foot cube made of bands of force, each a half inch thick and a half inch apart, that extend to the Ethereal Plane. Each creature in the area where you create the cage must attempt a Reflex save. If such a creature fails, it becomes trapped inside the cage. If it succeeds, it\'s pushed outside the cage into a space of its choice. If a creature in the area is too big to fit inside the prison, the spell automatically fails. The cage has AC 10, Hardness 20, and 40 Hit Points, and it\'s immune to critical hits and precision damage. A creature capable of passing through the space between the bars (typically a Tiny creature) can leave; all others are confined within. Attacks with a weapon too large to fit between the bars can\'t pass through the cage, and the bars provide standard cover even against attacks that can pass through the gaps. Spells and breath weapons can pass through the cage uninhibited. Force cage is immune to counteracting effects of its level or lower, but it is automatically destroyed by a disintegrate spell of any level, or by contact with a rod of cancellation or sphere of annihilation.',
      components: [
          'material',
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=592',
      name: 'Time Beacon',
      traits: [
          'divination'
      ],
      type: 'Spell',
      level: 7,
      source: 'Gods & Magic pg. 111',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: 'material',
      action: '1',
      duration: 'until the end of your turn',
      text: 'You create a beacon in time, intending to return to it if things go wrong. You can cast time beacon on only your turn. Keep careful track of everything that happens this turn after you cast time beacon. At the end of your turn, you can choose to rewind time back to just after you cast time beacon, removing all effects of your turn since then. Curses, traps, and other harmful effects that happen during your turn might prevent you from returning to the beacon if they are powerful enough. If you suffered any harmful effects during your turn after casting time beacon, to return to your beacon, time beacon attempts a counteract check against each such effect. If it fails at any of these checks, you can’t return.',
      components: [
          'material'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=815',
      name: 'All is One, One is All',
      traits: [
          'necromancy'
      ],
      type: 'Spell',
      level: 8,
      source: 'Legends pg. 64',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'material, somatic, verbal',
      action: '3',
      range: '60 feet',
      targets: 'you and up to 10 willing living allies',
      text: 'You meld the targets\' matter and life force into one and then, in an instant, sift them back out into their component selves. When you separate the targets back into themselves, you can choose to switch the positions of any number of targets with the positions of other targets. Additionally, you can modulate the share of vital essence to share the burden of pain. Distribute the Hit Points of all targets however you choose, except that no target can receive fewer than 1 Hit Point or more than their maximum Hit Points.',
      components: [
          'material',
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=656',
      name: 'Deluge',
      traits: [
          'evocation',
          'water'
      ],
      type: 'Spell',
      level: 8,
      source: 'Pathfinder #156: The Apocalypse Prophet pg. 76',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '500 feet',
      area: '40-foot burst',
      text: 'You unleash a catastrophic downpour in the area that vanishes an instant later. All flying creatures in the area descend 50 feet or until blocked by the ground or firm surface. Each creature whose descent was blocked by the ground or firm surface takes bludgeoning damage equal to the number of feet it fell (the creature does not also take falling damage) and is knocked prone. Creatures on the ground, including flying creatures forced to the ground by the spell, must succeed at a Reflex save or be pushed 50 feet away from the center of the area. Flimsy structures in the area collapse. The GM can determine other large-scale effects that result from the deluge.  \r\n**Heightened (+1)**  The area increases by 10 feet, and flying creatures fall an additional 10 feet.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=658',
      name: 'Prying Survey',
      traits: [
          'divination',
          'scrying'
      ],
      type: 'Spell',
      level: 8,
      source: 'Pathfinder #156: The Apocalypse Prophet pg. 76',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: '1 minute (material, somatic, verbal)',
      area: '120-foot emanation',
      duration: '1 hour',
      text: 'You create eight invisible, floating eyes, each about 3 inches in diameter, that scan the area around you, transmitting rough impressions of the environment. The eyes constantly examine and send you summaries of their findings. They are solid and can\'t move through barriers, and they don\'t follow routes that they fail to find while Searching. Any damage to an eye destroys it. When all eyes are destroyed, the spell ends. As a single action, which has the concentrate trait, you can concentrate on a location within the area that an eye can reach. An eye travels to that location, and you Seek visually as if you were there. As an exploration activity, you can travel at half speed while continuing to concentrate on the eyes to gain the benefits of both the Scout and Search activities. With the eyes, you can check everything even if you are traveling faster than 300 feet per minute. The eyes use your Perception modifier. You can have only one prying survey in effect at a time.  \r\n**Heightened (10th)**  The area increases to a 500-foot emanation.',
      components: [
          '1minute(material',
          'somatic',
          'verbal)'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=659',
      name: 'Undermine Reality',
      traits: [
          'illusion',
          'incapacitation',
          'shadow'
      ],
      type: 'Spell',
      level: 8,
      source: 'Pathfinder #156: The Apocalypse Prophet pg. 76',
      traditions: [
          'arcane',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '500 feet',
      targets: 'one creature',
      duration: 'varies',
      text: 'You lash a target with tendrils of shadow that steal some of its substance, making it quasi-real. As long as it is quasi-real, its Strikes deal half damage, it can\'t critically succeed at any skill check, and creatures attempting saving throws against its spells and effects get a result one degree of success better than they rolled. The target must attempt a Will saving throw.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is quasi-real until the end of its next turn.  \r\n**Failure**  The target is quasi-real for 1 minute. At the end of each of its turns, it can attempt another Will save, ending the spell on a success.  \r\n**Critical Failure**  The target is quasi-real for an unlimited duration.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=655',
      name: 'Astral Labyrinth',
      traits: [
          'abjuration',
          'incapacitation'
      ],
      type: 'Spell',
      level: 9,
      source: 'Pathfinder #156: The Apocalypse Prophet pg. 76',
      traditions: [
          'arcane',
          'divine',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '120 feet',
      area: '80-foot burst',
      duration: '1 day',
      text: 'You connect the entire area with an invisible maze of astral energy that interferes with dimensional and mental magic. Choose a point in the area that you can see when you cast this spell. Objects other than force effects and rare metals can\'t block this spell\'s area. Astral labyrinth attempts to counteract magical mental effects targeting or including anyone other than the caster in the area, though it has no effect on mental effects that began outside the area or before the spell was cast. In addition, any creature that tries to depart or arrive in a location in the area by teleportation or extradimensional travel (including extradimensional spaces) must attempt a Will saving throw. Summoned creatures must attempt the save when they are summoned, but not when the summoning ends.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature is stunned 1.  \r\n**Failure**  The creature is stunned 1, you are mentally alerted that something has failed its save against this spell, and the creature arrives in the empty space closest to the point you chose instead of its intended destination.  \r\n**Critical Failure**  The creature is stunned 3, you get a mental glimpse of its appearance, and the creature arrives in the empty space closest to the point you chose instead of its intended destination.  \r\n**Heightened (10th)**  You and creatures transported by your spells can\'t get a result worse than success on the saving throw to teleport into or out of the area.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=660',
      name: 'Upheaval',
      traits: [
          'conjuration',
          'earth'
      ],
      type: 'Spell',
      level: 9,
      source: 'Pathfinder #156: The Apocalypse Prophet pg. 77',
      traditions: [
          'arcane',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '500 feet',
      area: '150-foot burst',
      text: 'The ground in the area shudders and crumbles as huge pillars of stone erupt into the air, rending the terrain around them. The GM might add additional effects in certain areas. Cliffs might collapse, causing creatures to fall, or a river might be blocked and flood the surrounding area. Stone Debris The area becomes difficult terrain.Rising Pillars Pillars of smooth stone rise from your chosen number of 10-foot squares on a surface in the area, ascending up to 60 feet in height. Each pillar stops when it hits a structure or ceiling unless that structure collapses (see below). The DC to Climb or Grab an Edge on a pillar is 30. Each creature on a pillar after it rises must succeed at a Reflex saving throw or fall off the nearest edge (the creature can choose which edge, if several are equally close). A creature on a pillar that is stopped by a structure falls without attempting a save.Structural Collapse Structures and ceilings might collapse. The GM rolls a flat check for each (DC 14 for a sturdy structure, DC 9 for an average structure and most natural formations, all adjusted higher or lower as the GM sees fit). In general, shoddy structures automatically collapse. A collapse deals 11d6 bludgeoning damage to creatures beneath it; each creature caught in a collapse must attempt a Reflex save to avoid it. If the creature is forced to attempt a Reflex save because it was on a rising pillar, it uses the same result.  \r\n**Critical Success**  The creature takes half collapse damage.  \r\n**Success**  The creature takes half the collapse damage and falls prone.  \r\n**Failure**  The creature takes the full collapse damage and falls prone.  \r\n**Critical Failure**  The creature takes the full collapse damage and is restrained by debris until it successfully Escapes (DC equal to the spell\'s save DC).',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=699',
      name: 'Indestructibility',
      traits: [
          'abjuration'
      ],
      type: 'Spell',
      level: 10,
      source: 'Advanced Player\'s Guide pg. 221',
      traditions: [
          'arcane',
          'divine',
          'occult',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      duration: 'until the start of your next turn',
      text: 'You can\'t be affected by anything unless you choose to be. For the duration of the spell, you are immune to any effect or damage that would harm you, excluding effects caused by artifacts, deific power, and similarly powerful sources. You can still be affected by anything you\'re willing to have affect you.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=721',
      name: 'Summon Instrument',
      traits: [
          'cantrip',
          'conjuration'
      ],
      type: 'Cantrip',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 226',
      traditions: [
          'divine',
          'occult'
      ],
      cast: 'material, somatic, verbal',
      action: '3',
      duration: '1 hour',
      text: 'You materialize a handheld musical instrument in your grasp. The instrument is typical for its type, but it plays only for you. The instrument vanishes when the spell ends. If you cast summon instrument again, any instrument you previously summoned disappears.  \r\n**Heightened (5th)**  The instrument is instead a virtuoso handheld instrument.',
      components: [
          'material',
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=703',
      name: 'Magic Stone',
      traits: [
          'necromancy',
          'positive'
      ],
      type: 'Spell',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 222',
      traditions: [
          'divine',
          'primal'
      ],
      cast: 'to  (verbal, somatic)',
      action: '3',
      range: 'touch',
      targets: '1 to 3 non-magical stones or sling bullets',
      duration: '1 minute',
      text: 'You pour positive energy into ordinary stones, granting them temporary magical properties. You can target 1 non-magical stone or sling bullet for every action you use Casting this Spell. The stones must be unattended or carried by you or a willing ally. The stones become +1 striking disrupting sling bullets. Each stone can be used only once, after which it crumbles to dust.',
      components: [
          'to(verbal',
          'somatic)'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=570',
      name: 'Brand the Impenitent',
      traits: [
          'abjuration',
          'curse'
      ],
      type: 'Spell',
      level: 2,
      source: 'Gods & Magic pg. 107',
      traditions: [
          'divine'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: 'touch',
      targets: '1 creature',
      'saving throw': 'Fortitude',
      duration: 'varies',
      text: 'You brand the target with an ethereal copy of your deity’s religious symbol. This brand can’t be hidden, but it is visible only to followers of your faith, who see it as clearly as a lit torch. Followers of your faith ignore the target’s concealed condition, if any, and the target gains a –1 status penalty to AC against attacks by followers of your faith. If the target is a follower of your deity in good standing, the spell fails.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The spell lasts for 1 round.  \r\n**Failure**  The spell lasts for 1 minute.  \r\n**Critical Failure**  The spell has an unlimited duration.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=710',
      name: 'Reaper\'s Lantern',
      traits: [
          'death',
          'light',
          'necromancy'
      ],
      type: 'Spell',
      level: 2,
      source: 'Advanced Player\'s Guide pg. 223',
      traditions: [
          'divine',
          'occult',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      area: '5-foot emanation',
      'saving throw': 'Fortitude',
      duration: '1 minute',
      text: 'You call forth a ghostly lantern that guides the living toward death and the undead toward true death. It sheds bright light in the spell\'s area, and dim light to twice that area. Though the lantern is insubstantial, you must keep a hand free to hold it or the spell ends (though using the hand for somatic spell components doesn\'t end the spell). Living creatures and undead in the area when you Cast the Spell, or that enter the area later, must attempt Fortitude saves. Living creatures that fail their Fortitude saves gain only half the normal benefit from healing effects while within the area. Undead targets that fail their Fortitude saves become enfeebled 1 while within the area. Once a creature attempts a save against reaper\'s lantern, it uses the same outcome if it leaves the area and enters it again. Once per turn, starting on the turn after you cast reaper\'s lantern, you can use a single action, which has the concentrate trait, to increase the emanation\'s radius by 5 feet. When you do so, you force creatures in the area that haven\'t yet attempted a save against reaper\'s lantern to attempt one.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=718',
      name: 'Spirit Sense',
      traits: [
          'detection',
          'divination',
          'mental'
      ],
      type: 'Spell',
      level: 2,
      source: 'Advanced Player\'s Guide pg. 225',
      traditions: [
          'divine',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      area: '30-foot emanation',
      duration: '10 minutes',
      text: 'You open your mind to the metaphysical, enabling you to sense nearby spirits. Even if you aren\'t Searching, you get a check to find haunts and spirits in the area. You gain a +1 status bonus to the following checks regarding haunts or spirits: Perception checks to Seek, attempts to Recall Knowledge, skill checks to determine the reason for their existence, and skill checks to disable a haunt. You also gain a +1 status bonus to AC and saving throws against haunts and spirits.  \r\n**Heightened (6th)**  The spell\'s duration lasts until the next time you make your daily preparations.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=720',
      name: 'Sudden Blight',
      traits: [
          'necromancy',
          'negative'
      ],
      type: 'Spell',
      level: 2,
      source: 'Advanced Player\'s Guide pg. 226',
      traditions: [
          'divine',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '120 feet',
      area: '20-foot burst',
      'saving throw': 'basic Fortitude',
      text: 'You accelerate the processes of decay in the area. Each living creature in the area takes 2d10 negative damage (basic Fortitude save). A creature afflicted by a disease takes a –2 circumstance penalty to this save. You can also direct the blight to rot all Small and Tiny non-creature plants in the area, eliminating non-magical undergrowth and any resulting difficult terrain, cover, and concealment. Sudden blight attempts to counteract any magical effect on the plants before withering them.  \r\n**Heightened (+1)**  The damage increases by 1d10.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=588',
      name: 'Show the Way',
      traits: [
          'detection',
          'divination'
      ],
      type: 'Spell',
      level: 3,
      source: 'Gods & Magic pg. 110',
      traditions: [
          'divine',
          'primal'
      ],
      cast: '10 minutes (material, somatic, verbal)',
      area: '5-foot emanation',
      targets: 'you and allies in the area',
      duration: '8 hours',
      text: 'You and affected allies gain preternatural knowledge of the path ahead, allowing you to intuit the best way forward and avoid potential obstacles such as difficult or confusing terrain. For the purpose of long-distance overland travel during exploration mode, traveling through difficult terrain reduces you to only three-quarters your travel Speed instead of half, and traveling through greater difficult terrain reduces your travel Speed to only half your travel Speed instead of one-third. Show the way does not prevent you from falling into traps or encountering other artificial obstacles and hazards.  \r\n**Heightened (+6)**  For the purpose of long-distance overland travel during exploration mode, traveling through difficult terrain doesn’t reduce your travel Speed at all, and traveling through greater difficult terrain reduces your travel Speed to only three-quarters of its normal value instead of one-third.',
      components: [
          '10minutes(material',
          'somatic',
          'verbal)'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=593',
      name: 'Whirling Scarves',
      traits: [
          'abjuration',
          'force'
      ],
      type: 'Spell',
      level: 3,
      source: 'Gods & Magic pg. 111',
      traditions: [
          'divine',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      duration: '1 minute',
      text: 'You surround yourself in a vortex of whirling colorful scarves of force that obfuscate you and disorient your foes. You gain the benefits of the concealed condition, but only against ranged and melee attacks. When a melee attack fails to hit you because of the flat check for the concealed condition, the scarves snag the weapon or unarmed attack, and the creature takes a –1 circumstance penalty to further attacks with that weapon or unarmed attack until the end of its turn (or the end of its next turn, if it wasn’t the creature’s turn). The timing of the scarves’ movement is harder to predict for ranged attackers, so the flat check for the concealed condition against ranged attacks increases from DC 5 to DC 6. You can Dismiss this spell.  \r\n**Heightened (+2)**  The circumstance penalty to further attacks with a melee weapon or unarmed attack the scarves snag increases by 1. The DC of the flat check for the concealed condition against ranged attacks increases by 1.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=692',
      name: 'Ghostly Tragedy',
      traits: [
          'divination'
      ],
      type: 'Spell',
      level: 4,
      source: 'Advanced Player\'s Guide pg. 220',
      traditions: [
          'divine',
          'occult'
      ],
      cast: '1 minute (material, somatic, verbal)',
      area: '60-foot emanation',
      duration: '10 minutes',
      text: 'This spell compels local spirits to reenact a violent event of the recent past that you\'re aware of and name as you Cast the Spell. You take the role of the primary victim. The reenactment plays out the final 9 minutes leading up to the death or injury of the victim and the minute after their death or injury. The spirits don\'t change form, so this doesn\'t help determine perpetrators by their look. Spiritual forms of missing creatures necessary for the event manifest as needed, and missing items appear as shadowy outlines. Once the scene ends, you take 2d6 negative damage for each ghostly apparition that participated in the scene (typically equal to the number of creatures involved other than the victim). Any creature that observed the ghostly recreation, including you, can attempt checks to investigate the event to discover new clues and information.',
      components: [
          '1minute(material',
          'somatic',
          'verbal)'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=554',
      name: 'Spiritual Anamnesis',
      traits: [
          'mental',
          'necromancy'
      ],
      type: 'Spell',
      level: 4,
      source: 'Pathfinder #147: Tomorrow Must Burn pg. 74',
      traditions: [
          'divine',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '60 feet',
      targets: '1 creature',
      'saving throw': 'Will',
      duration: 'varies',
      text: 'Memories of a past life that seem incredibly real (and may even be) overwhelm the target’s mind. This is especially disorienting for undead and creatures that have lived a previous life (such as celestials, fiends, monitors, and many other extraplanar creatures); if such creatures roll a critical success on their save, they get a success instead, and if they roll a failure, they get a critical failure instead.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature is slowed 1 for 1 round.  \r\n**Failure**  The target is slowed 1 for 1 minute and babbles about the visions, possibly providing information about what they saw.  \r\n**Critical Failure**  As failure, but the target is also stunned 3.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=647',
      name: 'Ravening Maw',
      traits: [
          'evil',
          'healing',
          'necromancy'
      ],
      type: 'Spell',
      level: 5,
      source: 'Pathfinder #153: Life\'s Long Shadow pg. 67',
      traditions: [
          'divine',
          'occult',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '60 feet',
      targets: 'one living creature',
      'saving throw': 'Will',
      duration: '3 rounds',
      text: 'You evoke Zevgavizeb’s unceasing hunger and inflict it upon your target. The target becomes overwhelmed with cannibalistic hunger and can restore its vitality by feasting on the flesh of the fallen. On its turn, the target can use 2 actions (these actions have the manipulate trait) to cannibalize an adjacent dying or dead creature. If the cannibalized creature is dying, it dies. If the cannibalized creature is an ally of the target, the target regains 5d8 HP; otherwise, the target regains 5d4 HP. Certain monsters (such as those whose blood is acidic or magical) might inflict additional effects on those who cannibalize them at the GM’s discretion. Once cannibalized, a particular creature’s body doesn’t have enough meat to cannibalize again. During any round that there’s a dying or dead creature within 30 feet of the target, if the target can’t or doesn’t cannibalize a creature, the target takes 5d4 mental damage.  \r\n**Heightened (+1)**  The amount of HP restored by cannibalizing a creature increases by 1d8 for eating an ally and 1d4 otherwise, and the mental damage increases by 1d4.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=727',
      manual: true,
      name: 'Wall of Flesh',
      traits: [
          'necromancy'
      ],
      type: 'Spell',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 227',
      traditions: [
          'divine',
          'occult',
          'primal'
      ],
      cast: 'material, somatic',
      action: '2',
      range: '20 feet',
      duration: '10 minutes',
      text: 'You craft a 20-foot-tall wall of living flesh in a straight line up to 30 feet long. The wall is 3 feet thick, and each 5-foot-long section has AC 10 and 75 HP. If you wish, the wall can be of a smaller length or height. You must create the wall in an unbroken open space so its edges don\'t pass through any creatures or objects, or the spell is lost. The wall can\'t be Repaired but can be healed by positive energy and healing spells and abilities. When you Cast the Spell, choose one of the following features for your wall.  \r\n  **Arms** The wall is a mass of grasping arms. Any creature that ends its turn within 5 feet of the wall must attempt a Reflex save.  \r\n  **Success** The creature is unaffected.  \r\n  **Failure** The creature is grabbed by the wall for 1 round or until it Escapes against your spell DC, whichever comes first.  \r\n  **Critical Failure** The creature is restrained by the wall for 1 round or until it Escapes against your spell DC, whichever comes first.  \r\n  \r\n  **Eyes** The wall sprouts hundreds of unblinking eyes. You can see through these eyes, gaining a +2 circumstance bonus to visual Perception checks within the wall\'s line of sight. You can also use the eyes for determining line of sight for ranged attacks and spells, but you don\'t have line of effect through the wall.  \r\n  \r\n  **Mouths** The wall has countless toothy mouths along its surface. The mouths Strike any creature that ends its turn within 5 feet of the wall, using your spell attack roll for these Strikes and dealing piercing damage equal to 1d6 + your spellcasting ability modifier. The mouths are capable of consuming potions; since the wall is alive, it can recover Hit Points from a potion of healing, but it can\'t benefit from any effect that would give it the ability to move. Otherwise, the GM determines which potions can affect the wall.',
      components: [
          'material',
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=672',
      name: 'Blinding Fury',
      traits: [
          'curse',
          'emotion',
          'enchantment',
          'incapacitation',
          'mental'
      ],
      type: 'Spell',
      level: 6,
      source: 'Advanced Player\'s Guide pg. 216',
      traditions: [
          'divine',
          'occult',
          'primal'
      ],
      cast: 'verbal',
      action: 'reaction',
      trigger: 'A creature damages you.',
      range: '60 feet',
      targets: 'the triggering creature',
      'saving throw': 'Will',
      duration: 'varies',
      text: 'You curse the target with your outrage at being attacked. The effect is determined by the target\'s Will save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target can\'t observe you until the end of its turn, and if you\'re currently observed by it, you become hidden to it.  \r\n**Failure**  As success, and for 1 minute, every time the target damages you, it can\'t observe you until the end of its turn.  \r\n**Critical Failure**  As success, and for an unlimited duration, the first time each round the target damages a creature, it can\'t observe that creature until the end of its turn. If it damages several creatures at once, the creature it can\'t perceive is chosen randomly among those creatures.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=713',
      name: 'Scintillating Safeguard',
      traits: [
          'abjuration'
      ],
      type: 'Spell',
      level: 6,
      source: 'Advanced Player\'s Guide pg. 224',
      traditions: [
          'divine',
          'occult',
          'primal'
      ],
      cast: 'somatic',
      action: 'reaction',
      trigger: 'An effect would deal physical or energy damage to you or a creature in range.',
      range: '30 feet',
      targets: 'up to 5 willing creatures who would be harmed by the triggering effect',
      text: 'A sparkling magical barrier envelops each target, shielding them against the triggering effect. Choose one type of physical or energy damage the triggering effect deals. Each target gains resistance 10 against that damage type for the triggering effect. The resistance applies only against the initial damage, not against any persistent damage or other lingering effects of the effect.  \r\n**Heightened (+1)**  The resistance increases by 1.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=657',
      name: 'Devour Life',
      traits: [
          'death',
          'healing',
          'necromancy',
          'negative'
      ],
      type: 'Spell',
      level: 8,
      source: 'Pathfinder #156: The Apocalypse Prophet pg. 76',
      traditions: [
          'divine',
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 living creature',
      'saving throw': 'basic Fortitude',
      text: 'You attempt to utterly consume the target\'s life force. The target takes 60 negative damage with a basic Fortitude save. If this damage reduces the target to 0 Hit Points, it dies immediately. You regain Hit Points equal to half the negative damage the target takes (after applying resistance and the like). Any excess healing is gained as temporary Hit Points, which you lose after 1 minute.  \r\n**Heightened (+1)**  The damage increases by 10.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=552',
      name: 'Join Pasts',
      traits: [
          'cantrip',
          'divination',
          'mental'
      ],
      type: 'Cantrip',
      level: 1,
      source: 'Pathfinder #147: Tomorrow Must Burn pg. 74',
      traditions: [
          'occult'
      ],
      cast: 'somatic',
      action: '1',
      range: 'touch',
      targets: '2 willing creatures',
      duration: '1 round',
      text: 'With touches to the targets’ foreheads, you bring them into mental communion. The targets can share thoughts and experiences, but not words. When one target attempts to Recall Knowledge, the other can Aid the first target’s skill check, using any Lore skill (even if that Lore wouldn’t normally apply) without having made any preparations to Aid.  \r\n**Heightened (+1)**  You can touch one additional target to include them in the spell’s effects. Multiple targets can attempt checks to Aid the target who is attempting to Recall Knowledge.',
      components: [
          'somatic'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=696',
      name: 'Ill Omen',
      traits: [
          'curse',
          'divination',
          'misfortune'
      ],
      type: 'Spell',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 221, Gods & Magic pg. 108',
      traditions: [
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      duration: '1 round',
      text: 'The target is struck with misfortune, which throws it off balance. The target must attempt a Will save.  \r\n**Success**  The target is unaffected.  \r\n**Failure**  The first time during the duration that the target attempts an attack roll or skill check, it must roll twice and use the worse result.  \r\n**Critical Failure**  Every time during the duration that the target attempts an attack roll or skill check, it must roll twice and use the worse result.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=698',
      name: 'Imprint Message',
      traits: [],
      type: 'Spell',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 221, Advanced Player\'s Guide pg. 221',
      traditions: [
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: 'touch',
      targets: '1 object',
      text: 'You project psychic vibrations onto the target object, imprinting it with a short message or emotional theme of your design. This imprinted sensation is revealed to a creature who casts object reading on the target object, replacing any emotional events the item was present for. If the object is in the area of a retrocognition spell, the imprinted messages appear as major events in the timeline, but they don\'t interfere with any other visions. If the object is targeted with read aura of a higher spell level than imprint message, the caster learns that the object has been magically modified. When you Cast this Spell, any prior vibrations placed on an object by previous castings of imprint message fade.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=580',
      name: 'Liberating Command',
      traits: [
          'enchantment',
          'mental'
      ],
      type: 'Spell',
      level: 1,
      source: 'Gods & Magic pg. 108',
      traditions: [
          'occult'
      ],
      cast: 'verbal',
      action: '1',
      range: '60 feet',
      targets: '1 creature',
      text: 'You call out a liberating cry, urging an ally to break free of an effect that holds them in place. If the target is grabbed, immobilized, or restrained, it can immediately use a reaction to attempt to Escape.',
      components: [
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=553',
      name: 'Object Reading',
      traits: [
          'divination'
      ],
      type: 'Spell',
      level: 1,
      source: 'Advanced Player\'s Guide pg. 222, Advanced Player\'s Guide pg. 222, Pathfinder #147: Tomorrow Must Burn pg. 74',
      traditions: [
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: 'touch',
      targets: '1 object',
      text: 'You place a hand on an object to learn a piece of information about an emotional event that occurred involving the object within the past week, determined by the GM. If you cast object reading on the same item multiple times, you can either concentrate on a single event to gain additional pieces of information about that event, or gain a piece of information about another emotional event in the applicable time frame.  \r\n**Heightened (2nd)**  You can learn about an event that occurred within the last month.  \r\n**Heightened (4th)**  You can learn about an event that occurred within the last year.  \r\n**Heightened (6th)**  You can learn about an event that occurred within the last decade.  \r\n**Heightened (8th)**  You can learn about an event that occurred within the last century.  \r\n**Heightened (9th)**  You can learn about an event that occurred within the entirety of the object’s history.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=567',
      name: 'Animus Mine',
      traits: [
          'abjuration',
          'mental'
      ],
      type: 'Spell',
      level: 2,
      source: 'Gods & Magic pg. 106',
      traditions: [
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      'saving throw': 'Will',
      duration: '1 hour',
      text: 'You implant a mental mine within your psyche that detonates against anyone attempting to manipulate your thoughts. You can use a single action, which has the concentrate trait, to suppress the effects of the mine for 1 round to allow someone to safely use a mental effect on you. You can Dismiss the spell. The first creature that uses a mental effect against you triggers the animus mine, causing the spell to end. The animus mine deals 4d8 mental damage to the triggering creature, which must attempt a Will save.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The creature takes half damage.  \r\n**Failure**  The creature takes full damage and is stunned 1.  \r\n**Critical Failure**  The creature takes double damage and is stunned 1. You are unaffected by the triggering mental effect.  \r\n**Heightened (+1)**  The damage increases by 2d8.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=674',
      name: 'Blistering Invective',
      traits: [
          'auditory',
          'emotion',
          'enchantment',
          'fear',
          'mental'
      ],
      type: 'Spell',
      level: 2,
      source: 'Advanced Player\'s Guide pg. 216',
      traditions: [
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      targets: '1 creature',
      'saving throw': 'Will',
      text: 'A heap of insults and invectives spew from your mouth— words so devastating your foes burn from the intensity of your diatribe. Your words deal 2d6 persistent fire damage, and the target must attempt a Will save. If the target doesn\'t understand the language or you\'re not speaking a language, it gains a +4 circumstance bonus to its save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target takes half the persistent fire damage.  \r\n**Failure**  The target becomes frightened 1 and takes the full persistent fire damage.  \r\n**Critical Failure**  The target becomes frightened 2 and takes double the persistent fire damage.  \r\n**Heightened (+2)**  You can target two additional creatures, and the persistent damage increases by 2d6.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=714',
      name: 'Sculpt Sound',
      traits: [
          'illusion'
      ],
      type: 'Spell',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 224',
      traditions: [
          'occult'
      ],
      cast: 'somatic, material',
      action: '2',
      range: 'touch',
      targets: '1 creature or object',
      duration: '10 minutes',
      text: 'You change the sounds made by a creature or object. Choose how you\'re altering the sounds when you Cast the Spell; you can\'t alter it later. You can cause something that didn\'t create a sound to make sound, alter the voice of a creature, amplify or deaden a sound, or transform one sound into another. A creature who succeeds at a Perception check against your spell DC can determine that the sound was altered by an illusion, including hearing faint sounds if you deadened the sound, but they can\'t determine the true sound unless they critically succeed at the Perception check. You can Dismiss the spell. Because this spell obscures sound instead of preventing it, using the spell to quiet a creature doesn\'t prevent that creature from using verbal spell components, though it does prevent most auditory effects that rely on another creature hearing them accurately. An unwilling target can attempt a Will save.  \r\n**Success**  The affected sound from the creature isn\'t altered.  \r\n**Failure**  The affected sound from the creature is altered in the way you determine.  \r\n**Critical Failure**  The affected sound from the creature is altered and the target becomes stupefied 2 for 1 minute as it struggles with the disorienting effects of its altered sound.  \r\n**Heightened (5th)**  You can target up to 6 creatures or 6 objects, altering the sounds of all affected creatures or objects in the same way.',
      components: [
          'somatic',
          'material'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=723',
      name: 'Threefold Aspect',
      traits: [
          'polymorph',
          'transmutation'
      ],
      type: 'Spell',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 226',
      traditions: [
          'occult',
          'primal'
      ],
      cast: '1 minute (material, somatic, verbal)',
      duration: 'until the next time you make your daily preparations',
      text: 'This spell allows you to change between three versions of yourself of different ages: a maiden (young adult), a mother (adult), or a matriarch (elderly). Choose one when you Cast the Spell. While the spell lasts, you can change the age to any of the three or to your natural age with a single action, which has the concentrate trait. Your form always looks like you regardless of the age, and creatures who know you still recognize you and can tell your age is different. Threefold aspect alters your physical appearance and personality to present an authentic version of yourself at various ages. This grants you a +4 status bonus to Deception checks to pass as the chosen age, and you can add your level as a proficiency bonus to these checks even if you\'re untrained. Furthermore, unless a creature specifically uses a Seek action or otherwise carefully examines you, it doesn\'t get a chance to notice that you aren\'t at your true age. You can Dismiss this spell.',
      components: [
          '1minute(material',
          'somatic',
          'verbal)'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=679',
      name: 'Chroma Leach',
      traits: [
          'necromancy'
      ],
      type: 'Spell',
      level: 4,
      source: 'Advanced Player\'s Guide pg. 217',
      traditions: [
          'occult'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: 'touch',
      targets: '1 living creature',
      'saving throw': 'Fortitude',
      text: 'Your hand glows with impossible colors from beyond the stars, and your touch saps both color and vitality from the living. The target must attempt a Fortitude save; creatures with the gnome trait take a –2 circumstance penalty to this save.  \r\n**Critical Success**  The target is unaffected.  \r\n**Success**  The target is enfeebled 2 for 1 round.  \r\n**Failure**  The target is enfeebled 2 for 1 minute and drained 1. The target is also filled with listlessness and ennui. For 1 round, if the target tries to use a move action, it must succeed at a Will save against your spell DC or the action is lost; this effect has the mental and emotion traits.  \r\n**Critical Failure**  As failure, but the creature is permanently enfeebled 2 and drained 2 (although magic such as restoration can reduce or remove these conditions).',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=719',
      name: 'Strange Geometry',
      traits: [
          'illusion'
      ],
      type: 'Spell',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 226',
      traditions: [
          'occult'
      ],
      cast: 'material, somatic, verbal',
      action: '3',
      range: '60 feet',
      area: '4 cubes, each 10 feet on a side',
      'saving throw': 'Will',
      duration: '1 minute',
      text: 'You cause the areas to appear to swell, bend, and break, twisting together in a bizarre spatial geometry. The cubes of the spell\'s area can\'t be adjacent to one another. A creature must attempt a Will save if it\'s in one of the cubes when you Cast the Spell, or if it later enters one of the areas, with the following effects. A creature interacting with the illusion can also attempt a Will save to disbelieve the illusion, as normal.  \r\n**Success**  The creature disbelieves the illusion.  \r\n**Failure**  All terrain in the cubes is difficult terrain for the creature, including the air if the creature is flying, walls if it\'s climbing, and so on. When the creature would exit one of the cubes, it exits from one randomly determined by the GM. This is a teleportation effect. It can exit from any edge of that cube it chooses. When selecting a random cube, the GM excludes any that don\'t match the creature\'s terrain; for instance, if the creature were exiting along the ground, the GM would exclude any cube that didn\'t have an exit on the ground.',
      components: [
          'material',
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=671',
      name: 'Blanket of Stars',
      traits: [
          'illusion'
      ],
      type: 'Spell',
      level: 6,
      source: 'Advanced Player\'s Guide pg. 215',
      traditions: [
          'occult',
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      'saving throw': 'Will',
      duration: '10 minutes',
      text: 'A flowing cloak of utter darkness drapes over you, filled with pinpricks of light like distant stars. It imparts the stillness of the cosmos to you, granting you a +2 status bonus to Stealth checks to Hide and Sneak. While outside under a starry night sky, you\'re also invisible as long as you remain still. When moving under a starry night sky, you are concealed instead. Gazing too closely into the stars is disorienting. Any creature that ends its turn adjacent to you must attempt a Will save; this is a mental, visual effect.  \r\n**Success**  The creature is unaffected.  \r\n**Failure**  The creature is dazzled until the end of its next turn.  \r\n**Critical Failure**  The creature is confused and dazzled until the end of its next turn.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=641',
      name: 'Verdant Sprout',
      traits: [
          'conjuration',
          'plant'
      ],
      type: 'Spell',
      level: 1,
      source: 'Pathfinder #151: The Show Must Go On pg. 79',
      traditions: [
          'primal'
      ],
      cast: 'material, somatic, verbal',
      action: '3',
      range: '30 feet',
      text: 'You imbue a single ordinary, inexpensive plant seed with primal energy and throw it onto a surface, where it gradually sprouts into a Medium plant. After 10 minutes, the plant is sturdy enough to provide standard cover, and its space is difficult terrain. The plant is laden with nutritious nuts or fruit sufficient to feed one Medium creature for a day. The plant has AC 10, Hardness 5, and 20 Hit Points.  \r\n**Heightened (+1)**  You throw an additional seed, which grows into an additional plant within range.',
      components: [
          'material',
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=630',
      name: 'Breath of Drought',
      traits: [
          'evocation',
          'fire'
      ],
      type: 'Spell',
      level: 2,
      source: 'Pathfinder #151: The Show Must Go On pg. 78',
      traditions: [
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      area: '10-foot burst',
      duration: 'sustained',
      text: 'You fill the area with an oppressive, arid swelter that overwhelms creatures with heat exhaustion. Objects are unaffected. Each creature in the area when the spell is cast or that ends its turn in the area afterward must attempt a Fortitude save. Water creatures and plant creatures use the outcome one degree of success worse than the result of their saving throw. Creatures whose bodies contain no significant moisture (such as fire elementals) are immune to breath of drought.  \r\n**Success**  The creature is unaffected.  \r\n**Failure**  The creature is sickened 1.  \r\n**Critical Failure**  The creature is sickened 2.  \r\n**Heightened (4th)**  Once per round when you Sustain the Spell, you can move the center of the burst to a new location within range.  \r\n**Heightened (7th)**  As the 4th-level version, except the range is 120 feet and the area is a 20-foot burst.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=576',
      name: 'Fungal Hyphae',
      traits: [
          'fungus',
          'necromancy'
      ],
      type: 'Spell',
      level: 2,
      source: 'Gods & Magic pg. 108',
      traditions: [
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      duration: '1 minute',
      text: 'Thin hyphae grow from your feet and plunge into the earth, creating a symbiotic fungal network that attaches to plants within 30 feet and connects you to their root systems. You gain an imprecise tremorsense allowing you to sense anything directly touching plants within that distance. If you move, the hyphae snap and the spell ends.  \r\n**Heightened (4th)**  You can control plants in the area to a small degree, allowing you to make Strikes with tree branches, exposed roots, or similarly solid plants. To do so, you use a Strike action, but you can Strike any creature you can detect with your tremorsense. These are melee spell attacks that deal 2d8 bludgeoning damage plus your spellcasting ability modifier. Unusual plants, such as thorny vines, might deal a different type of damage at the GM’s discretion. You can’t make any other attacks through these plants, or take any other actions through them, other than these Strikes.  \r\n**Heightened (6th)**  As 4th level, but you can use other simple manipulate actions through the plants, including having a branch pick an object up or open a door, though more complex actions, such as picking a lock or disabling a trap, remain impossible.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=691',
      name: 'Fungal Infestation',
      traits: [
          'conjuration'
      ],
      type: 'Spell',
      level: 2,
      source: 'Advanced Player\'s Guide pg. 220',
      traditions: [
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: 'touch',
      area: '15-foot cone',
      'saving throw': 'Fortitude',
      text: 'Toxic spores swarm over creatures in the area, causing them to erupt in grotesque fungal growths. These noxious growths deal 2d6 persistent poison damage, and each creature must attempt a Fortitude save.  \r\n**Critical Success**  The creature is unaffected.  \r\n**Success**  The target takes half the persistent poison damage.  \r\n**Failure**  The target takes the full persistent poison damage. While it is taking this persistent poison damage, it has weakness 1 to fire and weakness 1 to slashing.  \r\n**Critical Failure**  As failure, but double the persistent poison damage. While it is taking this persistent poison damage, it has weakness 2 to fire and weakness 2 to slashing.  \r\n**Heightened (+2)**  The persistent damage increases by 2d6, and the weakness increases by 1, or by 2 on a critical failure.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=709',
      name: 'Quench',
      traits: [
          'abjuration',
          'water'
      ],
      type: 'Spell',
      level: 2,
      source: 'Advanced Player\'s Guide pg. 223',
      traditions: [
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: '120 feet',
      area: '20-foot burst',
      duration: 'sustained',
      text: 'You cause the air in the area to become supersaturated with water vapor. Non-magical fires within the area are automatically extinguished. Fire creatures within the area take 4d8 damage (basic Fortitude save). Choose one magical fire, fire spell, or fire item in the area and attempt to counteract it. If you succeed against an item, the item loses its fire properties for 10 minutes (for instance, a +1 flaming longsword would become a +1 longsword). If the target is an artifact or similarly powerful item, you automatically fail to counteract it. When you Sustain this Spell, you can move the area of vapor anywhere within range, but the only effect when you do so is to automatically extinguish non-magical fires. If you have the Counterspell (prepared or spontaneous) reaction, you can use quench to counter any spell with the fire trait instead of needing to have the triggering fire spell prepared or in your repertoire.  \r\n**Heightened (+1)**  Increase the damage to fire creatures by 2d8.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=702',
      manual: true,
      name: 'Mad Monkeys',
      traits: [
          'conjuration'
      ],
      type: 'Spell',
      level: 3,
      source: 'Advanced Player\'s Guide pg. 222',
      traditions: [
          'primal'
      ],
      lesson: 'lesson of mischief',
      cast: 'somatic, verbal',
      action: '2',
      range: '30 feet',
      area: '5-foot burst',
      duration: 'sustained up to 1 minute',
      text: 'Magical monkey spirits fill the area as they pile and climb on top of one another. Because the monkeys are magical spirits, they can\'t be attacked or hurt. Casting calm emotions or a similar effect over the monkeys makes them docile, causing them to cease making mischief for the duration of mad monkeys. Choose the kind of mischief your monkeys make when you Cast the Spell. They produce the effect listed for that mischief when you Cast the Spell and each round when you Sustain the Spell. When you Sustain the Spell, you can move the area of the monkeys by 5 feet.  \r\n  \r\n  **Flagrent Burglary** The monkeys try to Steal any one item from one creature in the area. Use your spell DC – 10 as the monkeys\' Thievery modifier. Their attempt relies more on distraction than subtlety, so the victim knows what item the monkeys were trying to take and whether it was taken. Getting a stolen item from the monkeys— even for the caster—requires Stealing it from them or Disarming them, using your spell DC. When the spell ends, any stolen items fall to the ground in any square of the spell\'s area you choose.  \r\n  \r\n  **Raucous Din** The monkeys screech loudly, potentially deafening creatures in the spell\'s area. Each creature in the spell\'s area must attempt a Fortitude save.  \r\n  **Critical Success** The creature is unaffected and is temporarily immune for 10 minutes.  \r\n  **Success** The creature is unaffected.  \r\n  **Failure** The creature is deafened for 1 round.  \r\n  **Critical Failure ** The creature is deafened for 1 minute.  \r\n    \r\n  **Tumultuous Gymnastics** The monkeys jump and climb all over creatures in the spell\'s area, interfering with complex movements. Each creature in the spell\'s area must attempt a Reflex save.  \r\n  **Critical Success** The creature is unaffected and is temporarily immune for 10 minutes.  \r\n  **Success** The creature is unaffected.  \r\n  **Failure** For 1 round, the creature must succeed at a DC 5 flat check whenever it attempts a manipulate action. If it fails this check, the creature loses that action.  \r\n  **Critical Failure** As failure, but the monkeys cling to the creature tenaciously, and the effect lasts until the spell ends, even if the creature leaves the spell\'s area.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=711',
      manual: true,
      name: 'Rusting Grasp',
      traits: [
          'transmutation'
      ],
      type: 'Spell',
      level: 4,
      source: 'Advanced Player\'s Guide pg. 223',
      traditions: [
          'primal'
      ],
      cast: 'somatic, verbal',
      action: '2',
      range: 'touch',
      targets: '1 metal creature, 1 non-magical metal hazard, or 1 non-magical metal item of up to 1 Bulk',
      text: 'You cause the target to rapidly rust. This magical rust can affect nonferrous materials, but the target must be all or mostly metal. Skymetals such as adamantine and orichalcum are immune to this rust, and the GM might determine other precious materials are similarly resilient. Ultimately, the GM decides if an object or creature can be targeted with this spell. All damage from this spell ignores Hardness. If the spell causes persistent damage from rust, a creature can attempt to scrape off the rust to assist the target in recovering from the persistent damage (reducing the DC of the flat check to end persistent damage to 10 and granting an immediate flat check). The effect of the spell depends on its target.  \r\n  **Creature or Hazard** A creature or hazard must be made of all or mostly metal to be affected (this includes many mechanical traps). It takes 8d6 damage (basic Fortitude save), plus 2d6 persistent damage on a failed save. Touching a hazard to affect it with this spell might trigger the hazard, as determined by the GM.  \r\n  **Item** The rust deals 2d6 damage, subject to a basic Reflex save by the creature wearing or holding the item; if the item is unattended, it automatically gets a critical failure. On a failed save, the item also takes 1d6 persistent damage. For an attended item, this persistent damage occurs at the end of the attending creature\'s turns; if the item was unattended when you Cast the Spell, the damage happens at the end of your turns. When targeting armor someone is wearing, its Bulk is 1 higher than the listed value, since carrying armor is more cumbersome than wearing it. Thin iron or steel items, such as weapons, have 20 HP and a Broken Threshold of 10, and thicker iron or steel items, such as most suits of armor, have 36 HP and a Broken Threshold of 18. Other materials\' statistics can be found in the Material Statistics section and in the entries precious materials  \r\n**Heightened (+1)**  Increase the initial damage to creatures or hazards by 2d6, and increase the maximum Bulk of an item you can target by 1.',
      components: [
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=717',
      name: 'Spike Stones',
      traits: [
          'conjuration',
          'earth'
      ],
      type: 'Spell',
      level: 4,
      source: 'Advanced Player\'s Guide pg. 225',
      traditions: [
          'primal'
      ],
      cast: 'material, somatic, verbal',
      action: '3',
      range: '60 feet',
      area: '20-foot burst',
      duration: '1 hour',
      text: 'Long, sharp spikes of solid rock thrust up from the ground in the area. The area becomes difficult terrain and hazardous terrain. A creature that moves on the ground through the area takes 3 piercing damage for every square of that area it moves into.  \r\n**Heightened (+1)**  Increase the damage by 1.',
      components: [
          'material',
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=676',
      name: 'Chameleon Coat',
      traits: [
          'illusion'
      ],
      type: 'Spell',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 216',
      traditions: [
          'primal'
      ],
      cast: 'material, somatic, verbal',
      action: '3',
      range: '15 feet',
      targets: 'up to 8 creatures',
      duration: '10 minutes',
      text: 'You shift the colors of the targets\' outermost layer of clothing and gear to be closer to their environment when they remain still. Creatures affected by the spell gain a +3 status bonus to Stealth checks to Hide. The changed color granted by the spell always shifts to match the environment, even if there are drastic changes. If any piece of gear or clothing affected by the spell is removed from a creature, the spell ends for that creature.  \r\n**Heightened (6th)**  If a creature affected by this spell rolls a critical failure on its Stealth check to Sneak within 30 feet of a creature that would spot it, it instead only fails its check, as the spell mildly hypnotizes the spotter.  \r\n**Heightened (8th)**  As 6th level, and the status bonus is +4.',
      components: [
          'material',
          'somatic',
          'verbal'
      ]
  },
  {
      nethysUrl: 'https://2e.aonprd.com/Spells.aspx?ID=701',
      name: 'Lightning Storm',
      traits: [
          'electricity',
          'evocation'
      ],
      type: 'Spell',
      level: 5,
      source: 'Advanced Player\'s Guide pg. 221',
      traditions: [
          'primal'
      ],
      cast: 'material, somatic, verbal',
      action: '3',
      range: '120 feet',
      area: '5-foot burst',
      'saving throw': 'basic Reflex',
      duration: 'sustained up to 1 minute',
      text: 'You create a black, rumbling storm cloud and call down one lightning bolt. The bolt is a vertical line from the storm cloud to the ground below, dealing 4d12 electricity damage to creatures in the spell\'s area (basic Reflex save). The first time you Sustain the Spell each round, you can call another lightning bolt within the area. If you Cast this Spell outdoors, you can create two non-overlapping clouds instead of one, though you can still call down only one bolt per turn.  \r\n**Heightened (+1)**  The damage of each bolt increases by 1d12.',
      components: [
          'material',
          'somatic',
          'verbal'
      ]
  }
];

export interface SpellEntry {
  nethysUrl?: string;
  name: string;
  source: string;
  traits: string[];
  level: number;
  type?: string;
  cast?: string;
  action?: string[] | string;
  trigger?: string;
  area?: string;
  text?: string;
  components?: string[];
  componentsSeparator?: string;
  range?: string;
  targets?: string;
  duration?: string;
  'saving throw'?: string;
  requirements?: string;
  manual?: boolean;
  traditions?: string[];
  cost?: string;
  effect?: string;
  'patron theme'?: string;
  domain?: string;
  mystery?: string;
  lesson?: string;
  bloodline?: string;
};