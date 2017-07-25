function countLetters (str) {
var indexes = {};

  for (var i = 0; i < str.length; i++) {
    if (indexes[str[i]] === undefined) {
      indexes[str[i]] = [];
    }
    else { }

    indexes[str[i]].push(i);
  }
return indexes

}
console.log(countLetters("lighthouse in the house"));


/* l: 0,
i: 1, 11,
g: 2,
h: 3,5, 15, 18
t: 4, 14
o: 6, 19
u: 7, 20
s: 8, 21
e: 9, 22
n: 12
*/