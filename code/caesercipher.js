function caesarCipher(string, offset) {
  let charCodeArray = strToCharCode(string, offset);
  let cipher = '';
  for (let i = 0; i <= charCodeArray.length - 1; i++) {
    cipher += String.fromCharCode(charCodeArray[i]);
  }
  return cipher;
}

function strToCharCode(string, offset) {
  const speacialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  let charCodeArray = [];
  for (let i = 0; i <= string.length - 1; i++) {
    switch (true) {
      case speacialChar.test(string[i]):
        charCodeArray[i] = string[i].charCodeAt(0);
        break;
      case string[i] == ' ':
        charCodeArray[i] = string[i].charCodeAt(0);
        break;
      case string[i].charCodeAt(0) + offset > 122 &&
        string[i] == string[i].toLowerCase():
        charCodeArray[i] = string[i].charCodeAt(0) + offset - 26;
        break;
      case string[i].charCodeAt(0) + offset < 97 &&
        string[i] == string[i].toLowerCase():
        charCodeArray[i] = string[i].charCodeAt(0) + offset + 26;
        break;
      case string[i].charCodeAt(0) + offset > 90 &&
        string[i] == string[i].toUpperCase():
        charCodeArray[i] = string[i].charCodeAt(0) + offset - 26;
        break;
      case string[i].charCodeAt(0) + offset < 65 &&
        string[i] == string[i].toUpperCase():
        charCodeArray[i] = string[i].charCodeAt(0) + offset + 26;
        break;
      default:
        charCodeArray[i] = string[i].charCodeAt(0) + offset;
        break;
    }
  }
  return charCodeArray;
}

module.exports = caesarCipher;
