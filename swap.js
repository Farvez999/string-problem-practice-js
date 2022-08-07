let first = 5;
let second = 7;

console.log(first, second);
/* First way
const temp = first;
first = second;
second = temp;
*/

//second way
[first, second] = [second, first]

console.log(first, second);
