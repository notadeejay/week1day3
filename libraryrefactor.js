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
         },

  printPlaylists: function () {
    Object.keys(this["playlists"]).forEach(function(key) {
      var id = this["playlists"][key].id;
      var name = this["playlists"][key].name;
      var  tracks = this["playlists"][key]["tracks"].length;
      console.log(id + ": " + name + " - " + tracks + " tracks");
    }.bind(this));
  },

  printTracks: function () {
      Object.keys(this["tracks"]).forEach(function(key) {
         var trackId = this["tracks"][key].id;
         var trackName = this["tracks"][key].name;
         var  artist = this["tracks"][key].artist;
         var album = this["tracks"][key].album;
         console.log(trackId + ": " + trackName + " by " + artist + " (" + album + ")");
      }.bind(this));
  },

  printPlaylist: function (playlistObj) {
    var tracksArray = playlistObj.tracks; //array of track ids
    console.log(playlistObj.id + ": "  + playlistObj.name + " " + playlistObj['tracks'].length + " tracks");

    for (var i = 0; i < tracksArray.length; i++) {
      var trackInfo = tracksArray[i];
      var trackObj = this.tracks[trackInfo];
      console.log(trackObj.id + ": " + trackObj.name + " by " + trackObj.artist + " (" + trackObj.album + ")");
     }
  },

  addTrackToPlaylist:function (trackId, playlistId) {
    var playArray = playlistId.tracks;
    var trackIdStr = trackId.id;

    playArray.push(trackIdStr);
    console.log(playArray)
  },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function (name, artist, album) {
    var id = this.uid();
    this.tracks[id] = {"id": id, "name": name, "artist" : artist, "album" : album}
    return this;
  },

  addPlaylist: function (name) {
    var id = this.uid();
    this.playlists[id] = {"id": id, "name": name};
    return this;
  },

  printSearchResults: function(query) {
    var regex = RegExp(query, 'i');
    var theTracks = this.tracks
    var matches = [];

    for (var key in theTracks) {
      var objTrackOg = theTracks[key];

       for (var elem in theTracks[key]) {
         var objTrack = theTracks[key][elem];

             if (objTrack.match(regex))
              matches.push(objTrack);
          }
        }
  },
}



library.printPlaylists();
library.printTracks();
library.printPlaylist(library['playlists'].p01);
library.addTrackToPlaylist(library['tracks'].t02, library['playlists'].p02);
library.addTrack('Test name', 'test artist', 'test album');
library.addPlaylist("New Playlist");
library.printSearchResults("John Cage");
