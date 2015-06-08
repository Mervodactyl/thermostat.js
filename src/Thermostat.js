var Thermo = function() {
  this.currentTemperature = 20;
  this.minimumTemperature = 10;
  this.powerSavingState = true;
};

Thermo.prototype.decreaseTemperature = function(degreesToChangeBy) {
  if (this.currentTemperature - degreesToChangeBy < this.minimumTemperature) {
    this.currentTemperature = this.minimumTemperature;
  } else {
    this.currentTemperature -= degreesToChangeBy;
  }
};
