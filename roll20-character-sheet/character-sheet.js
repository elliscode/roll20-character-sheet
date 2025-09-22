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
  `{{description=**Source:** [*Player's Handbook*, pg. 287](https://www.dndbeyond.com/spells/2619166-hunters-mark) \n\nYou magically mark one creature you can see within range as your quarry. \n\nYou have Advantage on any Wisdom (Perception or Survival) check you make to find it.}}`;
const mushroomBallista = `&{template:spell} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Mushroom Ballista}} ` +
  `{{castingtime=1 bonus action}} ` +
  `{{range=Touch / Flavor}} ` +
  `{{duration=1 hour}} ` +
  `{{level=2nd Level Transmutation}} ` +
  `{{v=1}} ` +
  `{{description=**Source:** [Obojima: Tales from the Tall Grass](https://www.dndbeyond.com/spells/2857534-mushroom-ballista) \n\nWhen a creature is hit, it takes an extra [1d6](!\n) poison damage. \n\nThe creature must make a  and must make a Dexterity saving throw, and on a failed save, the creature is pushed back a number of feet equal to the damage taken (rounded up to the nearest 5 feet) to a maximum of 15 feet.}}`;
const elementalismAirSpell = `&{template:spell} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Elementalism, Beckon Air}} ` +
  `{{castingtime=1 action}} ` +
  `{{range=30ft. / 5ft. cube}} ` +
  `{{duration=Instantaneous}} ` +
  `{{level=Transmutation Cantrip}} ` +
  `{{v=1}} ` +
  `{{s=1}} ` +
  `{{description=**Source:** [*Player's Handbook*, pg. 267](https://www.dndbeyond.com/spells/2618834-elementalism) \n\nYou create a breeze strong enough to ripple cloth, stir dust, rustle leaves, and close open doors and shutters, all in a 5-foot Cube. Doors and shutters being held open by someone or something aren't affected.}}`;
const elementalismEarthSpell = `&{template:spell} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Elementalism, Beckon Earth}} ` +
  `{{castingtime=1 action}} ` +
  `{{range=30ft. / 5ft. cube}} ` +
  `{{duration=Instantaneous}} ` +
  `{{level=Transmutation Cantrip}} ` +
  `{{v=1}} ` +
  `{{s=1}} ` +
  `{{description=**Source:** [*Player's Handbook*, pg. 267](https://www.dndbeyond.com/spells/2618834-elementalism) \n\nYou create a thin shroud of dust or sand that covers surfaces in a 5-foot-square area, or you cause a single word to appear in your handwriting in a patch of dirt or sand.}}`;
const elementalismFireSpell = `&{template:spell} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Elementalism, Beckon Fire}} ` +
  `{{castingtime=1 action}} ` +
  `{{range=30ft. / 5ft. cube}} ` +
  `{{duration=Instantaneous}} ` +
  `{{level=Transmutation Cantrip}} ` +
  `{{v=1}} ` +
  `{{s=1}} ` +
  `{{description=**Source:** [*Player's Handbook*, pg. 267](https://www.dndbeyond.com/spells/2618834-elementalism) \n\nYou create a thin cloud of harmless embers and colored, scented smoke in a 5-foot Cube. You choose the color and scent, and the embers can light candles, torches, or lamps in that area. The smoke's scent lingers for 1 minute.}}`;
const elementalismWaterSpell = `&{template:spell} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Elementalism, Beckon Water}} ` +
  `{{castingtime=1 action}} ` +
  `{{range=30ft. / 5ft. cube}} ` +
  `{{duration=Instantaneous}} ` +
  `{{level=Transmutation Cantrip}} ` +
  `{{v=1}} ` +
  `{{s=1}} ` +
  `{{description=**Source:** [*Player's Handbook*, pg. 267](https://www.dndbeyond.com/spells/2618834-elementalism) \n\nYou create a spray of cool mist that lightly dampens creatures and objects in a 5-foot Cube. Alternatively, you create 1 cup of clean water either in an open container or on a surface, and the water evaporates in 1 minute.}}`;
const elementalismSculptSpell = `&{template:spell} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Elementalism, Sculpt Element}} ` +
  `{{castingtime=1 action}} ` +
  `{{range=30ft. / 5ft. cube}} ` +
  `{{duration=Instantaneous}} ` +
  `{{level=Transmutation Cantrip}} ` +
  `{{v=1}} ` +
  `{{s=1}} ` +
  `{{description=**Source:** [*Player's Handbook*, pg. 267](https://www.dndbeyond.com/spells/2618834-elementalism) \n\nYou cause dirt, sand, fire, smoke, mist, or water that can fit in a 1-foot Cube to assume a crude shape (such as that of a creature) for 1 hour.}}`;
const guidanceSpell = `&{template:spell} ` +
  `{{charname=Floyd}} ` +
  `{{name=Guidance}} ` +
  `{{castingtime=1 action}} ` +
  `{{range=Touch}} ` +
  `{{duration=up to 1 minute}} ` +
  `{{level=Divination Cantrip}} ` +
  `{{v=1}} ` +
  `{{s=1}} ` +
  `{{concentration=1}} ` +
  `{{description=**Source:** [*Player's Handbook*, pg. 282](https://www.dndbeyond.com/spells/2618971-guidance) \n\n` +
  `You touch a willing creature and choose a skill. Until the spell ends, the creature adds [1d4](!\n) to any ability check using the chosen skill.` +
  `}}`;
const shapeWaterSpell = `&{template:spell} ` +
  `{{charname=Floyd}} ` +
  `{{name=Shape Water}} ` +
  `{{castingtime=1 action}} ` +
  `{{range=30ft. (Cube 5ft.)}} ` +
  `{{duration=Instantaneous}} ` +
  `{{level=Transmutation Cantrip}} ` +
  `{{s=1}} ` +
  `{{description=**Source:** [*Elemental Evil Player's Companion*, pg. 164](https://www.dndbeyond.com/spells/2397-shape-water) \n\n` +
  `You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:\n\n` +
  bullet(`You instantaneously **move** or otherwise change the flow of **the water** as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage.`) +
  bullet(`You cause the **water to form into simple shapes** and animate at your direction. This change lasts for 1 hour.`) +
  bullet(`You **change the water's color or opacity**. The water must be changed in the same way throughout. This change lasts for 1 hour.`) +
  bullet(`You **freeze the water**, provided that there are no creatures in it. The water unfreezes in 1 hour.`) + `\n` +
  `If you cast this spell multiple times, you can have no more than **two of its non-instantaneous effects active at a time**, and you can dismiss such an effect as an action.` +
  `}}`;
