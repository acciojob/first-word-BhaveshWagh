function firstWord(s) {
  // your code here
	 let start = 0;
    while (start < str.length && str[start] === ' ') {
        start++;
    }
    
    // Find the end of the first word
    let end = start;
    while (end < str.length && str[end] !== ' ') {
        end++;
    }
    
    // Extract the first word
    return str.substring(start, end);
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
