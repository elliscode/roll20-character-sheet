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
  `{{name=Automatic Rifle}} ` +
  `{{source=&#8193;[Dungeon Master's Guide (2024)](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#FirearmsTable)}} ` +
  `{{description=**Proficient**: Yes (Brian said so)\n**Attack Type**: Ranged\n**Range**: 80ft./240ft.\n**Damage**: [2d8+3](!\n)\n**Damage Type**: Piercing\n**Weight**: 8lb.\n**Cost**: --\n**Properties**: [Ammunition (Firearms)](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#Ammunition), [Range](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Range), [Reload](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#Reload) (30 shots), [Two-Handed](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#TwoHanded), [Burst Fire](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#BurstFire), [Slow](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Slow)}}`;
const shotgunDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Shotgun}} ` +
  `{{source=&#8193;[Dungeon Master's Guide (2024)](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#FirearmsTable)}} ` +
  `{{description=**Proficient**: Yes (Brian said so)\n**Attack Type**: Ranged\n**Range**: 30ft./90ft.\n**Damage**: [2d8+3](!\n)\n**Damage Type**: Piercing\n**Weight**: 7lb.\n**Cost**: --\n**Properties**: [Ammunition (Firearms)](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#Ammunition), [Range](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Range), [Reload](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#Reload) (2 shots), [Two-Handed](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#TwoHanded), [Push](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Push)}}`;
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
  `{{description=Brian said I got one to send the all clear back to Iglan Thur.\n\nWhile you touch one stone, you can cast [Sending](https://www.dndbeyond.com/spells/2619015-sending) from it. The target is the bearer of the other stone. If no creature bears the other stone, you know that fact as soon as you use the stone, and you don't cast the spell.\n\nOnce Sending is cast using either stone, the stones can't be used again until the next dawn. If one of the stones in a pair is destroyed, the other one becomes nonmagical.}}`;
const resourcefulDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Resourceful}} ` +
  `{{source=&#8193;[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/character-origins#HumanTraits)}} ` +
  `{{description=You gain Heroic Inspiration whenever you finish a Long Rest.}}`;
const daggerDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Dagger}} ` +
  `{{source=&#8193;[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#WeaponsTable)}} ` +
  `{{description=**Proficient**: Yes\n**Attack Type**: Melee\n**Reach**: 5ft.\n**Range**: 20ft./60ft.\n**Damage**: [1d4+3](!\n)\n**Damage Type**: Piercing\n**Weight**: 1 lb.\n**Cost**: 2 gp\n**Properties**: [Finesse](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Finesse), [Light](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Light), [Thrown](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Thrown), [Nick](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Nick)}}`;
const proficiencies = {
  not: {key: 'not', display: 'Not Proficient', bonus: '+0'},
  half: {key: 'half', display: 'Half Proficiency', bonus: '+1'},
  proficiency: {key: 'proficiency', display: 'Proficiency', bonus: '+2'},
  expertise: {key: 'expertise', display: 'Expertise', bonus: '+4'}
};
const weaponStats = {
  dagger: {
    proficiency: proficiencies.proficiency,
    stat: stats.DEX,
    damage: '1d4',
    name: 'Dagger',
    range: '20ft./60ft.'
  }
}

const rollTypes = {
  advantage: { display: 'Advantage', default: false },
  normal: { display: 'Normal', default: true },
  disadvantage: { display: 'Disadv', default: false }
}

const rname = { rifle: "Automatic Rifle", shotgun: "Shotgun" };
const range = { rifle: "80ft./240ft.", shotgun: "30ft./90ft." }
const dmg1 = {
  rifle: { on: "{2d8,2d8}kh1+3", off: "2d8+3"},
  shotgun: { on: "{2d8,2d8}kh1+3", off: "2d8+3"}
};
const weaponAmmo = {
  rifle: { shots: 30 },
  shotgun: { shots: 2 },
};
const masteries = { rifle: "Mastery: [Slow (Auto. Rifle)](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Slow)", shotgun: "Mastery: [Push (Shotgun)](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Push)" }
const onOff = { on: true, off: false };
const regularHit = `${stats.DEX.check}[${stats.DEX.display}]${proficiencies.proficiency.bonus}[${proficiencies.proficiency.display}]+2[Archery]`
const regularHitPlain = "+3+2+2"

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

  // let weaponsDiv = document.createElement('div');
  // {
  //   const panel = document.createElement('div');
  //   panel.classList.add('panel');
  //   panel.id = 'weapon-panel';
  //   buildWeaponsPanel(panel);
  //   weaponsDiv.appendChild(panel);
  // }
  // {
  //   const buttonsDiv = document.createElement('div');
  //   buttonsDiv.classList.add('flex-row');
  //   buttonsDiv.classList.add('flex-right');
  //   {
  //     const button = document.createElement('button');
  //     button.innerText = 'Weapons';
  //     button.setAttribute('for', 'weapon-panel');
  //     button.addEventListener('click', expandPanel);
  //     buttonsDiv.appendChild(button);
  //   }
  //   weaponsDiv.appendChild(buttonsDiv);
  // }
  // characterSheetDiv.appendChild(weaponsDiv);

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
      button.innerText = 'Roll';
      button.setAttribute('weapon-key', 'dagger');
      button.addEventListener('click', rollWeapon);
      thisDiv.appendChild(button);
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
  addSkill({panel: panel, proficiency: proficiencies.proficiency, modifier: stats.WIS, name: "Insight"});
  addSkill({panel: panel, proficiency: proficiencies.proficiency, modifier: stats.CHA, name: "Intimidation"});
  addSkill({panel: panel, proficiency: proficiencies.proficiency, modifier: stats.INT, name: "Investigation"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.WIS, name: "Medicine"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.INT, name: "Nature"});
  addSkill({panel: panel, proficiency: proficiencies.expertise, modifier: stats.WIS, name: "Perception"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.CHA, name: "Performance"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.CHA, name: "Persuasion"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.INT, name: "Religion"});
  addSkill({panel: panel, proficiency: proficiencies.proficiency, modifier: stats.DEX, name: "Sleight of Hand"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.DEX, name: "Stealth"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.WIS, name: "Survival"});
}
function addSkill({panel, proficiency, modifier, name}) {
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

  let message = `&{template:simple} ` +
    `{{charname=${CHARACTER_NAME}}} ` +
    `{{rname=${name}}} ` +
    `{{mod=${statRoll}${proficiencyHitPlain}${extraHitPlain}${exhaustionStringPlain}}} ` +
    `{{r1=[[1d20${statRoll}[${statName}]${proficiencyHit}${extraHit}${exhaustionString}]]}} ` +
    `{{${rollType}=1}} ` +
    `{{r2=[[1d20${statRoll}[${statName}]${proficiencyHit}${extraHit}${exhaustionString}]]}}`;

  characterSheetExtensionSendMessage(message);
  setLocalStorage();
}
function buildAttackPanel(panel) {
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const button = document.createElement('button');
      button.innerText = `Hunter's Mark`;
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
      button.innerText = 'Colossus Slayer';
      button.setAttribute('message', colossusSlayer)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'Horde Breaker';
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
      button.innerText = 'Rifle';
      button.setAttribute('message', rifleDescription)
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
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const input = document.createElement('input');
      input.type = 'number';
      input.value = '0';
      input.classList.add('shots');
      input.classList.add('shotgun');
      thisDiv.appendChild(input);
    }
    {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'weapon';
      input.value = 'shotgun';
      input.checked = true;
      label.appendChild(input);
      const span = document.createElement('span');
      span.innerText = 'Shotgun';
      label.appendChild(span);
      thisDiv.appendChild(label);
    }
    {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'weapon';
      input.value = 'rifle';
      label.appendChild(input);
      const span = document.createElement('span');
      span.innerText = 'Rifle';
      label.appendChild(span);
      thisDiv.appendChild(label);
    }
    {
      const input = document.createElement('input');
      input.type = 'number';
      input.value = '0';
      input.classList.add('shots');
      input.classList.add('rifle');
      thisDiv.appendChild(input);
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
      button.innerText = 'Roll';
      button.addEventListener('click', rollFirearm);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'Reload';
      button.addEventListener('click', reloadFirearm);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'Desc';
      button.setAttribute('message', reloadDescription)
      button.addEventListener('click', characterSheetExtensionSendMessage);
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
    panel.appendChild(thisDiv);
  }
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
  characterSheetDiv.style.right = `${right}px`
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

function rollWeapon(event) {
  let exhaustionString = getExhaustionString();
  let exhaustionStringPlain = getExhaustionStringPlain();
  let rollType = document.querySelector('input[name="roll-type"]:checked').value;

  let thisWeaponKey = event.target.getAttribute('weapon-key');
  let thisWeaponStats = weaponStats[thisWeaponKey];
  let colossusHorde = document.querySelector('input[name="colossus-horde"]:checked').value;
  let savage = document.querySelector('input[name="savage"]:checked').value;
  let hunters = document.querySelector('input[name="hunters"]:checked').value;
  let bonusHitName = document.querySelector('input[type="text"][id="bonus-hit-name"]').value;
  let bonusDamageName = document.querySelector('input[type="text"][id="bonus-damage-name"]').value;
  let bonusHit = document.querySelector('input[type="text"][id="bonus-hit"]').value;
  let bonusDamage = document.querySelector('input[type="text"][id="bonus-damage"]').value;

  let extraDesc = [];

  let extraDamage = '';
  if ((!!bonusDamageName && !!bonusDamage) || onOff[hunters] || colossusHorde == 'colossus') {
    let rolls = [];
    let names = [];
    if (!!bonusDamageName && !!bonusDamage) {
      extraDesc.push(bonusDamageName);
      names.push(bonusDamageName);
      rolls.push(bonusDamage);
    }
    if (colossusHorde == 'colossus') {
      names.push("Colossus Slayer (Piercing)");
      rolls.push('1d8');
    }
    if (onOff[hunters]) {
      names.push("Hunter's Mark (Force)");
      rolls.push('1d6');
    }
    extraDamage = `{{dmg2flag=1}} {{dmg2=[[${rolls.join("+")}]]}} {{dmg2type=${names.join(" + ")}}} {{crit2=Crit: [[${rolls.join("+")}]]}} `;
  }

  let extraHit = '';
  let extraHitPlain = '';
  if (!!bonusHitName && !!bonusHit) {
    extraDesc.push(bonusHitName);
    extraHit = `+${bonusHit}cs0cf0[${bonusHitName}]`;
    extraHitPlain = `+${bonusHit}`;
  }

  let descText = [
    onOff[hunters] ? "Spell: [Hunter's Mark](https://www.dndbeyond.com/spells/2619166-hunters-mark)" : "",
    onOff[savage] ? "Feat: [Savage Attacker](https://www.dndbeyond.com/sources/dnd/free-rules/feats#SavageAttacker)" : "",
    colossusHorde == 'colossus' ? "Class Feat: [Colossus Slayer](https://www.dndbeyond.com/sources/dnd/free-rules/character-classes#Level3HuntersPrey)" : "",
    colossusHorde == 'horde' ? "Class Feat: [Horde Breaker](https://www.dndbeyond.com/sources/dnd/free-rules/character-classes#Level3HuntersPrey)" : "",
    ...extraDesc
  ].filter(x=>!!x).join(" \n");

  let thisHitPlain = `${thisWeaponStats.stat.check}${thisWeaponStats.proficiency.bonus}`
  let thisHit = `${thisWeaponStats.stat.check}[${thisWeaponStats.stat.display}]${thisWeaponStats.proficiency.bonus}[${thisWeaponStats.proficiency.display}]`

  let thisDamage = `${thisWeaponStats.damage}${thisWeaponStats.stat.check}`;
  if (onOff[savage]) {
    thisDamage = `{${thisWeaponStats.damage},${thisWeaponStats.damage}}kh1${thisWeaponStats.stat.check}[${thisWeaponStats.stat.display}]`;
  }

  let message =
    `&{template:atkdmg}} {{charname=${CHARACTER_NAME}}} {{rname=${thisWeaponStats.name}}} ` +
    `{{mod=${thisHitPlain}${extraHitPlain}${exhaustionStringPlain}}} ` + 
    `{{r1=[[1d20${thisHit}${extraHit}${exhaustionString}]]}} {{attack=1}} {{range=${thisWeaponStats.range}}} ` +
    `{{damage=1}} {{dmg1flag=1}} {{dmg1=[[${thisDamage}]]}} {{dmg1type=Piercing}} {{crit1=Crit: [[${thisDamage}]]}} ` +
    extraDamage +
    `{{${rollType}=1}} ` + 
    `{{r2=[[1d20${thisHit}${extraHit}${exhaustionString}]]}} ` +
    (!!descText ? `{{desc=` + descText + `}}` : '');

  characterSheetExtensionSendMessage(message);
  shotsInput.value = `${shots}`;
  setLocalStorage();
}

function rollFirearm(event) {
  let exhaustionString = getExhaustionString();
  let exhaustionStringPlain = getExhaustionStringPlain();
  let rollType = document.querySelector('input[name="roll-type"]:checked').value;

  let weapon = document.querySelector('input[name="weapon"]:checked').value;
  let colossusHorde = document.querySelector('input[name="colossus-horde"]:checked').value;
  let savage = document.querySelector('input[name="savage"]:checked').value;
  let hunters = document.querySelector('input[name="hunters"]:checked').value;
  let mastery = document.querySelector('input[name="mastery"]:checked').value;
  let burstFire = document.querySelector('input[name="burst-fire"]:checked').value;
  let shotsInput = document.querySelector(`input.shots.${weapon}[type="number"]`);
  let shots = parseInt(shotsInput.value);

  let burstFireEnabled = onOff[burstFire] && weapon == 'rifle';

  let bonusHitName = document.querySelector('input[type="text"][id="bonus-hit-name"]').value;
  let bonusDamageName = document.querySelector('input[type="text"][id="bonus-damage-name"]').value;
  let bonusHit = document.querySelector('input[type="text"][id="bonus-hit"]').value;
  let bonusDamage = document.querySelector('input[type="text"][id="bonus-damage"]').value;

  let bulletsToSpend = 1;
  if (burstFireEnabled) {
    bulletsToSpend = 10;
  }
  let whatMyAmmoWouldBe = shots - bulletsToSpend;
  if (whatMyAmmoWouldBe < 0) {
    reloadFirearm();
    shots = parseInt(shotsInput.value);
  }
  let previousAmmo = shots;
  if (shots - bulletsToSpend < 0) {
    characterSheetExtensionSendMessage(`/em doesn't have enough ammo to fire his ${rname[weapon]}`);
    setLocalStorage();
    return;
  }
  shots = shots - bulletsToSpend;


  let extraDesc = [];

  let extraDamage = '';
  if ((!!bonusDamageName && !!bonusDamage) || onOff[hunters] || colossusHorde == 'colossus') {
    let rolls = [];
    let names = [];
    if (!!bonusDamageName && !!bonusDamage) {
      extraDesc.push(bonusDamageName);
      names.push(bonusDamageName);
      rolls.push(bonusDamage);
    }
    if (colossusHorde == 'colossus') {
      names.push("Colossus Slayer (Piercing)");
      rolls.push('1d8');
    }
    if (onOff[hunters]) {
      names.push("Hunter's Mark (Force)");
      rolls.push('1d6');
    }
    extraDamage = `{{dmg2flag=1}} {{dmg2=[[${rolls.join("+")}]]}} {{dmg2type=${names.join(" + ")}}} {{crit2=Crit: [[${rolls.join("+")}]]}} `;
  }

  let extraHit = '';
  let extraHitPlain = '';
  if (!!bonusHitName && !!bonusHit) {
    extraDesc.push(bonusHitName);
    extraHit = `+${bonusHit}cs0cf0[${bonusHitName}]`;
    extraHitPlain = `+${bonusHit}`;
  }

  extraDesc.push(`${shots} of ${weaponAmmo[weapon].shots} shots left (prev. ${previousAmmo})`);
  if (shots == 0) {
    extraDesc.push(`[Reload](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#Reload) before next use`);
  }

  let descText = [
    onOff[hunters] ? "Spell: [Hunter's Mark](https://www.dndbeyond.com/spells/2619166-hunters-mark)" : "",
    onOff[savage] ? "Feat: [Savage Attacker](https://www.dndbeyond.com/sources/dnd/free-rules/feats#SavageAttacker)" : "",
    colossusHorde == 'colossus' ? "Class Feat: [Colossus Slayer](https://www.dndbeyond.com/sources/dnd/free-rules/character-classes#Level3HuntersPrey)" : "",
    colossusHorde == 'horde' ? "Class Feat: [Horde Breaker](https://www.dndbeyond.com/sources/dnd/free-rules/character-classes#Level3HuntersPrey)" : "",
    onOff[mastery] ? masteries[weapon] : '',
    burstFireEnabled ? 'Weapon Property: [Burst Fire](https://www.dndbeyond.com/sources/dnd/dmg-2024/dms-toolbox#BurstFire)' : '',
    ...extraDesc
  ].filter(x=>!!x).join(" \n");

  let message =
    `&{template:atkdmg}}` + (burstFireEnabled ? `{{save=1}} {{saveattr=Dexterity}} {{savedesc=Burst Fire}} {{savedc=15}}` : '') + ` \n` + 
    `&{template:atkdmg}} {{charname=${CHARACTER_NAME}}} {{rname=${rname[weapon]}}} ` +
    (burstFireEnabled ? '{{mod=DC15}}' : `{{mod=${regularHitPlain}${extraHitPlain}${exhaustionStringPlain}}} `) + `{{r1=[[1d20${regularHit}${extraHit}${exhaustionString}]]}} {{attack=1}} {{range=${range[weapon]}}} ` +
    `{{damage=1}} {{dmg1flag=1}} {{dmg1=[[${dmg1[weapon][savage]}]]}} {{dmg1type=Piercing}} {{crit1=Crit: [[${dmg1[weapon][savage]}]]}} ` +
    extraDamage +
    (burstFireEnabled ? '' : `{{${rollType}=1}} `) + `{{r2=[[1d20${regularHit}${extraHit}${exhaustionString}]]}} ` +
    (!!descText ? `{{desc=` + descText + `}}` : '');

  characterSheetExtensionSendMessage(message);
  shotsInput.value = `${shots}`;
  setLocalStorage();
}
function reloadFirearm() {
  let ammoElement = document.querySelector('input.ammo[type="number"]');
  let ammo = parseInt(ammoElement.value);
  let weapon = document.querySelector('input[name="weapon"]:checked').value;
  if (ammo <= 0) {
    characterSheetExtensionSendMessage(`/em doesn't have enough ammo to reload his ${rname[weapon]}`);
    setLocalStorage();
    return;
  }
  let shotsInput = document.querySelector(`input.shots.${weapon}[type="number"]`);
  let shots = parseInt(shotsInput.value);
  let bulletsToAdd = Math.min(Math.min(weaponAmmo[weapon].shots - shots, weaponAmmo[weapon].shots), ammo);
  if (bulletsToAdd > 0) {
    ammo = ammo - bulletsToAdd;
    shots = shots + bulletsToAdd;
    characterSheetExtensionSendMessage(
      `/em reloaded his ${rname[weapon]} (${shots}/${weaponAmmo[weapon].shots}), and has ${ammo} loose ammo remaining`
    );
    ammoElement.value = `${ammo}`;
    shotsInput.value = `${shots}`;
    setLocalStorage();
  }
}
function printCurrentAmmo(event) {
  let ammo = parseInt(document.querySelector('input.ammo[type="number"]').value);
  let output = `/em checks his ammo, and has `;
  let sum = 0;
  for (let weapon of Object.keys(rname)) {
    let shots = parseInt(document.querySelector(`input.shots.${weapon}[type="number"]`).value);
    sum += shots;
    output += `${shots} in his ${rname[weapon]}, `
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
    weapon: document.querySelector('input[name="weapon"]:checked').value,
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
    shotsShotgun: document.querySelector(`input.shots.shotgun[type="number"]`).value,
    shotsRifle: document.querySelector(`input.shots.rifle[type="number"]`).value
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
    document.querySelector(`input[name="weapon"][value=${d.weapon}]`).checked = true;
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
    document.querySelector(`input.shots.shotgun[type="number"]`).value = d.shotsShotgun;
    document.querySelector(`input.shots.rifle[type="number"]`).value = d.shotsRifle;
  } catch (e) {
    
  }
}
setTimeout(buildUi, 4900);
setInterval(characterSheetExtensionPositionGui, 5000);
setTimeout(characterSheetExtensionSendMessage, 5000, '/talktomyself');
setTimeout(setTalking, 5100, CHARACTER_NAME);