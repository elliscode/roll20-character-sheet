const characterSheetDiv = document.createElement('div');

const CHARACTER_NAME = "Floyd";

const stats = {
  STR: { key: 'STR', display: 'Strength', check: "+2", proficiency: 'proficiency'},
  DEX: { key: 'DEX', display: 'Dexterity', check: "+3", proficiency: 'proficiency'},
  CON: { key: 'CON', display: 'Constitution', check: "+2", proficiency: 'not'},
  INT: { key: 'INT', display: 'Intelligence', check: "+1", proficiency: 'not'},
  WIS: { key: 'WIS', display: 'Wisdom', check: "+1", proficiency: 'not'},
  CHA: { key: 'CHA', display: 'Charisma', check: "+0", proficiency: 'not'}
};

const statRoll = `4d6dl1`;
const newCharacterStatRoll = `/ooc &{template:default} ` +
  `{{name=New Character Stat Rolls}} ` +
  `{{Roll 1=[[${statRoll}]]}} {{Roll 2=[[${statRoll}]]}} {{Roll 3=[[${statRoll}]]}} ` +
  `{{Roll 4=[[${statRoll}]]}} {{Roll 5=[[${statRoll}]]}} {{Roll 6=[[${statRoll}]]}} ` +
  `{{Source=[D&D Beyond Basic Rules](https://www.dndbeyond.com/sources/dnd/br-2024/creating-a-character#GenerateYourScores)}}`;
const huntersMark = `&{template:spell} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Hunter's Mark}} ` +
  `{{castingtime=1 bonus action}} ` +
  `{{range=90ft.}} ` +
  `{{duration=up to 1 hour}} ` +
  `{{level=1st Level Divination}} ` +
  `{{v=1}} ` +
  `{{concentration=1}} ` +
  `{{description=**Source:** [D&D Free Rules (2024)](https://www.dndbeyond.com/spells/2619166-hunters-mark) \nYou deal an extra [1d6](!\n) Force damage to the target whenever you hit it with an attack roll.}}`;
const huntersMove = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Move Hunter's Mark}} ` +
  `{{source=&#8193;[D&D Free Rules (2024)](https://www.dndbeyond.com/spells/2619166-hunters-mark)}} ` +
  `{{description=If the target drops to 0 Hit Points before this spell ends, you can take a Bonus Action to move the mark to a new creature you can see within range.}}`;
const huntersLore = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Hunter's Lore}} ` +
  `{{source=&#8193;[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/character-classes#Hunter)}} ` +
  `{{description=While a creature is marked by your Hunter's Mark, you know whether that creature has any Immunities, Resistances, or Vulnerabilities, and if the creature has any, you know what they are.}}`;
