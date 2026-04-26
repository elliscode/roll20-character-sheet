const characterSheetDiv = document.createElement('div');

const CHARACTER_NAME = "Brum";

const colors = {
  blue: `" style="color:#285eb2;`
}
const stats = {
  STR: { key: 'STR', display: 'Strength', check: "+5", proficiency: 'proficiency'},
  DEX: { key: 'DEX', display: 'Dexterity', check: "+3", proficiency: 'not'},
  CON: { key: 'CON', display: 'Constitution', check: "+4", proficiency: 'proficiency'},
  INT: { key: 'INT', display: 'Intelligence', check: "-2", proficiency: 'not'},
  WIS: { key: 'WIS', display: 'Wisdom', check: "+3", proficiency: 'not'},
  CHA: { key: 'CHA', display: 'Charisma', check: "-1", proficiency: 'not'}
};
const proficiencies = {
  not: {key: 'not', display: 'Not Proficient', bonus: '+0'},
  half: {key: 'half', display: 'Half Proficiency', bonus: '+1'},
  proficiency: {key: 'proficiency', display: 'Proficiency', bonus: '+3'},
  expertise: {key: 'expertise', display: 'Expertise', bonus: '+6'}
};
const statRoll = `4d6dl1`;
const newCharacterStatRoll = `/ooc &{template:default} ` +
  `{{name=New Character Stat Rolls}} ` +
  `{{Roll 1=[[${statRoll}]]}} {{Roll 2=[[${statRoll}]]}} {{Roll 3=[[${statRoll}]]}} ` +
  `{{Roll 4=[[${statRoll}]]}} {{Roll 5=[[${statRoll}]]}} {{Roll 6=[[${statRoll}]]}} ` +
  `{{Source=[D&D Beyond Basic Rules](https://www.dndbeyond.com/sources/dnd/br-2024/creating-a-character#GenerateYourScores)}}`;
const recklessAttackDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Reckless Attack}} ` +
  `{{source=&#8193;[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/br-2024/character-classes#Level2RecklessAttack)}} ` +
  `{{description=When you make your first attack roll on your turn, you can decide to attack recklessly. Doing so gives you Advantage on attack rolls using Strength until the start of your next turn, but attack rolls against you have Advantage during that time.}}`;
const instinctivePounceDescription = `&{template:traits} ` +
  `{{charname=Brum}} ` +
  `{{name=Instinctive Pounce}} ` +
  `{{source=&#8193;[PHB (2024)](https://www.dndbeyond.com/sources/dnd/phb-2024/character-classes#Level7InstinctivePounce)}} ` +
  `{{description=As part of the Bonus Action you take to enter your Rage, you can move up to half your Speed.}}`;
const extensionDescription = `/ooc &{template:traits} ` +
  `{{name=[Roll20 Character Sheet](https://github.com/elliscode/roll20-character-sheet" style="color:#7e2d40;)}} ` +
  `{{charname=elliscode}}` + 
  `{{source=&#8193;[GitHub](https://github.com/elliscode/roll20-character-sheet)}} ` +
  `{{description=On-screen character sheet overlay for use in Roll20, still a work in progress, and lots of stuff is still hardcoded for ${CHARACTER_NAME}.}}`;
const quantumRollDescription = `/ooc &{template:traits} ` +
  `{{name=[QuantumRoll](https://app.roll20.net/home/quantum" style="color:#7e2d40;)}} ` +
  `{{source=[roll20.net](https://app.roll20.net/home/quantum)}} ` +
  `{{description=Dice rolls on Roll20 are processed by QuantumRoll to provide true randomness in each roll. The engine itself is powered by a powerful, thoroughly-tested RNG, seeded by an [entropy source deriving from quantum fluctuations](http://en.wikipedia.org/wiki/Hardware_random_number_generator#Physical_phenomena_with_quantum-random_properties).}}`;
const resourcefulDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Resourceful}} ` +
  `{{source=&#8193;[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/character-origins#HumanTraits)}} ` +
  `{{description=You gain Heroic Inspiration whenever you finish a Long Rest.}}`;
const unarmedStrikeDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Unarmed Strike}} ` +
  `{{source=&#8193;[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/br-2024/rules-glossary#UnarmedStrike)}} ` +
  `{{description=Instead of using a weapon to make a melee attack, you can use a punch, kick, headbutt, or similar forceful blow.}}`;
const greataxePlusTwoDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=[Greataxe, +2](${colors.blue})}} ` +
  `{{source=&#8193;[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#WeaponsTable)}} ` +
  `{{description=**Proficient**: Yes\n**Attack Type**: Melee\n**Reach**: 5ft.\n**Range**: 20ft./60ft.\n**Damage**: [1d12](!\n)\n**Damage Type**: Slashing\n**Weight**: 7 lb.\n**Cost**: --\n**Properties**: [Heavy](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Heavy), [Two-Handed](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#TwoHanded), [Cleave](https://www.dndbeyond.com/sources/dnd/free-rules/equipment#Cleave)\nYou have a [+2](!\n) bonus to attack and damage rolls made with this magic weapon.\n}}`;
const rageDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Rage}} ` +
  `{{source=&#8193;[D&D Free Rules (2024)](https://www.dndbeyond.com/sources/dnd/br-2024/character-classes#Level1Rage)}} ` +
  `{{description=You can take a Bonus action to enter Rage if you aren't wearing Heavy Armor. While active, your Rage follows these rules:\n&#8193;[Damage Resistance](https://www.dndbeyond.com/sources/dnd/br-2024/character-classes#Level1Rage)\n&#8193;[Rage Damage](https://www.dndbeyond.com/sources/dnd/br-2024/character-classes#Level1Rage)\n&#8193;[Strength Advantage](https://www.dndbeyond.com/sources/dnd/br-2024/character-classes#Level1Rage)\n&#8193;[No Concentration or Spells](https://www.dndbeyond.com/sources/dnd/br-2024/character-classes#Level1Rage)\n&#8193;[Vitality of the Tree](https://www.dndbeyond.com/sources/dnd/phb-2024/character-classes#Level3VitalityoftheTree)}}`;
const vitalityOfTheTreeHealthRoll = `&{template:dmg} {{charname=${CHARACTER_NAME}}} {{rname=Vitality of the Tree}} {{range=10ft.}} {{desc=Components: V}} {{damage=1}} {{dmg1flag=1}} {{dmg1= [[2d6]]}} {{dmg1type=Healing}}`;
const vitalityOfTheTreeDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Vitality of the Tree}} ` +
  `{{source=&#8193;[PHB (2024)](https://www.dndbeyond.com/sources/dnd/phb-2024/character-classes#Level3VitalityoftheTree)}} ` +
  `{{description=When you activate your Rage, you gain [8](!\n) Temporary HP\n\nAt the start of each of your turns while your Rage is active, you can choose another creature within 10 ft. of you to gain [2d6](!\n${sanitizeCommand(vitalityOfTheTreeHealthRoll)}) Temporary HP.\n\nIf any of these Temporary HP remain when your Rage ends, they vanish.}}`;
  //(DC 8 plus your Strength modifier and Proficiency Bonus) 
const branchesOfTheTreeSave = `${8+parseInt(stats['STR'].check)+parseInt(proficiencies.proficiency.bonus)}`;
const branchesOfTheTreeRoll = `&{template:dmg} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{rname=Branches of the Tree}} ` +
  `{{range=30ft.}} ` +
  `{{desc=Components: S}} ` +
  `{{save=1}} ` +
  `{{saveattr=${stats['STR'].display}}} ` +
  `{{savedc=${branchesOfTheTreeSave}}}`;
const branchesOfTheTreeDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Branches of the Tree}} ` +
  `{{source=&#8193;[PHB (2024)](https://www.dndbeyond.com/sources/dnd/phb-2024/character-classes#Level6BranchesoftheTree)}} ` +
  `{{description=Whenever a creature you can see **starts its turn** within 30 feet of you while your Rage is active, you can take a **Reaction** to summon spectral branches of the World Tree around it. \n\nThe target must succeed on a [DC${branchesOfTheTreeSave}](!\n${sanitizeCommand(branchesOfTheTreeRoll)}) **Strength** saving throw or be teleported to an unoccupied space you can see within 5 feet of yourself or in the nearest unoccupied space you can see. \n\nAfter the target teleports, you can **reduce its Speed to 0** until the end of the current turn.}}`;
const extraAttackDescription = `&{template:traits} ` +
  `{{charname=Brum}} ` +
  `{{name=Extra Attack}} ` +
  `{{source=&#8193;[PHB (2024)](https://www.dndbeyond.com/sources/dnd/phb-2024/character-classes#Level5ExtraAttack)}}}} ` +
  `{{description=You can attack twice instead of once whenever you take the Attack action on your turn.}}`;
const initiativeRoll = `&{template:simple} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{rname=Initiative}} ` +
  `{{mod=${stats['DEX'].check}}} ` +
  `{{r1=[[2d20kh1${stats['DEX'].check}[${stats['DEX'].display}] &{tracker}]] (Advantage)}} ` +
  `{{normal=1}}`;
const cleaveDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Cleave (Greataxe)}} ` +
  `{{source=&#8193;[PHB (2024)](https://www.dndbeyond.com/sources/dnd/br-2024/equipment#Cleave)}} ` +
  `{{description=Your training with weapons allows you to use the mastery property of Greataxes:\n**Cleave.** If you hit a creature with a melee attack roll using a Greataxe, you can make a melee attack roll with the Greataxe against a second creature within 5 feet of the first that is also within your reach. \n\nOn a hit, the second creature takes the Greataxe's damage, but **don't add your ability modifier to that damage unless that modifier is negative**. You can make this extra attack only **once per turn.**}}`;
const hewDescription = `&{template:traits} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Hew}} ` +
  `{{source=&#8193;[PHB (2024)](https://www.dndbeyond.com/sources/dnd/phb-2024/feats#GreatWeaponMaster)}} ` +
  `{{description=Immediately after you score a **Critical Hit with a Melee weapon or reduce a creature to 0 Hit Points** with one, you can make **one attack** with the same weapon as a **Bonus Action**.}}`;
const modifiers = {
  spellcasting: {key: 'spellcasting', display: 'Spell Casting Modifier', check: '+1', proficiency: 'proficiency'},
};
const specificSkillBonuses = {
  arcana: [
  ],
  nature: [
  ]
}
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
  twoHanded: 'two-handed',
  heavy: 'heavy',
  martial: 'martial'
}
const defaultCallbacks = {
  melee: [
    standardHitRoll,
    bonusHitModifier,
    standardDamageRoll,
    bonusDamageModifier,
    rageModifier,
    squareBracketFormat
  ],
  multiAttack: [
    standardHitRoll,
    bonusHitModifier,
    multiAttackDamageRoll,
    rageModifier,
    squareBracketFormat
  ],
  ranged: [
    standardHitRoll,
    bonusHitModifier,
    archeryModifier,
    standardDamageRoll,
    bonusDamageModifier,
    squareBracketFormat
  ],
  rangedAttackSpell: [
    spellHitRoll,
    bonusHitModifier,
    standardDamageRoll,
    bonusDamageModifier,
    squareBracketFormat
  ]
}
const attackStats = {
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
      squareBracketFormat
    ],
    ignoreStatForDamage: true,
    properties: []
  }, 
  greataxePlusTwo: {
    proficiency: proficiencies.proficiency,
    stat: stats.STR,
    damage: '1d12',
    bonus: '+2',
    name: `[Greataxe, +2](${colors.blue})`,
    range: '5ft.',
    damageType: 'Slashing',
    callbacks: defaultCallbacks.melee,
    properties: [
      weaponProperties.heavy,
      weaponProperties.twoHanded,
      weaponProperties.martial
    ]
  },
  greataxePlusTwoMultiAttack: {
    proficiency: proficiencies.proficiency,
    stat: stats.STR,
    damage: '1d12',
    bonus: '+2',
    name: `[Greataxe, +2](${colors.blue})`,
    range: '5ft.',
    damageType: 'Slashing',
    callbacks: defaultCallbacks.multiAttack,
    properties: [
      weaponProperties.heavy,
      weaponProperties.twoHanded,
      weaponProperties.martial
    ]
  }
}
const rollTypes = {
  advantage: { display: 'Advantage', default: false },
  normal: { display: 'Normal', default: true },
  disadvantage: { display: 'Disadv', default: false }
}
const onOff = { on: true, off: false };
function sanitizeCommand(text) {
  const stringArray = [];
  for (i = text.length - 1; i >= 0; i--) {
    let char = text.charCodeAt(i);
    if ((48 <= char && char <= 57)
        || (65 <= char && char <= 90)
        || (97 <= char && char <= 122)
        || char == ':'.charCodeAt(0)
        || char == ' '.charCodeAt(0)
        || char == ','.charCodeAt(0)
        || char == '='.charCodeAt(0)
        || char == '+'.charCodeAt(0)) {
      stringArray.unshift(text.charAt(i));
    } else {
      stringArray.unshift(`&#${char};`);
    }
  }
  return stringArray.join('');
}
function bullet(inputString) {
  return `[&bull; ${inputString}](" style="padding-left:1em;color:black;text-decoration:none;cursor:text;display:block;text-indent:-0.625em;)`
}
function levelPlace(levelInt) {
  if (typeof myVariable === 'string') {
    return levelInt;
  }
  let suffix = 'th';
  if (levelInt == 1) {
    suffix = 'st';
  } else if (levelInt == 2) {
    suffix = 'nd';
  } else if (levelInt == 3) {
    suffix = 'rd';
  }
  return `${levelInt}${suffix}`;
}

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
    panel.id = 'spell-slots-panel';
    buildSpellSlotsPanel(panel);
    skillsDiv.appendChild(panel);
  }
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
      button.innerText = 'Spell Slots';
      button.setAttribute('for', 'spell-slots-panel');
      button.addEventListener('click', expandPanel);
      buttonsDiv.appendChild(button);
    }
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

  // let spellsDiv = document.createElement('div');

  // {
  //   const buttonsDiv = document.createElement('div');
  //   buttonsDiv.classList.add('flex-row');
  //   buttonsDiv.classList.add('flex-right');

  //   spellsDiv.appendChild(buttonsDiv);
  // }
  // characterSheetDiv.appendChild(spellsDiv);

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
    panel.id = 'attack-panel';
    buildAttackPanel(panel);
    gunsDiv.appendChild(panel);
  }
  {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.id = 'spells-panel';
    buildSpellsPanel(panel);
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
      button.innerText = 'Attack';
      button.setAttribute('for', 'attack-panel');
      button.addEventListener('click', expandPanel);
      buttonsDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'Spells';
      button.setAttribute('for', 'spells-panel');
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
    panel.id = 'buffs-panel';
    buildBuffsPanel(panel);
    controlsDiv.appendChild(panel);
  }
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
      button.innerText = 'Buffs';
      button.setAttribute('for', 'buffs-panel');
      button.addEventListener('click', expandPanel);
      buttonsDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'Ablts';
      button.setAttribute('for', 'abilities-panel');
      button.addEventListener('click', expandPanel);
      buttonsDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'Roll';
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
      button.innerText = 'Fmt';
      button.setAttribute('for', 'formatting-panel');
      button.addEventListener('click', expandPanel);
      buttonsDiv.appendChild(button);
    }
    controlsDiv.appendChild(buttonsDiv);
  }
  characterSheetDiv.appendChild(controlsDiv);

  document.body.appendChild(characterSheetDiv);

  {
    const marqueeSpaces = `&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;&#8193;`;
    let marqueeDiv = document.createElement('div');
    marqueeDiv.classList.add('character-sheet-extension-marquee');
    let marquee = document.createElement("div");
    let span = document.createElement('span');
    span.innerHTML = `You get 2 attacks!!` +
      `${marqueeSpaces}` +
      `You need to use Cleave! You can attack twice!!` +
      `${marqueeSpaces}` +
      `Make sure you use your rage healing!!! Heal your party members!!!` +
      `${marqueeSpaces}` +
      `Don't forget to use your inspiration!!!` +
      `${marqueeSpaces}` +
      `You have resistance to damages!!` +
      `${marqueeSpaces}` +
      `You can move when you rage!!` +
      `${marqueeSpaces}` +
      `If you crit or kill, you get to attack again!!`;
    span.classList.add('rainbow-text');
    marquee.appendChild(span);
    marquee.classList.add('marquee');
    marquee.classList.add('rainbow-text');
    marqueeDiv.appendChild(marquee);
    document.body.appendChild(marqueeDiv);
  }

  getLocalStorage();
}

