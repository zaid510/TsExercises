//Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let myname: string = "Zaid mehmood";
console.log(myname.toLowerCase()); // zaid mehmood
console.log(myname.toUpperCase()); // ZAID MEHMOOD
console.log(myname.replace(/\b[a-z]/g, (letter) => letter.toUpperCase())); // Zaid Mehmood
