//If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let dinnerGuests: string[] = ["Ali", "Ahmed", "Naseer"];

for (let i = 0; i < dinnerGuests.length; i++) {
  console.log(
    `Dear ${dinnerGuests[i]}, I would like to invite you to a special dinner. Please join us!`
  );
}
