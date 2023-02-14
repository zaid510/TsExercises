function make_shirt(
  size: string = "large",
  message: string = "I love TypeScript"
) {
  console.log(
    "The shirt size is " +
      size +
      " and the message printed on it is '" +
      message +
      "'."
  );
}

// Call the function with default values
make_shirt();

// Call the function with medium size
make_shirt("medium");

// Call the function with a different message
make_shirt("small", "I love JavaScript");
