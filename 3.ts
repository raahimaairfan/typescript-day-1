/* Name Cases: Store a person’s name in a variable, and then print that person’s name in 
lowercase, uppercase, and titlecase. */

let personName = "Raahima";

console.log("Lowercase: " + personName.toLowerCase());
console.log("Uppercase: " + personName.toUpperCase());
console.log("Titlecase: " + personName.replace(/\b\w/g, (char: string) => char.toUpperCase()));