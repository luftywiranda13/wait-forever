# wait-forever

> A `promise` that never resolves

[![Package Version](https://img.shields.io/npm/v/wait-forever.svg?style=flat-square)](https://www.npmjs.com/package/wait-forever)
[![Downloads Status](https://img.shields.io/npm/dm/wait-forever.svg?style=flat-square)](https://npm-stat.com/charts.html?package=wait-forever&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/luftywiranda13/wait-forever/master.svg?style=flat-square)](https://travis-ci.org/luftywiranda13/wait-forever)

## Installation

```sh
npm install --save wait-forever
```

## Usage

```js
const waitForever = require('wait-forever');

(async () => {
  await waitForever();
})();
```

## License

MIT &copy; [Lufty Wiranda](www.luftywiranda.com)
