const ping = require('./ping');
const shrink = require('./shrink');
const grow = require('./grow');
const redirect = require('./redirect');

module.exports = [].concat(ping, shrink, grow, redirect);
