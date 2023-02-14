let magician: string[] = ["David", "Criss", "Dynamo"];

function make_great(magician: string[]) {
  for (let i: number = 0; i < magician.length; i++) {
    magician[i] = "the Great " + magician[i];
  }
}

function show_magicians(magician: string[]) {
  for (let i: number = 0; i < magician.length; i++) {
    console.log(magicians[i]);
  }
}
make_great(magician);
show_magicians(magician);
