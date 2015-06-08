var Thermo = function() {
  this.DEFAULT_TEMP = 20;
  this.currentTemperature = this.DEFAULT_TEMP;
  this.powerSavingState = true;
  this.POWER_SAVE_ON_MAXIMUM_TEMP = 25;
  this.POWER_SAVE_OFF_MAXIMUM_TEMP = 32;
  this.MINIMUM_TEMP = 10;
  this.MAXIMUM_TEMP = this.POWER_SAVE_ON_MAXIMUM_TEMP;
  this.LOW_ENERGY_USAGE_LIMIT = 18;
};

Thermo.prototype.decreaseTemperature = function(degreesToChangeBy) {
  if (this.currentTemperature - degreesToChangeBy < this.MINIMUM_TEMP) {
    this.currentTemperature = this.MINIMUM_TEMP;
  } else {
    this.currentTemperature -= degreesToChangeBy;
  }
};

Thermo.prototype.increaseTemperature = function(degreesToChangeBy) {
  if (this.currentTemperature + degreesToChangeBy > this.MAXIMUM_TEMP) {
    this.currentTemperature = this.MAXIMUM_TEMP;
  } else {
    this.currentTemperature += degreesToChangeBy;
  }
};

Thermo.prototype.togglePowerSavingState = function() {
  if (this.powerSavingState === true) {
    this.powerSavingState = false;
    this.MAXIMUM_TEMP = this.POWER_SAVE_OFF_MAXIMUM_TEMP;
  } else {
    this.powerSavingState = true;
    this.MAXIMUM_TEMP = this.POWER_SAVE_ON_MAXIMUM_TEMP;
  }
};

Thermo.prototype.applyColourRating = function() {
  if (this.currentTemperature < this.LOW_ENERGY_USAGE_LIMIT) {
    this.energyUsageIndicator = 'low-usage';
  } else if (this.currentTemperature < this.POWER_SAVE_ON_MAXIMUM_TEMP) {
    this.energyUsageIndicator = 'medium-usage';
  } else {
    this.energyUsageIndicator = 'high-usage';
  }
};

Thermo.prototype.resetThermostat = function() {
  this.currentTemperature = this.DEFAULT_TEMP;
};
