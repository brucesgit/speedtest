'use strict';

process.hrtime = process.hrtime && Object.prototype.toString.call(process.hrtime) === '[object Function]' ? process.hrtime : require('browser-process-hrtime');

var speedTest = require('speedtest-net');

module.exports = speedTest; 