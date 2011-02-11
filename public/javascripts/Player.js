function Player() {
}
Player.prototype.play = function(song) {
  this.currentlyPlayingSong = song;
  this.isPlaying = true;
};

Player.prototype.pause = function() {
  this.isPlaying = false;
};

Player.prototype.resume = function() {
  if (this.isPlaying) {
    throw new Error("song is already playing");
  }

  this.isPlaying = true;
};

Player.prototype.makeFavorite = function() {
  this.currentlyPlayingSong.persistFavoriteStatus(true);
};

Player.prototype.mute = function() {
  if (this.volume == 0) {
    this.volume = this.lastVolume;
  } else {
    this.lastVolume = this.volume;
    this.volume = 0;
  }
};

Player.prototype.crankItUp = function() {
  this.volume = 11;
};