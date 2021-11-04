// Iteration 1: Names and Input

let hacker1 = 'Andre';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Rachouan';
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let upperCaseAndSpaceDriver = hacker1.toUpperCase().split('').join(' ');
console.log(upperCaseAndSpaceDriver);

let reversedNavName = '';
for (let i = hacker2.length-1 ; i >= 0; i--){
  reversedNavName += hacker2[i];
}
console.log(reversedNavName);

if(hacker1.localeCompare(hacker2)){
  console.log("The driver's name goes first.");
}else if(hacker2.localeCompare(hacker1)){
  console.log("Yo, the navigator goes first definitely.");
}else{
  console.log("What?! You both have the same name?");
}