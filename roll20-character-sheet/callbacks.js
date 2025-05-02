const callbacks = {};

{
  callbacks.standardHitRoll = (event, d) => {
    let thisWeaponKey = event.target.getAttribute('weapon-key');
    let thisWeaponStats = weapon.stats[thisWeaponKey];
  
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
    let rollType = getRollType();
    d[rollType] = "1"
    d.rname = thisWeaponStats.name;
    d.charname = CHARACTER_NAME;
    d.mod = modP;
    if (throwing) {
      d.range = thisWeaponStats.range;
    }
  };

  callbacks.bonusHitModifier = (event, d) => {
    let bonusHitNameElement = document.querySelector('input[type="text"][id="bonus-hit-name"]');
    let bonusHitElement = document.querySelector('input[type="text"][id="bonus-hit"]');

    if (!bonusHitNameElement || !bonusHitElement) {
      return;
    }

    let bonusHitName = bonusHitNameElement.value;
    let bonusHit = bonusHitElement.value;
  
    if (!!bonusHitName && !!bonusHit) {
      d.r1 += `+${bonusHit}cs0cf0[${bonusHitName}]`
      d.r2 += `+${bonusHit}cs0cf0[${bonusHitName}]`
      d.mod += `+${bonusHit}`;
      d.desc += `${bonusHitName} \n`
    }
  };

  callbacks.standardDamageRoll = (event, d) => {
    let thisWeaponKey = event.target.getAttribute('weapon-key');
    let thisWeaponStats = weapon.stats[thisWeaponKey];
  
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
  };

  callbacks.bonusDamageModifier = (event, d) => {
    let bonusDamageNameElement = document.querySelector('input[type="text"][id="bonus-damage-name"]');
    let bonusDamageElement = document.querySelector('input[type="text"][id="bonus-damage"]');

    if (!bonusDamageNameElement || !bonusDamageElement) {
      return;
    }

    let bonusDamageName = bonusDamageNameElement.value;
    let bonusDamage = bonusDamageElement.value;
  
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
  };

  callbacks.huntersMarkModifier = (event, d) => {
    let huntersMarkElement = document.querySelector('input[name="hunters"]:checked');

    if (!huntersMarkElement) {
      return;
    }

    let enabled = constants.onOff[huntersMarkElement.value];
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
  };

  callbacks.colossusSlayerModifier = (event, d) => {
    let element = document.querySelector('input[name="colossus-horde"]:checked');

    if (!element) {
      return;
    }

    let thisWeaponKey = event.target.getAttribute('weapon-key');
    let thisWeaponStats = weapon.stats[thisWeaponKey];
  
    let enabled = element.value == 'colossus';
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
  };

  callbacks.hordeBreakerModifier = (event, d) => {
    let element = document.querySelector('input[name="colossus-horde"]:checked');

    if (!element) {
      return;
    }

    let enabled = element.value == 'horde';
    if (enabled) {
      d.desc += "Class Feat: [Horde Breaker](https://www.dndbeyond.com/sources/dnd/free-rules/character-classes#Level3HuntersPrey) \n";
    }
  };

  callbacks.savageAttackModifier = (event, d) => {
    let element = document.querySelector('input[name="savage"]:checked');

    if (!element) {
      return;
    }

    let enabled = constants.onOff[element.value];
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
  };

  callbacks.daggerOfVenomModifier = (event, d) => {
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
  };

  callbacks.squareBracketFormat = (event, d) => {
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
  };

  callbacks.masteryModifier = (event, d) => {
    let element = document.querySelector('input[name="mastery"]:checked');

    if (!element) {
      return;
    }

    let thisWeaponKey = event.target.getAttribute('weapon-key');
    let thisWeaponStats = weapon.stats[thisWeaponKey];
    let enabled = constants.onOff[element.value];
    
    if (enabled && thisWeaponStats.mastery) {
      let masteryKeys = new Set(Object.keys(masteries)); 
      let propertiesKeys = new Set(thisWeaponStats.properties);
      let matchingKey = masteryKeys.intersection(propertiesKeys);
      for (let key of matchingKey) {
        d.desc += masteries[key];
      }
    }
  };

  callbacks.archeryModifier = (event, d) => {
    d.r1 += `+2[Archery]`;
    d.r2 += `+2[Archery]`;
    d.mod += `+2`;
  };

  callbacks.expendShot = (event, d) => {
    let thisWeaponKey = event.target.getAttribute('weapon-key');
    let thisWeaponStats = weapon.stats[thisWeaponKey];
  
    let burstFireEnabled = constants.onOff[document.querySelector('input[name="burst-fire"]:checked').value];
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
  };

  callbacks.burstFireModifier = (event, d) => {
    let thisWeaponKey = event.target.getAttribute('weapon-key');
    let thisWeaponStats = weapon.stats[thisWeaponKey];
  
    let burstFireEnabled = constants.onOff[document.querySelector('input[name="burst-fire"]:checked').value];
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
  };

  callbacks.defaults = Object.freeze({
    melee: Object.freeze([
      callbacks.standardHitRoll,
      callbacks.bonusHitModifier,
      callbacks.standardDamageRoll,
      callbacks.bonusDamageModifier,
      callbacks.huntersMarkModifier,
      callbacks.colossusSlayerModifier,
      callbacks.hordeBreakerModifier,
      callbacks.savageAttackModifier,
      callbacks.daggerOfVenomModifier,
      callbacks.squareBracketFormat,
      callbacks.masteryModifier
    ]),
    ranged: Object.freeze([
      callbacks.standardHitRoll,
      callbacks.bonusHitModifier,
      callbacks.archeryModifier,
      callbacks.standardDamageRoll,
      callbacks.bonusDamageModifier,
      callbacks.huntersMarkModifier,
      callbacks.colossusSlayerModifier,
      callbacks.hordeBreakerModifier,
      callbacks.savageAttackModifier,
      callbacks.squareBracketFormat,
      callbacks.masteryModifier
    ]),
    firearm: Object.freeze([
      callbacks.expendShot,
      callbacks.standardHitRoll,
      callbacks.bonusHitModifier,
      callbacks.archeryModifier,
      callbacks.standardDamageRoll,
      callbacks.bonusDamageModifier,
      callbacks.huntersMarkModifier,
      callbacks.colossusSlayerModifier,
      callbacks.hordeBreakerModifier,
      callbacks.savageAttackModifier,
      callbacks.burstFireModifier,
      callbacks.squareBracketFormat,
      callbacks.masteryModifier
    ])
  })

  Object.freeze(callbacks);
}