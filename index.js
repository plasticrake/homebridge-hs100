'use strict';

const TplinkSmarthomePlatform = require('./lib/platform');

module.exports = function (homebridge) {
  const dynamic = true;
  homebridge.registerPlatform('homebridge-tplink-smarthome', 'TplinkSmarthome', TplinkSmarthomePlatform, dynamic);
};