const savageAttacker = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Savage Attacker}} ` +
  `{{source=&#8193;[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/character-origins#Soldier)}} ` +
  `{{description=Once per turn when you hit a target with a weapon, you can roll the weapon's damage dice twice and use either roll against the target.}}`;
const huntersPrey = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Hunter's Prey}} ` +
  `{{source=&#8193;[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/character-classes#Hunter)}} ` +
  `{{description=You gain one of the following feature options of your choice: Colossus Slayer or Horde Breaker. Whenever you finish a Short or Long Rest, you can replace the chosen option with the other one.}}`;
const colossusSlayer = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Colossus Slayer}} ` +
  `{{source=&#8193;[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/character-classes#Level3HuntersPrey)}} ` +
  `{{description=Once per turn when you hit a creature with a weapon, the weapon deals an extra [1d8](!\n) damage to the target if it's missing any of its Hit Points.}}`;
const hordeBreaker = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Horde Breaker}} ` +
  `{{source=&#8193;[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/character-classes#Level3HuntersPrey)}} ` +
  `{{description=Once on each of your turns when you make an attack with a weapon, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target, that is within the weapon's range, and that you haven't attacked this turn.}}`;
const pushDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Push}} ` +
  `{{source=&#8193;[Dungeon Master's Guide (2024)](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#FirearmsTable)}} ` +
  `{{description=If you hit a creature with a Shotgun, you can push the creature up to 10 feet straight away from yourself if it is Large or smaller.}}`;
const slowDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Slow}} ` +
  `{{source=&#8193;[Dungeon Master's Guide (2024)](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#FirearmsTable)}} ` +
  `{{description=If you hit a creature with an Automatic Rifle and deal damage to it, you can reduce its Speed by 10 feet until the start of your next turn. If the creature is hit more than once by weapons that have this property, the Speed reduction doesn't exceed 10 feet.}}`;
const rifleDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=[Automatic Rifle, +2](" style="color:#6696de;)}} ` +
  `{{source=&#8193;[Dungeon Master's Guide (2024)](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#FirearmsTable)}} ` +
  `{{description=**Proficient**: Yes (Brian said so)\n**Attack Type**: Ranged\n**Range**: 80ft./240ft.\n**Damage**: [2d8](!\n)\n**Damage Type**: Piercing\n**Weight**: 8lb.\n**Cost**: --\n**Properties**: [Ammunition (Firearms)](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#Ammunition), [Range](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Range), [Reload](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#Reload) (30 shots), [Two-Handed](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#TwoHanded), [Burst Fire](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#BurstFire), [Slow](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Slow)\n You get [+2](!\n) to attack and damage with this weapon}}`;
const shotgunDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Shotgun}} ` +
  `{{source=&#8193;[Dungeon Master's Guide (2024)](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#FirearmsTable)}} ` +
  `{{description=**Proficient**: Yes (Brian said so)\n**Attack Type**: Ranged\n**Range**: 30ft./90ft.\n**Damage**: [2d8](!\n)\n**Damage Type**: Piercing\n**Weight**: 7lb.\n**Cost**: --\n**Properties**: [Ammunition (Firearms)](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#Ammunition), [Range](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Range), [Reload](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#Reload) (2 shots), [Two-Handed](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#TwoHanded), [Push](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Push)}}`;
const burstFireDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Burst Fire}} ` +
  `{{source=&#8193;[Dungeon Master's Guide (2024)](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#BurstFire)}} ` +
  `{{description=As an action, you can expend 10 pieces of a Burst Fire weapon's ammunition to spray shots in a 10-foot Cube within the weapon's normal range. Each creature in that area must succeed on a DC 15 Dexterity saving throw or take damage. Roll the weapon's damage once, and apply it to each creature that failed the save.}}`;
const reloadDescription = `&{template:spell} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Reload}} ` +
  `{{castingtime=1 bonus action}} ` +
  `{{m=1}} {{material=[Ammunition](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#Ammunition)}} ` +
  `{{description=**Source:** [Dungeon Master's Guide (2024)](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#Reload) \nYou can make a limited number of shots with a Reload weapon. You must then reload the weapon as an action or a Bonus Action.}}`;
const archeryDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Archery}} ` +
  `{{source=&#8193;[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/feats#Archery)}} ` +
  `{{description=Fighting Style Feat (Prerequisite: [Fighting Style Feature](https://www.dndbeyond.com/sources/dnd/free-rules/character-classes#Level2RangerFightingStyle))\n\nYou gain a [+2](!\n) bonus to attack rolls you make with Ranged weapons.}}`;
const extensionDescription = `/ooc &{template:traits} ` +
  `{{name=[Roll20 Character Sheet](https://github.com/elliscode/roll20-character-sheet" style="color:#7e2d40;)}} ` +
  `{{charname=elliscode}}` + 
  `{{source=&#8193;[GitHub](https://github.com/elliscode/roll20-character-sheet)}} ` +
  `{{description=On-screen character sheet overlay for use in Roll20, still a work in progress, and lots of stuff is still hardcoded for ${CHARACTER_NAME}.}}`;
const quantumRollDescription = `/ooc &{template:traits} ` +
  `{{name=[QuantumRoll](https://app.roll20.net/home/quantum" style="color:#7e2d40;)}} ` +
  `{{source=[roll20.net](https://app.roll20.net/home/quantum)}} ` +
  `{{description=Dice rolls on Roll20 are processed by QuantumRoll to provide true randomness in each roll. The engine itself is powered by a powerful, thoroughly-tested RNG, seeded by an [entropy source deriving from quantum fluctuations](http://en.wikipedia.org/wiki/Hardware_random_number_generator#Physical_phenomena_with_quantum-random_properties).}}`;
const sendingStoneDescription = `&{template:traits} ` + // https://www.dndbeyond.com/sources/dnd/dmg-2024/magic-items-a-z#SendingStones
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Sending Stone}} ` +
  `{{source=&#8193;[Dungeon Master's Guide (2024)](https://www.dndbeyond.com/sources/dnd/dmg-2024/magic-items-a-z#SendingStones)}} ` +
  `{{description=Brian said my brother has the other one.\n\nWhile you touch one stone, you can cast [Sending](https://www.dndbeyond.com/spells/2619015-sending) from it. \n\nOnce Sending is cast using either stone, the stones can't be used again until the next dawn.}}`;
const resourcefulDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Resourceful}} ` +
  `{{source=&#8193;[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/character-origins#HumanTraits)}} ` +
  `{{description=You gain Heroic Inspiration whenever you finish a Long Rest.}}`;
const daggerDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Dagger}} ` +
  `{{source=&#8193;[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#WeaponsTable)}} ` +
  `{{description=**Proficient**: Yes\n**Attack Type**: Melee\n**Reach**: 5ft.\n**Range**: 20ft./60ft.\n**Damage**: [1d4](!\n)\n**Damage Type**: Piercing\n**Weight**: 1 lb.\n**Cost**: 2 gp\n**Properties**: [Finesse](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Finesse), [Light](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Light), [Thrown](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Thrown), [Nick](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Nick)}}`;
const daggerOfVenomDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Dagger of Venom}} ` +
  `{{source=&#8193;[Dungeon Master's Guide (2024)](https://www.dndbeyond.com/sources/dnd/dmg-2024/magic-items-a-z#DaggerofVenom)}} ` +
  `{{description=**Proficient**: Yes\n**Attack Type**: Melee\n**Reach**: 5ft.\n**Range**: 20ft./60ft.\n**Damage**: [1d4](!\n)\n**Damage Type**: Piercing\n**Weight**: 1 lb.\n**Cost**: 2 gp\n**Properties**: [Finesse](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Finesse), [Light](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Light), [Thrown](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Thrown), [Nick](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Nick)\nYou can take a Bonus Action to magically coat the blade with poison. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a [DC 15](!\n) Constitution saving throw or take [2d10](!\n) Poison damage and have the Poisoned condition for 1 minute. The weapon can't be used this way again until the next dawn.}}`;
const unarmedStrikeDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Unarmed Strike}} ` +
  `{{source=&#8193;[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary#UnarmedStrike)}} ` +
  `{{description=Instead of using a weapon to make a melee attack, you can use a punch, kick, headbutt, or similar forceful blow.}}`;
const proficiencies = {
  not: {key: 'not', display: 'Not Proficient', bonus: '+0'},
  half: {key: 'half', display: 'Half Proficiency', bonus: '+1'},
  proficiency: {key: 'proficiency', display: 'Proficiency', bonus: '+3'},
  expertise: {key: 'expertise', display: 'Expertise', bonus: '+6'}
};
const weaponProperties = {
  ammunition: 'ammunition',
  burstFire: 'burstFire',
  range: 'range',
  finesse: 'finesse',
  light: 'light',
  thrown: 'thrown',
  nick: 'nick',
  push: 'push',
  reload: 'reload',
  slow: 'slow',
  twoHanded: 'two-handed'
}
const masteries = {
  push: "Mastery: [Push](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Push) \n",
  slow: "Mastery: [Slow](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Slow) \n"
}
const defaultCallbacks = {
  melee: [
    standardHitRoll,
    bonusHitModifier,
    standardDamageRoll,
    bonusDamageModifier,
    huntersMarkModifier,
    colossusSlayerModifier,
    hordeBreakerModifier,
    savageAttackModifier,
    daggerOfVenomModifier,
    squareBracketFormat,
    masteryModifier
  ],
  ranged: [
    standardHitRoll,
    bonusHitModifier,
    archeryModifier,
    standardDamageRoll,
    bonusDamageModifier,
    huntersMarkModifier,
    colossusSlayerModifier,
    hordeBreakerModifier,
    savageAttackModifier,
    squareBracketFormat,
    masteryModifier
  ],
  firearm: [
    expendShot,
    standardHitRoll,
    bonusHitModifier,
    archeryModifier,
    standardDamageRoll,
    bonusDamageModifier,
    huntersMarkModifier,
    colossusSlayerModifier,
    hordeBreakerModifier,
    savageAttackModifier,
    burstFireModifier,
    squareBracketFormat,
    masteryModifier
  ]
}
const weaponStats = {
  dagger: {
    proficiency: proficiencies.proficiency,
    stat: stats.DEX,
    damage: '1d4',
    name: 'Dagger',
    range: '20ft./60ft.',
    damageType: 'Piercing',
    callbacks: defaultCallbacks.melee,
    properties: [
      weaponProperties.finesse, 
      weaponProperties.light,
      weaponProperties.thrown,
      weaponProperties.nick
    ]
  },
  daggerOfVenom: {
    proficiency: proficiencies.proficiency,
    stat: stats.DEX,
    damage: '1d4',
    bonus: '+1',
    name: 'Dagger of Venom',
    range: '20ft./60ft.',
    damageType: 'Piercing',
    callbacks: defaultCallbacks.melee,
    properties: [
      weaponProperties.finesse, 
      weaponProperties.light,
      weaponProperties.thrown,
      weaponProperties.nick
    ]
  },
  shotgun: {
    proficiency: proficiencies.proficiency,
    stat: stats.DEX,
    damage: '2d8',
    name: 'Shotgun',
    range: '30ft./90ft.',
    shots: 2,
    damageType: 'Piercing',
    callbacks: defaultCallbacks.firearm,
    mastery: true,
    properties: [
      weaponProperties.ammunition, 
      weaponProperties.range,
      weaponProperties.reload,
      weaponProperties.twoHanded,
      weaponProperties.push
    ]
  },
  rifle: {
    proficiency: proficiencies.proficiency,
    stat: stats.DEX,
    damage: '2d8',
    bonus: '+2',
    name: 'Automatic Rifle, +2',
    range: '80ft./240ft.',
    shots: 30,
    damageType: 'Piercing',
    callbacks: defaultCallbacks.firearm,
    mastery: true,
    properties: [
      weaponProperties.ammunition, 
      weaponProperties.range,
      weaponProperties.reload,
      weaponProperties.twoHanded,
      weaponProperties.burstFire,
      weaponProperties.slow
    ]
  }, 
  unarmedStrike: {
    proficiency: proficiencies.proficiency,
    stat: stats.STR,
    damage: '3',
    name: 'Unarmed Strike',
    range: '5ft.',
    damageType: 'Bludgeoning',
    callbacks: [
      standardHitRoll,
      bonusHitModifier,
      unarmedStrikeDamageRoll,
      bonusDamageModifier,
      huntersMarkModifier,
      squareBracketFormat
    ],
    ignoreStatForDamage: true,
    properties: []
  }, 
  club: {
    proficiency: proficiencies.proficiency,
    stat: stats.STR,
    damage: '1d4',
    name: 'Club',
    range: '5ft.',
    damageType: 'Bludgeoning',
    callbacks: defaultCallbacks.melee,
    properties: [
      weaponProperties.light,
      weaponProperties.slow
    ]
  }
}
const rollTypes = {
  advantage: { display: 'Advantage', default: false },
  normal: { display: 'Normal', default: true },
  disadvantage: { display: 'Disadv', default: false }
}
const onOff = { on: true, off: false };

function buildUi() {
  characterSheetDiv.classList.add('character-sheet-extension');

  let conditionsDiv = document.createElement('div');
  {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.id = 'conditions-panel';
    buildConditionsPanel(panel);
    conditionsDiv.appendChild(panel);
  }
  {
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('flex-row');
    buttonsDiv.classList.add('flex-right');
    {
      const button = document.createElement('button');
      button.innerText = 'Conditions';
      button.setAttribute('for', 'conditions-panel');
      button.addEventListener('click', expandPanel);
      buttonsDiv.appendChild(button);
    }
    conditionsDiv.appendChild(buttonsDiv);
  }
  characterSheetDiv.appendChild(conditionsDiv);
  
  let skillsDiv = document.createElement('div');
  {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.id = 'skills-panel';
    buildSkillsPanel(panel);
    skillsDiv.appendChild(panel);
  }
  {
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('flex-row');
    buttonsDiv.classList.add('flex-right');
    {
      const button = document.createElement('button');
      button.innerText = 'Skills';
      button.setAttribute('for', 'skills-panel');
      button.addEventListener('click', expandPanel);
      buttonsDiv.appendChild(button);
    }
    skillsDiv.appendChild(buttonsDiv);
  }
  characterSheetDiv.appendChild(skillsDiv);

  let gunsDiv = document.createElement('div');
  {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.id = 'weapon-panel';
    buildWeaponsPanel(panel);
    gunsDiv.appendChild(panel);
  }
  {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.id = 'gun-panel';
    buildGunPanel(panel);
    gunsDiv.appendChild(panel);
  }
  {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.id = 'attack-panel';
    buildAttackPanel(panel);
    gunsDiv.appendChild(panel);
  }
  {
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('flex-row');
    buttonsDiv.classList.add('flex-right');
    {
      const button = document.createElement('button');
      button.innerText = 'Weapons';
      button.setAttribute('for', 'weapon-panel');
      button.addEventListener('click', expandPanel);
      buttonsDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'Guns';
      button.setAttribute('for', 'gun-panel');
      button.addEventListener('click', expandPanel);
      buttonsDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'Attack';
      button.setAttribute('for', 'attack-panel');
      button.addEventListener('click', expandPanel);
      buttonsDiv.appendChild(button);
    }
    gunsDiv.appendChild(buttonsDiv);
  }
  characterSheetDiv.appendChild(gunsDiv);

  let controlsDiv = document.createElement('div');
  {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.id = 'abilities-panel';
    buildAbilitiesPanel(panel);
    controlsDiv.appendChild(panel);
  }
  {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.id = 'roll-type-panel';
    buildRollTypePanel(panel);
    controlsDiv.appendChild(panel);
  }
  {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.id = 'misc-panel';
    buildMiscPanel(panel);
    controlsDiv.appendChild(panel);
  }
  {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.id = 'formatting-panel';
    buildFormattingPanel(panel);
    controlsDiv.appendChild(panel);
  }
  {
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('flex-row');
    buttonsDiv.classList.add('flex-right');
    {
      const button = document.createElement('button');
      button.innerText = 'Abilities';
      button.setAttribute('for', 'abilities-panel');
      button.addEventListener('click', expandPanel);
      buttonsDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'Roll Type';
      button.setAttribute('for', 'roll-type-panel');
      button.addEventListener('click', expandPanel);
      buttonsDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'Misc';
      button.setAttribute('for', 'misc-panel');
      button.addEventListener('click', expandPanel);
      buttonsDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'Format';
      button.setAttribute('for', 'formatting-panel');
      button.addEventListener('click', expandPanel);
      buttonsDiv.appendChild(button);
    }
    controlsDiv.appendChild(buttonsDiv);
  }
  characterSheetDiv.appendChild(controlsDiv);

  document.body.appendChild(characterSheetDiv);

  {
    let marqueeDiv = document.createElement('div');
    marqueeDiv.classList.add('character-sheet-extension-marquee');
    let marquee = document.createElement("marquee");
    marquee.innerText = "Don't forget to find interesting plants!";
    marqueeDiv.appendChild(marquee);
    document.body.appendChild(marqueeDiv);
  }

  getLocalStorage();
}

function buildWeaponsPanel(panel) {
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const button = document.createElement('button');
      button.innerText = 'Dagger';
      button.setAttribute('message', daggerDescription)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'M';
      button.setAttribute('weapon-key', 'dagger');
      button.setAttribute('attack-type', 'melee');
      button.addEventListener('click', rollWeapon);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'T';
      button.setAttribute('weapon-key', 'dagger');
      button.setAttribute('attack-type', 'thrown');
      button.addEventListener('click', rollWeapon);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  } 
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const button = document.createElement('button');
      button.innerText = 'Unarmed Strike';
      button.setAttribute('message', unarmedStrikeDescription);
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'M';
      button.setAttribute('weapon-key', 'unarmedStrike');
      button.setAttribute('attack-type', 'melee');
      button.addEventListener('click', rollWeapon);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  } 
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    thisDiv.classList.add('not-shown');
    {
      const button = document.createElement('button');
      button.innerText = 'Dagger of Venom';
      button.setAttribute('message', daggerOfVenomDescription)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'M';
      button.setAttribute('weapon-key', 'daggerOfVenom');
      button.setAttribute('attack-type', 'melee');
      button.addEventListener('click', rollWeapon);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'T';
      button.setAttribute('weapon-key', 'daggerOfVenom');
      button.setAttribute('attack-type', 'thrown');
      button.addEventListener('click', rollWeapon);
      thisDiv.appendChild(button);
    }
    {
      let input = document.createElement('input');
      input.type = 'checkbox';
      input.setAttribute('weapon-key', 'daggerOfVenom');
      input.setAttribute('effect-key', 'venom');
      thisDiv.appendChild(input);
    }
    panel.appendChild(thisDiv);
  } 
}

