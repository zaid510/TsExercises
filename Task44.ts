function make_sandwich(...items: string[]) {
  console.log(
    "Making a sandwich with the following items: " + items.join(", ")
  );
}

make_sandwich("bread", "mayo", "lettuce", "tomatoes", "chicken");
make_sandwich("bread", "mayo", "egg", "bacon");
make_sandwich("bread", "cheese", "ham");
