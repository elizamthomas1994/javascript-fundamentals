const Thermostat = require('./Thermostat');

it ('returns temperature value', () => {
  const thermostat = new Thermostat();
  thermostat.temperature = 20;

  expect(thermostat.getTemperature()).toBe(20);
});

it ('increases the temperature by one degree', () => {
  const thermostat = new Thermostat();
  thermostat.temperature = 20;

  thermostat.up();

  expect(thermostat.getTemperature()).toBe(21);
});

it ('decreases the temperature by one degree', () => {
  const thermostat = new Thermostat();
  thermostat.temperature = 20;

  thermostat.down();

  expect(thermostat.getTemperature()).toBe(19);
});

it ('will not decrease if temperature is at 10', () => {
  const thermostat = new Thermostat();
  thermostat.temperature = 10;

  thermostat.down();

  expect(thermostat.getTemperature()).toBe(10);
});