function buildConditionsPanel(panel) {
  addCondition(panel, "Blinded", `[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#BlindedCondition)`, `While you have the Blinded condition, you experience the following effects.\n\n**Can't See.** You can't see and automatically fail any ability check that requires sight.\n\n**Attacks Affected.** Attack rolls against you have Advantage, and your attack rolls have Disadvantage.`);
  addCondition(panel, "Charmed", `[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#CharmedCondition)`, `While you have the Charmed condition, you experience the following effects.\n\n**Can't Harm the Charmer.** You can't attack the charmer or target the charmer with damaging abilities or magical effects.\n\n**Social Advantage.** The charmer has Advantage on any ability check to interact with you socially.`);
  addCondition(panel, "Deafened", `[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#DeafenedCondition)`, `While you have the Deafened condition, you experience the following effect.\n\n**Can't Hear**. You can't hear and automatically fail any ability check that requires hearing.`);
  addCondition(panel, "Earplugged", `Brian said so`, `While you have the Earplugged condition, you experience the following effect.\n\n**Muffled Hearing**. You can't hear very well and have disadvantage on any ability check that requires hearing.`);
  addCondition(panel, "Frightened", `[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#FrightenedCondition)`, `While you have the Frightened condition, you experience the following effects.\n\n**Ability Checks and Attacks Affected.** You have Disadvantage on ability checks and attack rolls while the source of fear is within line of sight.\n\n**Can't Approach.** You can't willingly move closer to the source of fear.`);
  addCondition(panel, "Grappled", `[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#GrappledCondition)`, `While you have the Grappled condition, you experience the following effects.\n\n**Speed 0.** Your Speed is 0 and can't increase.\n\n**Attacks Affected.** You have Disadvantage on attack rolls against any target other than the grappler.\n\n**Movable.**  he grappler can drag or carry you when it moves, but every foot of movement costs it 1 extra foot unless you are Tiny or two or more sizes smaller than it.`);
  addCondition(panel, "Incapacitated", `[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#IncapacitatedCondition)`, `While you have the Incapacitated condition, you experience the following effects.\n\n**Inactive.** You can't take any action, Bonus Action, or Reaction.\n\n**No Concentration.** Your Concentration is broken.\n\n**Speechless.** You can't speak.\n\n**Surprised.** If you're Incapacitated when you roll Initiative, you have Disadvantage on the roll.`);
  addCondition(panel, "Invisible", `[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#InvisibleCondition)`, `While you have the Invisible condition, you experience the following effects.\n\n**Surprise.** If you're Invisible when you roll Initiative, you have Advantage on the roll.\n\n**Concealed.** You aren't affected by any effect that requires its target to be seen unless the effect's creator can somehow see you. Any equipment you are wearing or carrying is also concealed.\n\n**Attacks Affected.** Attack rolls against you have Disadvantage, and your attack rolls have Advantage. If a creature can somehow see you, you don't gain this benefit against that creature.`);
  addCondition(panel, "Paralyzed", `[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#ParalyzedCondition)`, `While you have the Paralyzed condition, you experience the following effects.\n\n**Incapacitated.** You have the Incapacitated condition.\n\n**Speed 0.** Your Speed is 0 and can't increase.\n\n**Saving Throws Affected.** You automatically fail Strength and Dexterity saving throws.\n\n**Attacks Affected.** Attack rolls against you have Advantage.\n\n**Automatic Critical Hits.** Any attack roll that hits you is a Critical Hit if the attacker is within 5 feet of you.`);
  addCondition(panel, "Petrified", `[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#PetrifiedCondition)`, `While you have the Petrified condition, you experience the following effects.\n\n**Turned to Inanimate Substance.** You are transformed, along with any nonmagical objects you are wearing and carrying, into a solid inanimate substance (usually stone). Your weight increases by a factor of ten, and you cease aging.\n\n**Incapacitated.** You have the Incapacitated condition.\n\n**Speed 0.** Your Speed is 0 and can't increase.\n\n**Attacks Affected.** Attack rolls against you have Advantage.\n\n**Saving Throws Affected.** You automatically fail Strength and Dexterity saving throws.\n\n**Resist Damage.** You have Resistance to all damage.\n\n**Poison Immunity.** You have Immunity to the Poisoned condition.`);
  addCondition(panel, "Poisoned", `[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#PoisonedCondition)`, `While you have the Poisoned condition, you experience the following effect.\n\n**Ability Checks and Attacks Affected.** You have Disadvantage on attack rolls and ability checks.`);
  addCondition(panel, "Prone", `[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#ProneCondition)`, `While you have the Prone condition, you experience the following effects.\n\n**Restricted Movement.** Your only movement options are to crawl or to spend an amount of movement equal to half your Speed (round down) to right yourself and thereby end the condition. If your Speed is 0, you can't right yourself.\n\n**Attacks Affected.** You have Disadvantage on attack rolls. An attack roll against you has Advantage if the attacker is within 5 feet of you. Otherwise, that attack roll has Disadvantage.`);
  addCondition(panel, "Restrained", `[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#RestrainedCondition)`, `While you have the Restrained condition, you experience the following effects.\n\n**Speed 0.** Your Speed is 0 and can't increase.\n\n**Attacks Affected.** Attack rolls against you have Advantage, and your attack rolls have Disadvantage.\n\n**Saving Throws Affected.** You have Disadvantage on Dexterity saving throws.`);
  addCondition(panel, "Stunned", `[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#StunnedCondition)`, `While you have the Stunned condition, you experience the following effects.\n\n**Incapacitated.** You have the Incapacitated condition.\n\n**Saving Throws Affected.** You automatically fail Strength and Dexterity saving throws.\n\n**Attacks Affected.** Attack rolls against you have Advantage.`);
  addCondition(panel, "Unconscious", `[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#UnconsciousCondition)`, `While you have the Unconscious condition, you experience the following effects.\n\n**Inert.** You have the Incapacitated and Prone conditions, and you drop whatever you're holding. When this condition ends, you remain Prone.\n\n**Speed 0.** Your Speed is 0 and can't increase.\n\n**Attacks Affected.** Attack rolls against you have Advantage.\n\n**Saving Throws Affected.** You automatically fail Strength and Dexterity saving throws.\n\n**Automatic Critical Hits.** Any attack roll that hits you is a Critical Hit if the attacker is within 5 feet of you.\n\n**Unaware.** You're unaware of your surroundings.`);
  {
    let label = document.createElement('label');
    let span = document.createElement('span');
    span.innerText = 'Exhaustion: ';
    span.classList.add('condition');
    span.classList.add('pointer');
    span.setAttribute('name', 'Exhaustion');
    span.setAttribute('description', 'While you have the Exhaustion condition, you experience the following effects.\n\n**Exhaustion Levels.** This condition is cumulative. Each time you receive it, you gain 1 Exhaustion level. You die if your Exhaustion level is 6.\n\n**D20 Tests Affected.** When you make a D20 Test, the roll is reduced by 2 times your Exhaustion level.\n\n**Speed Reduced.** Your Speed is reduced by a number of feet equal to 5 times your Exhaustion level.\n\n**Removing Exhaustion Levels.** Finishing a Long Rest removes 1 of your Exhaustion levels. When your Exhaustion level reaches 0, the condition ends.');
    span.setAttribute('link', '[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/rules-glossary#ExhaustionCondition)');
    span.addEventListener('click', displayConditionDescription);
    label.appendChild(span);
    let select = document.createElement('select');
    select.classList.add('exhaustion');
    select.addEventListener('change', displayConditions)
    for (let i of [0,1,2,3,4,5,6]) {
      let option = document.createElement('option');
      option.value = `${i}`;
      option.innerText = `${i}`;
      select.appendChild(option);
    }
    label.appendChild(select);
    panel.appendChild(label);
  }
}