const resistanceSpell = `&{template:spell} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Resistance}} ` +
  `{{castingtime=1 action}} ` +
  `{{range=Touch}} ` +
  `{{duration=Concentration, up to 1 minute}} ` +
  `{{level=Abjuration Cantrip}} ` +
  `{{v=1}} ` +
  `{{s=1}} ` +
  `{{description=**Source:** [*Player's Handbook*, pg. 312](https://www.dndbeyond.com/spells/2618947-resistance) \n\nYou cause dirt, sand, fire, smoke, mist, or water that can fit in a 1-foot Cube to assume a crude shape (such as that of a creature) for 1 hour.}}`;
const spareTheDyingSpell = `&{template:spell} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Spare the Dying}} ` +
  `{{castingtime=1 action}} ` +
  `{{range=30 ft. (Level 5)}} ` +
  `{{duration=Instantaneous}} ` +
  `{{level=Necromancy Cantrip}} ` +
  `{{v=1}} ` +
  `{{s=1}} ` +
  `{{description=**Source:** [*Player's Handbook*, pg. 318](https://www.dndbeyond.com/spells/2619067-spare-the-dying) \n\nChoose a creature within range that has 0 Hit Points and isn't dead. The creature becomes Stable.}}`;
const beastBondSpell = `&{template:spell} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Beast Bond}} ` +
  `{{castingtime=1 action}} ` +
  `{{range=Touch}} ` +
  `{{duration=Concentration up to 10 minutes}} ` +
  `{{level=1st Level Divination}} ` +
  `{{v=1}} ` +
  `{{s=1}} ` +
  `{{m=1}} {{material=a bit of fur wrapped in a cloth}} ` +
  `{{description=**Source:** [*Elemental Evil Player's Companion*, pg. 150](https://www.dndbeyond.com/spells/2370-beast-bond) \n\nYou establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell fails if the beast's Intelligence is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see.}}`;
