/* As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1. */

/* 
parameters:
-are we always going to get a triplet ?  
meanig no empty array or an array with more or less than three elements
- are the elements of the triplet always numbers?
*/

/* 
return:
    the index (number) of the middle element of the triplet in value;
*/

/* 
Examples:
[5, 8, 10]   ====> 1
[4, 9, 2]   ====> 0;
*/
/* 
psudo code:
    1- make a copy of the triplet entered in parameter and sort it from lower to higher
    2- after sorting the middle number "our target" is in index 1
    3- return the the index of target in the triplet entered in parameter using the method indexOf   
*/

function gimme(triplet) {
  let sortedTriplet = triplet.slice(0).sort((a, b) => a - b);
  let targetNumber = sortedTriplet[1];
  return triplet.indexOf(targetNumber);
}
console.log(gimme([5, 8, 10]));
console.log(gimme([4, 9, 2]));
