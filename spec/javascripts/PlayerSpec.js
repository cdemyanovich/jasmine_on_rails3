describe("Player", function() {
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrow("song is already playing");
    });
  });

  it("is muted if volume is 0", function() {
    player.volume = 0;
    expect(player).toBeMuted();
  });

  it("is not muted if volume is not 0", function() {
    player.volume = 7;
    expect(player).not.toBeMuted();
  });

  describe("muting", function() {
    beforeEach(function() {
      player.volume = 5;
    });

    it("sets the volume to 0", function() {
      player.mute();
      expect(player.volume).toEqual(0);
    });

    it("sets the volume to the last value when already muted", function() {
      player.mute();
      player.mute();
      expect(player.volume).toEqual(5);
    });
  });

  it("sets the volume to 11!", function() {
    player.crankItUp();
    expect(player.volume).toEqual(11);
  });
});