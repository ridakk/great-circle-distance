'use strict';

const debug = require('debug')('great-circle-distance:user');
const City = require('./City');

module.exports = class User {
  constructor(userId, name, latitude, longitude) {
    debug(`user created ${userId} ${name}`);
    this.userId = userId;
    this.name = name;
    this.city = new City(latitude, longitude);
  }
};
