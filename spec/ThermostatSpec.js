describe('Thermostat', function() {
  var thermostat;

beforeEach(function() {
  thermostat = new Thermostat();
});

  it('Should start at 20 degrees', function() {
    expect(thermostat.defaultTemp(20)).toBe(true);
  });

  it('Can increase Temperature using the UP button', function() {
    expect(thermostat.increaseTemp(21)).toBe(true);
  });



});
