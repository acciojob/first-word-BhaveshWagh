function firstWord(s) {
  // your code here
	if (s === "") {
    return "";
  }
  let str = "";
  for (let i of s) {
    if (i === " ") {
      break;
    } else {
      str += i;
    }
  }
  return str;
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
