function getExhaustionString() {
  let output = getExhaustionStringPlain();
  if (output) {
    output += '[Exhaustion]';
  }
  return output;
}
function getExhaustionStringPlain() {
  let exhaustionSelector = document.querySelector('select.exhaustion');
  if (!exhaustionSelector) {
    return '';
  }
  let exhaustionLevel = parseInt(exhaustionSelector.value);
  if (exhaustionLevel > 0) {
    return `-${exhaustionLevel*2}`
  } else {
    return '';
  }
}

function getRollType() {
  let element = document.querySelector('input[name="roll-type"]:checked');
  if (element) {
    return element.value;
  } 
  return 'normal';
}

const CHARACTER_NAME = 'Floyd';

function characterSheetExtensionSendMessage(message) {
  console.log(message);
}

function setLocalStorage() {
  
}