function addCondition(panel, name, link, description) {
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    thisDiv.classList.add('condition');
    thisDiv.setAttribute('name', name);
    thisDiv.setAttribute('description', description);
    thisDiv.setAttribute('link', link);
    {
      let input = document.createElement('input');
      input.type = 'checkbox';
      input.classList.add('condition-checkbox');
      input.addEventListener('change', displayConditions);
      thisDiv.appendChild(input);
    }
    {
      let span = document.createElement('span');
      span.innerText = name;
      span.classList.add('pointer');
      span.addEventListener('click', displayConditionDescription);
      thisDiv.appendChild(span);
    }
    panel.appendChild(thisDiv);
  }
}

function displayConditions(event) {
  let message = '';
  let conditions = Array.from(document.querySelectorAll(`input.condition-checkbox[type="checkbox"]:checked`)).map(x=>findParentWithClass(x, 'condition').getAttribute('name'));
  let exhaustionLevel = parseInt(document.querySelector('select.exhaustion').value);
  if (exhaustionLevel > 0) {
    let exhaustionString = `Exhausted (Level ${exhaustionLevel})`
    conditions.push(exhaustionString);
  }
  if (conditions.length > 0) {
    message = `/em is: ${conditions.join(", ")}`;
  } else {
    message = `/em has no active conditions`;
  }
  characterSheetExtensionSendMessage(message);
  setLocalStorage();
}

function displayConditionDescription(event) {
  let condition = findParentWithClass(event.target, 'condition');
  let name = condition.getAttribute('name');
  let description = condition.getAttribute('description');
  let link = condition.getAttribute('link');
  let message = `&{template:traits} ` +
    `{{name=${name}}} ` +
    `{{source=${link}}} ` + 
    `{{description=${description}}}`;
  characterSheetExtensionSendMessage(message);
  setLocalStorage();
}

