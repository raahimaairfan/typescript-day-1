/* 100 days coding challenge */
/* Personal Message: Store a person’s name in a variable, and print a message to that person.
Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?” */
var personName = "Raahima";
console.log("Hello " + personName + ",  would you like to learn some Python today? ");
/* Name Cases: Store a person’s name in a variable, and then print that person’s name in
lowercase, uppercase, and titlecase. */
var name = "Raahima";
console.log("Lowercase: " + name.toLowerCase());
console.log("Uppercase: " + name.toUpperCase());
console.log("Titlecase: " + name.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
