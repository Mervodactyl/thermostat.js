describe("Thermo", function() {

  var thermo;

  describe("by default, ", function() {
    it("starts at 20 degrees", function() {
      thermo = new Thermo();
      expect(thermo.currentTemperature).toEqual(20);
    });

    it("has a minumum temperature of 10 degrees", function() {
      thermo = new Thermo();
      thermo.decreaseTemperature(11);
      expect(thermo.currentTemperature).toEqual(10);
    });

    it("power saving mode is 'ON'", function() {
      expect(thermo.powerSavingState).toBe(true);
    });
  });


});
