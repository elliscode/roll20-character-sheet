const weapon = {};

{
  let createBlankWeaponProperty = (display) => {
    return Object.freeze({ callbacks: [], display: display });
  };

  weapon.properties = Object.freeze({
    ammunition: createBlankWeaponProperty('Ammunition'),
    burstFire: createBlankWeaponProperty('Burst Fire'),
    range: createBlankWeaponProperty('Range'),
    finesse: createBlankWeaponProperty('Finesse'),
    light: createBlankWeaponProperty('Light'),
    thrown: createBlankWeaponProperty('Thrown'),
    nick: createBlankWeaponProperty('Nick'),
    push: createBlankWeaponProperty('Push'),
    reload: createBlankWeaponProperty('Reload'),
    slow: createBlankWeaponProperty('Slow'),
    twoHanded: createBlankWeaponProperty('Two-Handed')
  });

  let createWeaponStats = ({ proficiency, stat, damage, name, range, damageType, callbacks, properties }) => {
    return Object.freeze({
      proficiency: proficiency,
      stat: stat,
      damage: damage,
      name: name,
      range: range,
      damageType: damageType,
      properties: properties,
      callbacks: callbacks,
    });
  };

  weapon.stats = Object.freeze({
    dagger: createWeaponStats({
      proficiency: proficiencies.proficiency,
      stat: stats.DEX,
      damage: '1d4',
      name: 'Dagger',
      range: '20ft./60ft.',
      damageType: 'Piercing',
      properties: [
        weapon.properties.finesse,
        weapon.properties.light,
        weapon.properties.thrown,
        weapon.properties.nick
      ],
      callbacks: callbacks.defaults.melee
    }),
    daggerOfVenom: createWeaponStats({
      proficiency: proficiencies.proficiency,
      stat: stats.DEX,
      damage: '1d4',
      bonus: '+1',
      name: 'Dagger of Venom',
      range: '20ft./60ft.',
      damageType: 'Piercing',
      properties: [
        weapon.properties.finesse,
        weapon.properties.light,
        weapon.properties.thrown,
        weapon.properties.nick
      ],
      callbacks: callbacks.defaults.melee
    }),
    shotgun: createWeaponStats({
      proficiency: proficiencies.proficiency,
      stat: stats.DEX,
      damage: '2d8',
      name: 'Shotgun',
      range: '30ft./90ft.',
      shots: 2,
      damageType: 'Piercing',
      properties: [
        weapon.properties.ammunition,
        weapon.properties.range,
        weapon.properties.reload,
        weapon.properties.twoHanded,
        weapon.properties.push
      ],
      callbacks: callbacks.defaults.firearm
    }),
    rifle: createWeaponStats({
      proficiency: proficiencies.proficiency,
      stat: stats.DEX,
      damage: '2d8',
      name: 'Automatic Rifle',
      range: '80ft./240ft.',
      shots: 30,
      damageType: 'Piercing',
      properties: [
        weapon.properties.ammunition,
        weapon.properties.range,
        weapon.properties.reload,
        weapon.properties.twoHanded,
        weapon.properties.burstFire,
        weapon.properties.slow
      ],
      callbacks: callbacks.defaults.firearm
    }),
    unarmedStrike: createWeaponStats({
      proficiency: proficiencies.proficiency,
      stat: stats.STR,
      damage: '3',
      name: 'Unarmed Strike',
      range: '5ft.',
      damageType: 'Bludgeoning',
      ignoreStatForDamage: true,
      properties: [],
      callbacks: [
        callbacks.standardHitRoll,
        callbacks.bonusHitModifier,
        callbacks.unarmedStrikeDamageRoll,
        callbacks.bonusDamageModifier,
        callbacks.huntersMarkModifier,
        callbacks.squareBracketFormat
      ],
    }),
    club: createWeaponStats({
      proficiency: proficiencies.proficiency,
      stat: stats.STR,
      damage: '1d4',
      name: 'Club',
      range: '5ft.',
      damageType: 'Bludgeoning',
      properties: [
        weapon.properties.light,
        weapon.properties.slow
      ],
      callbacks: callbacks.defaults.melee
    })
  });

  Object.freeze(weapon);
}