'use strict'

var fs = require('fs')
var path = require('path')

function Modules () {
  var self = this
  fs.readdir(path.join(__base, 'src/modules'), function (err, modules) {
    if (err) { console.log(err) }

    modules.forEach(function (value) {
      if (value.match(/.*\.js/)) {
        var name = value.replace(/\.js/, '')
        var module = require(path.join(__base, 'src/modules', value))
        self.list[module.info.callName] = module
      }
    })
  })
}

Modules.prototype.list = function(cb){
  var self = this
  var l = function(){
    return Object.keys(self.list)
  }

  cb(l())
}

module.exports = Modules
