'use strict';

const debug = require('debug')('great-circle-distance:utils');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const fsReadFile = promisify(fs.readFile);
const fsAccess = promisify(fs.access);

function toRadians(degree) {
  return degree * Math.PI / 180;
}

function checkIfFileExists(file) {
  const perms = fs.constants.F_OK | fs.constants.R_OK; // eslint-disable-line no-bitwise

  // check if file exists and readable
  return fsAccess(file, perms);
}

async function readFile(fileToRead) {
  const filePath = path.resolve(fileToRead);

  debug(`file path: ${filePath}`);

  await checkIfFileExists(filePath);

  const file = await fsReadFile(filePath, 'utf8');

  debug('file as string: ', file);

  const result = [];
  file.split(/\r?\n/).forEach((line) => {
    if (line !== '') {
      result.push(JSON.parse(`${line}`));
    }
  });

  return result;
}

module.exports.toRadians = toRadians;
module.exports.readFile = readFile;
