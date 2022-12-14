class Thermostat {

  constructor(temperature) {
    this.temperature = temperature;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    return this.temperature += 1;
  }

  down() {
    if (this.temperature > 10) {
      return this.temperature -= 1;
    } else {
      return this.temperature;
    };
  }

};

module.exports = Thermostat;