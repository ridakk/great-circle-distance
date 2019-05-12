# Great-circle distance calculation

## Installation

- install [NodeJs](https://nodejs.org)

- install dependencies

```bash
npm install
```

- run tests

```bash
npm test
```

- run linter

```bash
npm run lint
```

## Debugging

The [debug](https://www.npmjs.com/package/debug) module is internally to log information, to see all the internal logs, set the DEBUG environment variable to great-circle-distance:* when launching your app.

```bash
export DEBUG=great-circle-distance:*
```

## How To Use

For details:

```bash
node index.js --help
```

example:

```bash
node index.js -f customers.txt -d 100 --lat 53.339428 --long -6.257664
```

For printing output to a file;

```bash
node index.js -f customers.txt -d 100 --lat 53.339428 --long -6.257664 > output.txt
```
