beforeEach(function() {
  this.addMatchers({
    toBePlaying: function(expectedSong) {
      var player = this.actual;
      return player.currentlyPlayingSong === expectedSong
          && player.isPlaying;
    },
    toBeMuted: function() {
      var player = this.actual;
      return player.volume === 0;
    }
  })
});