const bubbleLiftSpell = function (levelInt) {
  let levelModifier = '';
  if (levelInt > 1) {
    levelModifier = `, **cast at ${levelPlace(levelInt)} level**`;
  }
  return `&{template:spell} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Bubble Lift}} ` +
  `{{castingtime=1 action}} ` +
  `{{range=60ft.}} ` +
  `{{duration=1 hour}} ` +
  `{{level=1st Level Conjuration${levelModifier}}} ` +
  `{{v=1}} ` +
  `{{description=**Source:** [*Obojima: Tales from the Tall Grass*, pg. 182](https://www.dndbeyond.com/spells/2857561-bubble-lift) \n\nYou blow a bubble around any solid, granular, or liquid object that weighs **${500*levelInt} pounds** or less, causing it to float **4 feet off the ground**. No matter what the contents of the bubble are, the bubble weighs 10 pounds and can be pushed using an action. Strong winds or effects that would push a creature also push the bubble. The bubble always floats at least 4 feet off the ground, and descends from a fall at a speed of 10 feet per round.\n\nAs an action, a creature can pierce the outside of the bubble, causing it to pop and releasing its contents.}}`;
}
const createOrDestroyWaterSpell = function (levelInt) {
  let levelModifier = '';
  if (levelInt > 1) {
    levelModifier = `, **cast at ${levelPlace(levelInt)} level**`;
  }
  return `&{template:spell} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Create or Destroy Water}} ` +
  `{{castingtime=1 action}} ` +
  `{{range=30ft. (Cube 30ft.)}} ` +
  `{{duration=Instantaneous}} ` +
  `{{level=1st Level Transmutation${levelModifier}}} ` +
  `{{v=1}} ` +
  `{{s=1}} ` +
  `{{m=1}} ` +
  `{{material=a mix of water and sand}} ` +
  `{{description=**Source:** [*Player's Handbook*, pg. 258](https://www.dndbeyond.com/spells/2053-create-or-destroy-water) \n\n` +
  `You do one of the following:\n\n` +
  bullet(`**Create Water**. You **create up to ${levelInt*10} gallons** of clean water within range in an open container. Alternatively, the water falls as **rain in a ${30+(5*levelInt)}-foot Cube** within range, extinguishing exposed flames there.`) +
  bullet(`**Destroy Water**. You **destroy up to ${levelInt*10} gallons** of water in an open container within range. Alternatively, you **destroy fog in a ${30+(5*levelInt)}-foot Cube** within range.`) +
  `}}`;
  //bullet(`Using a Higher-Level Spell Slot. You create or destroy 10 additional gallons of water, or the size of the Cube increases by 5 feet, for each spell slot level above 1.`) +
}
const cureWoundsSpell = function (levelInt) {
  let levelModifier = '';
  if (levelInt > 1) {
    levelModifier = `, **cast at ${levelPlace(levelInt)} level**`;
  }
  const commandToRun = `&{template:dmg} {{charname=Floyd}} {{rname=Cure Wounds, ${levelPlace(levelInt)} level}} {{range=Touch}} {{desc=Components: V, S}} {{damage=1}} {{dmg1flag=1}} {{dmg1= [[${2*levelInt}d8+1]]}} {{dmg1type=Healing}} {{crit1=Crit: [[${2*levelInt}d8]]}}`;
  return `&{template:spell} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Cure Wounds}} ` +
  `{{castingtime=1 action}} ` +
  `{{range=Touch}} ` +
  `{{duration=Instantaneous}} ` +
  `{{level=1st Level Abjuration${levelModifier}}} ` +
  `{{v=1}} ` +
  `{{s=1}} ` +
  `{{description=**Source:** [*Player's Handbook*, pg. 259](https://www.dndbeyond.com/spells/2619079-cure-wounds) \n\n` + 
  `A creature you touch regains a number of Hit Points equal to ` + 
  `[${2*levelInt}d8${modifiers.spellcasting.check}](!\n${sanitizeCommand(commandToRun)})` + 
  `}} \n${commandToRun} `;
}
const forestGuardSpell = function (levelInt) {
  let levelModifier = '';
  if (levelInt > 1) {
    levelModifier = `, **cast at ${levelPlace(levelInt)} level**`;
  }
  const commandToRun = `&{template:atkdmg} {{charname=Forest Guard Shrub}} {{rname=Leaf Attack}} {{mod=+1}} {{r1=[[1d20${modifiers.spellcasting.check}[${modifiers.spellcasting.display}]]]}} {{attack=1}} {{range=10ft.}} {{desc=Components: V, S}} {{damage=1}} {{dmg1flag=1}} {{dmg1=[[1d4]]}} {{dmg1type=Slashing}} {{crit1=Crit: [[1d4]]}} {{normal=1}}`
  return `&{template:spell} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Forest Guard}} ` +
  `{{castingtime=1 action}} ` +
  `{{range=60 ft.}} ` +
  `{{duration=10 minutes}} ` +
  `{{level=1st Level Conjuration${levelModifier}}} ` +
  `{{v=1}} ` +
  `{{s=1}} ` +
  `{{description=**Source:** [*Obojima: Tales from the Tall Grass*, pg. 185](https://www.dndbeyond.com/spells/2857569-forest-guard) \n\n` + 
  `You create **${levelInt} Small animated shrub${levelInt > 1 ? 's' : ''}**, which grow${levelInt > 1 ? '' : 's'} from the ground in an unoccupied space of your choice that you can see within range. The shrub${levelInt > 1 ? 's' : ''} ha${levelInt > 1 ? 've' : 's'} a number of human-like characteristics, such as a wooden body and face, but ${levelInt > 1 ? 'they' : 'it'} lack${levelInt > 1 ? '' : 's'} hands and arms and **can't move**.\n\n ` + 
  `Any creature hostile to you that **moves to a space within 10 feet of a shrub** for the first time on a turn **or starts its turn there**, is targeted by the **shrub's leaf attack**. The shrub makes a ranged weapon attack, using your spell attack modifier. On a hit, a creature takes [1d4](!\n${sanitizeCommand(commandToRun)}) slashing damage.\n\n ` + 
  `On your turn, you can use a **bonus action** to make a shrub use its **leaf attack** against one creature **within 10 feet of it**. ` + 
  `}}`;
}
const healingWordSpell = function (levelInt) {
  let levelModifier = '';
  if (levelInt > 1) {
    levelModifier = `, **cast at ${levelPlace(levelInt)} level**`;
  }
  const commandToRun = `&{template:dmg} {{charname=Floyd}} {{rname=Healing Word}} {{range=60ft.}} {{desc=Components: V}} {{damage=1}} {{dmg1flag=1}} {{dmg1= [[${2*levelInt}d4${modifiers.spellcasting.check}[${modifiers.spellcasting.display}]]]}} {{dmg1type=Healing}} {{crit1=Crit: [[${2*levelInt}]]}}`;
  return `&{template:spell} ` +
    `{{charname=${CHARACTER_NAME}}} ` +
    `{{name=Healing Word}} ` +
    `{{castingtime=1 bonus action}} ` +
    `{{range=60ft.}} ` +
    `{{duration=Instantaneous}} ` +
    `{{level=1st Level Abjuration${levelModifier}}} ` +
    `{{v=1}} ` +
    `{{description=**Source:** [*Player's Handbook*, pg. 284](https://www.dndbeyond.com/spells/2619143-healing-word) \n\n` +
    `A creature of your choice that you can see within range regains Hit Points equal to ` +
    `[${2*levelInt}d4${modifiers.spellcasting.check}](!\n${sanitizeCommand(commandToRun)})` + 
    `}} \n${commandToRun} `;
}
const speakWithAnimalsSpell = `&{template:spell} ` +
    `{{charname=${CHARACTER_NAME}}} ` +
    `{{name=Speak with Animals}} ` +
    `{{castingtime=1 action}} ` +
    `{{range=Self}} ` +
    `{{duration=10 minutes}} ` +
    `{{level=1st Level Divination}} ` +
    `{{v=1}} ` +
    `{{s=1}} ` +
    `{{description=**Source:** [*Player's Handbook*, pg. 318](https://www.dndbeyond.com/spells/2619059-speak-with-animals) \n\n` +
    `For the duration, you can **comprehend and verbally communicate with Beasts**, and you can use any of the Influence action's skill options with them.\n\n` +
    `Most Beasts have little to say about topics that don't pertain to survival or companionship, but at minimum, **a Beast can give you information about nearby locations and monsters, including whatever it has perceived within the past day**.` +
    `}}`;
const sproutFoliageSpell = `&{template:spell} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Sprout Foliage}} ` +
  `{{castingtime=1 action}} ` +
  `{{range=Self}} ` +
  `{{duration=1 hour}} ` +
  `{{level=1st Level Conjuration}} ` +
  `{{v=1}} ` +
  `{{s=1}} ` +
  `{{m=1}} {{material=flower seeds}} ` + 
  `{{description=**Source:** [Obojima: Tales from the Tall Grass, pg. 189](https://www.dndbeyond.com/spells/2857546-sprout-foliage) \n\n` + 
  `You sprout and rapidly grow a lush leafy foliage that covers the entirety of your body. When casting this spell, you can choose if the foliage has other features, such as flowers or berries.\n\n` + 
  `While prone and motionless, **you are indistinguishable from a normal bush**. If a creature hasn't observed you move or act, **it must succeed on an Intelligence (Investigation) check** against your spell save [DC 12](!\n) to discern that you aren't a bush. To become disguised again from a creature that has discerned you for what you are, you must take the Hide action while you're unseen by the creature.\n\n` + 
  `For the duration, **you can use your action to create and hurl a pinecone, berry, or flower bud**. When you do so, make a ranged spell attack against a creature within **30 feet** of you. On a hit, the target takes bludgeoning damage equal to [1d6+1](!\n).` + 
  `}}`;
