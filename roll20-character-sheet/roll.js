const roll = {};

{
  let generateRollStruct = () => {
    return Object.seal({
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
    });
  };

  roll.weapon = (event) => {
    let thisWeaponKey = event.target.getAttribute('weapon-key');
    let thisWeaponStats = weapon.stats[thisWeaponKey];

    let d = generateRollStruct();

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
  };

  Object.freeze(roll);
}