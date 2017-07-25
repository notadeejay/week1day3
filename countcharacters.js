function countLetters (str) {
var uniqChars = {};
str = str.replace(/\s/g, '')

  for (var i = 0; i < str.length; i++) {
    uniqChars[str[i]] = uniqChars[str[i]] + 1 || 1
  }
return uniqChars

}

console.log(countLetters("amy mansell"));

