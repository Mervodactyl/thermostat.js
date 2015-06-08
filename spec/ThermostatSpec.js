describe("Thermo", function() {

  var thermo;

    beforeEach(function() {
      thermo = new Thermo();
    });

  describe("by default, ", function() {
    it("starts at 20 degrees", function() {
      expect(thermo.currentTemperature).toEqual(20);
    });

    it("has a minumum temperature of 10 degrees", function() {
      thermo.decreaseTemperature(11);
      expect(thermo.currentTemperature).toEqual(10);
    });

    it("has power saving mode (PSM) 'ON'", function() {
      expect(thermo.powerSavingState).toBe(true);
    });

    it("has a maximum temperature of 25 degrees (due to PSM)", function() {
      thermo.increaseTemperature(6);
      expect(thermo.currentTemperature).toEqual(25);
    });
  });


});
