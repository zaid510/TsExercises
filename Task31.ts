let username = ["admin", "ZAID", "ABDULLAH", "AHMED", "NASEER"];
if (username.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let i: number = 0; i < username.length; i++) {
    if (username[i] === "admin") {
      console.log(
        "Hello " + username[i] + ", would you like to see a status report?"
      );
    } else {
      console.log("Hello " + username[i] + ", thank you for logging in again.");
    }
  }
}
