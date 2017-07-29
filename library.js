var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}



var printPlaylists = function () {

  Object.keys(library["playlists"]).forEach(function(key) {
     var id = library["playlists"][key].id;
     var name = library["playlists"][key].name;
     var  tracks = library["playlists"][key]["tracks"].length;
     console.log(id + ": " + name + " - " + tracks + " tracks");
  });
}

printPlaylists(library);


var printTracks = function () {

  Object.keys(library["tracks"]).forEach(function(key) {
     var trackId = library["tracks"][key].id;
     var trackName = library["tracks"][key].name;
     var  artist = library["tracks"][key].artist;
     var album = library["tracks"][key].album;
     console.log(trackId + ": " + trackName + " by " + artist + " (" + album + ")");
  });
}

printTracks(library);



var printPlaylist = function (playlistObj) {
  var tracksArray = playlistObj.tracks; //array of track ids
     console.log(playlistObj.id + ": "  + playlistObj.name + " " + playlistObj['tracks'].length + " tracks");

  for (var i = 0; i < tracksArray.length; i++) {
     var trackInfo = tracksArray[i];
     var trackObj = library.tracks[trackInfo];
        console.log(trackObj.id + ": " + trackObj.name + " by " + trackObj.artist + " (" + trackObj.album + ")");
  }
}

printPlaylist(library['playlists'].p01);



var addTrackToPlaylist = function (trackId, playlistId) {
  var playArray = playlistId.tracks;
  var trackIdStr = trackId.id;

  playArray.push(trackIdStr);

}

addTrackToPlaylist(library['tracks'].t02, library['playlists'].p02);




var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}



var addTrack = function (name, artist, album) {
  var id = uid();
  library.tracks[id] = {"id": id, "name": name, "artist" : artist, "album" : album}
  return library;
}

addTrack('Test name', 'test artist', 'test album');



var addPlaylist = function (name) {
  var id = uid();
    library.playlists[id] = {"id": id, "name": name};
    return library;
}

addPlaylist("New Playlist");



var printSearchResults = function(query) {
  var regex = RegExp(query, 'i');
  var theTracks = library.tracks
  var matches = [];

  for (var key in theTracks) {
    var objTrackOg = theTracks[key];

     for (var elem in theTracks[key]) {
       var objTrack = theTracks[key][elem];
           if (objTrack.match(regex))
            matches.push(objTrack);
        }
  }
}
printSearchResults("John Cage");

