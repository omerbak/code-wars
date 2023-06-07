/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate. */

/* params:
are the parameter always a string?
can the parameter be empty?
*/

/* return:
a string where each letter is replaced with:
- "(" if that character appears only once in the original string
-  ")" if that character appears more than once in the original string
*/

/* ex:
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

/* psudocode:
1- convert the string to array of lowercase
2- use the reduce method to calculate the occurrences of each letter
3- use the map method and check the letter occurences based on the occurrences object
4- return the suitable replacement for each letter
*/

function duplicateEncode(word) {
  let wordArray = word.toLowerCase().split("");
  let ocurrences = wordArray.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  let result = wordArray.map((letter) => {
    if (ocurrences[letter] > 1) {
      return ")";
    } else {
      return "(";
    }
  });
  return result.join("");
}
