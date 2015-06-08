var Thermo = function() {
  this.currentTemperature = 20;
  this.minimumTemperature = 10;
  this.powerSavingState = true;
  this.maximumTemperature = 25;
};

Thermo.prototype.decreaseTemperature = function(degreesToChangeBy) {
  if (this.currentTemperature - degreesToChangeBy < this.minimumTemperature) {
    this.currentTemperature = this.minimumTemperature;
  } else {
    this.currentTemperature -= degreesToChangeBy;
  }
};

Thermo.prototype.increaseTemperature = function(degreesToChangeBy) {
  if (this.currentTemperature + degreesToChangeBy > this.maximumTemperature) {
    this.currentTemperature = this.maximumTemperature;
  } else {
    this.currentTemperature += degreesToChangeBy;
  }
};

Thermo.prototype.togglePowerSavingState = function() {
  if (this.powerSavingState === true) {
    this.powerSavingState = false;
    this.maximumTemperature = 32;
  } else {
    this.powerSavingState = true;
    this.maximumTemperature = this.maximumTemperature;
  }
};

Thermo.prototype.resetThermostat = function() {
  this.currentTemperature = 20;
};
