'use strict';

const chai = require('chai')
  .use(require('chai-as-promised'));
const utils = require('../lib/utils');

const { expect } = chai;

describe('utils', () => {
  describe('readFile', () => {
    it('returns json records', async () => {
      expect(utils.readFile('./customers.txt')).to.eventually.be.an('array');
    });

    it('rejected if file does not exists', async () => {
      expect(utils.readFile('dummy.txt')).to.be.rejected;
    });
  });

  describe('toRadians', () => {
    it('converts degree to radian', async () => {
      expect(utils.toRadians(1)).to.equal(0.017453292519943295);
    });
  });
});
