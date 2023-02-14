let current_users: string[] = ["Zaid", "Naseer", "Ali"];
let new_users: string[] = ["zaid", "naseer", "ahmed"];

for (let i: number = 0; i < new_users.length; i++) {
  let newUsername = new_users[i].toLowerCase();
  let isUsernameTaken = false;

  for (let j = 0; j < current_users.length; j++) {
    let currentUsername = current_users[j].toLowerCase();
    if (newUsername === currentUsername) {
      isUsernameTaken = true;
      break;
    }
  }

  if (isUsernameTaken) {
    console.log(
      "The username " +
        new_users[i] +
        " is already taken. Please enter a new username."
    );
  } else {
    console.log("The username " + new_users[i] + " is available.");
  }
}
