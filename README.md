# speedtest.net API / CLI tool

![SpeedTest Cli](media/speedtestcli.gif)

## Installation

```bash
npm install --save @brucesgit/speedtest-net
```

## Command-Line Tool
```bash
$ npm install --global @brucesgit/speedtest-net
$ speedtest-net
```

## Usage

Based on speedtest-net and make it can be used in the browser.


Code use example:
```js
var speedTest = require('@brucesgit/speedtest-net');
var test = speedTest({maxTime: 5000});

test.on('data', data => {
  console.dir(data);
});

test.on('error', err => {
  console.error(err);
});
  
```

Visual use example:
```js
var speedTest = require('@brucesgit/speedtest-net');

speedTest.visual({maxTime: 5000}, (err, data) => {
  console.dir(data);
});
```

## License

[MIT](http://choosealicense.com/licenses/mit/)