function toggleRage(event) {
  let message = '';
  let isRaging = Array.from(document.querySelectorAll(`input#rage:checked`)).length > 0;
  if (isRaging) {
    message = `/em has activated his Rage`;
  } else {
    message = `/em has deactivated his Rage`;
  }
  characterSheetExtensionSendMessage(message);
  setLocalStorage();
}

function displayActiveRageDescription(event) {
  
}

function buildSpellsPanel(panel) {
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const button = document.createElement('button');
      button.innerText = `Rage`;
      button.setAttribute('message', rageDescription)
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    {
      let input = document.createElement('input');
      input.type = 'checkbox';
      input.id='rage';
      input.addEventListener('change', toggleRage);
      thisDiv.appendChild(input);
    }
    {
      let span = document.createElement('span');
      span.innerText = name;
      span.classList.add('pointer');
      span.addEventListener('click', displayActiveRageDescription);
      thisDiv.appendChild(span);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const button = document.createElement('button');
      button.innerText = `Vitality of the Tree`;
      button.setAttribute('message', vitalityOfTheTreeDescription)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = `H`;
      button.setAttribute('message', vitalityOfTheTreeHealthRoll)
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
      button.innerText = `Branches of the Tree`;
      button.setAttribute('message', branchesOfTheTreeDescription)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = `H`;
      button.setAttribute('message', branchesOfTheTreeRoll)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
//https://www.dndbeyond.com/sources/dnd/phb-2024/character-classes#Level6BranchesoftheTree
  
}

function buildWeaponsPanel(panel) {
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const button = document.createElement('button');
      button.innerText = 'Greataxe, +2';
      button.setAttribute('message', greataxePlusTwoDescription)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'M';
      button.setAttribute('weapon-key', 'greataxePlusTwo');
      button.setAttribute('attack-type', 'melee');
      button.addEventListener('click', rollWeapon);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'C';
      button.setAttribute('weapon-key', 'greataxePlusTwoMultiAttack');
      button.setAttribute('attack-type', 'melee');
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
function toggleSpellSlot(event) {
  const turnOn = !event.target.classList.contains('spent');
  let spellSlotRow = findParentWithClass(event.target, 'spell-slot-row');
  if (turnOn) {
    let itemToTurn = spellSlotRow.querySelector('div.spell-slot:not(.spent)');
    if (itemToTurn) {
      itemToTurn.classList.add('spent');
      setLocalStorage();
      return true;
    }
  } else {
    let itemToTurn = Array.from(spellSlotRow.querySelectorAll('div.spell-slot.spent'));
    if (itemToTurn.length > 0) {
      itemToTurn[itemToTurn.length - 1].classList.remove('spent');
      setLocalStorage();
      return true;
    }
  }
  return false;
}
function castSpell(event) {
  const ignoreSlots = document.getElementById('textchat-notifier').style.display != 'none';
  if (!ignoreSlots && ['Rage', '1','2','3','4','5','6','7','8','9'].includes(event.target.textContent)) {
    let levelInt = event.target.textContent;
    let spellSlotRow = document.querySelector(`.spell-slot-row[spell-slot="${levelInt}"]`);
    if (!spellSlotRow) {
      characterSheetExtensionSendMessage(`/em does not have ${levelPlace(levelInt)} level spell slots!`);
      return;
    }
    let unspentSlot = spellSlotRow.querySelector('div.spell-slot:not(.spent)');
    if (!unspentSlot && ['Rage'].includes(levelInt)) {
      // try again with level 1 spell slot
      levelInt = '1';
      spellSlotRow = document.querySelector(`.spell-slot-row[spell-slot="${levelInt}"]`);
      unspentSlot = spellSlotRow.querySelector('div.spell-slot:not(.spent)');
    }
    if (!unspentSlot) {
      characterSheetExtensionSendMessage(`/em does not have any ${levelPlace(levelInt)} level spell slots remaining!`);
      return;
    }
    toggleSpellSlot({target: unspentSlot});
  }
  if (event.target.hasAttribute('damage') && event.target.hasAttribute('weapon-key')) {
    attackStats[event.target.getAttribute('weapon-key')].damage = event.target.getAttribute('damage');
  }
  characterSheetExtensionSendMessage(event);
}
function buildSpellSlotsPanel(panel) {
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    thisDiv.classList.add('spell-slot-row');
    thisDiv.setAttribute('spell-slot', 'Rage');
    {
      const el = document.createElement('label');
      el.innerText = `Rage`;
      thisDiv.appendChild(el);
    }
    {
      const el = document.createElement('div');
      el.classList.add('spell-slot');
      el.addEventListener('click', toggleSpellSlot);
      thisDiv.appendChild(el);
    }
    {
      const el = document.createElement('div');
      el.classList.add('spell-slot');
      el.addEventListener('click', toggleSpellSlot);
      thisDiv.appendChild(el);
    }
    {
      const el = document.createElement('div');
      el.classList.add('spell-slot');
      el.addEventListener('click', toggleSpellSlot);
      thisDiv.appendChild(el);
    }
    {
      const el = document.createElement('div');
      el.classList.add('spell-slot');
      el.addEventListener('click', toggleSpellSlot);
      thisDiv.appendChild(el);
    }
    {
      const el = document.createElement('label');
      el.innerText = `/ Long Rest`;
      el.style.marginLeft = '10px';
      thisDiv.appendChild(el);
    }
    panel.appendChild(thisDiv);
  }
}
function clearSpellSlots(event) {
  const spentSlots = Array.from(document.querySelectorAll('div.spell-slot.spent'));
  spentSlots.forEach(function (slot) {
    slot.classList.remove('spent');
  });
  setLocalStorage();
}
function buildSkillsPanel(panel) {
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.DEX, name: "Acrobatics"});
  addSkill({panel: panel, proficiency: proficiencies.proficiency, modifier: stats.WIS, name: "Animal Handling"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.INT, name: "Arcana"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.STR, name: "Athletics"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.CHA, name: "Deception"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.INT, name: "History"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.WIS, name: "Insight", passive: 14});
  addSkill({panel: panel, proficiency: proficiencies.proficiency, modifier: stats.CHA, name: "Intimidation"});
  addSkill({panel: panel, proficiency: proficiencies.proficiency, modifier: stats.INT, name: "Investigation", passive: 14});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.WIS, name: "Medicine"});
  addSkill({panel: panel, proficiency: proficiencies.proficiency, modifier: stats.INT, name: "Nature"});
  addSkill({panel: panel, proficiency: proficiencies.proficiency, modifier: stats.WIS, name: "Perception", passive: 17});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.CHA, name: "Performance"});
  addSkill({panel: panel, proficiency: proficiencies.proficiency, modifier: stats.CHA, name: "Persuasion"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.INT, name: "Religion"});
  addSkill({panel: panel, proficiency: proficiencies.not, modifier: stats.DEX, name: "Sleight of Hand"});
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
      let specificBonusTotal = 0;
      let specificBonuses = specificSkillBonuses[name.toLowerCase()]
      if (!!specificBonuses && specificBonuses.length > 0) {
        for (let bonusItem of specificBonuses) {
          specificBonusTotal += parseInt(bonusItem.bonus);
        }
      }

      let calculatedBonus = parseInt(modifier.check) + parseInt(proficiency.bonus) + specificBonusTotal;
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
  let isRaging = Array.from(document.querySelectorAll(`input#rage:checked`)).length > 0;
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
  if (isRaging && statName == 'Strength') {
    rollType = 'advantage';
  }
  let passive = skillDiv.getAttribute('passive');
  let specificBonuses = specificSkillBonuses[name.toLowerCase()]

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

  let specificBonus = '';
  let specificBonusPlain = '';
  if (!!specificBonuses && specificBonuses.length > 0) {
    for (let bonusItem of specificBonuses) {
      specificBonus += `${bonusItem.bonus}[${bonusItem.name}]`;
      specificBonusPlain += `${bonusItem.bonus}`;
    }
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
    `{{mod=${statRoll}${proficiencyHitPlain}${extraHitPlain}${specificBonusPlain}${exhaustionStringPlain}}} ` +
    `{{r1=[[1d20${statRoll}[${statName}]${proficiencyHit}${extraHit}${specificBonus}${exhaustionString}]]}} ` +
    `{{${rollType}=1}} ` +
    `{{r2=[[1d20${statRoll}[${statName}]${proficiencyHit}${extraHit}${specificBonus}${exhaustionString}]]}} `;
  
  return message;
}
function buildAttackPanel(panel) {
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');{
      const button = document.createElement('button');
      button.innerText = 'Initiative';
      button.setAttribute('message', initiativeRoll);
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'Reckless Attack';
      button.setAttribute('message', recklessAttackDescription);
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');{
      const button = document.createElement('button');
      button.innerText = 'Instinctive Pounce (+20ft)';
      button.setAttribute('message', instinctivePounceDescription);
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
      button.innerText = 'Cleave';
      button.setAttribute('message', cleaveDescription);
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'Hew';
      button.setAttribute('message', hewDescription);
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
}
function buildGunPanel(panel) {
}

