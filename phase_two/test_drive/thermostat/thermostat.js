class Thermostat {

  constructor(temperature) {
    this.temperature = temperature;
  }

  getTemperature() {
    return this.temperature;
  }

  setPowerSavingMode(boolean) {
    if (boolean === true) {
      return 'on';
    } else if (boolean === false) {
      return "off";
    }
  }

  up() {
    if (this.setPowerSavingMode(true) && this.temperature < 25) {
      return this.temperature += 1;
    } else if (this.setPowerSavingMode(true) && this.temperature >= 25) {
      return this.temperature;
    } else if (this.setPowerSavingMode(false) && this.temperature < 32) {
      return this.temperature += 1;
    } else {
      return this.temperature;
    }
  }

  down() {
    if (this.temperature > 10) {
      return this.temperature -= 1;
    } else {
      return this.temperature;
    };
  }

  reset() {
    this.temperature = 20;
    return this.temperature;
  }

  currentEnergyUsage() {
    if (this.temperature < 18) {
      return "low usage";
    } else if (this.temperature <= 25) {
      return "medium usage";
    } else {
      return "high usage";
    }
  }

};

module.exports = Thermostat;