'use strict';

const debug = require('debug')('great-circle-distance:city');
const { toRadians } = require('./utils');

module.exports = class City {
  constructor(latitude, longitude) {
    debug(`city created ${latitude} ${longitude}`);
    this.longitude = toRadians(longitude);
    this.latitude = toRadians(latitude);
  }

  distanceTo(city) {
    const absoluteLongitudeDiff = Math.abs(this.longitude - city.longitude);

    const centralAngle = Math.acos((Math.sin(this.latitude) * Math.sin(city.latitude))
    + (Math.cos(this.latitude) * Math.cos(city.latitude) * Math.cos(absoluteLongitudeDiff)));

    const result = centralAngle * 6371;

    debug(`distance to city: ${result}`);

    return result;
  }
};
