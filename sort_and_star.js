/* You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array. */

/* parameters:
are we always going to have a list? can it be empty? can the items of the list not be a strings?
*/

/* return: 
the first list item after sorting with *** between it's letters
*/
/* ex:

*/
/* psudo:
    1- sort the array 
    2- get the firt item
    3- use split and join("***")
*/

const twoSort = (s) => s.sort()[0].split("").join("***");
