function isPalindromicNumber(num) {
  var string = String(num);
  return string === string.split('').reverse().join('');
}
console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
