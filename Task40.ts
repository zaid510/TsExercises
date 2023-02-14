function make_album(artist: string, title: string, tracks?: number) {
  let album = { artist: artist, title: title, tracks: tracks };
  if (tracks) {
    album["tracks"] = tracks;
  }
  return album;
}

let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2", 12);
let album3 = make_album("Artist3", "Album3", 8);

console.log(album1);
console.log(album2);
console.log(album3);
