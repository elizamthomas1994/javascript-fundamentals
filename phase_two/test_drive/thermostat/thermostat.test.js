const Thermostat = require('./Thermostat');

describe('Thermostat', () => {

  it ('returns temperature value', () => {
    const thermostat = new Thermostat();
    thermostat.temperature = 20;

    expect(thermostat.getTemperature()).toBe(20);
  });

  it ('increases the temperature by one degree', () => {
    const thermostat = new Thermostat();
    thermostat.temperature = 20;

    thermostat.setPowerSavingMode(true);

    thermostat.up();
    thermostat.up();

    expect(thermostat.getTemperature()).toBe(22);
  });

  it ('has a max temperature of 25 when power saving mode is on', () => {
    const thermostat = new Thermostat();
    thermostat.temperature = 20;

    thermostat.setPowerSavingMode(true);

    for (let i = 0 ; i < 10; i++) {
      thermostat.up();
    }

    expect(thermostat.getTemperature()).toBe(25);
  });

  xit ('has a max temperature of 32 when power saving mode is off', () => {
    const thermostat = new Thermostat();
    thermostat.temperature = 20;

    thermostat.setPowerSavingMode(false);

    for (let i = 0 ; i < 20; i++) {
      thermostat.up();
    }

    expect(thermostat.getTemperature()).toBe(32);
  });

  it ('decreases the temperature by one degree', () => {
    const thermostat = new Thermostat();
    thermostat.temperature = 20;

    thermostat.setPowerSavingMode(true);

    thermostat.up();
    thermostat.up();
    thermostat.down();

    expect(thermostat.getTemperature()).toBe(21);
  });

  it ('will not decrease temperature further if temperature is already at 10', () => {
    const thermostat = new Thermostat();
    thermostat.temperature = 20;

    for (let i = 20 ; i > 0; i--) {
      thermostat.down();
    }

    expect(thermostat.getTemperature()).toBe(10);
  });

  it ('will reset the temperature to 20', () => {
    const thermostat = new Thermostat();
    thermostat.temperature = 20;

    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.reset();

    expect(thermostat.getTemperature()).toBe(20);
  });

  it ('outputs medium usage', () => {
    const thermostat = new Thermostat();
    thermostat.temperature = 20;

    expect(thermostat.currentEnergyUsage()).toBe('medium usage');
  });

  it ('outputs medium usage', () => {
    const thermostat = new Thermostat();
    thermostat.temperature = 20;

    for (let i = 10 ; i > 0; i--) {
      thermostat.down();
    }

    expect(thermostat.currentEnergyUsage()).toBe('low usage');
  });
});