let recordCollection = [
]
let urTrack = {
    album: 'A',
    artist: 'B',
    tracks: 'C'
}
function sortSongs(trackinput, collectioninput) {
    if (trackinput.hasOwnProperty('album' && 'artist' && 'tracks')) {
        let idGenerator = Math.floor(Math.random()*1000)
        trackinput.trackId = idGenerator
    collectioninput.push({...trackinput});
    return collectioninput;
    } else {
    return "Not a valid tracklist. Please include an album, artist, and tracks"
    }
    
}
console.log(sortSongs(urTrack, recordCollection));


