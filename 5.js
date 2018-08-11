function isRealPalindrome(string) {
  var array = string.toLowerCase().split('');
  var i;
  var newString = '';

  for (i = 0; i < array.length; i++) {
    if (!array[i].match(/^[0-9a-z]+$/)) { 
      newString += '';
  } else {
      newString += array[i];
    }
  }
  return newString === newString.split('').reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false


// function isRealPalindrome(string) {
//   string = removeNonLetterNumbers(string.toLowerCase());
//   return isPalindrome(string);
// }

// function removeNonLetterNumbers(string) {
//   var result = '';
//   var i;

//   for (i = 0; i < string.length; i += 1) {
//     if (isLetter(string[i]) || isNumber(string[i])) {
//       result += string[i];
//     }
//   }

//   return result;
// }

// function isLetter(char) {
//   return char >= 'a' && char <= 'z';
// }

// function isNumber(char) {
//   return char >= '0' && char <= '9';
// }
