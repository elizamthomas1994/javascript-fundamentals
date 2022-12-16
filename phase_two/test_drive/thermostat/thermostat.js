class Thermostat {

  constructor(temperature) {
    this.temperature = temperature;
    this.power_saving_mode = true;
  }

  getTemperature() {
    return this.temperature;
  }

  setPowerSavingMode(boolean) {
    if (boolean === true) {
      this.power_saving_mode = true;
    } else if (boolean === false) {
      this.power_saving_mode = false;
    }
  }

  up() {
    if (this.power_saving_mode === true && this.temperature < 25) {
      return this.temperature += 1;
    } else if (this.power_saving_mode === true && this.temperature >= 25) {
      return this.temperature;
    } else if (this.power_saving_mode === false && this.temperature < 32) {
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