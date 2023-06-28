// 1
function getChar(param) {
    return String.fromCharCode(param)
}


// 3
function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  }

  return "Hello, " + name + "!";
}


// 3
String.prototype.toAlternatingCase = function () {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    const char = this[i];
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
};


// 4
function abbrevName(name) {
  const [firstName, lastName] = name.split(' ');
  const initials = `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`;
  return initials;
}
