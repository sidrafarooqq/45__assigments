function makeAlbum(artist, tittle) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        tittle: tittle.charAt(0).toUpperCase() + tittle.slice(1)
    };
    return dictionaries;
}
var album = makeAlbum("Ali", "light");
console.log(album);
album = makeAlbum("bilal", "red rose");
console.log(album);
album = makeAlbum("hamza", "shine star");
console.log(album);
