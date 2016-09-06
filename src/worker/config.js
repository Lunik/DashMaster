'use strict'

var assert = require('assert')

function Config () {
}

Config.prototype.load = function (path) {
  var config = require(path)

  assert(config, messageError('config'))

  assert(config.log, messageError('log'))
  assert(config.log.path, messageError('log.path'))

  assert(config.server, messageError('server'))
  assert(config.server.port, messageError('server.port'))

  return config
}

function messageError (field) {
  return 'Config Error: ' + field + ' is missing.'
}
module.exports = Config
