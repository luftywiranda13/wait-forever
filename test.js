'use strict';

const waitForever = require('.');

test('', () => {
  waitForever().then(res => {
    expect(res).toBeFalsy();
  });
});
