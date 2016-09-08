'use strict'

var express = require('express')
var compression = require('compression')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var Path = require('path')

var Log = require(Path.join(__base, 'src/worker/log.js'))
var LogWorker = new Log({
  module: 'Server'
})

var Modules = require(Path.join(__base, 'src/worker/modules.js'))
var ModulseWorker = new Modules()

function Server () {
  this.app = express()
  this.app.use(compression())
  this.app.use(cookieParser())
  this.app.use(bodyParser.json())
  this.app.use(bodyParser.urlencoded({
    extended: true
  }))
  this.app.use(express.static(Path.join(__base, 'src/public')))
  var port = process.env.PORT || __config.server.port
  this.app.listen(port, function () {
    LogWorker.info('Server listening at port ' + port)
  })

  this.app.get('/modules', function(req, res){
    ModulseWorker.list(function(list){
      res.end(JSON.stringify({
        err: false,
        data: list
      }))
    })
  })
}

module.exports = Server