const aidSpell = function (levelInt) {
  let levelModifier = '';
  if (levelInt > 2) {
    levelModifier = `, **cast at ${levelPlace(levelInt)} level**`;
  }
  return `&{template:spell} ` + 
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Aid}} ` + 
  `{{castingtime=1 action}} ` + 
  `{{range=30ft.}} ` + 
  `{{duration=8 hours}} ` + 
  `{{level=2nd Level Abjuration${levelModifier}}} ` + 
  `{{v=1}} ` + 
  `{{s=1}} ` + 
  `{{m=1}} ` + 
  `{{material=a strip of white cloth}} ` + 
  `{{description=**Source:** [*Player's Handbook*, pg. 239](https://www.dndbeyond.com/spells/2618845-aid) \n\n` + 
  `Choose up to **three creatures** within range. Each target's Hit Point maximum and current **Hit Points increase by ${5*(levelInt-1)}** for the duration.\n\n` + 
  `}}`;
}
const barkskinSpell = `&{template:spell} ` + 
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Barkskin}} ` + 
  `{{castingtime=1 bonus action}} ` + 
  `{{range=Touch}} ` + 
  `{{duration=1 hour}} ` + 
  `{{level=2nd Level Transmutation}} ` + 
  `{{v=1}} ` + 
  `{{s=1}} ` + 
  `{{m=1}} {{material=a handful of oak bark}} ` + 
  `{{description=**Source:** [*Player's Handbook*, pg. 245](https://www.dndbeyond.com/spells/2618907-barkskin) \n\n` + 
  `You touch a willing creature. Until the spell ends, the target's skin assumes a bark-like appearance, and the target has an **Armor Class of [17](!\n)** if its AC is lower than that.` + 
  `}}`;
const healingSpiritSpell = function (levelInt) {
  let levelModifier = '';
  if (levelInt > 2) {
    levelModifier = `, **cast at ${levelPlace(levelInt)} level**`;
  }
  const commandToRun = `&{template:dmg} {{charname=Floyd}} {{rname=Healing Spirit}} {{range=60ft. (Cube 5ft.)}} {{desc=Components: V, S}} {{damage=1}} {{dmg1flag=1}} {{dmg1= [[${levelInt-1}d6]]}} {{dmg1type=Healing}} {{crit1=Crit: [[${levelInt-1}d6]]}}`;
  return `&{template:spell} ` + 
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Healing Spirit}} ` + 
  `{{castingtime=1 bonus action}} ` + 
  `{{range=60ft. (Cube 5ft.)}} ` + 
  `{{duration=up to 1 minute}} ` + 
  `{{level=2nd Level Conjuration${levelModifier}}} ` + 
  `{{v=1}} ` + 
  `{{s=1}} ` + 
  `{{concentration=1}} ` + 
  `{{description=**Source:** [*Xanathar's Guide to Everything*, pg. 157](https://www.dndbeyond.com/spells/14873-healing-spirit) \n\n` + 
  `You call forth a nature spirit to soothe the wounded. The intangible spirit appears in a space that is a 5-foot cube you can see within range. The spirit looks like a transparent beast or fey (your choice).\n\n` + 
  `Until the spell ends, whenever you or a creature you can see moves into the spirit's space for the first time on a turn or starts its turn there, you can cause the spirit to restore [${levelInt-1}d6](!\n${sanitizeCommand(commandToRun)}) hit points to that creature (no action required). The spirit can't heal constructs or undead. **The spirit can heal ${1+parseInt(modifiers.spellcasting.check)} times**. After healing that number of times, the spirit disappears.` + 
  `As a **bonus action** on your turn, you can **move the spirit up to 30 feet** to a space you can see.` + 
  `}}`;
}
const enhanceAbilitySpell = function (levelInt) {
  let levelModifier = '';
  let higherLevelBonusText = '';
  if (levelInt > 2) {
    levelModifier = `, **cast at ${levelPlace(levelInt)} level**`;
    higherLevelBonusText = ` \n\nYou can **target ${levelInt-1} creatures**. You can choose a different ability for each target.`;
  }
  return `&{template:spell} ` + 
    `{{charname=${CHARACTER_NAME}}} ` +
    `{{name=Enhance Ability}} ` + 
    `{{castingtime=1 action}} ` + 
    `{{range=Touch}} ` + 
    `{{duration=up to 1 hour}} ` + 
    `{{level=2nd Level Transmutation${levelModifier}}} ` + 
    `{{v=1}} ` + 
    `{{s=1}} ` + 
    `{{m=1}} ` + 
    `{{material=fur or a feather}} ` + 
    `{{concentration=1}} ` + 
    `{{description=**Source:** [*Player's Handbook*, pg. 268](https://www.dndbeyond.com/spells/2619165-enhance-ability)\n\n` + 
    `You touch a creature and choose Strength, Dexterity, Intelligence, Wisdom, or Charisma. For the duration, **the target has Advantage** on ability checks using the chosen ability.` + 
    higherLevelBonusText +
    `}}`;
}
const ragefulNimbusDamage = function(levelInt) {
  let diceCount = 2 + Math.floor((levelInt - 2) / 2);
  return `${diceCount}d8`;
}
const ragefulNimbusSpell = function(levelInt) {
  let damage = ragefulNimbusDamage(levelInt);
  let levelModifier = '';
  if (levelInt > 2) {
    levelModifier = `, **cast at ${levelPlace(levelInt)} level**`;
  }
  return `&{template:spell} ` + 
    `{{charname=${CHARACTER_NAME}}} ` +
    `{{name=Rageful Nimbus}} ` + 
    `{{castingtime=1 bonus action}} ` + 
    `{{range=60ft.}} ` + 
    `{{duration=1 minute}} ` + 
    `{{level=2nd Level Evocation${levelModifier}}} ` + 
    `{{v=1}} ` + 
    `{{s=1}} ` + 
    `{{m=1}} {{material=a drop of water}} ` + 
    `{{description=` + 
    `**Source:** [*Obojima: Tales from the Tall Grass*, pg. 188](https://www.dndbeyond.com/spells/2857549-rageful-nimbus) \n\n` + 
    `Choose a creature within range, which can be yourself. A pristine, fluffy white cloud appears above the target and follows them for the duration. **If the target takes damage** from a hostile creature you can see, you can use your reaction to **make a ranged spell attack from the cloud**, provided that creature is within 60 feet of the target. On a hit, the creature takes [${damage}](!\n) lightning damage.` + 
    `}} `;
}
const summonBeastAirSpell = function (levelInt) {
  let levelModifier = '';
  if (levelInt > 2) {
    levelModifier = `, **cast at ${levelPlace(levelInt)} level**`;
  }
  let multiAttackString = ``;
  if (levelInt > 3) {
    multiAttackString = `[Multiattack](!\n) The spirit makes **${Math.floor(levelInt / 2.0)} Rend attacks**.\n`
  }
  const rendAttack = `&{template:atkdmg} {{charname=Bestial Spirit, Air}} {{rname=Rend}} {{mod=${modifiers.spellcasting.check}}} {{r1=[[1d20${modifiers.spellcasting.check}[${modifiers.spellcasting.display}]]]}} {{normal=1}} {{attack=1}} {{damage=1}} {{dmg1flag=1}} {{dmg1=[[1d8+4+${levelInt}[Spell Level]]]}} {{crit1=Crit: [[1d8]]}} {{dmg1type=Piercing}}`;
  const commandToRun = `&{template:default} {{name=Bestial Spirit, Air}} ` +
    `{{Armor Class=[[11[Base AC]+${levelInt}[Spell Level]]]}} ` +
    `{{Hit Points=[[20[Air Bestial Spirit Base AC]+${levelInt-2}d5[${levelPlace(levelInt)} level spell]]]}} ` +
    `{{Speed=30ft.; Fly 60ft.}} ` +
    `{{Senses=Darkvision 60ft.; Passive Perception [12](!\n)}} ` +
    `{{Languages=Understands the languages ${CHARACTER_NAME} knows}} ` +
    `{{Traits=**Flyby**. The spirit doesn't provoke Opportunity Attacks when it flies out of an enemy's reach.}} ` +
    `{{Attacks=` +
    multiAttackString +
    `[Rend](!\n${sanitizeCommand(rendAttack)}) *Melee Attack Roll*: Bonus equals your spell attack modifier, reach 5 ft. Hit: 1d8 + 4 + ${levelInt} Piercing damage.` +
    `}} ` +
    `{{Source=[*Player's Handbook*, pg. 322](https://www.dndbeyond.com/spells/2619106-summon-beast)}}`;
  return `${commandToRun} \n &{template:spell} ` + 
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Summon Beast, Air}} ` + 
  `{{castingtime=1 action}} ` + 
  `{{range=90ft.}} ` + 
  `{{duration=up to 1 hour}} ` + 
  `{{level=2nd Level Conjuration${levelModifier}}} ` + 
  `{{v=1}} ` + 
  `{{s=1}} ` + 
  `{{m=1}} {{material=a feather, tuft of fur, and fish tail inside a gilded acorn worth 200+ GP}} ` + 
  `{{concentration=1}} ` + 
  `{{description=**Source:** [*Player's Handbook*, pg. 322](https://www.dndbeyond.com/spells/2619106-summon-beast) \n\n` +
  `You call forth a bestial spirit. It manifests in an unoccupied space that you can see within range and uses the Bestial Spirit stat block. When you cast the spell, choose an environment: Air, Land, or Water. The creature resembles an animal of your choice that is native to the chosen environment, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\n` +
  `The creature is an ally to you and your allies. In combat, **the creature shares your Initiative count, but it takes its turn immediately after yours**. It obeys your verbal commands (**no action required by you**). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.` +
  `}} `;
};
const summonBeastLandSpell = function (levelInt) {
  let levelModifier = '';
  if (levelInt > 2) {
    levelModifier = `, **cast at ${levelPlace(levelInt)} level**`;
  }
  let multiAttackString = ``;
  if (levelInt > 3) {
    multiAttackString = `[Multiattack](!\n) The spirit makes **${Math.floor(levelInt / 2.0)} Rend attacks**.\n`
  }
  const rendAttack = `&{template:atkdmg} {{charname=Bestial Spirit, Land}} {{rname=Rend}} {{mod=${modifiers.spellcasting.check}}} {{r1=[[1d20${modifiers.spellcasting.check}[${modifiers.spellcasting.display}]]]}} {{normal=1}} {{attack=1}} {{damage=1}} {{dmg1flag=1}} {{dmg1=[[1d8+4+${levelInt}[Spell Level]]]}} {{crit1=Crit: [[1d8]]}} {{dmg1type=Piercing}}`;
  const commandToRun = `&{template:default} {{name=Bestial Spirit, Land}} ` +
    `{{Armor Class=[[11[Base AC]+${levelInt}[Spell Level]]]}} ` +
    `{{Hit Points=[[30[Land Bestial Spirit Base AC]+${levelInt-2}d5[${levelPlace(levelInt)} level spell]]]}} ` +
    `{{Speed=30ft.; Climb 30ft.}} ` +
    `{{Senses=Darkvision 60ft.; Passive Perception [12](!\n)}} ` +
    `{{Languages=Understands the languages ${CHARACTER_NAME} knows}} ` +
    `{{Traits=**Pack Tactics**. The spirit has Advantage on an attack roll against a creature if at least one of the spirit's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition.}} ` +
    `{{Attacks=` +
    multiAttackString +
    `[Rend](!\n${sanitizeCommand(rendAttack)}) *Melee Attack Roll*: Bonus equals your spell attack modifier, reach 5 ft. Hit: 1d8 + 4 + ${levelInt} Piercing damage.` +
    `}} ` +
    `{{Source=[*Player's Handbook*, pg. 322](https://www.dndbeyond.com/spells/2619106-summon-beast)}}`;
  return `${commandToRun} \n &{template:spell} ` + 
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Summon Beast, Land}} ` + 
  `{{castingtime=1 action}} ` + 
  `{{range=90ft.}} ` + 
  `{{duration=up to 1 hour}} ` + 
  `{{level=2nd Level Conjuration${levelModifier}}} ` + 
  `{{v=1}} ` + 
  `{{s=1}} ` + 
  `{{m=1}} {{material=a feather, tuft of fur, and fish tail inside a gilded acorn worth 200+ GP}} ` + 
  `{{concentration=1}} ` + 
  `{{description=**Source:** [*Player's Handbook*, pg. 322](https://www.dndbeyond.com/spells/2619106-summon-beast) \n\n` +
  `You call forth a bestial spirit. It manifests in an unoccupied space that you can see within range and uses the Bestial Spirit stat block. When you cast the spell, choose an environment: Air, Land, or Water. The creature resembles an animal of your choice that is native to the chosen environment, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\n` +
  `The creature is an ally to you and your allies. In combat, **the creature shares your Initiative count, but it takes its turn immediately after yours**. It obeys your verbal commands (**no action required by you**). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.` +
  `}} `;
};
const summonBeastWaterSpell = function (levelInt) {
  let levelModifier = '';
  if (levelInt > 2) {
    levelModifier = `, **cast at ${levelPlace(levelInt)} level**`;
  }
  let multiAttackString = ``;
  if (levelInt > 3) {
    multiAttackString = `[Multiattack](!\n) The spirit makes **${Math.floor(levelInt / 2.0)} Rend attacks**.\n`
  }
  const rendAttack = `&{template:atkdmg} {{charname=Bestial Spirit, Water}} {{rname=Rend}} {{mod=${modifiers.spellcasting.check}}} {{r1=[[1d20${modifiers.spellcasting.check}[${modifiers.spellcasting.display}]]]}} {{normal=1}} {{attack=1}} {{damage=1}} {{dmg1flag=1}} {{dmg1=[[1d8+4+${levelInt}[Spell Level]]]}} {{crit1=Crit: [[1d8]]}} {{dmg1type=Piercing}}`;
  const commandToRun = `&{template:default} {{name=Bestial Spirit, Water}} ` +
    `{{Armor Class=[[11[Base AC]+${levelInt}[Spell Level]]]}} ` +
    `{{Hit Points=[[30[Water Bestial Spirit Base AC]+${levelInt-2}d5[${levelPlace(levelInt)} level spell]]]}} ` +
    `{{Speed=30ft.; Swim 30 ft.}} ` +
    `{{Senses=Darkvision 60ft.; Passive Perception [12](!\n)}} ` +
    `{{Languages=Understands the languages ${CHARACTER_NAME} knows}} ` +
    `{{Traits=` +
    `**Pack Tactics**. The spirit has Advantage on an attack roll against a creature if at least one of the spirit's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition.` +
    `**Water Breathing**. The spirit can breathe only underwater.` +
    `}} ` +
    `{{Attacks=` +
    multiAttackString +
    `[Rend](!\n${sanitizeCommand(rendAttack)}) *Melee Attack Roll*: Bonus equals your spell attack modifier, reach 5 ft. Hit: 1d8 + 4 + ${levelInt} Piercing damage.` +
    `}} ` +
    `{{Source=[*Player's Handbook*, pg. 322](https://www.dndbeyond.com/spells/2619106-summon-beast)}}`;
  return `${commandToRun} \n &{template:spell} ` + 
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=Summon Beast, Water}} ` + 
  `{{castingtime=1 action}} ` + 
  `{{range=90ft.}} ` + 
  `{{duration=up to 1 hour}} ` + 
  `{{level=2nd Level Conjuration${levelModifier}}} ` + 
  `{{v=1}} ` + 
  `{{s=1}} ` + 
  `{{m=1}} {{material=a feather, tuft of fur, and fish tail inside a gilded acorn worth 200+ GP}} ` + 
  `{{concentration=1}} ` + 
  `{{description=**Source:** [*Player's Handbook*, pg. 322](https://www.dndbeyond.com/spells/2619106-summon-beast) \n\n` +
  `You call forth a bestial spirit. It manifests in an unoccupied space that you can see within range and uses the Bestial Spirit stat block. When you cast the spell, choose an environment: Air, Land, or Water. The creature resembles an animal of your choice that is native to the chosen environment, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\n` +
  `The creature is an ally to you and your allies. In combat, **the creature shares your Initiative count, but it takes its turn immediately after yours**. It obeys your verbal commands (**no action required by you**). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.` +
  `}} `;
};
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
const favoredEnemyDescription = `&{template:traits} ` +
  `{{charname=Floyd}} ` +
  `{{name=Favored Enemy}} ` +
  `{{source=&#8193;[D&D Beyond Basic Rules](https://www.dndbeyond.com/sources/dnd/br-2024/character-classes#Level1FavoredEnemy)}} ` +
  `{{description=` +
  `You always have the Hunter's Mark spell prepared. You can cast it twice without expending a spell slot, and you regain all expended uses of this ability when you finish a Long Rest.\n\n` +
  `The number of times you can cast the spell without a spell slot increases when you reach certain Ranger levels.` +
  `}}`;
const floydBerryDescription = `&{template:spell} ` +
  `{{charname=${CHARACTER_NAME}}} ` +
  `{{name=${CHARACTER_NAME}berry}} ` +
  `{{castingtime=1 action}} ` +
  `{{range=Self}} ` +
  `{{duration=24 hours}} ` +
  `{{level=Conjuration Cantrip}} ` +
  `{{s=1}} ` +
  `{{description=**Source:** [*Floyd's Trial*, 2025-09-16](https://discord.com/channels/1081301034602872932/1222366579300372520/1417712417873592373) \n\n` +
  `[${CHARACTER_NAME}berry](https://i.ibb.co/rrV15wk/floyd-berry-cropped-small-wide-2.png)\n\n` +
  `One berry appear in ${CHARACTER_NAME}'s hand and is infused with magic for the duration. When ${CHARACTER_NAME} eats a berry, it **restores no hit points**, however the berry provides enough nourishment to **sustain ${CHARACTER_NAME} for one day**.\n\n` +
  `It is not known what happens when another creature eats a ${CHARACTER_NAME}berry.` +
  `}}`;
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
const modifiers = {
  spellcasting: {key: 'spellcasting', display: 'Spell Casting Modifier', check: '+1', proficiency: 'proficiency'},
};
const specificSkillBonuses = {
  arcana: [
    { name: 'Primal Order: Magician', bonus: '+1' }
  ],
  nature: [
    { name: 'Primal Order: Magician', bonus: '+1' }
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
    mushroomBallistaModifier,
    colossusSlayerModifier,
    hordeBreakerModifier,
    savageAttackModifier,
    burstFireModifier,
    squareBracketFormat,
    masteryModifier
  ],
  rangedAttackSpell: [
    spellHitRoll,
    bonusHitModifier,
    standardDamageRoll,
    bonusDamageModifier,
    huntersMarkModifier,
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
  },
  sproutFoliage: {
    proficiency: proficiencies.proficiency,
    stat: modifiers.spellcasting,
    damage: '1d6',
    name: 'Sprout Foliage',
    range: '30ft.',
    damageType: 'Bludgeoning',
    callbacks: defaultCallbacks.rangedAttackSpell
  },
  ragefulNimbus: {
    proficiency: proficiencies.proficiency,
    stat: modifiers.spellcasting,
    damage: '2d8',
    name: 'Rageful Nimbus',
    range: '30ft.',
    damageType: 'Lightning',
    callbacks: defaultCallbacks.rangedAttackSpell
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

  let spellsDiv = document.createElement('div');
  {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.id = 'spells-panel';
    buildSpellsPanel(panel);
    spellsDiv.appendChild(panel);
  }
  {
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('flex-row');
    buttonsDiv.classList.add('flex-right');
    {
      const button = document.createElement('button');
      button.innerText = 'Spells';
      button.setAttribute('for', 'spells-panel');
      button.addEventListener('click', expandPanel);
      buttonsDiv.appendChild(button);
    }
    spellsDiv.appendChild(buttonsDiv);
  }
  characterSheetDiv.appendChild(spellsDiv);

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
      button.classList.add('not-shown');
      button.innerText = 'Weapons';
      button.setAttribute('for', 'weapon-panel');
      button.addEventListener('click', expandPanel);
      buttonsDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.classList.add('not-shown');
      button.innerText = 'Guns';
      button.setAttribute('for', 'gun-panel');
      button.addEventListener('click', expandPanel);
      buttonsDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.classList.add('not-shown');
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
    let marqueeDiv = document.createElement('div');
    marqueeDiv.classList.add('character-sheet-extension-marquee');
    let marquee = document.createElement("marquee");
    marquee.innerText = "Remind people of their buffs!!!";
    marqueeDiv.appendChild(marquee);
    document.body.appendChild(marqueeDiv);
  }

  getLocalStorage();
}

function buildSpellsPanel(panel) {
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const button = document.createElement('button');
      button.innerText = `H. Mark`;
      button.setAttribute('message', huntersMark)
      button.addEventListener('click', castSpell);
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
    thisDiv.classList.add('not-shown');
    {
      const button = document.createElement('button');
      button.innerText = `Mushroom Ballista`;
      button.setAttribute('message', mushroomBallista)
      button.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    thisDiv.classList.add('not-shown');
    {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'mushroom';
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
      input.name = 'mushroom';
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
    thisDiv.classList.add('not-shown');
    {
      const span = document.createElement('span');
      span.style.marginRight = '5px';
      span.innerText = `Elementalism`;
      thisDiv.appendChild(span);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `Air`;
      button.setAttribute('message', elementalismAirSpell);
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `Earth`;
      button.setAttribute('message', elementalismEarthSpell);
      button.addEventListener('click', castSpell);
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
      button.classList.add('spell');
      button.innerText = `Fire`;
      button.setAttribute('message', elementalismFireSpell);
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `Water`;
      button.setAttribute('message', elementalismWaterSpell);
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `Sculpt Element`;
      button.setAttribute('message', elementalismSculptSpell);
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const span = document.createElement('span');
      span.style.marginRight = '5px';
      span.innerText = `Guidance`;
      thisDiv.appendChild(span);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `C`;
      button.setAttribute('message', guidanceSpell);
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    thisDiv.classList.add('not-shown');
    {
      const span = document.createElement('span');
      span.style.marginRight = '5px';
      span.innerText = `Resistance (c)`;
      thisDiv.appendChild(span);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `C`;
      button.setAttribute('message', resistanceSpell);
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const span = document.createElement('span');
      span.style.marginRight = '5px';
      span.innerText = `Shape Water`;
      thisDiv.appendChild(span);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `C`;
      button.setAttribute('message', shapeWaterSpell);
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const span = document.createElement('span');
      span.style.marginRight = '5px';
      span.innerText = `Spare the Dying`;
      thisDiv.appendChild(span);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `C`;
      button.setAttribute('message', spareTheDyingSpell);
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    thisDiv.classList.add('not-shown');
    {
      const span = document.createElement('span');
      span.style.marginRight = '5px';
      span.innerText = `Beast Bond (c)`;
      thisDiv.appendChild(span);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `1`;
      button.setAttribute('message', beastBondSpell);
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const span = document.createElement('span');
      span.style.marginRight = '5px';
      span.innerText = `Bubble Lift`;
      thisDiv.appendChild(span);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `1`;
      button.setAttribute('message', bubbleLiftSpell(1));
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    { 
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `2`;
      button.setAttribute('message', bubbleLiftSpell(2));
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const span = document.createElement('span');
      span.style.marginRight = '5px';
      span.innerText = `Create / Destroy Water`;
      thisDiv.appendChild(span);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `1`;
      button.setAttribute('message', createOrDestroyWaterSpell(1));
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    { 
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `2`;
      button.setAttribute('message', createOrDestroyWaterSpell(2));
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const span = document.createElement('span');
      span.style.marginRight = '5px';
      span.innerText = `Cure Wounds`;
      thisDiv.appendChild(span);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `1`;
      button.setAttribute('message', cureWoundsSpell(1));
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `2`;
      button.setAttribute('message', cureWoundsSpell(2));
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const span = document.createElement('span');
      span.style.marginRight = '5px';
      span.innerText = `Forest Guard`;
      thisDiv.appendChild(span);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `1`;
      button.setAttribute('message', forestGuardSpell(1));
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `2`;
      button.setAttribute('message', forestGuardSpell(2));
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const span = document.createElement('span');
      span.style.marginRight = '5px';
      span.innerText = `Healing Word`;
      thisDiv.appendChild(span);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `1`;
      button.setAttribute('message', healingWordSpell(1));
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `2`;
      button.setAttribute('message', healingWordSpell(2));
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const span = document.createElement('span');
      span.style.marginRight = '5px';
      span.innerText = `Speak with Animals`;
      thisDiv.appendChild(span);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `1`;
      button.setAttribute('message', speakWithAnimalsSpell);
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const span = document.createElement('span');
      span.style.marginRight = '5px';
      span.innerText = `Sprout Foliage`;
      thisDiv.appendChild(span);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `1`;
      button.setAttribute('message', sproutFoliageSpell)
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = 'S';
      button.setAttribute('weapon-key', 'sproutFoliage');
      button.setAttribute('attack-type', 'ranged-spell');
      button.addEventListener('click', rollWeapon);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const span = document.createElement('span');
      span.style.marginRight = '5px';
      span.innerText = `Aid`;
      thisDiv.appendChild(span);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `2`;
      button.setAttribute('message', aidSpell(2));
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const span = document.createElement('span');
      span.style.marginRight = '5px';
      span.innerText = `Barkskin`;
      thisDiv.appendChild(span);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `2`;
      button.setAttribute('message', barkskinSpell);
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    thisDiv.classList.add('not-shown');
    {
      const span = document.createElement('span');
      span.style.marginRight = '5px';
      span.innerText = `Healing Spirit`;
      thisDiv.appendChild(span);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `2`;
      button.setAttribute('message', healingSpiritSpell(2));
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const span = document.createElement('span');
      span.style.marginRight = '5px';
      span.innerText = `Enhance Ability (c)`;
      thisDiv.appendChild(span);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `2`;
      button.setAttribute('message', enhanceAbilitySpell(2));
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const span = document.createElement('span');
      span.style.marginRight = '5px';
      span.innerText = `Rageful Nimbus`;
      thisDiv.appendChild(span);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `2`;
      button.setAttribute('weapon-key', 'ragefulNimbus');
      button.setAttribute('damage', ragefulNimbusDamage(2))
      button.setAttribute('message', ragefulNimbusSpell(2))
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }

    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = 'S';
      button.setAttribute('weapon-key', 'ragefulNimbus');
      button.setAttribute('attack-type', 'ranged-spell');
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
      const span = document.createElement('span');
      span.style.marginRight = '5px';
      span.innerText = `Summon Beast: Air (c)`;
      thisDiv.appendChild(span);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `2`;
      button.setAttribute('message', summonBeastAirSpell(2));
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    thisDiv.classList.add('not-shown');
    {
      const span = document.createElement('span');
      span.style.marginRight = '5px';
      span.innerText = `Summon Beast: Land (c)`;
      thisDiv.appendChild(span);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `2`;
      button.setAttribute('message', summonBeastLandSpell(2));
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    thisDiv.classList.add('not-shown');
    {
      const span = document.createElement('span');
      span.style.marginRight = '5px';
      span.innerText = `Summon Beast: Water (c)`;
      thisDiv.appendChild(span);
    }
    {
      const button = document.createElement('button');
      button.classList.add('spell');
      button.innerText = `2`;
      button.setAttribute('message', summonBeastWaterSpell(2));
      button.addEventListener('click', castSpell);
      thisDiv.appendChild(button);
    }
    panel.appendChild(thisDiv);
  }

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
    thisDiv.classList.add('not-shown');
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
  if (!ignoreSlots && ['H. Mark', '1','2','3','4','5','6','7','8','9'].includes(event.target.textContent)) {
    let levelInt = event.target.textContent;
    let spellSlotRow = document.querySelector(`.spell-slot-row[spell-slot="${levelInt}"]`);
    if (!spellSlotRow) {
      characterSheetExtensionSendMessage(`/em does not have ${levelPlace(levelInt)} level spell slots!`);
      return;
    }
    let unspentSlot = spellSlotRow.querySelector('div.spell-slot:not(.spent)');
    if (!unspentSlot && ['H. Mark'].includes(levelInt)) {
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
    thisDiv.setAttribute('spell-slot', 'H. Mark');
    {
      const el = document.createElement('label');
      el.innerText = `Hunter's Mark`;
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
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const el = document.createElement('button');
      el.innerText = "Favored Enemy";
      el.setAttribute('message', favoredEnemyDescription);
      el.addEventListener('click', characterSheetExtensionSendMessage);
      thisDiv.appendChild(el);
    }
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    thisDiv.classList.add('spell-slot-row');
    thisDiv.setAttribute('spell-slot', '1');
    {
      const el = document.createElement('label');
      el.innerText = '1st';
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
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    thisDiv.classList.add('spell-slot-row');
    thisDiv.setAttribute('spell-slot', '2');
    {
      const el = document.createElement('label');
      el.innerText = '2nd';
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
    panel.appendChild(thisDiv);
  }
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const el = document.createElement('button');
      el.innerText = 'Reset';
      el.addEventListener('click', clearSpellSlots);
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
      console.log('here');
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

function buildBuffsPanel(panel) {
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const el = document.createElement('textarea');
      el.innerText = ``;
      el.placeholder = `No buffs currently applied...`;
      el.style.height = '195px'; 
      el.style.width = '231px';
      thisDiv.appendChild(el);
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
  {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('flex-row');
    {
      const button = document.createElement('button');
      button.innerText = `${CHARACTER_NAME}berry`;
      button.setAttribute('message', floydBerryDescription);
      button.addEventListener('click', characterSheetExtensionSendMessage);
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
  let thisWeaponStats = attackStats[thisWeaponKey];

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
function archeryModifier(event, d) {
  d.r1 += `+2[Archery]`;
  d.r2 += `+2[Archery]`;
  d.mod += `+2`;
}
function standardDamageRoll(event, d) {
  let thisWeaponKey = event.target.getAttribute('weapon-key');
  let thisWeaponStats = attackStats[thisWeaponKey];

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
function mushroomBallistaModifier(event, d) {
  let enabled = onOff[document.querySelector('input[name="mushroom"]:checked').value];
  if (enabled) {
    if (!d.dmg2flag) {
      d.dmg2flag = '1';
    } else {
      d.dmg2 += '+';
      d.crit2 += '+';
      d.dmg2type += ' + ';
    }
    d.dmg2 += `1d6[Mushroom Ballista]`;
    d.crit2 += `1d6[Mushroom Ballista]`;
    d.dmg2type += `Poison`
    d.desc += "Spell: [Mushroom Ballista](https://www.dndbeyond.com/spells/2857534-mushroom-ballista) \n";
  }
}
function colossusSlayerModifier(event, d) {
  let thisWeaponKey = event.target.getAttribute('weapon-key');
  let thisWeaponStats = attackStats[thisWeaponKey];

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
  let thisWeaponStats = attackStats[thisWeaponKey];

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
  let thisWeaponStats = attackStats[thisWeaponKey];
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
function printCurrentAmmo(event) {
  let shotsInputs = Array.from(document.querySelectorAll('input.shots[type="number"]')).map(x=>x.getAttribute('weapon-key'));
  let ammo = parseInt(document.querySelector('input.ammo[type="number"]').value);
  let output = `/em checks his ammo, and has `;
  let sum = 0;
  for (let weaponKey of shotsInputs) {
    let shots = parseInt(document.querySelector(`input.shots[type="number"][weapon-key="${weaponKey}"]`).value);
    sum += shots;
    output += `${shots} in his ${attackStats[weaponKey].name}, `
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
    mushroomBallista: document.querySelector('input[name="mushroom"]:checked').value,
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
    shotsRifle: document.querySelector(`input.shots[type="number"][weapon-key="rifle"]`).value,
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