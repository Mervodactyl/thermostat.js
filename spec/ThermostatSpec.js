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
  });

});



describe("Thermostat", function() {
  var = thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });



});