function buildSkillsPanel(panel) {
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.DEX, name: "Acrobatics"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.WIS, name: "Animal Handling"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.INT, name: "Arcana"});
  addSkill({panel: panel, proficiency: proficiencies.proficiency, modifier: stats.STR, name: "Athletics"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.CHA, name: "Deception"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.INT, name: "History"});
  addSkill({panel: panel, proficiency: proficiencies.proficiency, modifier: stats.WIS, name: "Insight", passive: 14});
  addSkill({panel: panel, proficiency: proficiencies.proficiency, modifier: stats.CHA, name: "Intimidation"});
  addSkill({panel: panel, proficiency: proficiencies.proficiency, modifier: stats.INT, name: "Investigation", passive: 14});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.WIS, name: "Medicine"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.INT, name: "Nature"});
  addSkill({panel: panel, proficiency: proficiencies.expertise, modifier: stats.WIS, name: "Perception", passive: 17});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.CHA, name: "Performance"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.CHA, name: "Persuasion"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.INT, name: "Religion"});
  addSkill({panel: panel, proficiency: proficiencies.proficiency, modifier: stats.DEX, name: "Sleight of Hand"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.DEX, name: "Stealth"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.WIS, name: "Survival"});
}
function addSkill({panel, proficiency, modifier, name, passive}) {
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    thisDiv.classList.add('skill');
    thisDiv.setAttribute('name', name);
    thisDiv.setAttribute('proficiencyKey', proficiency.key);
    thisDiv.setAttribute('proficiencyRoll', proficiency.bonus);
    thisDiv.setAttribute('proficiencyName', proficiency.display);
    thisDiv.setAttribute('statRoll', modifier.check);
    thisDiv.setAttribute('statName', modifier.display);
    if (passive) {
      thisDiv.setAttribute('passive', passive);
    }
    {
      let div = document.createElement('div');
      div.classList.add('proficiency-bubble');
      div.classList.add(proficiency.key);
      thisDiv.appendChild(div);
    }
    {
      let span = document.createElement('span');
      span.classList.add('skill-stat');
      span.innerText = modifier.key;
      thisDiv.appendChild(span);
    }
    {
      let span = document.createElement('span');
      span.classList.add('flex-fill');
      span.classList.add('pointer');
      span.addEventListener('click', rollSkill);
      span.innerText = name;
      thisDiv.appendChild(span);
    }
    {
      let calculatedBonus = parseInt(modifier.check) + parseInt(proficiency.bonus);
      let calculatedBonusString = calculatedBonus < 0 ? calculatedBonus.toString() : `+${calculatedBonus}`;

      let span = document.createElement('span');
      span.classList.add('pointer');
      span.addEventListener('click', rollSkill);
      span.innerText = calculatedBonusString;
      thisDiv.appendChild(span);
    }
    panel.appendChild(thisDiv);
  }
}
function getExhaustionString() {
  let exhaustionLevel = parseInt(document.querySelector('select.exhaustion').value);
  if (exhaustionLevel > 0) {
    return `-${exhaustionLevel*2}[Exhaustion]`
  } else {
    return '';
  }
}
function getExhaustionStringPlain() {
  let exhaustionLevel = parseInt(document.querySelector('select.exhaustion').value);
  if (exhaustionLevel > 0) {
    return `-${exhaustionLevel*2}`
  } else {
    return '';
  }
}
function rollSkill(event) {
  let message = getRollSkillMessage(event);
  
  characterSheetExtensionSendMessage(message);
  setLocalStorage();
}
function getRollSkillMessage(event) {
  let exhaustionString = getExhaustionString();
  let exhaustionStringPlain = getExhaustionStringPlain();
  let rollType = document.querySelector('input[name="roll-type"]:checked').value;
  let bonusHitName = document.querySelector('input[type="text"][id="bonus-hit-name"]').value;
  let bonusHit = document.querySelector('input[type="text"][id="bonus-hit"]').value;
  let skillDiv = findParentWithClass(event.target, 'skill');
  let name = skillDiv.getAttribute('name');
  let proficiencyKey = skillDiv.getAttribute('proficiencyKey');
  let proficiencyRoll = skillDiv.getAttribute('proficiencyRoll');
  let proficiencyName = skillDiv.getAttribute('proficiencyName');
  let statRoll = skillDiv.getAttribute('statRoll');
  let statName = skillDiv.getAttribute('statName');
  let passive = skillDiv.getAttribute('passive');

  let proficiencyHit = '';
  let proficiencyHitPlain = '';
  if (proficiencyKey != 'not') {
    proficiencyHit = `${proficiencyRoll}[${proficiencyName}]`;
    proficiencyHitPlain = proficiencyRoll;
  }

  let extraHit = '';
  let extraHitPlain = '';
  if (!!bonusHitName && !!bonusHit) {
    extraHit = `+${bonusHit}cs0cf0[${bonusHitName}]`;
    extraHitPlain = `+${bonusHit}`;
  }

  let message = `&{template:simple} `;
  // passive description if needed
  // if (passive) {
  //   message = `&{template:atk} ` + `{{desc=Passive ${name}: [${passive}](!\n) }} `;
  // }
  // floor roll if needed
  // /r {1d20+1[Wisdom]+6[Expertise],0d0+17[Passive]}kh1
  message += `{{charname=${CHARACTER_NAME}}} ` +
    `{{rname=${name}}} ` +
    `{{mod=${statRoll}${proficiencyHitPlain}${extraHitPlain}${exhaustionStringPlain}}} ` +
    `{{r1=[[1d20${statRoll}[${statName}]${proficiencyHit}${extraHit}${exhaustionString}]]}} ` +
    `{{${rollType}=1}} ` +
    `{{r2=[[1d20${statRoll}[${statName}]${proficiencyHit}${extraHit}${exhaustionString}]]}} `;
  
  return message;
}
function buildAttackPanel(panel) {
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const button = document.createElement('button');
      button.innerText = `H. Mark`;
      button.setAttribute('message', huntersMark)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = `Lore`;
      button.setAttribute('message', huntersLore)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = `Move`;
      button.setAttribute('message', huntersMove)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'hunters';
      input.value = 'on';
      label.appendChild(input);
      const span = document.createElement('span');
      span.innerText = 'On';
      label.appendChild(span);
      thisDiv.appendChild(label);
    }
    {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'hunters';
      input.value = 'off';
      input.checked = true;
      label.appendChild(input);
      const span = document.createElement('span');
      span.innerText = 'Off';
      label.appendChild(span);
      thisDiv.appendChild(label);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const button = document.createElement('button');
      button.innerText = 'Savage Attacker';
      button.setAttribute('message', savageAttacker)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const span = document.createElement('span');
      span.innerText = '(1 / turn)';
      thisDiv.appendChild(span);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'savage';
      input.value = 'on';
      label.appendChild(input);
      const span = document.createElement('span');
      span.innerText = 'On';
      label.appendChild(span);
      thisDiv.appendChild(label);
    }
    {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'savage';
      input.value = 'off';
      input.checked = true;
      label.appendChild(input);
      const span = document.createElement('span');
      span.innerText = 'Off';
      label.appendChild(span);
      thisDiv.appendChild(label);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const button = document.createElement('button');
      button.innerText = `Hunter's Prey`;
      button.setAttribute('message', huntersPrey)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const span = document.createElement('span');
      span.innerText = '(1 / turn)';
      thisDiv.appendChild(span);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const button = document.createElement('button');
      button.innerText = 'Colossus';
      button.setAttribute('message', colossusSlayer)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'Horde';
      button.setAttribute('message', hordeBreaker)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'colossus-horde';
      input.value = 'colossus';
      label.appendChild(input);
      const span = document.createElement('span');
      span.innerText = 'Colossus';
      label.appendChild(span);
      thisDiv.appendChild(label);
    }
    {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'colossus-horde';
      input.value = 'horde';
      label.appendChild(input);
      const span = document.createElement('span');
      span.innerText = 'Horde';
      label.appendChild(span);
      thisDiv.appendChild(label);
    }
    {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'colossus-horde';
      input.value = 'off';
      input.checked = true;
      label.appendChild(input);
      const span = document.createElement('span');
      span.innerText = 'Off';
      label.appendChild(span);
      thisDiv.appendChild(label);
    }
    panel.appendChild(thisDiv);
  }
}
function buildGunPanel(panel) {
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const button = document.createElement('button');
      button.innerText = `Shotgun`;
      button.setAttribute('message', shotgunDescription)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'R';
      button.setAttribute('weapon-key', 'shotgun');
      button.addEventListener('click', reloadFirearm);
      thisDiv.appendChild(button);
    }
    {
      const input = document.createElement('input');
      input.type = 'number';
      input.value = '0';
      input.classList.add('shots');
      input.setAttribute('weapon-key', 'shotgun');
      thisDiv.appendChild(input);
    }
    {
      const button = document.createElement('button');
      button.innerText = `S`;
      button.setAttribute('weapon-key', 'shotgun');
      button.setAttribute('attack-type', 'ranged');
      button.addEventListener('click', rollWeapon);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const button = document.createElement('button');
      button.innerText = 'Rifle';
      button.setAttribute('message', rifleDescription)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'R';
      button.setAttribute('weapon-key', 'rifle');
      button.addEventListener('click', reloadFirearm);
      thisDiv.appendChild(button);
    }
    {
      const input = document.createElement('input');
      input.type = 'number';
      input.value = '0';
      input.classList.add('shots');
      input.setAttribute('weapon-key', 'rifle');
      thisDiv.appendChild(input);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'S';
      button.setAttribute('weapon-key', 'rifle');
      button.setAttribute('attack-type', 'ranged');
      button.addEventListener('click', rollWeapon);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const button = document.createElement('button');
      button.innerText = `Burst Fire`;
      button.setAttribute('message', burstFireDescription)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const span = document.createElement('span');
      span.innerText = '(1 action)';
      thisDiv.appendChild(span);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'burst-fire';
      input.value = 'on';
      label.appendChild(input);
      const span = document.createElement('span');
      span.innerText = 'On';
      label.appendChild(span);
      thisDiv.appendChild(label);
    }
    {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'burst-fire';
      input.value = 'off';
      input.checked = true;
      label.appendChild(input);
      const span = document.createElement('span');
      span.innerText = 'Off';
      label.appendChild(span);
      thisDiv.appendChild(label);
    }
    panel.appendChild(thisDiv);
  }
  
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const button = document.createElement('button');
      button.innerText = 'Push';
      button.setAttribute('message', pushDescription);
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = `Slow`;
      button.setAttribute('message', slowDescription);
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const span = document.createElement('span');
      span.innerText = '(1 / turn)';
      thisDiv.appendChild(span);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'mastery';
      input.value = 'on';
      label.appendChild(input);
      const span = document.createElement('span');
      span.innerText = 'On';
      label.appendChild(span);
      thisDiv.appendChild(label);
    }
    {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'mastery';
      input.value = 'off';
      input.checked = true;
      label.appendChild(input);
      const span = document.createElement('span');
      span.innerText = 'Off';
      label.appendChild(span);
      thisDiv.appendChild(label);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const button = document.createElement('button');
      button.innerText = 'Reload';
      button.setAttribute('message', reloadDescription)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const input = document.createElement('input');
      input.type = 'number';
      input.value = '0';
      input.classList.add('ammo');
      thisDiv.appendChild(input);
    }
    {
      const button = document.createElement('button');
      button.innerText = `Ammo`;
      button.addEventListener('click', printCurrentAmmo);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
}

