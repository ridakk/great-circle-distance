'use strict';

const debug = require('debug')('great-circle-distance');
const { argv } = require('yargs')
  .usage('Usage: $0 -f [file] -d [num] -lat [num] -long [num]')
  .alias('f', 'file')
  .describe('f', 'path to file containing customer records')
  .alias('d', 'distance')
  .describe('d', 'maximum distance in kilometers')
  .alias('lat', 'latitude')
  .describe('lat', 'latitude of target city')
  .alias('long', 'longitude')
  .describe('long', 'longitude of target city')
  .demandOption(['f', 'lat', 'long']);
const { utils, City, User } = require('./lib');

debug(`file: ${argv.f} distance: ${argv.d}, target city latitude: ${argv.lat} longitude:  ${argv.longitude}`);

async function calculate() {
  const targetCity = new City(argv.long, argv.lat);
  const records = await utils.readFile(argv.f);

  const result = [];

  records.forEach((record) => {
    const user = new User(record.user_id, record.name, record.latitude, record.longitude);
    if (targetCity.distanceTo(user.city) <= argv.d) {
      result.push(user);
    }
  });

  result.sort((a, b) => {
    return a.userId - b.userId;
  });

  return result;
}


calculate().then((result) => {
  console.log(result);
}).catch((err) => {
  debug('failed: ', err);
});
