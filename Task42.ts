let magicans: string[] = ["David Copperfield", "Harry Houdini", "Dynamo"];

function make_grat(names: string[]) {
  let great_magicians = [];
  for (let i: number = 0; i < names.length; i++) {
    great_magicians.push("The Great " + names[i]);
  }
  return great_magicians;
}

let original_magicians = [...magicians];
let updated_magicians = make_grat(original_magicians);

function show_magicins(names: string[]) {
  for (let i: number = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

console.log("Original magicians: ");
show_magicins(original_magicians);
console.log("\nUpdated magicians: ");
show_magicins(updated_magicians);