function buildAbilitiesPanel(panel) {
  let divs = {
    check: document.createElement('div'),
    save: document.createElement('div')
  };
  for (let type of ['check', 'save']) {
    let thisDiv = divs[type];
    thisDiv.classList.add('flex-row');
    for (let stat of Object.keys(stats)) {
      let button = document.createElement('button');
      button.classList.add('ability');
      button.classList.add(type);
      button.innerText = stat;
      button.setAttribute('roll', stats[stat][type]);
      button.addEventListener('click', rollAbility);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
}

function buildRollTypePanel(panel) {
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const span = document.createElement('span');
      span.innerText = `Don't forget to use your Inspiration!!`;
      thisDiv.appendChild(span);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    for (let type of Object.keys(rollTypes)) {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'roll-type';
      input.value = type;
      if (rollTypes[type].default) {
        input.checked = true;
      }
      label.appendChild(input);
      const span = document.createElement('span');
      span.innerText = rollTypes[type].display;
      label.appendChild(span);
      thisDiv.appendChild(label);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const input = document.createElement('input');
      input.type = 'text';
      input.id = 'bonus-hit-name';
      input.placeholder = 'To Hit: Name';
      thisDiv.appendChild(input);
    }
    {
      const input = document.createElement('input');
      input.type = 'text';
      input.id = 'bonus-hit';
      input.placeholder = 'To Hit: Roll';
      thisDiv.appendChild(input);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const input = document.createElement('input');
      input.type = 'text';
      input.id = 'bonus-damage-name';
      input.placeholder = 'Damage: Name';
      thisDiv.appendChild(input);
    }
    {
      const input = document.createElement('input');
      input.type = 'text';
      input.id = 'bonus-damage';
      input.placeholder = 'Damage: Roll';
      thisDiv.appendChild(input);
    }
    panel.appendChild(thisDiv);
  }
}

function buildMiscPanel(panel) {
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const button = document.createElement('button');
      button.innerText = 'Archery';
      button.setAttribute('message', archeryDescription);
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'Sending Stone';
      button.setAttribute('message', sendingStoneDescription);
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const button = document.createElement('button');
      button.innerText = 'Resourceful';
      button.setAttribute('message', resourcefulDescription);
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'Interesting Plants';
      button.addEventListener('click', interestingPlantsRoll);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
}
function interestingPlantsRoll(event) {
  let span = Array.from(document.querySelectorAll('span.pointer.flex-fill')).find(x=>x.innerText=='Perception');
  let rollSkillMessage = getRollSkillMessage({target: span});
  characterSheetExtensionSendMessage(`/em checks for interesting plants...\n/em ${rollSkillMessage}`);
}
function buildFormattingPanel(panel) {
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const button = document.createElement('button');
      button.innerText = 'Quantum';
      button.setAttribute('message', quantumRollDescription);
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'GitHub';
      button.setAttribute('message', extensionDescription)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'Stats Roll';
      button.setAttribute('message', newCharacterStatRoll)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const button = document.createElement('button');
      button.innerText = 'Down';
      button.setAttribute('message', `/em &darr;`)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'Up';
      button.setAttribute('message', `/em &uarr;`)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 't2ms';
      button.setAttribute('message', `/talktomyself`)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
}

function rollAbility(event) {
  let exhaustionString = getExhaustionString();
  let exhaustionStringPlain = getExhaustionStringPlain();
  let rollType = document.querySelector('input[name="roll-type"]:checked').value;
  let bonusHitName = document.querySelector('input[type="text"][id="bonus-hit-name"]').value;
  let bonusHit = document.querySelector('input[type="text"][id="bonus-hit"]').value;
  let ability = event.target.textContent;
  let displayName = stats[ability].display;
  let isSave = event.target.classList.contains('save');
  let typeString = isSave ? ' Save' : '';
  let rollString = `${stats[ability].check}[${displayName}]`;
  let rollStringPlain = stats[ability].check;
  let extraHit = '';
  let extraHitPlain = '';
  if (!!bonusHitName && !!bonusHit) {
    extraHit = `+${bonusHit}cs0cf0[${bonusHitName}]`;
    extraHitPlain = `+${bonusHit}`;
  }
  let proficiency = stats[ability].proficiency;
  let proficiencyHit = '';
  let proficiencyHitPlain = '';
  if (isSave && proficiency != 'not') {
    proficiencyHit = `${proficiencies[proficiency].bonus}[${proficiencies[proficiency].display}]`;
    proficiencyHitPlain = proficiencies[proficiency].bonus;
  }
  let message = `&{template:simple} ` +
    `{{charname=${CHARACTER_NAME}}} ` +
    `{{rname=${displayName}${typeString}}} ` +
    `{{mod=${rollStringPlain}${proficiencyHitPlain}${extraHitPlain}${exhaustionStringPlain}}} ` +
    `{{r1=[[1d20${rollString}${proficiencyHit}${extraHit}${exhaustionString}]]}} ` +
    `{{${rollType}=1}} ` +
    `{{r2=[[1d20${rollString}${proficiencyHit}${extraHit}${exhaustionString}]]}}`;
  characterSheetExtensionSendMessage(message);
  setLocalStorage();
}

function characterSheetExtensionPositionGui() {
  let right = window.innerWidth - parseInt(document.getElementById('babylonCanvas').getBoundingClientRect().width);
  let newValue = `${right}px`;
  if (characterSheetDiv.style.right != newValue) {
    characterSheetDiv.style.right = newValue;
  }
}

function characterSheetExtensionSendMessage(message) {
  if (message.target) {
    message = message.target.getAttribute('message');
  }
  document.querySelector('textarea[role="textarea"]').value = message.trim();
  document.getElementById('chatSendBtn').click();
}

function expandPanel(event) {
  let id = event.target.getAttribute('for');
  let element = document.getElementById(id);
  if (element.style.display != 'block') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

function setTalking(nameOfSpeaker) {
  let speakingAs = document.getElementById('speakingas');
  let desired = Array.from(speakingAs.querySelectorAll('option')).filter(x => x.value.startsWith('character|') && x.textContent == nameOfSpeaker)[0].value;
  speakingAs.value = desired;
}
function expendShot(event, d) {
  let thisWeaponKey = event.target.getAttribute('weapon-key');
  let thisWeaponStats = weaponStats[thisWeaponKey];

  let burstFireEnabled = onOff[document.querySelector('input[name="burst-fire"]:checked').value];
  let burstFireAllowed = thisWeaponStats.properties.includes(weaponProperties.burstFire);

  let shotsThatWouldBeSpent = 1;
  if (burstFireAllowed && burstFireEnabled) {
    shotsThatWouldBeSpent = 10;
  }

  let shotsInput = document.querySelector(`input.shots[type="number"][weapon-key="${thisWeaponKey}"]`);
  let previousAmmo = parseInt(shotsInput.value);
  let shotsThatWouldBeRemaining = previousAmmo - shotsThatWouldBeSpent;
  if (shotsThatWouldBeRemaining < 0) {
    reloadFirearm(event, d);
  }
 
  // recalculate and persist
  let shots = parseInt(shotsInput.value);
  shotsThatWouldBeRemaining = shots - shotsThatWouldBeSpent;
  if (shotsThatWouldBeRemaining < 0) {
    throw new Error('not enough shots error');
  }

  shotsInput.value = `${shotsThatWouldBeRemaining}`;
  
  d.desc += `${shotsThatWouldBeRemaining} of ${thisWeaponStats.shots} shots left (prev. ${previousAmmo}) \n`;
}
function standardHitRoll(event, d) {
  let thisWeaponKey = event.target.getAttribute('weapon-key');
  let thisWeaponStats = weaponStats[thisWeaponKey];

  let attackType = event.target.getAttribute('attack-type');
  let throwing = attackType == 'thrown';

  let mod = '';
  let modP = '';
  if (!!thisWeaponStats.bonus) {
    mod += `${thisWeaponStats.bonus}[Weapon]`;
    modP += thisWeaponStats.bonus;
  }
  mod += `${thisWeaponStats.stat.check}[${thisWeaponStats.stat.display}]`;
  modP += thisWeaponStats.stat.check;
  mod += `${thisWeaponStats.proficiency.bonus}[${thisWeaponStats.proficiency.display}]`;
  modP += thisWeaponStats.proficiency.bonus;

  let exhaustionString = getExhaustionString();
  let exhaustionStringPlain = getExhaustionStringPlain();

  if (!!exhaustionString) {
    mod += exhaustionString;
    modP += exhaustionStringPlain;
  }

  d.attack = '1';
  d.r1 = `1d20${mod}`
  d.r2 = `1d20${mod}`
  let rollType = document.querySelector('input[name="roll-type"]:checked').value;
  d[rollType] = "1"
  d.rname = thisWeaponStats.name;
  d.charname = CHARACTER_NAME;
  d.mod = modP;
  if (throwing) {
    d.range = thisWeaponStats.range;
  }
}
function bonusHitModifier(event, d) {
  let bonusHitName = document.querySelector('input[type="text"][id="bonus-hit-name"]').value;
  let bonusHit = document.querySelector('input[type="text"][id="bonus-hit"]').value;

  if (!!bonusHitName && !!bonusHit) {
    d.r1 += `+${bonusHit}cs0cf0[${bonusHitName}]`
    d.r2 += `+${bonusHit}cs0cf0[${bonusHitName}]`
    d.mod += `+${bonusHit}`;
    d.desc += `${bonusHitName} \n`
  }
}
function bonusDamageModifier(event, d) {
  let bonusDamageName = document.querySelector('input[type="text"][id="bonus-damage-name"]').value;
  let bonusDamage = document.querySelector('input[type="text"][id="bonus-damage"]').value;

  if (!!bonusDamageName && !!bonusDamage) {
    if (!d.dmg2flag) {
      d.dmg2flag = '1';
    } else {
      d.dmg2 += '+';
      d.crit2 += '+';
      d.dmg2type += ' + ';
    }
    d.dmg2 += `${bonusDamage}[${bonusDamageName}]`;
    d.crit2 += `${bonusDamage}[${bonusDamageName}]`;
    d.dmg2type += `${bonusDamageName}`
    d.desc += `${bonusDamageName} \n`;
  }
}
function archeryModifier(event, d) {
  d.r1 += `+2[Archery]`;
  d.r2 += `+2[Archery]`;
  d.mod += `+2`;
}
function standardDamageRoll(event, d) {
  let thisWeaponKey = event.target.getAttribute('weapon-key');
  let thisWeaponStats = weaponStats[thisWeaponKey];

  let thisDamage = thisWeaponStats.damage;
  if (!!thisWeaponStats.bonus) {
    thisDamage += `${thisWeaponStats.bonus}[Weapon]`
  }
  thisDamage += `${thisWeaponStats.stat.check}[${thisWeaponStats.stat.display}]`
  
  d.damage = '1';
  d.dmg1 = thisDamage;
  d.crit1 = thisWeaponStats.damage;
  d.dmg1flag = '1';
  d.dmg1type = thisWeaponStats.damageType;
}
function huntersMarkModifier(event, d) {
  let enabled = onOff[document.querySelector('input[name="hunters"]:checked').value];
  if (enabled) {
    if (!d.dmg2flag) {
      d.dmg2flag = '1';
    } else {
      d.dmg2 += '+';
      d.crit2 += '+';
      d.dmg2type += ' + ';
    }
    d.dmg2 += `1d6[Hunter&apos;s Mark]`;
    d.crit2 += `1d6[Hunter&apos;s Mark]`;
    d.dmg2type += `Force`
    d.desc += "Spell: [Hunter's Mark](https://www.dndbeyond.com/spells/2619166-hunters-mark) \n";
  }
}
function colossusSlayerModifier(event, d) {
  let thisWeaponKey = event.target.getAttribute('weapon-key');
  let thisWeaponStats = weaponStats[thisWeaponKey];

  let enabled = document.querySelector('input[name="colossus-horde"]:checked').value == 'colossus';
  if (enabled) {
    if (!d.dmg2flag) {
      d.dmg2flag = '1';
    } else {
      d.dmg2 += '+';
      d.crit2 += '+';
      d.dmg2type += ' + ';
    }
    d.dmg2 += `1d8[Colossus Slayer]`;
    d.crit2 += `1d8[Colossus Slayer]`;
    d.dmg2type += thisWeaponStats.damageType;
    d.desc += "Class Feat: [Colossus Slayer](https://www.dndbeyond.com/sources/dnd/free-rules/character-classes#Level3HuntersPrey) \n";
  }
}
function hordeBreakerModifier(event, d) {
  let enabled = document.querySelector('input[name="colossus-horde"]:checked').value == 'horde';
  if (enabled) {
    d.desc += "Class Feat: [Horde Breaker](https://www.dndbeyond.com/sources/dnd/free-rules/character-classes#Level3HuntersPrey) \n";
  }
}
function savageAttackModifier(event, d) {
  let enabled = onOff[document.querySelector('input[name="savage"]:checked').value];
  if (enabled && !!d.dmg1) {
    d.dmg1 = d.dmg1.replace(/(\d+d\d+)/g, "{$1,$1}kh1");
    d.crit1 = d.crit1.replace(/(\d+d\d+)/g, "{$1,$1}kh1");
    // according to the rules https://www.dndbeyond.com/sources/dnd/br-2024/feats#SavageAttacker
    // it is only the weapon's damage dice, not all the damage dice that get rerolled
    // 
    // d.dmg2 = d.dmg2.replace(/(\d+d\d+)/g, "{$1,$1}kh1");
    // d.crit2 = d.crit2.replace(/(\d+d\d+)/g, "{$1,$1}kh1");
    d.desc += "Feat: [Savage Attacker](https://www.dndbeyond.com/sources/dnd/free-rules/feats#SavageAttacker) \n";
  }
}
function burstFireModifier(event, d) {
  let thisWeaponKey = event.target.getAttribute('weapon-key');
  let thisWeaponStats = weaponStats[thisWeaponKey];

  let burstFireEnabled = onOff[document.querySelector('input[name="burst-fire"]:checked').value];
  let burstFireAllowed = thisWeaponStats.properties.includes(weaponProperties.burstFire);

  if (burstFireAllowed && burstFireEnabled) {
    d.mod = 'DC15';
    d.save = '1';
    d.saveattr = 'Dexterity';
    d.savedesc = 'Burst Fire';
    d.savedc = '15';
    d.desc += 'Weapon Property: [Burst Fire](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#BurstFire) \n';
    // also clear all the roll types
    Object.keys(rollTypes).forEach(x=>d[x] = '');
  }
}
function unarmedStrikeDamageRoll(event, d) {
  d.damage = '1';
  d.dmg1 = `1${stats.STR.check}[${stats.STR.display}]`;
  d.crit1 = ``;
  d.dmg1flag = '1';
  d.dmg1type = 'Bludgeoning';
}
function squareBracketFormat(event, d) {
  const squareBracketFields = ['dmg1', 'dmg2', 'hldmg', 'hldmgcrit', 'r1', 'r2'];
  for (let key of squareBracketFields) {
    if (!d[key]) {
      continue;
    }
    d[key] = `[[${d[key]}]]`;
  }
  const critFields = ['crit1', 'crit2'];
  for (let key of critFields) {
    if (!d[key]) {
      continue;
    }
    d[key] = `Crit: [[${d[key]}]]`;
  }
}
function masteryModifier(event, d) {
  let thisWeaponKey = event.target.getAttribute('weapon-key');
  let thisWeaponStats = weaponStats[thisWeaponKey];
  let enabled = onOff[document.querySelector('input[name="mastery"]:checked').value];
  
  if (enabled && thisWeaponStats.mastery) {
    let masteryKeys = new Set(Object.keys(masteries)); 
    let propertiesKeys = new Set(thisWeaponStats.properties);
    let matchingKey = masteryKeys.intersection(propertiesKeys);
    for (let key of matchingKey) {
      d.desc += masteries[key];
    }
  }
}
function daggerOfVenomModifier(event, d) {
  let thisWeaponKey = event.target.getAttribute('weapon-key');

  let checkbox = document.querySelector(`input[weapon-key="${thisWeaponKey}"][effect-key="venom"]:checked`);

  if (checkbox && checkbox.checked) {
    d.mod = 'DC15';
    d.save = '1';
    d.saveattr = 'Constitution';
    d.savedesc = 'Venom';
    d.savedc = '15';
    if (!d.dmg2flag) {
      d.dmg2flag = '1';
    } else {
      d.dmg2 += '+';
      d.crit2 += '+';
      d.dmg2type += ' + ';
    }
    d.dmg2 += `2d10[Venom]`;
    d.crit2 += `2d10[Venom]`;
    d.dmg2type += `Poison`;
    d.desc += 'Weapon Effect: [Venom](https://www.dndbeyond.com/magic-items/9228415-dagger-of-venom) \n';
  }
}
function rollWeapon(event) {
  let thisWeaponKey = event.target.getAttribute('weapon-key');
  let thisWeaponStats = weaponStats[thisWeaponKey];

  const d = {
    advantage: '',
    always: '',
    attack: '',
    charname: '',
    crit1: '',
    crit2: '',
    damage: '',
    desc: '',
    disadvantage: '',
    dmg1: '',
    dmg1flag: '',
    dmg1type: '',
    dmg2: '',
    dmg2flag: '',
    dmg2type: '',
    globalattack: '',
    globaldamage: '',
    globaldamagecrit: '',
    globaldamagetype: '',
    hldmg: '',
    hldmgcrit: '',
    innate: '',
    mod: '',
    normal: '',
    r1: '',
    r2: '',
    range: '',
    rname: '',
    save: '',
    saveattr: '',
    savedc: '',
    savedesc: '',
    extraMessages: [],
  };

  for (let callbackFunction of thisWeaponStats.callbacks) {
    callbackFunction(event, d);
  }

  let message = `&{template:atkdmg} `;
  for (let key of Object.keys(d)) {
    if (!d[key] || key == 'extraMessages') {
      continue;
    }
    message += `{{${key}=${d[key]}}} `;
  }

  characterSheetExtensionSendMessage(message);
  for (let i = 0; i < d.extraMessages.length; i++) {
    setTimeout(characterSheetExtensionSendMessage, (i + 1) * 1000, d.extraMessages[i]);
  }
  setLocalStorage();
}
function reloadFirearm(event, d) {
  let thisWeaponKey = event.target.getAttribute('weapon-key');
  let thisWeaponStats = weaponStats[thisWeaponKey];

  let ammoElement = document.querySelector('input.ammo[type="number"]');
  let ammo = parseInt(ammoElement.value);
  if (ammo <= 0) {
    characterSheetExtensionSendMessage(`/em doesn't have enough ammo to reload his ${thisWeaponStats.name}`);
    setLocalStorage();
    throw new Error('out of ammo error');
  }
  let shotsInput = document.querySelector(`input.shots[type="number"][weapon-key="${thisWeaponKey}"]`);
  let shots = parseInt(shotsInput.value);
  let bulletsToAdd = Math.min(Math.min(thisWeaponStats.shots - shots, thisWeaponStats.shots), ammo);
  if (bulletsToAdd > 0) {
    ammo = ammo - bulletsToAdd;
    shots = shots + bulletsToAdd;
    characterSheetExtensionSendMessage(
      `/em reloaded his ${thisWeaponStats.name} (${shots}/${thisWeaponStats.shots}), and has ${ammo} loose ammo remaining`
    );
    ammoElement.value = `${ammo}`;
    shotsInput.value = `${shots}`;
    setLocalStorage();
  }
}
function printCurrentAmmo(event) {
  let shotsInputs = Array.from(document.querySelectorAll('input.shots[type="number"]')).map(x=>x.getAttribute('weapon-key'));
  let ammo = parseInt(document.querySelector('input.ammo[type="number"]').value);
  let output = `/em checks his ammo, and has `;
  let sum = 0;
  for (let weaponKey of shotsInputs) {
    let shots = parseInt(document.querySelector(`input.shots[type="number"][weapon-key="${weaponKey}"]`).value);
    sum += shots;
    output += `${shots} in his ${weaponStats[weaponKey].name}, `
  }
  sum += ammo;
  output += `and ${ammo} loose, for a total of ${sum} ammo.`;
  characterSheetExtensionSendMessage(output);
  setLocalStorage();
}
function findParentWithClass(element, className) {
  let current = element;
  while (!!current) {
    if (current.classList.contains(className)) {
      return current;
    }
    current = current.parentElement;
  }
  return current;
}
function setLocalStorage() {
  localStorage.setItem('roll20charactersheet-memory', JSON.stringify({
    exhaustion: document.querySelector('select.exhaustion').value,
    conditions: Array.from(document.querySelectorAll('input.condition-checkbox[type="checkbox"]')).filter(x => x.checked).map(x => findParentWithClass(x, 'condition').getAttribute('name')),
    burstFire: document.querySelector('input[name="burst-fire"]:checked').value,
    huntersMark: document.querySelector('input[name="hunters"]:checked').value,
    savageAttacker: document.querySelector('input[name="savage"]:checked').value,
    huntersPrey: document.querySelector('input[name="colossus-horde"]:checked').value,
    weaponMastery: document.querySelector('input[name="mastery"]:checked').value,
    rollType: document.querySelector('input[name="roll-type"]:checked').value,
    bonusHitName: document.querySelector('input[type="text"][id="bonus-hit-name"]').value,
    bonusHit: document.querySelector('input[type="text"][id="bonus-hit"]').value,
    bonusDamageName: document.querySelector('input[type="text"][id="bonus-damage-name"]').value,
    bonusDamage: document.querySelector('input[type="text"][id="bonus-damage"]').value,
    ammo: document.querySelector('input.ammo[type="number"]').value,
    shotsShotgun: document.querySelector(`input.shots[type="number"][weapon-key="shotgun"]`).value,
    shotsRifle: document.querySelector(`input.shots[type="number"][weapon-key="rifle"]`).value
  }));
}
function getLocalStorage() {
  try {
    let savedData = localStorage.getItem('roll20charactersheet-memory');
    
    let d = JSON.parse(savedData);
    
    document.querySelector('select.exhaustion').value = d.exhaustion;
    d.conditions.forEach(x => {
      let element = document.querySelector(`div.condition[name="${x}"]`);
      if (!!element) {
        element.querySelector('input[type="checkbox"]').checked = true;
      }
    });
    document.querySelector(`input[name="burst-fire"][value=${d.burstFire}]`).checked = true;
    document.querySelector(`input[name="hunters"][value=${d.huntersMark}]`).checked = true;
    document.querySelector(`input[name="savage"][value=${d.savageAttacker}]`).checked = true;
    document.querySelector(`input[name="colossus-horde"][value=${d.huntersPrey}]`).checked = true;
    document.querySelector(`input[name="mastery"][value=${d.weaponMastery}]`).checked = true;
    document.querySelector(`input[name="roll-type"][value=${d.rollType}]`).checked = true;
    document.querySelector(`input[type="text"][id="bonus-hit-name"]`).value = d.bonusHitName;
    document.querySelector(`input[type="text"][id="bonus-hit"]`).value = d.bonusHit;
    document.querySelector(`input[type="text"][id="bonus-damage-name"]`).value = d.bonusDamageName;
    document.querySelector(`input[type="text"][id="bonus-damage"]`).value = d.bonusDamage;
    document.querySelector(`input.ammo[type="number"]`).value = d.ammo;
    document.querySelector(`input.shots[type="number"][weapon-key="shotgun"]`).value = d.shotsShotgun;
    document.querySelector(`input.shots[type="number"][weapon-key="rifle"]`).value = d.shotsRifle;
  } catch (e) {
    
  }
}
function checkIfShouldBuildUi(event) {
  if (!document.querySelector(`div.userscript-commandintro`)) {
    return;
  }
  clearInterval(checkInterval);
  buildUi(event);
  characterSheetExtensionPositionGui(event);
  characterSheetExtensionSendMessage('/talktomyself');
  setTalking(CHARACTER_NAME);
  repositionInterval = setInterval(characterSheetExtensionPositionGui, 1000);
}
const checkInterval = setInterval(checkIfShouldBuildUi, 100);
let repositionInterval = undefined;