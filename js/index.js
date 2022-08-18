// Iteration 1: Names and Input
//
const hacker1 = "Juan";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Guanipa";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length + 1} characters.`)
}
if (hacker2.length > hacker1.length) {
    console.log(`The driver has the longest name, it has ${hacker2.length + 1} characters.`)
}
// Iteration 3: Loops
let driver = "";
for (let i = 0; i < hacker1.length; i++) {
    driver += hacker1[i].toUpperCase() + " ";
}
console.log(driver);

let driverReverse = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
    driverReverse += hacker1[i];
}
console.log(driverReverse);

if (hacker1.localeCompare(hacker2) === 1) {
    console.log(`The drivers name "${hacker1}" goes first.`)
} else if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`Yo, navigator "${hacker2}" goes first definitely.`)
} else {
    console.log(`What! You both have the same name?`)
}

//BONUS

const parOne = "Lorem ipsum dolor sit amet, et consectetur adipiscing elit. Proin diam neque, sagittis et sit amet convallis sit amet, placerat at dolor. Vivamus mattis pharetra ligula.";

const parTwo = "Quisque commodo tellus mauris, eget scelerisque mi mattis at. Mauris et quis dui sit amet nisl fermentum euismod. Etiam ullamcorper enim enim.";

const parThree = "Fusce ut ante finibus, efficitur sapien sed, euismod leo. Donec et et et et et sagittis augue suscipit, auctor dolor sed, ornare est.";

const parFour = "This clearly has five words";

function count(par) {
    let counter = 0;
    for (let i = 0; i < par.length; i++) {
        if (par[i] === " ") {
            counter++;
        }
    }
    return counter + 1;
}

console.log(count(parOne));
console.log(count(parTwo));
console.log(count(parThree));
console.log(count(parFour));

const searchTerm = "et"
function latinWord(paragraph) {
    let currIndex = 0;
    let counter = 0;
    while (currIndex !== -1) {
        let foundIndex = paragraph.indexOf(" ", currIndex + 1);
        let currTerm = paragraph.slice(currIndex, foundIndex).trim();
        if (searchTerm === currTerm) {
            counter++;
        }
        currIndex = foundIndex;
    }
    return counter;
}

console.log(latinWord(parOne));
console.log(latinWord(parTwo));
console.log(latinWord(parThree));
console.log(latinWord(parFour));

const phraseToCheck = "Anita lava la tina";
let allLetters = ""
for (let i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] === "," || phraseToCheck[i] === "!" || phraseToCheck[i] === "'" || phraseToCheck[i] === "?") {
        continue
    }
    allLetters += phraseToCheck[i].toLowerCase().trim();
}
console.log(allLetters);

let allLettersReverse = "";
for (let i = allLetters.length - 1; i >= 0; i--) {
    allLettersReverse += allLetters[i];
}
console.log(allLettersReverse);

if (allLetters === allLettersReverse) {
    console.log(`This phrase "${phraseToCheck}" is a palindrome.`);
} else {
    console.log(`This phrase "${phraseToCheck}" is not a palindrome.`)
}