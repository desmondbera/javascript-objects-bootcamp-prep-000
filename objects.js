var playlist = {artist: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign( {}, { [artistName]: songTitle})
}

function removeFromPlaylist(playlst, artistName) {
  delete playlist.artistName 
}