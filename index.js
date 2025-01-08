/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
console.log(s1);
const nameArray = [s1, s2, s3, s4, s5, s3, s2, s1, s4];
result = nameArray.join(" ");

// Print out the concatenated string
console.log(result);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const modifiedLetterPart1 = part1.slice(0, -1) + part1.slice(-1).toUpperCase();
const modifiedLetterPart2 = part2.slice(0, -1) + part2.slice(-1).toUpperCase();

const concatenatedString = modifiedLetterPart1 + modifiedLetterPart2;
console.log(concatenatedString);

// Print the cameLtaiL-formatted string
// Capitalize the last letter of part1
const camelTailpart1 = part1.slice(0, -1) + part1.slice(-1).toUpperCase();

// Convert part2 to lowercase and capitalize the last letter
const camelTailpart2 =
  part2.slice(0, -1).toLowerCase() + part2.slice(-1).toUpperCase();

const camelTail = camelTailpart1 + camelTailpart2;

console.log(camelTail);

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const tipAmount = billTotal * 0.15;

// Print out the tipAmount

console.log(tipAmount);

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let randomNumber = Math.floor(Math.random() * 10) + 1; //+1 to include 10 otherwise its exclusive

// Print the generated random number
console.log(randomNumber);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //true and false = false
console.log(expression1);

const expression2 = a || b; //true or false = true
console.log(expression2);

const expression3 = !a && b; //not true (false) and false = false
console.log(expression3);

const expression4 = !(a && b); //not (true and false) = true
console.log(expression4);

const expression5 = !a || !b; //not true or not false = true
console.log(expression5);

const expression6 = !(a || b); //not (true or false) = false
console.log(expression6);

const expression7 = a && a; //should be true
console.log(expression7);