function buildBuffsPanel(panel) {
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const el = document.createElement('textarea');
      el.innerText = ``;
      el.placeholder = `No buffs currently applied...`;
      el.style.height = '100px'; 
      el.style.width = '231px';
      thisDiv.appendChild(el);
    }
    panel.appendChild(thisDiv);
  }
}

function buildAbilitiesPanel(panel) {
  let isRaging = Array.from(document.querySelectorAll(`input#rage:checked`)).length > 0;
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
      button.innerText = 'Resourceful';
      button.setAttribute('message', resourcefulDescription);
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.innerText = 'Extra Attack';
      button.setAttribute('message', extraAttackDescription);
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
  let ability = event.target.textContent;
  let isRaging = Array.from(document.querySelectorAll(`input#rage:checked`)).length > 0;
  let exhaustionString = getExhaustionString();
  let exhaustionStringPlain = getExhaustionStringPlain();
  let rollType = document.querySelector('input[name="roll-type"]:checked').value;
  if ((isRaging && ability == 'STR') || ability == 'DEX') {
    rollType = 'advantage';
  }
  let bonusHitName = document.querySelector('input[type="text"][id="bonus-hit-name"]').value;
  let bonusHit = document.querySelector('input[type="text"][id="bonus-hit"]').value;
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
  console.log(`Sending ${message}`);
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
  let desiredItem = Array.from(speakingAs.querySelectorAll('option')).filter(x => x.value.startsWith('character|') && x.textContent == nameOfSpeaker)[0]
  if (desiredItem) {
    let desired = desiredItem.value;
    speakingAs.value = desired;
  }
}
function standardHitRoll(event, d) {
  let thisWeaponKey = event.target.getAttribute('weapon-key');
  let thisWeaponStats = attackStats[thisWeaponKey];

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
function spellHitRoll(event, d) {
  let thisWeaponKey = event.target.getAttribute('weapon-key');
  let thisWeaponStats = attackStats[thisWeaponKey];

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
function rageModifier(event, d) {
  let thisWeaponKey = event.target.getAttribute('weapon-key');
  let thisWeaponStats = attackStats[thisWeaponKey];
  let isRaging = Array.from(document.querySelectorAll(`input#rage:checked`)).length > 0;
  if (isRaging && thisWeaponStats.stat.key == 'STR') {
    if (!d.dmg2flag) {
      d.dmg2flag = '1';
    } else {
      d.dmg2 += '+';
      d.dmg2type += ' + ';
    }
    d.dmg2 += `+2[Rage]`;
    d.dmg2type += `${thisWeaponStats.damageType}`
    d.desc += `Rage Damage Bonus\n`;
  }
}
function archeryModifier(event, d) {
  d.r1 += `+2[Archery]`;
  d.r2 += `+2[Archery]`;
  d.mod += `+2`;
}
function multiAttackDamageRoll(event, d) {
  standardDamageRoll(event, d, true);
  d.desc += `Cleave Attack (No Ability Mod.)\n`;
}
function standardDamageRoll(event, d, ignoreBonus) {
  let thisWeaponKey = event.target.getAttribute('weapon-key');
  let thisWeaponStats = attackStats[thisWeaponKey];

  let thisDamage = thisWeaponStats.damage;
  if (!!thisWeaponStats.bonus) {
    thisDamage += `${thisWeaponStats.bonus}[Weapon]`
  }
  if (!ignoreBonus) {
    thisDamage += `${thisWeaponStats.stat.check}[${thisWeaponStats.stat.display}]`
  }

  d.damage = '1';
  d.dmg1 = thisDamage;
  d.crit1 = thisWeaponStats.damage;
  d.dmg1flag = '1';
  d.dmg1type = thisWeaponStats.damageType;
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
function rollWeapon(event) {
  let thisWeaponKey = event.target.getAttribute('weapon-key');
  let thisWeaponStats = attackStats[thisWeaponKey];

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
  let thisWeaponStats = attackStats[thisWeaponKey];

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
    rollType: document.querySelector('input[name="roll-type"]:checked').value,
    bonusHitName: document.querySelector('input[type="text"][id="bonus-hit-name"]').value,
    bonusHit: document.querySelector('input[type="text"][id="bonus-hit"]').value,
    bonusDamageName: document.querySelector('input[type="text"][id="bonus-damage-name"]').value,
    bonusDamage: document.querySelector('input[type="text"][id="bonus-damage"]').value,
    spentSpellSlots: [
      document.querySelectorAll('[spell-slot="1"]>div.spell-slot.spent').length,
      document.querySelectorAll('[spell-slot="2"]>div.spell-slot.spent').length,
      document.querySelectorAll('[spell-slot="3"]>div.spell-slot.spent').length,
      document.querySelectorAll('[spell-slot="4"]>div.spell-slot.spent').length,
      document.querySelectorAll('[spell-slot="5"]>div.spell-slot.spent').length,
      document.querySelectorAll('[spell-slot="6"]>div.spell-slot.spent').length,
      document.querySelectorAll('[spell-slot="7"]>div.spell-slot.spent').length,
      document.querySelectorAll('[spell-slot="8"]>div.spell-slot.spent').length,
      document.querySelectorAll('[spell-slot="9"]>div.spell-slot.spent').length
    ]
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
    document.querySelector(`input[name="mushroom"][value=${d.mushroomBallista}]`).checked = true;
    clearSpellSlots();
    for (let slot = 1; slot <= d.spentSpellSlots.length; slot++) {
      let slotIndex = slot - 1;
      for (let index = 0; index < d.spentSpellSlots[slotIndex]; index++) {
        let unspentSlot = document.querySelector(`[spell-slot="${slot}"]>div.spell-slot:not(.spent)`);
        if (unspentSlot) {
          unspentSlot.classList.add('spent');
        }
      }
    }
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