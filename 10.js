function wordSizes(words) {
  var wordsArray = words.split(' ');
  var count = {};
  var cleanWordSize;
  var i;

  for (i = 0; i < wordsArray.length; i += 1) {
    cleanWordSize = removeNonLetters(wordsArray[i].toLowerCase()).length;
    if (cleanWordSize === 0) {
      continue;
    }

    count[cleanWordSize] = count[cleanWordSize] || 0;
    count[cleanWordSize] += 1;
  }

  return count;
}

function removeNonLetters(string) {
  var result = '';
  var i;

  for (i = 0; i < string.length; i += 1) {
    if (isLetter(string[i])) {
      result += string[i];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));

