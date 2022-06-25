
// Iteration 1: Names and Input

// 1. Create a variable hacker1 with the driver's name
let hacker1 = "Pepe";
// 2. Print "The driver's name is XXXX"
console.log("The driver's name is " + hacker1)
// 3. Create a variable hacker2 for the navigator's name
let hacker2 = "Firefox";
// 4. Print "The navigator's name is YYYY"
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

// Depending on which name is longer, print:
// The Driver has the longest name, it has XX characters or
// The, navigator got the longest name, it has XX characters or
// Wow, you both got equally long names, XX characters!

if (hacker1.length > hacker2.length){
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
  }
  else if (hacker1.length < hacker2.length) {
      console.log(`The Navigator has the longest name, it has ${hacker2.length} characters`)
    }
    else {
      console.log(`Wow, you both got equally long names, ${hacker1.length} characters!`)
    }
  
// Iteration 3: Loops

// Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let result = hacker1.toUpperCase().split("").join(" ");
console.log(result);

//Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let result2 = hacker2.split("").reverse().join("")
console.log(result2);

// Depending on the lexicographic order of the strings, print:
// The driver's name goes first.
// Yo, the navigator goes first definitely.
// What?! You both have the same name?

    if (hacker1.localeCompare(hacker2)<0) {
    console.log("The driver's name goes first")
    } 
    else if (hacker1.localeCompare(hacker2)>0) {
      console.log("Yo, the navigator goes first definitely")
    }
    else {
      console.log("What?! You both got the same name?")
    }
  